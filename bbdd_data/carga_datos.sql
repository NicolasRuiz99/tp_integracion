SET DateStyle TO European;
ALTER SEQUENCE chat_id_seq RESTART WITH 1;
ALTER SEQUENCE color_size_id_seq RESTART WITH 1;
ALTER SEQUENCE coupon_id_seq RESTART WITH 1;
ALTER SEQUENCE customers_id_seq RESTART WITH 1;
ALTER SEQUENCE message_id_seq RESTART WITH 1;
ALTER SEQUENCE products_id_seq RESTART WITH 1;
ALTER SEQUENCE purchase_id_seq RESTART WITH 1;
ALTER SEQUENCE reservations_id_seq RESTART WITH 1;
ALTER SEQUENCE review_id_seq RESTART WITH 1;
ALTER SEQUENCE roles_id_seq RESTART WITH 1;
ALTER SEQUENCE type_id_seq RESTART WITH 1;
ALTER SEQUENCE users_id_seq RESTART WITH 1;

INSERT INTO "roles" (name) VALUES ('admin'), ('customer');

INSERT INTO "users" (e_mail, psw, id_role) VALUES 
('nicolasruiz@live.com.ar', 'Admin12345', 1),
('nicolasrondan@live.com.ar', 'password', 2), 
('ramonvaldez@live.com', 'admin', 2),
('juliocesar@live.com.ar', 'contraseña', 2),    
('leoDavinci@gmail.com', '123456789', 2), 
('arturito12@hotmail.com', 'soytupadre123', 2),
('juanortiga@gmail.com', 'elmasri', 2), ('estebanquito@gmail.com', '456789123', 2), 
('horacioquiroga@live.com.ar', 'almohada45', 2),
('oliviatorres@gmail.com', 'bananasplit5', 2), 
('japonesirz@yahoo.com', '5555s', 2);

INSERT INTO "customers" (dni, name, surname, genre, c_size, shoe_size, phone_no, id_user) VALUES 
('39031040', 'nicolas', 'rondan', 'M', 'L', '42', '3442471711', 2 ),
('41056189', 'ramon', 'valdez', 'M', 'XL', '38', '3442471712', 3 ), 
('28031042', 'julio', 'cesar', 'M', 'XXL', '43', '3452772718', 4 ),
('56023781', 'leonardo', 'davinci', 'M', 'S', '40', '344378986', 5 ), 
('84235893', 'arturo', 'rodriguez', 'M', 'XL', '43', '011567898', 6 ),
('23561589', 'juan', 'ortiga', 'M', 'S', '39', '3445895623', 7 ), 
('56458963', 'esteban', 'fernandez', 'M', 'XS', '41', '3442533731', 8 ),
('28355601', 'horacio', 'quiroga', 'M', 'S', '38', '011455632', 9 ), 
('56892301', 'olivia', 'torres', 'F', 'S', '39', '0114565238', 10 ),
('25563247', 'raizo', 'okiwa', 'M', 'L', '40', '344368947', 11 );

INSERT INTO "chat" (id_user, id_admin) VALUES (2, 1), (3, 1), (4, 1), (5, 1), (6, 1), (7, 1), (8, 1), (9, 1), (10, 1), (11, 1);

INSERT INTO "message" (msg, id_user, id_chat,read) VALUES 
('Hola, tenes stock?', 2, 1,true), 
('No', 1, 1,false), 
('Hola?', 3, 2,false), 
('quiero reembolsar...', 4, 3,false),
('dssasasd', 5, 4,true), 
('Hola, tenes stock?', 6, 5,true), 
('Hola, tenes stock?', 7, 6,true), 
('Hola, quiero un par de medias', 8, 7,false),
('puedo ser admin?', 9, 8,true), 
(':)', 10, 9,true), 
('Hola, tenes stock?', 11, 10,false);

INSERT INTO "type" (name) VALUES ('calzado'), ('remeras'), ('pantalon'), ('medias'), ('ropa interior'), ('accesorios'), ('abrigos'),('trajes'),('trajes de baño'),('polleras'),('blusas'),('vestidos'),('calzas');

INSERT INTO "products" (name, dsc, material, genre, brand, type, discount, price, active) VALUES 
('jean', 'jean azul talle 40', 'denim', 'U', 'levis', 3, 10, 800, true ), 
('zapatillas', 'zapatillas para entrenar', 'hule', 'M', 'nike', 1, 5, 1500, true ),
('remera', 'remera chomba color roja', 'algodon', 'M', 'lacoste', 2, 0, 950, true ), 
('medias', 'par de medias', 'tela', 'U', 'nike', 4, 0, 300, true ),
('boxer', 'boxer taverniti blanco', 'algodon', 'M', 'taverniti', 5, 0, 850, true ), 
('zapatos','', 'cuero', 'M', 'pizzoni', 1, 20, 3400, true ),
('bermuda','', 'gabardina', 'M', 'adidas', 3, 10, 2200, true ), 
('lentes de sol', '','vidrio', 'U', 'smartbuy', 6, 5, 1000, true ),
('campera','', 'algodon', 'M', 'adidas', 7, 30, 3200, true ), 
('bufanda', '', 'lana', 'F', 'vinson', 7, 0, 500, true );

INSERT INTO "color_size" (color, size, stock, prod_id) VALUES 
('azul', '40', 50, 1),
('azul', '43', 54, 1),
('azul', '41', 52, 1),
('verde', '41', 52, 1),
('verde', '42', 52, 1),
('amarillo', '41', 52, 1),
('rojo', '41', 52, 1),
('verde', '42', 100, 2), 
('purpura', 'L', 150, 3), 
('amarillo', '41', 500, 4),
('naranja', 'XS', 200, 5), 
('magenta', '42', 70, 6), 
('amarillo', 'XL', 600, 7),
('azul', 'L', 500, 8), 
('rojo', 'XL', 500, 9), 
('amarillo', 'XXL', 800, 10);

INSERT INTO "coupon" (pc, cad_date, used) VALUES
(50, '21/04/2020',false), (30, '12/03/2020',false), 
(20, '21/12/2070',false), (50, '12/12/2020',false), 
(31, '10/10/2020',false);

INSERT INTO "purchase" (date, state, id_user, id_coupon) VALUES 
('17/12/2019', 'cart', 1, 1), 
('10/12/2019', 'cart', 2, 2),
('01/12/2019', 'cart', 3, 3),
('17/12/2019', 'cart', 1, null),
('17/12/2019', 'cart', 2, 5);

INSERT INTO "shipping" (id,address, zip, name, surname, dni, track_code, province) VALUES 
(1,'belgrano 679', 3260, 'Raul', 'Paz','56512355', 54654231, 'Entre rios'),
(2,'sarmiento 345', 4250, 'Roman', 'Pizeta','56512038', 15923789, 'La pampa'), 
(3,'los tulipanes 789', 3260, 'Manuel', 'Rodriguez','89562318', 54654232, 'Entre rios');

INSERT INTO "purchxitem" (id_purchase, id_color_size,stock) VALUES 
(1,1,2),(2,2,5),(3,3,6),(1,4,1),(1,5,3),(3,6,4),(2,7,2),(1,8,1),(1,9,1),(1,10,2),(4,4,3),(4,5,2),(4,13,1),(4,9,2),(5,4,2),(5,9,1),(5,12,1);

UPDATE "purchase" SET state = 'success' WHERE id = 1;
UPDATE "purchase" SET state = 'pending' WHERE id = 2;
UPDATE "purchase" SET state = 'pending' WHERE id = 3;
UPDATE "purchase" SET state = 'cancelled' WHERE id = 3;

select create_reservation(10, 1, 1);
select create_reservation(20, 2, 3);
select create_reservation(3, 3, 2);
select create_reservation(11, 4, 4);
select create_reservation(16, 5, 7);
select create_reservation(3, 7, 5);
select create_reservation(15, 6, 6);
select create_reservation(13, 8, 8);
select create_reservation(16, 9, 9);
select create_reservation(5, 10, 10);

UPDATE "reservations" SET state = 'cancelled' WHERE id in (2,4,7,9);

INSERT INTO "review" (date, stars, title, commentary, id_product,id_user) VALUES 
('22/11/2019', 6, 'Todo ok', 'Quedé encantado', 1,1),
('20/11/2019', 2, 'Todo mal', 'Vino con polillas', 1,8),
('21/11/2019', 5, 'Todo en orden', 'llegó ok', 1,9),
('24/11/2019', 3, 'Todo ok', 'Nada mal', 2,1),
('24/11/2019', 6, 'Excelente', 'Nada mal', 3,3),
('26/11/2019', 2, 'Pesimo', 'No me gusto', 3,2),
('29/11/2019', 4, 'Todo ok', 'Nada mal', 4,1);

INSERT INTO "wishlist" (id_user,id_prod) VALUES
(2,1),(2,2),(2,3),(2,4),(4,3),(5,5),(6,2),(6,3),(6,4),(7,1);