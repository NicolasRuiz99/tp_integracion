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

CREATE VIEW PurchaseItems
AS 
SELECT p.id prod_id,p.name,cz.color,cz.size,pitem.stock,pitem.purch_price,pitem.id_purchase
FROM purchxitem pitem, products p,color_size cz 
WHERE pitem.id_color_size = cz.id and cz.prod_id = p.id;

CREATE VIEW CartItems
AS 
SELECT p.id prod_id,p.name,cz.color,cz.size,pitem.stock,p.price,p.discount,purch.id_user
FROM purchxitem pitem, products p,color_size cz,purchase purch
WHERE pitem.id_color_size = cz.id and cz.prod_id = p.id and pitem.id_purchase = purch.id and purch.state = 'cart';

CREATE VIEW CartInfo
AS
SELECT * FROM purchase WHERE state = 'cart'; 


