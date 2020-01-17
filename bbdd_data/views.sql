CREATE VIEW UserCustomer 
AS
SELECT c.id,u.e_mail,u.psw,c.dni,c.name,c.surname,c.genre,c.c_size,c.shoe_size,c.phone_no,c.id_user FROM users u,customers c
WHERE u.id = c.id_user;

CREATE VIEW UserPurchase
AS
SELECT DISTINCT prod.id prod_id,p.id_user FROM purchase p,purchxitem pitem, color_size cz, products prod 
WHERE p.state = 'success' AND p.id = pitem.id_purchase AND pitem.id_color_size = cz.id AND cz.prod_id = prod.id ORDER BY p.id_user,prod.id;

CREATE VIEW ProductsList
AS
SELECT p.id,p.name,p.dsc,p.material,p.genre,p.brand,p.type,p.discount,p.price, 
(SELECT array(SELECT DISTINCT color FROM color_size WHERE prod_id = p.id)) colors
FROM products p;

CREATE VIEW PurchaseList
AS 
SELECT id,price,date,state,id_user FROM purchase WHERE state != 'cart';
