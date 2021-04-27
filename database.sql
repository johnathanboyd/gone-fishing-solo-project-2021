--db name: gone_fishing --

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "lakes"(
	"id" serial primary key,
	"name" varchar(10),
	"description" varchar(20),
	"depth" varchar(32)
);

INSERT INTO "lakes" ( name, description, depth ) VALUES ( 'BdeMakaSka', 'Name restored', 'shallow' );
INSERT INTO "lakes" ( name, description, depth ) VALUES ( 'Cedar', 'Top of the Chain', 'Moderate' ), ('Isles', 'Next in Line', 'DEEP'), ('Brownie', 'Cute little hideaway', 'small but deep');

CREATE TABLE "fish"(
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(20),
	"scientific_name" VARCHAR(20),
	"description" VARCHAR(1000),
	"image_path" varchar(1000)
);

INSERT INTO "fish"( name, scientific_name, image_path ) VALUES ( 'Pumpkinseed', 'Lepomis gibbosus', 'images/pumpkinseed.png' ), ( 'Large Mouth Bass', 'Micropterus salmoides', 'images/Largemouth.png'); 





