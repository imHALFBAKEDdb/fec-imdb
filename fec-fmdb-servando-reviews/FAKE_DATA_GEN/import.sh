
mongoimport --host localhost --db fmdbrev --collection reviews --type tsv --file ./myOutput.tsv --fields id,movie_title,reviewer,review_title,review,review_date,review_count,review_average,review_likes,review_viewers,review_number
