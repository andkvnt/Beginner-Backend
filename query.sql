create table product(
    id int primary key not null,
    name text not null,
    price int not null,
    stock int not null
);

insert into product(id,name,price,stock)
value(1,'baju',10000,12),
(2,'sepatu',12000,12),
(3,'kemeja',30000,12);


insert into product(id,name,price,stock)
value(4,'baju',10000,12);

select * from product;

update product
set name = 'baju baru',
price: 12000,
stock: 12,
where id = 1

delete from product
where id = 4

create table category (
    id_category int not null primary key,
    name_category varchar(255) not null
)

insert into category (id_category, name_category) values (1,'Laptop')

-- table users
--id varchar primary key
--email varchar not null
--password varchar not null
--fullname varchar not null
--role varchar not null