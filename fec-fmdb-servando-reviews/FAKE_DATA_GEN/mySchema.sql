-- id,movie_title,reviewer,review_title,review,review_date,review_count,review_average,review_likes,review_viewers,review_number
DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews(
  id SMALLINT PRIMARY KEY,
  movie_title VARCHAR (500) NOT NULL,
  reviewer VARCHAR (500) NOT NULL,
  review_title VARCHAR (500) NOT NULL,
  review VARCHAR (2000) NOT NULL,
  review_date VARCHAR (300) NOT NULL,
  review_count VARCHAR

);

