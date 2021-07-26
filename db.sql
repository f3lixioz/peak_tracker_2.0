CREATE DATABASE peak_tracker;

CREATE TABLE peak(
    peak_id SERIAL PRIMARY KEY,
    peak_name VARCHAR(255),
    peak_elv INT,
    bag_date VARCHAR(10)
);

CREATE TABLE peak_done(
    peak_id SERIAL PRIMARY KEY,
    peak_name VARCHAR(255),
    peak_elv SMALLINT,
    bag_date DATE
);

INSERT INTO peak (peak_name, peak_elv) VALUES ('Elbert',            14440);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Massive',	        14421);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Harvard',	        14421);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Blanca Peak',	    14354);
INSERT INTO peak (peak_name, peak_elv) VALUES ('La Plata Peak',	    14336);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Uncompahgre',	    14321);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Crestone Peak',	    14294);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Lincoln',	        14293);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Castle Peak',	    14279);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Grays Peak',	    14278);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Antero',	        14276);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Torreys Peak',  	14275);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Quandary Peak', 	14271);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Mount Evans',   	14265);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Longs Peak',    	14259);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Wilson',	        14246);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Cameron',	        14238);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Shavano',       	14231);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Princeton',     	14204);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Belford',       	14203);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Yale',	            14200);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Crestone Needle',	14197);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Bross',	            14172);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Kit Carson Peak',	14165);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Maroon Peak',	    14163);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Tabeguache Peak',	14162);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Oxford',	        14160);
INSERT INTO peak (peak_name, peak_elv) VALUES ('El Diente Peak',	14159);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Mount Democrat',	14155);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Sneffels',      	14150);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Capitol Peak',  	14130);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Pikes Peak',    	14115);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Snowmass Mountain',	14099);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Eolus',         	14083);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Windom Peak',   	14082);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Challenger Point',	14081);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Columbia',	        14077);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Missouri Mountain',	14074);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Humboldt Peak', 	14064);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Mount Bierstadt',	14060);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Conundrum Peak',	14060);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Sunlight Peak', 	14059);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Handies Peak',  	14058);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Culebra Peak',	    14047);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Ellingwood Point',	14042);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Lindsey',	        14042);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Eolus North',	    14039);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Little Bear Peak',	14037);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Sherman',	        14036);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Redcloud Peak', 	14034);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Pyramid Peak',  	14025);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Maroon Peak North',	14019);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Wilson Peak',	    14017);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Wetterhorn Peak',	14015);
INSERT INTO peak (peak_name, peak_elv) VALUES ('San Luis Peak', 	14014);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Huron Peak',    	14010);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Holy Cross',    	14009);
INSERT INTO peak (peak_name, peak_elv) VALUES ('Sunshine Peak',	    14001);
