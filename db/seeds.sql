INSERT INTO burgers (burger_name , consumed) 
VALUES ("Big Mac", false),("McFish", true),("McChicken", false);

SELECT * FROM burgers;

UPDATE burgers SET consumed = 1 WHERE id = 26