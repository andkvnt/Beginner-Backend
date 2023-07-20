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