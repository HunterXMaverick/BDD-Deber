Create database CentroQuito;

Use CentroQuito;

Create table Persona (
id int not null auto_increment,
nombre varchar (50) not null,
apellido varchar (50) not null,
correo varchar (100) not null,
primary key (id));

Create table UbicacionMuseo (
id int not null auto_increment,
nombre varchar (100) not null,
longuitud  varchar (100) not null,
latitud  varchar (100) not null,
primary key (id));

Create table Ruta (
id int not null auto_increment,
direccion varchar(100) not null,
primary key (id));

Create table Cliente (
id int not null auto_increment,
coordenadaActual int null,
idPersona int null,
primary key (id));
