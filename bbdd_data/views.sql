CREATE VIEW UserCustomer 
AS
SELECT c.id,u.e_mail,c.dni,c.name,c.surname,c.genre,c.c_size,c.shoe_size,c.phone_no,c.id_user FROM users u,customers c
WHERE u.id = c.id_user;

CREATE VIEW UserPurchase
AS
SELECT DISTINCT prod.id prod_id,p.id_user FROM purchase p,purchxitem pitem, color_size cz, products prod 
WHERE p.state = 'success' AND p.id = pitem.id_purchase AND pitem.id_color_size = cz.id AND cz.prod_id = prod.id ORDER BY p.id_user,prod.id;

CREATE VIEW ProductsList
AS
SELECT p.id,p.name,p.dsc,p.material,p.genre,p.brand,p.type,p.discount,p.price, 
(SELECT array(SELECT DISTINCT color FROM color_size WHERE prod_id = p.id)) colors
FROM products p ORDER BY p.id;

CREATE VIEW PurchaseList
AS 
SELECT id,price,date,state,id_user FROM purchase WHERE state != 'cart' ORDER BY id;

CREATE VIEW PurchaseItems
AS 
SELECT p.id prod_id,p.name,cz.color,cz.size,pitem.stock,pitem.price,pitem.id_purchase
FROM purchxitem pitem, products p,color_size cz 
WHERE pitem.id_color_size = cz.id and cz.prod_id = p.id;

CREATE VIEW CartItems
AS 
SELECT p.id prod_id,p.name,cz.id id_color_size,cz.color,cz.size,pitem.stock,p.price,p.discount,purch.id_user
FROM purchxitem pitem, products p,color_size cz,purchase purch
WHERE pitem.id_color_size = cz.id and cz.prod_id = p.id and pitem.id_purchase = purch.id and purch.state = 'cart';

CREATE VIEW CartInfo
AS
SELECT * FROM purchase WHERE state = 'cart'; 

CREATE VIEW ReservationsList
AS
SELECT r.id,p.id prod_id,p.name,cz.color,cz.size,r.stock,((p.price-((p.discount*p.price)/100))*r.stock) price,r.date,r.state,r.id_user
FROM products p,color_size cz,reservations r
WHERE r.id_color_size = cz.id and cz.prod_id = p.id ORDER BY r.id;

CREATE VIEW ActiveReservations
AS
SELECT id,id_user,id_color_size FROM reservations 
WHERE state = 'reserved';

CREATE VIEW ReviewProduct
AS
SELECT r.id,r.date,r.stars,r.id_product,r.id_user,p.name FROM products p,review r
WHERE r.id_product = p.id ORDER BY r.id;

CREATE VIEW UserRole
AS
SELECT u.id,u.e_mail,u.psw,u.external_id,r.name rol FROM users u,roles r 
WHERE u.id_role = r.id;

CREATE VIEW WishlistProducts
AS
SELECT p.id,p.name,p.discount,p.price,w.id_user 
FROM wishlist w,products p WHERE w.id_prod = p.id ORDER BY w.date;

CREATE VIEW NewProducts
AS
SELECT * FROM products ORDER BY id DESC LIMIT 6;

CREATE VIEW ChatList
AS
SELECT c.id,c.id_user,c.id_admin,
(SELECT count (*) FROM message m WHERE m.id_chat = c.id AND m.id_user != c.id_admin AND m.read = false) unread_messages,
(SELECT m.msg FROM message m WHERE m.id_chat = c.id ORDER BY m.id DESC LIMIT 1) last_message,
(SELECT m.date FROM message m WHERE m.id_chat = c.id ORDER BY m.id DESC LIMIT 1) date
FROM chat c;

