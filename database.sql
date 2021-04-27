--db name: gone_fishing --

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "lakes"(
	"id" serial primary key,
	"name" varchar(50),
	"description" varchar(1000),
	"depth" varchar(20)
);

INSERT INTO "lakes" ( name, description, depth ) VALUES ( 'Cedar Lake', 'Top of the Chain', '51 ft' ), ('Lake of the Isles', 'Next in Line', '30 ft'), ('Brownie Lake', 'Cute little hideaway', '49.9 ft'), ( 'Bde Maka Ska', 'Name restored', '89 ft' );

CREATE TABLE "fish"(
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(20),
	"scientific_name" VARCHAR(20),
	"description" VARCHAR(1000),
	"image_path" varchar(1000)
);

INSERT INTO "fish"( name, scientific_name, image_path ) VALUES ( 'Pumpkinseed', 'Lepomis gibbosus', 'images/pumpkinseed.png' ), ( 'Large Mouth Bass', 'Micropterus salmoides', 'images/Largemouth.png'); 





