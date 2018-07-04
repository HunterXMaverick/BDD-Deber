Create database CentroQuito;

Use CentroQuito;

Create table Persona (
id int not null auto_increment,
nombre varchar (50) not null,
apellido varchar (50) not null,
correo varchar (100) not null,
primary key (id));

Create table Ubicacion (
id int not null auto_increment,
ubicacion1 varchar (100) not null,
ubicacion  varchar (100) not null,
ubicacion  varchar (100) not null,
ubicacion  varchar (100) not null,
ubicacion  varchar (100) not null,
ubicacion  varchar (100) not null,
primary key (id));

