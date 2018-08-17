
Create database Registro;
Use Registro;

Create table Todos(
id int not null auto_increment,
primary key (id),
nombreUsuario varchar(20) not null,
correo varchar(50) not null,
contraseña varchar(50) not null
);

select * from Todos; 