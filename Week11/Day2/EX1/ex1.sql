SELECT DISTINCT language.name 
FROM film
INNER JOIN language
ON language.language_id = film.language_id;


SELECT language.name, film.title
FROM film
FULL OUTER JOIN language
ON language.language_id = film.language_id;

 CREATE TABLE new_film(

    new_film_id serial PRIMARY KEY,
	new_film_name VARCHAR(50)
 );

 INSERT INTO new_film(new_film_name) values
   	('Grosse Wonderful'),
    ('Ace Goldfinger'),
    ('Badman Dawn'),
    ('Bonnie Holocaust');


CREATE TABLE customer_review(
	
	   review_id serial PRIMARY KEY NOT NULL,
    film_id INTEGER,
    FOREIGN KEY (film_id) REFERENCES new_film(new_film_id) ON DELETE CASCADE,
    language_id INTEGER,
    FOREIGN KEY (language_id) REFERENCES language(language_id) ON DELETE CASCADE,
    title VARCHAR(50),
    score INT NOT NULL
    CHECK (score BETWEEN 1 AND 10),
    review_text VARCHAR,
    last_update  DATE NOT NULL
)

  INSERT INTO customer_review(film_id, language_id, title, score, review_text) values
   	((select new_film_id from new_film where new_film_name='Badman Dawn'),
     (select language_id from language where language_id = (select language_id from film where title='Badman Dawn')),
     'title1 of review',
     10, 'AN amazing movie!')

     ((select new_film_id from new_film where new_film_name='Ace Goldfinger'),
     (select language_id from language where language_id = (select language_id from film where title='Ace Goldfinger')),
     'title1 of review',
     1, 'Worst movie ever!')
	 
	  DELETE FROM new_film where new_film_name = 'Ace Goldfinger';
