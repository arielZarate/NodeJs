use login;
alter table usuarios
add constraint fk_usuarios_personas
foreign key (id_persona) references personas(id);

