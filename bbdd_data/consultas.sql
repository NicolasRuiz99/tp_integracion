CREATE OR REPLACE FUNCTION UserCustomerByID (id_u int)
RETURNS table (
		id int,
		e_mail varchar,
		dni t_dni,
		name varchar,
		surname varchar,
		genre gen,
		c_size t_size,
		shoe_size sh_size,
		phone_no varchar
		)
AS $body$
BEGIN
	RETURN QUERY
	SELECT u.id,u.e_mail,u.dni,u.name,u.surname,u.genre,u.c_size,u.shoe_size,u.phone_no FROM UserCustomer u WHERE id_user = id_u;
END;
$body$
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION ListAllMsg (id_c int)
RETURNS table (
		id int,
		msg t_comment,
		date date,
		id_user int,
		read boolean
		)
AS $body$
BEGIN
	RETURN QUERY
	SELECT m.id,m.msg,m.date,m.id_user,m.read FROM message m WHERE m.id_chat = id_c ORDER BY m.id;
END;
$body$
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION PurchaseListByID (id_u int)
RETURNS table (
		id int,
		price t_price,
		date date,
		state purch_state
		)
AS $body$
BEGIN
	RETURN QUERY
	SELECT p.id,p.price,p.date,p.state FROM PurchaseList p WHERE id_user = id_u;
END;
$body$
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION RecomendedProducts (type_p int,id_p int)
RETURNS table (
		id int,
		name varchar,
		dsc t_comment,
		material varchar,
		genre gen,
		brand varchar,
		type int,
		discount percent,
		price t_price
		)
AS $body$
BEGIN
	RETURN QUERY
	SELECT * FROM products p WHERE p.type = type_p and p.id != id_p LIMIT 3;
END;
$body$
LANGUAGE plpgsql;

--devuelve los color_size dado el id de producto

CREATE OR REPLACE FUNCTION ColorSizeByID (id_p int)
RETURNS table (
		id int,
		color t_color,
		size all_size,
		stock t_stock
		)
AS $body$
BEGIN
	RETURN QUERY
	SELECT c.id,c.color,c.size,c.stock FROM color_size c WHERE c.prod_id = id_p ORDER BY c.id;
END;
$body$
LANGUAGE plpgsql;

--devuelve las review dado el id del producto

CREATE OR REPLACE FUNCTION ReviewByID (id_p int)
RETURNS table (
		id int,
		date date,
		stars t_stars,
		title varchar,
		commentary t_comment,
		id_user int
		)
AS $body$
BEGIN
	RETURN QUERY
	SELECT r.id,r.date,r.stars,r.title,r.commentary,r.id_user FROM review r WHERE r.id_product = id_p;
END;
$body$
LANGUAGE plpgsql;

--devuelve los items de la wishlist dado el id de usuario

CREATE OR REPLACE FUNCTION WishlistByID (id_u int)
RETURNS table (
		id int,
		name varchar,
		discount percent,
		price t_price
		)
AS $body$
BEGIN
	RETURN QUERY
	SELECT w.id,w.name,w.discount,w.price FROM WishlistProducts w WHERE w.id_user = id_u;
END;
$body$
LANGUAGE plpgsql;

--devuelve los items de la compra dado el id de la misma

CREATE OR REPLACE FUNCTION PurchaseItemsByID (id_p int)
RETURNS table (
		prod_id int,
		name varchar,
		color t_color,
		size all_size,
		stock t_stock,
		price t_price
		)
AS $body$
BEGIN
	RETURN QUERY
	SELECT p.prod_id,p.name,p.color,p.size,p.stock,p.price FROM PurchaseItems p WHERE p.id_purchase = id_p;
END;
$body$
LANGUAGE plpgsql;

--devuelve los items del carrito dado el id del usuario

CREATE OR REPLACE FUNCTION CartItemsByID (id_u int)
RETURNS table (
		prod_id int,
		name varchar,
		id_color_size int,
		color t_color,
		size all_size,
		stock t_stock,
		price t_price,
		discount percent
		)
AS $body$
BEGIN
	RETURN QUERY
	SELECT c.prod_id,c.name,c.id_color_size,c.color,c.size,c.stock,c.price,c.discount FROM CartItems c WHERE c.id_user = id_u;
END;
$body$
LANGUAGE plpgsql;

--devuelve la info del carrito dado el id del usuario

CREATE OR REPLACE FUNCTION CartInfoByID (id_u int)
RETURNS table (
		id int,
		price t_price,
		date date,
		state purch_state,
		id_user int,
		id_coupon int
		)
AS $body$
BEGIN
	RETURN QUERY
	SELECT c.id,c.price,c.date,c.state,c.id_user,c.id_coupon FROM CartInfo c WHERE c.id_user = id_u;
END;
$body$
LANGUAGE plpgsql;

--devuelve lista de reservas dado el id del usuario

CREATE OR REPLACE FUNCTION ReservationsListByID (id_u int)
RETURNS table (
		id int,
		prod_id int,
		name varchar,
		color t_color,
		size all_size,
		stock t_stock,
		price double precision,
		date date,
		state res_state
		)
AS $body$
BEGIN
	RETURN QUERY
	SELECT r.id,r.prod_id,r.name,r.color,r.size,r.stock,r.price,r.date,r.state FROM ReservationsList r WHERE r.id_user = id_u;
END;
$body$
LANGUAGE plpgsql;

--devuelve lista de reviews dado el id del usuario

CREATE OR REPLACE FUNCTION ReviewProductByID (id_u int)
RETURNS table (
		id int,
		date date,
		stars t_stars,
		id_product int,
		name varchar
		)
AS $body$
BEGIN
	RETURN QUERY
	SELECT r.id,r.date,r.stars,r.id_product,r.name FROM ReviewProduct r WHERE r.id_user = id_u;
END;
$body$
LANGUAGE plpgsql;

--busca si existe el item dado en la wishlist del usuario

CREATE OR REPLACE FUNCTION UserWishlistItem (id_u int, id_p int)
RETURNS boolean 
AS $body$
BEGIN
	IF (EXISTS (SELECT * FROM wishlist WHERE id_user = id_u AND id_prod = id_p)) THEN
		RETURN true;
	ELSE
		RETURN false;
	END IF;
END;
$body$
LANGUAGE plpgsql;

--devuelve el id de la reserva activa si existe

CREATE OR REPLACE FUNCTION ActiveReservationsItem (id_u int, id_cz int)
RETURNS table (id int)
AS $body$
BEGIN
	RETURN QUERY
	SELECT a.id FROM ActiveReservations a WHERE a.id_user = id_u AND a.id_color_size = id_cz;
END;
$body$
LANGUAGE plpgsql;

--busca si existe el item dado en la lista de compras del usuario

CREATE OR REPLACE FUNCTION UserPurchaseItem (id_u int, id_p int)
RETURNS boolean 
AS $body$
BEGIN
	IF (EXISTS (SELECT * FROM UserPurchase WHERE id_user = id_u AND prod_id = id_p)) THEN
		RETURN true;
	ELSE
		RETURN false;
	END IF;
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

CREATE OR REPLACE FUNCTION HighRatedProducts ()
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

CREATE OR REPLACE FUNCTION TopSellersProducts ()
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
	FROM ProductoStockVendido psv, products p
	WHERE (p.id = psv.prod_id) ORDER BY psv.stock DESC LIMIT 10;
END;
$body$
LANGUAGE plpgsql;

--funcion para leer todos los msj de un chat

CREATE OR REPLACE FUNCTION readAllMsg (id_chat int, id_user int) RETURNS void AS $funcemp$
BEGIN
	UPDATE "message" SET read = true WHERE message.id_chat = $1 AND message.id_user = $2;
END; $funcemp$ LANGUAGE plpgsql;

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
