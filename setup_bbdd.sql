create domain gen as char 
check (value in ('M','F','U'));

create domain sh_size as varchar 
check (value in ('35','36','37','38','39','40','41','42','43','44','45','46','47','48','49'));

create domain t_size as varchar 
check (value in ('XXS','XS','S','M','L','XL','XXL'));

create domain t_color as varchar 
check (value in ('rojo','verde','azul','cian','magenta','amarillo','naranja','purpura'));

create domain percent as int 
check (value >= 0 and value <= 100);

create domain t_price as float
check (value >= 0 and value <= 9999999);

create domain purch_state as varchar 
check (value in ('success','pending','cancelled'));

create domain res_state as varchar
check (value in ('reserved','cancelled'));

create domain t_stars as int
check (value >= 0 and value <=6);

create domain t_comment as text
check (length (value) < 600);

create table roles (
    id serial,
    name varchar (10) unique,
    primary key (id)
);

create table users (
    id serial,
    e_mail varchar (45) unique,
    psw varchar (40),
    id_role int,
    primary key (id),
    foreign key (id_role) references roles (id)
);

create table customers (
    id serial,
    dni numeric (8),
    name varchar (15),
    surname varchar (15),
    genre gen,
    c_size t_size,
    shoe_size sh_size,
    phone_no numeric (15),
	id_user int not null unique,
    primary key (id),
	foreign key (id_user) references users (id)
);

create table chat (
    id serial,
    id_user int unique not null,
    id_admin int not null,
    primary key (id),
    foreign key (id_user) references customers (id),
    foreign key (id_admin) references users (id)
);

create table message (
    id serial,
    msg t_comment not null,
    date date,
	id_user int,
    id_chat int,
	primary key (id),
	foreign key (id_user) references users (id),
    foreign key (id_chat) references chat (id)
);

create table type (
    id serial,
    name varchar (15),
    primary key (id)
);

create table products (
    id serial,
    name varchar (15) not null,
    dsc t_comment default 'Sin descripcion',
    material varchar (15) not null,
    genre gen not null,
    brand varchar (15) not null,
    type int,
    discount percent default 0,
    price t_price not null,
    primary key (id),
    foreign key (type) references type (id)
);

create table color_size (
    id serial,
    color t_color,
    size varchar (4),
    stock int default 0,
    prod_id int,
    primary key (id),
    foreign key (prod_id) references products (id)
);

create table coupon (
    id serial,
    pc percent,
    cad_date date,
    primary key (id)
);

create table shipping (
    id serial,
    address varchar (30),
    zip numeric (7),
    name varchar (15),
    surname varchar (15),
    dni int,
    track_code int,
    province varchar (15),
    primary key (id)
);

create table purchase (
    id serial,
    price t_price,
    date date,
    state purch_state,
    id_user int,
    id_coupon int,
    id_shipping int,
    primary key (id),
    foreign key (id_user) references users (id),
    foreign key (id_coupon) references coupon (id),
    foreign key (id_shipping) references shipping (id)
);

create table purchxitem (
    id_purchase int,
    id_color_size int,
    primary key (id_purchase,id_color_size)
);

create table reservations (
    id serial,
    date date,
    stock int,
    id_user int,
    id_color_size int,
    state res_state,
    primary key (id),
    foreign key (id_user) references users (id),
    foreign key (id_color_size) references color_size (id)
);

create table wishlist (
    id_user int,
    id_prod int,
    date date,
    primary key (id_user,id_prod),
    foreign key (id_user) references users (id),
    foreign key (id_prod) references products (id)
);

create table review (
    id serial,
    date date,
    stars t_stars not null,
    title varchar(15),
    commentary text default 'Sin comentario' 
);

insert into roles (name) values ('admin');
insert into users (e_mail,psw) values ('jaja@gmail.com','jaja')

