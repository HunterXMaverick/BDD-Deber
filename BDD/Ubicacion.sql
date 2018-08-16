Create database Ubicacion;

Use Ubicacion;

Create table Registro(
id int not null auto_increment,
primary key (id),
nombre varchar(20) not null,
correo varchar(50) not null,
contrasena varchar(50) not null
)

