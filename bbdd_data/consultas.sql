--Dado un usuario, obtener todas sus compras. Filtrado por email

CREATE OR REPLACE FUNCTION ComprasUsuario ( email varchar)
RETURNS table (
		id int,
		price t_price,
		date date,
		state purch_state,
		id_coupon int,
		id_shipping int)
AS $body$
BEGIN
	RETURN QUERY
	SELECT p.id, p.price, p.date, p.state, p.id_coupon, p.id_shipping 
	FROM purchase p, users u
	WHERE (p.id_user = u.id AND u.e_mail = email);
END;
$body$
LANGUAGE plpgsql;

--Dado un producto, listar todas sus reviews. Filtrado por nombre

CREATE OR REPLACE FUNCTION ReviewsProducto ( producto varchar)
RETURNS table (
		date date,
    	stars t_stars,
    	title varchar,
    	commentary t_comment)
AS $body$
BEGIN
	RETURN QUERY
	SELECT r.date, r.stars, r.title, r.commentary 
	FROM review r, products p
	WHERE (p.id = r.id_product AND p.name = producto);
END;
$body$
LANGUAGE plpgsql;

--Producto con sus respectivas valoraciones

CREATE VIEW ProductosValorados
AS
SELECT id_product,AVG(stars) AS valoracion 
FROM review
GROUP BY id_product;

--El producto más valorado

CREATE VIEW ProductoMasValorado
AS
SELECT id_product, valoracion 
FROM ProductosValorados
WHERE valoracion = (SELECT MAX(valoracion) 
					FROM ProductosValorados);
					
--Productos mas valorados

CREATE OR REPLACE FUNCTION ProductosMejorValorados ()
RETURNS table (
		id int,
		name varchar,
		discount percent,
		price t_price
		)
AS $body$
BEGIN
	RETURN QUERY
	SELECT p.id,p.name,p.discount,p.price
	FROM ProductosValorados pv, products p
	WHERE (p.id = pv.id_product) ORDER BY pv.valoracion DESC LIMIT 6;
END;
$body$
LANGUAGE plpgsql;

--Listar los mas vendidos

CREATE VIEW ProductoStockVendido
AS
SELECT c.prod_id,sum (pitem.stock) stock FROM purchxitem pitem, purchase purch, color_size c
WHERE pitem.id_purchase = purch.id AND purch.state = 'success' AND pitem.id_color_size = c.id
GROUP BY c.prod_id ORDER BY stock DESC;


CREATE OR REPLACE FUNCTION ProductosMasVendidos ()
RETURNS table (
		id int,
		name varchar,
		stock bigint,
		discount percent,
		price t_price
		)
AS $body$
BEGIN
	RETURN QUERY
	SELECT p.id,p.name,psv.stock,p.discount,p.price
	FROM ProductoStockVendido psv, products p
	WHERE (p.id = psv.prod_id) ORDER BY psv.stock DESC LIMIT 10;
END;
$body$
LANGUAGE plpgsql;

--funcion para cambiar estado de una reserva si pasa mas de un dia desde su creacion (vence)

CREATE OR REPLACE FUNCTION check_date() RETURNS TRIGGER AS $funcemp$
BEGIN
	UPDATE "reservations" SET state = 'cancelled' WHERE CURRENT_TIMESTAMP(2) > (date + 1);
END; $funcemp$ LANGUAGE plpgsql;

--funcion para crear una reserva

CREATE OR REPLACE FUNCTION create_reservation(stock_r int,id_user_r int,id_color_size_r int) RETURNS void AS $funcemp$
DECLARE
stock_base int := (SELECT c.stock FROM color_size c WHERE id_color_size_r = c.id);
BEGIN
	IF ((stock_base - stock_r) < 0) THEN
		RAISE EXCEPTION 'stock solicitado no disponible';
	ELSE
		INSERT INTO "reservations" (date,stock,id_user,id_color_size,state) VALUES 
		(CURRENT_TIMESTAMP(2),stock_r,id_user_r,id_color_size_r,'reserved');
		UPDATE "color_size" SET stock = stock - stock_r WHERE id = id_color_size_r;
	END IF;
END; $funcemp$ LANGUAGE plpgsql;