


/* create table */

 create table usuarios(

    id int(11) PRIMARY KEY NOT NULL,
    usuario VARCHAR(45) ,
    password VARCHAR(45),
    habilitado TINYINT

 );


INSERT INTO `jwt`.`usuarios`
(`id`,
`usuario`,
`password`,
`habilitado`
)
VALUES

(2,'ana','8cb2237d0679ca88db6464eac60da96345513964',1);

update usuarios set habilitado=0 where id=2;











/* OTRA BD */

create table personas(
 id INT PRIMARY KEY NOT NULL,
 nombre VARCHAR(45) ,
 apellido VARCHAR(45),
 correo VARCHAR(45),
 habilitado BOOLEAN ,
 eliminado BOOLEAN ,
 

)

use login;

describe personas;


DROP TABLE personas;


ALTER TABLE personas
drop column correo;


alter table usuarios
add constraint fk_idPersona 
FOREIGN KEY (idPersona) REFERENCES personas(id);


delete from personas where id=2;

update personas set apellido="hdskjdh" where id=3;






INSERT INTO `login`.`personas`
(`id`,
`nombre`,
`apellido`,
`correo`,
`habilitado`,
`eliminado`)
VALUES

(2,'ana','muñoz','anamunioz2021@gmail.com',0,0);

(1,'ariel','zarate','arieltecnico@gmail.com',1,0);

INSERT INTO `login`.`usuarios`
(`id`,
`idPersona`,
`usuario`,
`password`,
`habilitado`,
`eliminado`)
VALUES
(2,2,'ana','8cb2237d0679ca88db6464eac60da96345513964',0,0);
(1,1,'ariel','7110eda4d09e062aa5e4a390b0a572ac0d2c0220',1,0);