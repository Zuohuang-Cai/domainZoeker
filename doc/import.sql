DROP DATABASE IF EXISTS minty_media;
CREATE DATABASE minty_media;
USE minty_media;

create table bestellingen (
  id int not null auto_increment primary key,
  created_at datetime not null,
  total_price decimal(10,2) not null
);

create table domainen (
  id int not null auto_increment primary key,
  naam varchar(40) not null unique,
  price decimal(10,2) not null,
  expiry date
);
create table bestellingen_domainen (
  id int not null auto_increment primary key,
  bestelling_id int not null,
  domain_id int not null,
  foreign key (bestelling_id) references bestellingen(id),
  foreign key (domain_id) references domainen(id)
);
