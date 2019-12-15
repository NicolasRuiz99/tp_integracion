CREATE VIEW UserCustomer 
AS
SELECT c.id,u.e_mail,u.psw,c.dni,c.name,c.surname,c.genre,c.c_size,c.shoe_size,c.phone_no,c.id_user FROM users u,customers c
WHERE u.id = c.id_user;
