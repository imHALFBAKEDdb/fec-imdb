const movies = [
  {
    Title: "The Final Girls",
    Year: "2015",
    imdbID: "tt2118624",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjI4Nzk2NzAzOV5BMl5BanBnXkFtZTgwNjI1NzY4NjE@._V1_SX300.jpg",
    review_average: 8,
    review_count: 6665,
    extra_images: "http://dummyimage.com/296x252.jpg/dddddd/000000",
    director: "Gustav Bramford",
    writer: "Jacky Tidey",
    release_date: "11/21/2017",
    movie_rating: "R",
    movie_length: "1 hour and 35 minutes",
    review_date: "2006-01-18",
    reviewer: "Martin Chang",
    review_title: "Best movie I have seen this year!",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ligula ultricies, euismod nisl at, semper erat. Morbi viverra commodo sapien, sed porta nibh. Nam tempor libero at nibh accumsan auctor. Morbi posuere urna a rutrum aliquam. Nunc velit quam, aliquet quis varius a, efficitur a odio. Donec ultricies nulla eu consequat posuere. Nam auctor metus orci, tristique fermentum leo porttitor nec. Nullam vulputate eleifend urna, in posuere libero convallis in. In quis diam eget orci ullamcorper ultricies. Vivamus urna risus, viverra eget laoreet sit amet, condimentum quis orci. Suspendisse sollicitudin ante sit amet semper ullamcorper. Quisque ut libero malesuada, scelerisque est in, imperdiet est. Nunc imperdiet convallis tellus eu viverra.\nEtiam tempus, eros at condimentum porttitor, purus nunc maximus quam, ut tincidunt diam velit eget mi. Curabitur maximus metus fringilla quam vehicula, non ullamcorper eros molestie. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed faucibus, metus a mollis dignissim, enim dolor rutrum justo, at fringilla ante erat eget tortor. Phasellus vestibulum fermentum mauris, quis porta dui laoreet eget. Maecenas scelerisque iaculis bibendum.\nAenean non urna ut lectus luctus sollicitudin. Proin non dui id sapien volutpat pellentesque eget eget lectus. Nunc vel nisi rhoncus, commodo est eget, pharetra mauris. Aenean aliquam aliquet ex quis scelerisque. Mauris scelerisque ornare varius. Cras fermentum mattis orci, in blandit enim. In imperdiet dui ut ligula blandit mollis at et lacus. Vivamus lacinia, lacus et mattis sagittis, dui mi bibendum dolor, sed fringilla eros tortor in tortor.\nDonec elementum ut ligula in tincidunt. In dapibus magna eget sem accumsan, et volutpat erat rhoncus. Integer semper turpis ut iaculis gravida. Quisque eget nunc fermentum, volutpat nisl eget, placerat dolor. Curabitur sit amet egestas lacus. Fusce volutpat sem non dui aliquam auctor. Nunc ullamcorper vitae augue in sagittis.",
    actor_info: [
      { character_name: "Matty Fasler", actor_name: "Darsey Breeton" },
      { character_name: "Elysia Parades", actor_name: "Roxana Moorton" },
      { character_name: "Walt Eskrick", actor_name: "Mahala Pitcaithley" },
      { character_name: "Pamelina Fills", actor_name: "Kathie Furst" },
      { character_name: "Carver Grace", actor_name: "Lida Ebbutt" },
      { character_name: "Carver Grace", actor_name: "Lida Ebbutt" }
    ]
  },
  {
    Title: "The Godfather: Part II",
    Year: "1974",
    imdbID: "tt0071562",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    review_average: 2,
    review_count: 7958,
    extra_images: "http://dummyimage.com/207x212.jpg/ff4444/ffffff",
    director: "Fancie Pitman",
    writer: "Erin Hyman",
    release_date: "05/07/2018",
    movie_rating: "G",
    movie_length: "1 hour",
    actor_info: [
      { character_name: "Addy Drew", actor_name: "Natalee Gilardi" },
      { character_name: "Gabriela Keech", actor_name: "Nettle Scott" },
      { character_name: "Danni Milland", actor_name: "Patsy Verbrugghen" }
    ]
  },
  {
    Title: "The Godfather: Part III",
    Year: "1990",
    imdbID: "tt0099674",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWQ2NjhmMWMtZDdiZC00ZTgyLWExNTEtZDMzNmRiMTMxMmIxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    review_average: 6,
    review_count: 3696,
    extra_images: "http://dummyimage.com/365x254.jpg/cc0000/ffffff",
    director: "Zuzana Priestley",
    writer: "Selina MacKissack",
    release_date: "06/17/2018",
    movie_rating: "PG-13",
    movie_length: "1 hour and 30 minutes",
    actor_info: [
      {
        character_name: "Fonzie De Avenell",
        actor_name: "Aylmer Esslement"
      },
      { character_name: "Dorian Memory", actor_name: "Lesya Wadworth" },
      { character_name: "Curtice Burgisi", actor_name: "Rycca Ellicombe" }
    ]
  },
  {
    Title: "The Godfather Trilogy: 1901-1980",
    Year: "1992",
    imdbID: "tt0150742",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1NzYxNDk0NV5BMl5BanBnXkFtZTYwMjk5MTM5._V1_SX300.jpg",
    review_average: 3,
    review_count: 4745,
    extra_images: "http://dummyimage.com/246x351.jpg/cc0000/ffffff",
    director: "Jobie Coverdale",
    writer: "Di Stanmer",
    release_date: "12/31/2017",
    movie_length: "1 hour and 5 minutes",
    actor_info: [
      { character_name: "Dominique Moens", actor_name: "Keelby Fernely" },
      {
        character_name: "Bartlet Attenborrow",
        actor_name: "Verge McGaughey"
      },
      { character_name: "Goran Rootham", actor_name: "Randi Schaben" }
    ]
  },
  {
    Title: "The Godfather",
    Year: "2006",
    imdbID: "tt0442674",
    Type: "game",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyNTE4NzMzNF5BMl5BanBnXkFtZTgwMDgzNTY3MDE@._V1_SX300.jpg",
    review_average: 9,
    review_count: 1444,
    extra_images: "http://dummyimage.com/224x261.jpg/dddddd/000000",
    director: "Pip Cutbirth",
    writer: "Louisa Mort",
    release_date: "06/27/2018",
    movie_rating: "R",
    movie_length: "1 hour and 50 minutes",
    actor_info: [
      {
        character_name: "Charline McComas",
        actor_name: "Pollyanna Echallie"
      },
      { character_name: "Tammara Guarin", actor_name: "Almira Eden" },
      { character_name: "Kerr Quadrio", actor_name: "Donal De Bruyne" }
    ]
  },
  {
    Title: "The Last Godfather",
    Year: "2010",
    imdbID: "tt1584131",
    Type: "movie",
    Poster:
      "https://ia.media-imdb.com/images/M/MV5BMTYxNTgzOTQyNV5BMl5BanBnXkFtZTcwMzI1NDk3NA@@._V1_SX300.jpg",
    review_average: 3,
    review_count: 6301,
    extra_images: "http://dummyimage.com/234x400.jpg/dddddd/000000",
    director: "Issiah Hyslop",
    writer: "Keslie Andrault",
    release_date: "02/24/2018",
    movie_length: "1 hour and 5 minutes",
    actor_info: [
      { character_name: "Ransom McKomb", actor_name: "Darb Probert" },
      { character_name: "Marinna Aldrin", actor_name: "Catina Jahan" },
      { character_name: "Angelina Scafe", actor_name: "Lindi Osmint" }
    ]
  },
  {
    Title: "The Godfather II",
    Year: "2009",
    imdbID: "tt1198207",
    Type: "game",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BODY0OTIxNTI1Ml5BMl5BanBnXkFtZTcwNjc0NjkzMg@@._V1_SX300.jpg",
    review_average: 4,
    review_count: 979,
    extra_images: "http://dummyimage.com/370x321.jpg/dddddd/000000",
    director: "Addi Rodda",
    writer: "Yorgos Hoys",
    release_date: "10/08/2017",
    movie_length: "1 hour and 20 minutes",
    actor_info: [
      { character_name: "Jefferey Roebuck", actor_name: "Marv Espinos" },
      { character_name: "Rickie McInulty", actor_name: "Odo O'Connolly" },
      { character_name: "Yoshi Ethington", actor_name: "Bella McRobbie" }
    ]
  },
  {
    Title: "The Godfather Family: A Look Inside",
    Year: "1990",
    imdbID: "tt0101961",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzOTc0NDAyNF5BMl5BanBnXkFtZTcwNjAwMDEzMQ@@._V1_SX300.jpg",
    review_average: 6,
    review_count: 5828,
    extra_images: "http://dummyimage.com/356x399.jpg/dddddd/000000",
    director: "Cherry Walpole",
    writer: "Shanie Adamou",
    release_date: "02/02/2018",
    movie_rating: "PG-13",
    movie_length: "1 hour and 30 minutes",
    actor_info: [
      { character_name: "Wilmette Elies", actor_name: "Eustace Sheraton" },
      { character_name: "Edwina Edmund", actor_name: "Will McCord" },
      { character_name: "Jocelyn Garret", actor_name: "Dalton McIlory" }
    ]
  },
  {
    Title: "The Black Godfather",
    Year: "1974",
    imdbID: "tt0071225",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BY2E0YzhjMWYtZGU0NS00YmFhLThhN2ItNjc3ZTJkMmU5YzE1XkEyXkFqcGdeQXVyMTYxNjkxOQ@@._V1_SX300.jpg",
    review_average: 9,
    review_count: 7628,
    extra_images: "http://dummyimage.com/224x234.jpg/cc0000/ffffff",
    director: "Farrell Fulleylove",
    writer: "Rosabella Brownill",
    release_date: "06/12/2018",
    movie_rating: "R",
    movie_length: "1 hour and 50 minutes",
    actor_info: [
      { character_name: "Tan Smallpiece", actor_name: "Wally Warret" },
      { character_name: "Leonard Novic", actor_name: "Pippy Callam" },
      { character_name: "Stanfield Elcoux", actor_name: "Erick Bockett" }
    ]
  },
  {
    Title: "Ghostbusters",
    Year: "1984",
    imdbID: "tt0087332",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_SX300.jpg",
    review_average: 7,
    review_count: 9914,
    extra_images: "http://dummyimage.com/289x326.jpg/dddddd/000000",
    director: "Edan Gillison",
    writer: "Gustave O'Concannon",
    release_date: "04/02/2018",
    movie_length: "1 hour and 40 minutes",
    actor_info: [
      { character_name: "Mort Layland", actor_name: "Judy Bugge" },
      { character_name: "Ignacius Sandifer", actor_name: "Helene Jardin" },
      { character_name: "Kincaid Toppes", actor_name: "Elvyn Jansema" }
    ]
  },
  {
    Title: "Ghostbusters: Answer the Call",
    Year: "2016",
    imdbID: "tt1289401",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTg3OTM4NTM4NV5BMl5BanBnXkFtZTgwOTI3NDc0OTE@._V1_SX300.jpg",
    review_average: 8,
    review_count: 9900,
    extra_images: "http://dummyimage.com/260x340.jpg/ff4444/ffffff",
    director: "Freddy Bradnock",
    writer: "Benton Gayne",
    release_date: "04/28/2018",
    movie_rating: "R",
    movie_length: "1 hour and 35 minutes",
    actor_info: [
      { character_name: "Alena Paulitschke", actor_name: "Thoma Lambot" },
      { character_name: "Nappy Feehily", actor_name: "Mireille Kohtler" },
      { character_name: "Wilone Landre", actor_name: "Alie Lecky" }
    ]
  },
  {
    Title: "Ghostbusters II",
    Year: "1989",
    imdbID: "tt0097428",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTQ2NTk4MjE5Ml5BMl5BanBnXkFtZTgwODIwNjYxMTE@._V1_SX300.jpg",
    review_average: 2,
    review_count: 9105,
    extra_images: "http://dummyimage.com/290x338.jpg/cc0000/ffffff",
    director: "Nell Deverson",
    writer: "Edita Mcwhinney",
    release_date: "01/26/2018",
    movie_rating: "G",
    movie_length: "1 hour",
    actor_info: [
      { character_name: "Devan Russen", actor_name: "Suzette Belsey" },
      { character_name: "Ashely Riggott", actor_name: "Hollyanne Parrish" },
      { character_name: "Biron Smickle", actor_name: "Fritz Daout" }
    ]
  },
  {
    Title: "The Real Ghostbusters",
    Year: "1986–1991",
    imdbID: "tt0090506",
    Type: "series",
    Poster:
      "https://ia.media-imdb.com/images/M/MV5BM2ZhYzBkMTQtNGI0Zi00YTk0LTg5YWQtMGY1MjZhOWNkNDgxXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    review_average: 3,
    review_count: 5018,
    extra_images: "http://dummyimage.com/325x219.jpg/cc0000/ffffff",
    director: "Pyotr Rahl",
    writer: "Ollie Jayume",
    release_date: "05/19/2018",
    movie_length: "1 hour and 5 minutes",
    actor_info: [
      { character_name: "Fidela Sellack", actor_name: "Gawen Skilbeck" },
      { character_name: "Ediva Payler", actor_name: "Doyle Bromley" },
      {
        character_name: "Margarette Swansbury",
        actor_name: "Deana Vaszoly"
      }
    ]
  },
  {
    Title: "Extreme Ghostbusters",
    Year: "1997",
    imdbID: "tt0121932",
    Type: "series",
    Poster:
      "https://ia.media-imdb.com/images/M/MV5BY2NmNGQ5NTMtODk5Zi00Y2QyLThlODMtNTRjYTY1MDljNDNkXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
    review_average: 8,
    review_count: 2535,
    extra_images: "http://dummyimage.com/375x219.jpg/dddddd/000000",
    director: "Gardy Adamowitz",
    writer: "Janella Blaydon",
    release_date: "05/16/2018",
    movie_rating: "R",
    movie_length: "1 hour and 35 minutes",
    actor_info: [
      { character_name: "Nicola Kiossel", actor_name: "Buddie Debenham" },
      {
        character_name: "Anatol Chatterton",
        actor_name: "Bartholemy Goldis"
      },
      { character_name: "Niall Batty", actor_name: "Brnaba Duplan" }
    ]
  },
  {
    Title: "Ghostbusters",
    Year: "1986–1987",
    imdbID: "tt0127569",
    Type: "series",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZDg1OWFlZTItZjhmOS00MDAzLWI4MTEtMTVlMmJmOTMxNWY1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    review_average: 1,
    review_count: 3047,
    extra_images: "http://dummyimage.com/225x260.jpg/dddddd/000000",
    director: "Jackson Calbreath",
    writer: "Christal Oliffe",
    release_date: "04/10/2018",
    movie_rating: "G",
    movie_length: "55 minutes",
    actor_info: [
      { character_name: "Ivie Woollin", actor_name: "Jyoti Creber" },
      { character_name: "Florentia Di Baudi", actor_name: "Tony Loveman" },
      { character_name: "Rainer Jeays", actor_name: "Philipa Friedenbach" }
    ]
  },
  {
    Title: "Ghostbusters",
    Year: "2009",
    imdbID: "tt1142978",
    Type: "game",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNDgzOTg3MjU3NV5BMl5BanBnXkFtZTgwNTc2Mzg4MDE@._V1_SX300.jpg",
    review_average: 1,
    review_count: 6577,
    extra_images: "http://dummyimage.com/362x395.jpg/5fa2dd/ffffff",
    director: "Francene Vernham",
    writer: "Orv Tripney",
    release_date: "03/29/2018",
    movie_rating: "G",
    movie_length: "55 minutes",
    actor_info: [
      {
        character_name: "Farris Hayhurst",
        actor_name: "Kellyann Petschel"
      },
      { character_name: "Junia Juares", actor_name: "Rollins McMillan" },
      { character_name: "Cleon MacAlister", actor_name: "Amity Hiom" }
    ]
  },
  {
    Title: "Return of the Ghostbusters",
    Year: "2007",
    imdbID: "tt1230164",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTU3NDEyNDI3Ml5BMl5BanBnXkFtZTcwNjEzOTE3MQ@@._V1_SX300.jpg",
    review_average: 2,
    review_count: 6089,
    extra_images: "http://dummyimage.com/324x283.jpg/5fa2dd/ffffff",
    director: "Rosaleen Creswell",
    writer: "Lindsy Sollas",
    release_date: "04/04/2018",
    movie_rating: "G",
    movie_length: "1 hour",
    actor_info: [
      { character_name: "Layney Hebble", actor_name: "Demetre Giovani" },
      {
        character_name: "Arnold Cleaton",
        actor_name: "Violette Adamovitch"
      },
      { character_name: "Mathilde Ren", actor_name: "Orville Colston" }
    ]
  },
  {
    Title: "Freddy vs Ghostbusters",
    Year: "2004",
    imdbID: "tt0439576",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc3OTY5MTE0NV5BMl5BanBnXkFtZTcwNTc5OTcyMQ@@._V1_SX300.jpg",
    review_average: 2,
    review_count: 1408,
    extra_images: "http://dummyimage.com/390x295.jpg/ff4444/ffffff",
    director: "Emma Cowser",
    writer: "Oralle Vizor",
    release_date: "06/02/2018",
    movie_rating: "G",
    movie_length: "1 hour",
    actor_info: [
      { character_name: "Georgi Nottle", actor_name: "Curry Girodias" },
      { character_name: "Keane Jumonet", actor_name: "Dara Corringham" },
      { character_name: "Rochelle Staves", actor_name: "Moishe Duffus" }
    ]
  },
  {
    Title: "Slimer! And the Real Ghostbusters",
    Year: "1988–1990",
    imdbID: "tt0124257",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDcxNzI4NjQtNDYxOC00OWEzLWJmMGYtZDZmNDY0MzMwMGQ2XkEyXkFqcGdeQXVyNjc5MjkyNDQ@._V1_SX300.jpg",
    review_average: 9,
    review_count: 3930,
    extra_images: "http://dummyimage.com/225x358.jpg/cc0000/ffffff",
    director: "Donni Coey",
    writer: "Carissa Nottram",
    release_date: "12/02/2017",
    movie_rating: "R",
    movie_length: "1 hour and 50 minutes",
    actor_info: [
      { character_name: "Christa MacShirie", actor_name: "Archy Ebsworth" },
      { character_name: "Timotheus Sket", actor_name: "Will Spratling" },
      { character_name: "Reamonn Paxforde", actor_name: "Zia Burgen" }
    ]
  },
  {
    Title: "A Clockwork Orange",
    Year: "1971",
    imdbID: "tt0066921",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SX300.jpg",
    review_average: 7,
    review_count: 9395,
    extra_images: "http://dummyimage.com/271x312.jpg/dddddd/000000",
    director: "Katerina Dowdeswell",
    writer: "Manuel Steanyng",
    release_date: "01/10/2018",
    movie_length: "1 hour and 40 minutes",
    actor_info: [
      { character_name: "Callean Ashall", actor_name: "Leisha Sine" },
      {
        character_name: "Vassili Champneys",
        actor_name: "Modestine Kenion"
      },
      { character_name: "Tadeo Aburrow", actor_name: "Katina Parlett" }
    ]
  },
  {
    Title: "Orange Is the New Black",
    Year: "2013–",
    imdbID: "tt2372162",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA3MTE5ODM3M15BMl5BanBnXkFtZTgwNTIyMjQ5NTM@._V1_SX300.jpg",
    review_average: 3,
    review_count: 1090,
    extra_images: "http://dummyimage.com/261x272.jpg/cc0000/ffffff",
    director: "Merline Windle",
    writer: "Granny Manach",
    release_date: "12/21/2017",
    movie_length: "1 hour and 5 minutes",
    actor_info: [
      { character_name: "Ailina Doogan", actor_name: "Kissiah Davey" },
      { character_name: "Kayle Songest", actor_name: "Teodor Frudd" },
      { character_name: "Farly Cumberland", actor_name: "Earvin Loutheane" }
    ]
  },
  {
    Title: "Orange County",
    Year: "2002",
    imdbID: "tt0273923",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZGIzYjJmNzQtNDc5YS00ZWJhLWI3NzItODgzNWRlNmQ0NmRlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    review_average: 3,
    review_count: 8284,
    extra_images: "http://dummyimage.com/320x231.jpg/cc0000/ffffff",
    director: "Dena Dzenisenka",
    writer: "Teriann Marcone",
    release_date: "11/17/2017",
    movie_length: "1 hour and 5 minutes",
    actor_info: [
      { character_name: "Devlin Sprowson", actor_name: "Justen Rosenbush" },
      { character_name: "Tanitansy Cahan", actor_name: "Wenda Libbis" },
      { character_name: "Rosaline Crisp", actor_name: "Max Keling" }
    ]
  },
  {
    Title: "Soldier of Orange",
    Year: "1977",
    imdbID: "tt0076734",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BOTUzYjI1NWEtZjkxZC00NjQ0LWEwNjAtZjViOWQ0ZjA0ZDBhXkEyXkFqcGdeQXVyMTE2OTg4Mjg@._V1_SX300.jpg",
    review_average: 6,
    review_count: 3859,
    extra_images: "http://dummyimage.com/374x295.jpg/cc0000/ffffff",
    director: "Isobel Twizell",
    writer: "Kellie Normanville",
    release_date: "11/18/2017",
    movie_rating: "PG-13",
    movie_length: "1 hour and 30 minutes",
    actor_info: [
      {
        character_name: "Reginald Ambresin",
        actor_name: "Cassandry Sorrel"
      },
      { character_name: "L;urette Simmonett", actor_name: "Carly Chasles" },
      { character_name: "Ring Eck", actor_name: "Seka Morrill" }
    ]
  },
  {
    Title: "Laguna Beach: The Real Orange County",
    Year: "2004–2006",
    imdbID: "tt0426738",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTgyNTM4MzM3NV5BMl5BanBnXkFtZTcwNjMyOTIzMQ@@._V1_SX300.jpg",
    review_average: 5,
    review_count: 3285,
    extra_images: "http://dummyimage.com/334x359.jpg/dddddd/000000",
    director: "Mirabel ducarme",
    writer: "Vite Drinkale",
    release_date: "06/10/2018",
    movie_length: "1 hour and 25 minutes",
    actor_info: [
      { character_name: "Gannon Salatino", actor_name: "Bat Hudleston" },
      {
        character_name: "Jonathon Mantione",
        actor_name: "Brittaney Wenman"
      },
      { character_name: "Bevon Trangmar", actor_name: "Cort Poytheras" }
    ]
  },
  {
    Title: "The Real Housewives of Orange County",
    Year: "2006–2018",
    imdbID: "tt0497079",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNTQyMDM3M15BMl5BanBnXkFtZTgwNDQxMzQ4NTM@._V1_SX300.jpg",
    review_average: 2,
    review_count: 2679,
    extra_images: "http://dummyimage.com/349x247.jpg/5fa2dd/ffffff",
    director: "Jeane Goneau",
    writer: "Elizabet Ties",
    release_date: "04/21/2018",
    movie_rating: "G",
    movie_length: "1 hour",
    actor_info: [
      { character_name: "Hermine Dymick", actor_name: "Bryana Breagan" },
      { character_name: "Archaimbaud Ledford", actor_name: "Myrtle Deboo" },
      { character_name: "Maurizia Thredder", actor_name: "Theodor Saville" }
    ]
  },
  {
    Title: "The High Fructose Adventures of Annoying Orange",
    Year: "2012–2014",
    imdbID: "tt2114184",
    Type: "series",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjU4MDk1MjEyOF5BMl5BanBnXkFtZTcwODY5MTYwOA@@._V1_SX300.jpg",
    review_average: 9,
    review_count: 3910,
    extra_images: "http://dummyimage.com/239x243.jpg/ff4444/ffffff",
    director: "Raynell Loughnan",
    writer: "Kamilah Hulland",
    release_date: "08/08/2018",
    movie_rating: "R",
    movie_length: "1 hour and 50 minutes",
    actor_info: [
      { character_name: "Ellyn Mackelworth", actor_name: "Roma Clunan" },
      { character_name: "Link Clymo", actor_name: "Carleton Sheldrick" },
      { character_name: "Julietta Groger", actor_name: "Truda Abyss" }
    ]
  },
  {
    Title: "Orange",
    Year: "2010",
    imdbID: "tt1533748",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BM2ZkZGIwZDAtNGU1ZS00NTlkLThjYjYtMjU5MzQzNDQyMTBmXkEyXkFqcGdeQXVyODA2ODM3NDQ@._V1_SX300.jpg",
    review_average: 4,
    review_count: 9161,
    extra_images: "http://dummyimage.com/297x333.jpg/ff4444/ffffff",
    director: "Nora Brugsma",
    writer: "Nerte Challicum",
    release_date: "02/13/2018",
    movie_length: "1 hour and 20 minutes",
    actor_info: [
      { character_name: "Halimeda Grinstead", actor_name: "Lukas Boake" },
      { character_name: "Genna Muslim", actor_name: "Evelyn Manjin" },
      {
        character_name: "Tiphani Mulholland",
        actor_name: "Guendolen Dmiterko"
      }
    ]
  },
  {
    Title: "The Annoying Orange",
    Year: "2009–",
    imdbID: "tt1715368",
    Type: "series",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyMTAyMTMwMV5BMl5BanBnXkFtZTgwOTU4MDA3NzE@._V1_SX300.jpg",
    review_average: 9,
    review_count: 7451,
    extra_images: "http://dummyimage.com/332x340.jpg/ff4444/ffffff",
    director: "Obadias Granham",
    writer: "Malvina Cowin",
    release_date: "07/05/2018",
    movie_rating: "R",
    movie_length: "1 hour and 50 minutes",
    actor_info: [
      { character_name: "Birch Siehard", actor_name: "Sunshine Chinnery" },
      { character_name: "Heddi Prestedge", actor_name: "Charlot De Few" },
      { character_name: "Zoe Krauss", actor_name: "Selle Hasser" }
    ]
  },
  {
    Title: "In Orange",
    Year: "2004",
    imdbID: "tt0382095",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDI1MDg4MV5BMl5BanBnXkFtZTcwNzA4MzIzMQ@@._V1_SX300.jpg",
    review_average: 10,
    review_count: 1387,
    extra_images: "http://dummyimage.com/373x398.jpg/ff4444/ffffff",
    director: "Chadd Brinklow",
    writer: "Aurlie Skeat",
    release_date: "09/04/2018",
    movie_rating: "R",
    movie_length: "2 hour and 5 minutes",
    actor_info: [
      { character_name: "Analiese Edmonds", actor_name: "Cicily Smeuin" },
      { character_name: "Berti Emerine", actor_name: "Pyotr Arnson" },
      { character_name: "Cori Bescoby", actor_name: "Saunders Callington" }
    ]
  },
  {
    Title: "The Shining",
    Year: "1980",
    imdbID: "tt0081505",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    review_average: 8,
    review_count: 2019,
    extra_images: "http://dummyimage.com/200x313.jpg/5fa2dd/ffffff",
    director: "Flemming Hawkins",
    writer: "Cele Gauson",
    release_date: "05/06/2018",
    movie_rating: "R",
    movie_length: "1 hour and 35 minutes",
    actor_info: [
      { character_name: "Moyna Cavolini", actor_name: "Rene Iacobetto" },
      { character_name: "Sherye Ockendon", actor_name: "Allsun Bright" },
      { character_name: "Joni Chedzoy", actor_name: "Davina Bastard" }
    ]
  },
  {
    Title: "The Shining",
    Year: "1997",
    imdbID: "tt0118460",
    Type: "series",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZWQyYmM1ZjAtOGYyMi00NzM3LWI4YjgtYTQwNDQ5MzVmNmE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    review_average: 5,
    review_count: 3514,
    extra_images: "http://dummyimage.com/314x244.jpg/cc0000/ffffff",
    director: "Franklin Dunrige",
    writer: "Rozalin Folonin",
    release_date: "03/15/2018",
    movie_length: "1 hour and 25 minutes",
    actor_info: [
      { character_name: "Say Fowler", actor_name: "Carena Pitney" },
      { character_name: "Anetta Monaghan", actor_name: "Drew Woolgar" },
      { character_name: "Federica Oxshott", actor_name: "Far Colls" },
      { character_name: "Marylynne McGaughey", actor_name: "Elke Bruton" },
      { character_name: "Marylynne McGaughey", actor_name: "Elke Bruton" }
    ]
  },
  {
    Title: "Shining Through",
    Year: "1992",
    imdbID: "tt0105391",
    Type: "movie",
    Poster:
      "https://ia.media-imdb.com/images/M/MV5BMTg3MDAwMjU3NV5BMl5BanBnXkFtZTcwNjI0MzcyMQ@@._V1_SX300.jpg",
    review_average: 9,
    review_count: 4598,
    extra_images: "http://dummyimage.com/281x281.jpg/dddddd/000000",
    director: "Janela Lovat",
    writer: "Elysia Mixer",
    release_date: "09/30/2017",
    movie_rating: "R",
    movie_length: "1 hour and 50 minutes",
    actor_info: [
      { character_name: "Bobbie Haseley", actor_name: "Jenica McGinnis" },
      { character_name: "Salvador Glassopp", actor_name: "Edsel Hacun" },
      { character_name: "Mara Bartak", actor_name: "Jodie Dashper" },
      { character_name: "Mitch Paffley", actor_name: "Page Fierman" },
      { character_name: "Mitch Paffley", actor_name: "Page Fierman" }
    ]
  },
  {
    Title: "Making 'The Shining'",
    Year: "1980",
    imdbID: "tt0203667",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTIyNzNhNTktMDRlOS00ZGE3LThhOTktMDg3YWRkY2EyYTMyXkEyXkFqcGdeQXVyNDk0MDg4NDk@._V1_SX300.jpg",
    review_average: 7,
    review_count: 3724,
    extra_images: "http://dummyimage.com/286x365.jpg/dddddd/000000",
    director: "Paolina Ballinger",
    writer: "Bailey Pawels",
    release_date: "06/29/2018",
    movie_length: "1 hour and 40 minutes",
    actor_info: [
      { character_name: "Aura Caveney", actor_name: "Jazmin Estoile" },
      { character_name: "Arturo Baldack", actor_name: "Leda Heugel" },
      {
        character_name: "Annabella Tolfrey",
        actor_name: "Colleen Adriaan"
      },
      { character_name: "Hope Godsal", actor_name: "Ula Chanter" },
      { character_name: "Hope Godsal", actor_name: "Ula Chanter" }
    ]
  },
  {
    Title: "A Bright Shining Lie",
    Year: "1998",
    imdbID: "tt0126220",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMTE5MTk4Ml5BMl5BanBnXkFtZTcwMTI0MzAyMQ@@._V1_SX300.jpg",
    review_average: 3,
    review_count: 3407,
    extra_images: "http://dummyimage.com/311x251.jpg/ff4444/ffffff",
    director: "Kyle McGilben",
    writer: "Jacki Wyleman",
    release_date: "06/09/2018",
    movie_length: "1 hour and 5 minutes",
    actor_info: [
      { character_name: "Nealson Boulton", actor_name: "Mandel Dalston" },
      { character_name: "Penny Brech", actor_name: "Dru Byford" },
      {
        character_name: "Siegfried Hewkin",
        actor_name: "Martino Pogosian"
      },
      { character_name: "Noah Aymeric", actor_name: "Bertina Evamy" },
      { character_name: "Noah Aymeric", actor_name: "Bertina Evamy" }
    ]
  },
  {
    Title: "The Shining Hour",
    Year: "1938",
    imdbID: "tt0030743",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BOTU3OWJkMGUtMTU0Ny00NDY4LWE4NzAtNjVhYjg5MjFlZGIxXkEyXkFqcGdeQXVyNjc0MzMzNjA@._V1_SX300.jpg",
    review_average: 7,
    review_count: 6286,
    extra_images: "http://dummyimage.com/252x349.jpg/dddddd/000000",
    director: "Liana Devanney",
    writer: "Bunni Sirman",
    release_date: "08/21/2018",
    movie_length: "1 hour and 40 minutes",
    actor_info: [
      { character_name: "Vikki Rival", actor_name: "Mada Gethyn" },
      {
        character_name: "Pascale Aberdeen",
        actor_name: "Guthrie Rollings"
      },
      { character_name: "Delly Learmont", actor_name: "Cherin Hardson" },
      { character_name: "Madel Heape", actor_name: "Evy Kinder" },
      { character_name: "Madel Heape", actor_name: "Evy Kinder" }
    ]
  },
  {
    Title: "Shining Time Station",
    Year: "1989–1993",
    imdbID: "tt0098910",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGFkMzU2MzAtYjA5Yi00ODFhLWFiZGEtNmY4ZmVkOGY5YzE1XkEyXkFqcGdeQXVyNjU5MzMxNzY@._V1_SX300.jpg",
    review_average: 7,
    review_count: 2819,
    extra_images: "http://dummyimage.com/204x276.jpg/5fa2dd/ffffff",
    director: "Erich Wing",
    writer: "Rodrigo Matheson",
    release_date: "10/18/2017",
    movie_length: "1 hour and 40 minutes",
    actor_info: [
      {
        character_name: "Margery Ludlow",
        actor_name: "Constantin Enstone"
      },
      { character_name: "Noelle Barbrook", actor_name: "Kris McKew" },
      { character_name: "Robers Dallan", actor_name: "Lee McCardle" },
      { character_name: "Stanton Hamelyn", actor_name: "Diana Cockson" },
      { character_name: "Stanton Hamelyn", actor_name: "Diana Cockson" }
    ]
  },
  {
    Title: "Shining Inheritance",
    Year: "2009–",
    imdbID: "tt2283335",
    Type: "series",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk1NzcyMTMwM15BMl5BanBnXkFtZTgwNjY3NTAxMzE@._V1_SX300.jpg",
    review_average: 6,
    review_count: 8651,
    extra_images: "http://dummyimage.com/316x369.jpg/cc0000/ffffff",
    director: "Adriaens D'Andrea",
    writer: "Madlin Weymouth",
    release_date: "04/30/2018",
    movie_rating: "PG-13",
    movie_length: "1 hour and 30 minutes",
    actor_info: [
      { character_name: "Kerwin Uvedale", actor_name: "Blayne Ellick" },
      {
        character_name: "Stella Anglin",
        actor_name: "Milicent Kolodziejski"
      },
      { character_name: "Wallis Abbati", actor_name: "Christye Blackboro" },
      {
        character_name: "Hurleigh Spriddle",
        actor_name: "Ludovika Trenaman"
      },
      {
        character_name: "Hurleigh Spriddle",
        actor_name: "Ludovika Trenaman"
      }
    ]
  },
  {
    Title: "Shining Victory",
    Year: "1941",
    imdbID: "tt0034184",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzJiNDVhYjAtNzBlMC00ZGE0LTkyMGMtMGFmZjE3NzA4MzVhXkEyXkFqcGdeQXVyNTY4NjI2OTA@._V1_SX300.jpg",
    review_average: 9,
    review_count: 721,
    extra_images: "http://dummyimage.com/251x225.jpg/cc0000/ffffff",
    director: "Fedora Quixley",
    writer: "Marlo Vanyutin",
    release_date: "04/14/2018",
    movie_rating: "R",
    movie_length: "1 hour and 50 minutes",
    actor_info: [
      { character_name: "Kore Casterou", actor_name: "Joey Sulman" },
      { character_name: "Estrella Clemence", actor_name: "Adriaens Kuhle" },
      { character_name: "Kerk Rodenburg", actor_name: "Rivalee Swarbrigg" },
      { character_name: "Katharine Hulkes", actor_name: "Darb Walworche" },
      { character_name: "Katharine Hulkes", actor_name: "Darb Walworche" }
    ]
  },
  {
    Title: "One Bright Shining Moment",
    Year: "2005",
    imdbID: "tt0468528",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM3Mzc4NzkwNF5BMl5BanBnXkFtZTcwOTQxNzIzMQ@@._V1_SX300.jpg",
    review_average: 3,
    review_count: 5584,
    extra_images: "http://dummyimage.com/213x372.jpg/dddddd/000000",
    director: "Jeanna Wixey",
    writer: "Catherina Spurman",
    release_date: "05/14/2018",
    movie_length: "1 hour and 5 minutes",
    actor_info: [
      { character_name: "Alexandr Yurasov", actor_name: "Benoite Kalb" },
      { character_name: "Desiri Wittering", actor_name: "Keary Coleson" },
      { character_name: "Ivory Firby", actor_name: "Lenka Le Floch" },
      { character_name: "Allyce Fawley", actor_name: "Ezra Peddie" },
      { character_name: "Allyce Fawley", actor_name: "Ezra Peddie" }
    ]
  },
  {
    Title: "Silicon Valley",
    Year: "2014–",
    imdbID: "tt2575988",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTAxNTEyODE5MTNeQTJeQWpwZ15BbWU4MDE3MjM3ODQz._V1_SX300.jpg",
    review_average: 2,
    review_count: 4567,
    extra_images: "http://dummyimage.com/276x334.jpg/ff4444/ffffff",
    director: "Alberik Balsdone",
    writer: "Lucas Rotte",
    release_date: "05/27/2018",
    movie_rating: "G",
    movie_length: "1 hour",
    actor_info: [
      { character_name: "Rockey Armiger", actor_name: "Cahra Abad" },
      { character_name: "Cyndy Gniewosz", actor_name: "Salvatore McNevin" },
      { character_name: "Dov Dorbin", actor_name: "Kai Guillet" },
      { character_name: "Olenolin Reely", actor_name: "Bellina Pagin" },
      { character_name: "Olenolin Reely", actor_name: "Bellina Pagin" }
    ]
  },
  {
    Title: "Pirates of Silicon Valley",
    Year: "1999",
    imdbID: "tt0168122",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDc2NTE0NzE4N15BMl5BanBnXkFtZTgwMDQ5MzgwMzE@._V1_SX300.jpg",
    review_average: 9,
    review_count: 1010,
    extra_images: "http://dummyimage.com/259x283.jpg/ff4444/ffffff",
    director: "Hi Ridgewell",
    writer: "Cleve Levensky",
    release_date: "11/18/2017",
    movie_rating: "R",
    movie_length: "1 hour and 50 minutes",
    actor_info: [
      {
        character_name: "Jeanelle Northedge",
        actor_name: "Adrianna Spata"
      },
      { character_name: "Nicko Cruise", actor_name: "Vinny Bayly" },
      { character_name: "Darren Pither", actor_name: "Cherice Rampling" },
      {
        character_name: "Demetre Grishanin",
        actor_name: "Raymund Beverley"
      },
      {
        character_name: "Demetre Grishanin",
        actor_name: "Raymund Beverley"
      }
    ]
  },
  {
    Title: "Crying... Silicon Tears",
    Year: "2001",
    imdbID: "tt0298954",
    Type: "movie",
    Poster:
      "https://ia.media-imdb.com/images/M/MV5BYmY5OWVhYzgtMjUzNS00YWUyLWJhNzYtMmFiYzVmMWQ1MjJhXkEyXkFqcGdeQXVyNDE3MDcxNjg@._V1_SX300.jpg",
    review_average: 2,
    review_count: 3131,
    extra_images: "http://dummyimage.com/293x269.jpg/cc0000/ffffff",
    director: "Kellby Glazyer",
    writer: "Allys Matussov",
    release_date: "05/27/2018",
    movie_rating: "G",
    movie_length: "1 hour",
    actor_info: [
      { character_name: "Katheryn Himpson", actor_name: "Stormie Studde" },
      { character_name: "Isidro Munnion", actor_name: "Coreen Eglese" },
      { character_name: "Moina Antognoni", actor_name: "Dawn Keward" },
      { character_name: "Ernest Ferry", actor_name: "Kettie Tomaino" },
      { character_name: "Ernest Ferry", actor_name: "Kettie Tomaino" }
    ]
  },
  {
    Title: "Silicon Cowboys",
    Year: "2016",
    imdbID: "tt4938484",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNWRjNmRiOTktZTg3YS00ZmNiLTkxOTgtNWQ1MDFkYmVmYjM3XkEyXkFqcGdeQXVyMjEyMjc0NjA@._V1_SX300.jpg",
    review_average: 9,
    review_count: 3912,
    extra_images: "http://dummyimage.com/358x320.jpg/cc0000/ffffff",
    director: "Sancho Ticksall",
    writer: "Marinna Puttock",
    release_date: "06/25/2018",
    movie_rating: "R",
    movie_length: "1 hour and 50 minutes",
    actor_info: [
      { character_name: "Bradney Tofts", actor_name: "Darice Spall" },
      { character_name: "Rawley Devenny", actor_name: "Darcey Jenks" },
      { character_name: "Lucio Delos", actor_name: "Iris Adshead" },
      {
        character_name: "Willy Potapczuk",
        actor_name: "Benedicto Mathieu"
      },
      { character_name: "Willy Potapczuk", actor_name: "Benedicto Mathieu" }
    ]
  },
  {
    Title: "Silicon Towers",
    Year: "1999",
    imdbID: "tt0186547",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI4NTE0MDY2NF5BMl5BanBnXkFtZTcwODcyNDAzMQ@@._V1_SX300.jpg",
    review_average: 6,
    review_count: 4033,
    extra_images: "http://dummyimage.com/341x303.jpg/5fa2dd/ffffff",
    director: "Teddie Pointon",
    writer: "Vivianne Preece",
    release_date: "08/21/2018",
    movie_rating: "PG-13",
    movie_length: "1 hour and 30 minutes",
    actor_info: [
      { character_name: "Toddy Lis", actor_name: "Jodee Dubarry" },
      { character_name: "Nolly De Brett", actor_name: "Al Meers" },
      { character_name: "Kitty Greatrakes", actor_name: "Fayette Hagard" },
      { character_name: "Nevil Kilgrew", actor_name: "Florenza Trott" },
      { character_name: "Nevil Kilgrew", actor_name: "Florenza Trott" }
    ]
  },
  {
    Title: "Bill Maher: CrazyStupidPolitics - Live from Silicon Valley",
    Year: "2012",
    imdbID: "tt2266679",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZjYxZTc0MTQtMTJiYi00MmZiLWJlN2UtMDQwZjkwYzJiMmJjL2ltYWdlXkEyXkFqcGdeQXVyMTM3NzQ5NzQ@._V1_SX300.jpg",
    review_average: 9,
    review_count: 6422,
    extra_images: "http://dummyimage.com/295x344.jpg/dddddd/000000",
    director: "Nikkie Ferminger",
    writer: "Cati Loisi",
    release_date: "08/02/2018",
    movie_rating: "R",
    movie_length: "1 hour and 50 minutes",
    actor_info: [
      { character_name: "Mahalia Yurin", actor_name: "Anthea Theis" },
      { character_name: "Reginald Rengger", actor_name: "Leoine Champ" },
      {
        character_name: "Carmelia Phillot",
        actor_name: "Philippine Klimt"
      },
      { character_name: "Aluino Cholonin", actor_name: "Ancell Bradder" },
      { character_name: "Aluino Cholonin", actor_name: "Ancell Bradder" }
    ]
  },
  {
    Title: "Start-Ups: Silicon Valley",
    Year: "2012–",
    imdbID: "tt2343117",
    Type: "series",
    Poster:
      "https://ia.media-imdb.com/images/M/MV5BNDQ1MTY3NTE2OF5BMl5BanBnXkFtZTgwNzI1NDAxMzE@._V1_SX300.jpg",
    review_average: 4,
    review_count: 8677,
    extra_images: "http://dummyimage.com/368x288.jpg/ff4444/ffffff",
    director: "Felice Banthorpe",
    writer: "Gae Giaomozzo",
    release_date: "02/25/2018",
    movie_length: "1 hour and 20 minutes",
    actor_info: [
      { character_name: "Edvard McCarter", actor_name: "Tiebout Benit" },
      { character_name: "Roscoe Spancock", actor_name: "Stella Shephard" },
      { character_name: "Merna Crenshaw", actor_name: "Bord Somerled" },
      {
        character_name: "Giulietta Ricardou",
        actor_name: "Brunhilde Cricket"
      },
      {
        character_name: "Giulietta Ricardou",
        actor_name: "Brunhilde Cricket"
      }
    ]
  },
  {
    Title: "Silicon Valley: The Untold Story",
    Year: "2018",
    imdbID: "tt8128854",
    Type: "series",
    Poster: "N/A",
    review_average: 9,
    review_count: 9309,
    extra_images: "http://dummyimage.com/328x294.jpg/5fa2dd/ffffff",
    director: "Boote Zoanetti",
    writer: "Becky Maddrell",
    release_date: "01/25/2018",
    movie_rating: "R",
    movie_length: "1 hour and 50 minutes",
    actor_info: [
      { character_name: "Corrie Nellis", actor_name: "Brier Faire" },
      { character_name: "Vale Shower", actor_name: "Renard Grayshan" },
      { character_name: "Thelma Hartzog", actor_name: "Sile Shorie" },
      {
        character_name: "Wendell Frankham",
        actor_name: "Rosmunda Franklin"
      },
      {
        character_name: "Wendell Frankham",
        actor_name: "Rosmunda Franklin"
      }
    ]
  },
  {
    Title: "Secrets of Silicon Valley",
    Year: "2017",
    imdbID: "tt7331254",
    Type: "series",
    Poster: "N/A",
    review_average: 3,
    review_count: 5289,
    extra_images: "http://dummyimage.com/282x254.jpg/dddddd/000000",
    director: "Jason Gownge",
    writer: "Ogdon Gadeaux",
    release_date: "04/01/2018",
    movie_length: "1 hour and 5 minutes",
    actor_info: [
      { character_name: "Delaney Wiles", actor_name: "Hamid Blewmen" },
      { character_name: "Giavani Kroll", actor_name: "Darlene Slipper" },
      { character_name: "Jose Stockley", actor_name: "Lennard Frowde" },
      { character_name: "Rafaellle Greatrakes", actor_name: "Rip Cawdron" },
      { character_name: "Rafaellle Greatrakes", actor_name: "Rip Cawdron" }
    ]
  },
  {
    Title: "Doctor Silicon",
    Year: "2008",
    imdbID: "tt1672618",
    Type: "movie",
    Poster: "N/A",
    review_average: 9,
    review_count: 6011,
    extra_images: "http://dummyimage.com/380x227.jpg/5fa2dd/ffffff",
    director: "Giralda Blethin",
    writer: "Virgil Runchman",
    release_date: "05/31/2018",
    movie_rating: "R",
    movie_length: "1 hour and 50 minutes",
    actor_info: [
      { character_name: "Julissa Fones", actor_name: "Janenna Semark" },
      { character_name: "Antone Yellop", actor_name: "Tanya Full" },
      { character_name: "Melony Tyas", actor_name: "Norri Trippett" },
      { character_name: "Stevy McBrady", actor_name: "Briant Hellyer" },
      { character_name: "Stevy McBrady", actor_name: "Briant Hellyer" }
    ]
  },
  {
    Title: "World War Z",
    Year: "2013",
    imdbID: "tt0816711",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    review_average: 3,
    review_count: 3673,
    extra_images: "http://dummyimage.com/331x392.jpg/5fa2dd/ffffff",
    director: "Ethelred Duffitt",
    writer: "Marjie Piggott",
    release_date: "12/28/2017",
    movie_length: "1 hour and 5 minutes",
    actor_info: [
      { character_name: "Maude Nilges", actor_name: "Ivie Harner" },
      { character_name: "Nance Avann", actor_name: "Rianon Torrecilla" },
      {
        character_name: "Hartley Matiasek",
        actor_name: "Maximilien Winscom"
      },
      {
        character_name: "Timmie Eadon",
        actor_name: "Christiane MacFarlan"
      },
      { character_name: "Timmie Eadon", actor_name: "Christiane MacFarlan" }
    ]
  },
  {
    Title: "Captain America: Civil War",
    Year: "2016",
    imdbID: "tt3498820",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg",
    review_average: 6,
    review_count: 4639,
    extra_images: "http://dummyimage.com/252x308.jpg/cc0000/ffffff",
    director: "Corrie Begg",
    writer: "Gloria Peile",
    release_date: "04/05/2018",
    movie_rating: "PG-13",
    movie_length: "1 hour and 30 minutes",
    actor_info: [
      { character_name: "Siffre Scown", actor_name: "Lindsy Greensmith" },
      { character_name: "Alasteir Fairchild", actor_name: "Sylas Ramel" },
      { character_name: "Dorie Benza", actor_name: "Morlee Donnellan" },
      { character_name: "Oby Mangeney", actor_name: "Dorette Philips" },
      { character_name: "Oby Mangeney", actor_name: "Dorette Philips" }
    ]
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    review_average: 10,
    review_count: 6270,
    extra_images: "http://dummyimage.com/323x216.jpg/ff4444/ffffff",
    director: "Astra Dupoy",
    writer: "Aubine Cawkwell",
    release_date: "05/11/2018",
    movie_rating: "R",
    movie_length: "2 hour and 5 minutes",
    actor_info: [
      { character_name: "Ali Maxwell", actor_name: "Emera Stolz" },
      { character_name: "Ives Mileham", actor_name: "Gerek Seeler" },
      { character_name: "Lind Kwietak", actor_name: "Eugene Bachmann" },
      { character_name: "Farley Korbmaker", actor_name: "Kiel Lesslie" },
      { character_name: "Farley Korbmaker", actor_name: "Kiel Lesslie" }
    ]
  },
  {
    Title: "War of the Worlds",
    Year: "2005",
    imdbID: "tt0407304",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg",
    review_average: 1,
    review_count: 24,
    extra_images: "http://dummyimage.com/373x376.jpg/5fa2dd/ffffff",
    director: "Charisse Janos",
    writer: "Lissa Newbegin",
    release_date: "03/25/2018",
    movie_rating: "G",
    movie_length: "55 minutes",
    actor_info: [
      { character_name: "Kenon Menichillo", actor_name: "Giusto Thain" },
      { character_name: "Helenka Noore", actor_name: "Boonie Hestrop" },
      { character_name: "Jareb Pigford", actor_name: "Harris Roffe" },
      { character_name: "Madeline Ramelot", actor_name: "Torey Oloman" },
      { character_name: "Madeline Ramelot", actor_name: "Torey Oloman" }
    ]
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    review_average: 6,
    review_count: 8166,
    extra_images: "http://dummyimage.com/332x273.jpg/5fa2dd/ffffff",
    director: "Helaine Buney",
    writer: "Annora Blazhevich",
    release_date: "11/08/2017",
    movie_rating: "PG-13",
    movie_length: "1 hour and 30 minutes",
    actor_info: [
      { character_name: "Dill Zoellner", actor_name: "Brana Kraut" },
      { character_name: "Guinevere Ioannidis", actor_name: "Flo Ciotti" },
      { character_name: "Darrel Simonel", actor_name: "Rickie Kield" },
      { character_name: "Orran Hagley", actor_name: "Leeland McGarva" },
      { character_name: "Orran Hagley", actor_name: "Leeland McGarva" }
    ]
  },
  {
    Title: "Spartacus: War of the Damned",
    Year: "2010–2013",
    imdbID: "tt1442449",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTA2NDU2MzM5Nl5BMl5BanBnXkFtZTcwMTk3Njg3OA@@._V1_SX300.jpg",
    review_average: 10,
    review_count: 4387,
    extra_images: "http://dummyimage.com/304x380.jpg/5fa2dd/ffffff",
    director: "Flossie Bernardy",
    writer: "Averyl Bollini",
    release_date: "01/05/2018",
    movie_rating: "R",
    movie_length: "2 hour and 5 minutes",
    actor_info: [
      {
        character_name: "Dennison Trattles",
        actor_name: "Concettina Trow"
      },
      { character_name: "Annamarie Barensky", actor_name: "Mada Standish" },
      { character_name: "Farrah Hamlett", actor_name: "Hilliard Combes" },
      { character_name: "Baron Don", actor_name: "Walden Doogue" },
      { character_name: "Baron Don", actor_name: "Walden Doogue" }
    ]
  },
  {
    Title: "War for the Planet of the Apes",
    Year: "2017",
    imdbID: "tt3450958",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDNmYTQzMDEtMmY0MS00OTNjLTk4MjItMDZhMzkzOGI3MzA0XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_SX300.jpg",
    review_average: 2,
    review_count: 6312,
    extra_images: "http://dummyimage.com/322x310.jpg/cc0000/ffffff",
    director: "Kristi Ambroisin",
    writer: "Viv Chaudron",
    release_date: "04/08/2018",
    movie_rating: "G",
    movie_length: "1 hour",
    actor_info: [
      {
        character_name: "Violette Annwyl",
        actor_name: "Kass Lowndsbrough"
      },
      { character_name: "Nicko Reignolds", actor_name: "Melina Yitzhok" },
      { character_name: "Katharine Pedrick", actor_name: "Tildi Edwick" },
      { character_name: "Darryl Fidoe", actor_name: "Stesha Dundon" },
      { character_name: "Darryl Fidoe", actor_name: "Stesha Dundon" }
    ]
  },
  {
    Title: "This Means War",
    Year: "2012",
    imdbID: "tt1596350",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYyOTQ4MDE2MV5BMl5BanBnXkFtZTcwOTE0MTgwNw@@._V1_SX300.jpg",
    review_average: 2,
    review_count: 6898,
    extra_images: "http://dummyimage.com/380x296.jpg/cc0000/ffffff",
    director: "Kitti Jurzyk",
    writer: "Meagan Hallums",
    release_date: "02/18/2018",
    movie_rating: "G",
    movie_length: "1 hour",
    actor_info: [
      { character_name: "Avery Padula", actor_name: "Doyle Wannell" },
      { character_name: "Petunia Robinett", actor_name: "Sander Naptine" },
      { character_name: "Jaynell Corkitt", actor_name: "Urbano Merington" },
      { character_name: "Barbra Perillio", actor_name: "Teressa Gawne" },
      { character_name: "Barbra Perillio", actor_name: "Teressa Gawne" }
    ]
  },
  {
    Title: "War Dogs",
    Year: "2016",
    imdbID: "tt2005151",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjEyNzQ0NzM4MV5BMl5BanBnXkFtZTgwMDI0ODM2OTE@._V1_SX300.jpg",
    review_average: 2,
    review_count: 4256,
    extra_images: "http://dummyimage.com/312x296.jpg/dddddd/000000",
    director: "Lonee Claremont",
    writer: "Vasilis Hoofe",
    release_date: "12/31/2017",
    movie_rating: "G",
    movie_length: "1 hour",
    actor_info: [
      { character_name: "Babbie Epton", actor_name: "Sanson Cuberley" },
      { character_name: "Jesus Bawles", actor_name: "Nicholle McElmurray" },
      { character_name: "Allissa Wordley", actor_name: "Eran Quant" },
      { character_name: "Amabel Gerleit", actor_name: "Paddie Fearns" },
      { character_name: "Amabel Gerleit", actor_name: "Paddie Fearns" }
    ]
  },
  {
    Title: "War Horse",
    Year: "2011",
    imdbID: "tt1568911",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjExNzkxOTYyNl5BMl5BanBnXkFtZTcwODA0MjU4Ng@@._V1_SX300.jpg",
    review_average: 5,
    review_count: 121,
    extra_images: "http://dummyimage.com/381x382.jpg/dddddd/000000",
    director: "Avictor Musslewhite",
    writer: "Shell Yon",
    release_date: "03/29/2018",
    movie_length: "1 hour and 25 minutes",
    actor_info: [
      { character_name: "Gabi Webland", actor_name: "Tomaso Malser" },
      {
        character_name: "Sigfried MacArthur",
        actor_name: "Sanderson Abbys"
      },
      { character_name: "Arlie Duffree", actor_name: "Marie-ann Daw" },
      { character_name: "Lombard Goldfinch", actor_name: "Curr Woolger" },
      { character_name: "Lombard Goldfinch", actor_name: "Curr Woolger" }
    ]
  },
  {
    Title: "Bad Santa",
    Year: "2003",
    imdbID: "tt0307987",
    Type: "movie",
    Poster:
      "https://ia.media-imdb.com/images/M/MV5BMjA4Njg1MDcwN15BMl5BanBnXkFtZTYwMzAxNjM3._V1_SX300.jpg",
    review_average: 4,
    review_count: 7471,
    extra_images: "http://dummyimage.com/302x338.jpg/ff4444/ffffff",
    director: "Tiler Lyven",
    writer: "Max Tocqueville",
    release_date: "07/27/2018",
    movie_length: "1 hour and 20 minutes",
    actor_info: [
      {
        character_name: "Abeu Mellings",
        actor_name: "Jeramie Ricciardiello"
      },
      { character_name: "Germayne Pelfer", actor_name: "Kory Corde" },
      { character_name: "Roxy Lees", actor_name: "Pietra Goodlad" },
      { character_name: "Merola Ege", actor_name: "Mercy Extal" },
      { character_name: "Merola Ege", actor_name: "Mercy Extal" }
    ]
  },
  {
    Title: "The Santa Clause",
    Year: "1994",
    imdbID: "tt0111070",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTZlNzk1MjItYjJlYy00MTAxLWJkNjEtZmNiNmVlNjQ4NDE5XkEyXkFqcGdeQXVyMzI0NDc4ODY@._V1_SX300.jpg",
    review_average: 4,
    review_count: 8866,
    extra_images: "http://dummyimage.com/216x229.jpg/dddddd/000000",
    director: "Gillian Ping",
    writer: "Cristiano Sleith",
    release_date: "02/23/2018",
    movie_length: "1 hour and 20 minutes",
    actor_info: [
      { character_name: "Antonino Bolderoe", actor_name: "Kayla McDavid" },
      { character_name: "Roxy Dakhov", actor_name: "Shirl Gammel" },
      { character_name: "Petronille Buessen", actor_name: "Sammy Houchin" },
      { character_name: "Benn Loncaster", actor_name: "Etty Wyer" },
      { character_name: "Benn Loncaster", actor_name: "Etty Wyer" }
    ]
  },
  {
    Title: "The Santa Clause 2",
    Year: "2002",
    imdbID: "tt0304669",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjU0Njk5MTA2Nl5BMl5BanBnXkFtZTYwODkzMzQ3._V1_SX300.jpg",
    review_average: 9,
    review_count: 7410,
    extra_images: "http://dummyimage.com/290x339.jpg/dddddd/000000",
    director: "Matthieu Gleder",
    writer: "Betteanne Lorden",
    release_date: "05/12/2018",
    movie_rating: "R",
    movie_length: "1 hour and 50 minutes",
    actor_info: [
      { character_name: "Arleen Edler", actor_name: "Godart Elt" },
      { character_name: "Conant Whillock", actor_name: "Tootsie Herion" },
      { character_name: "Rupert Kibbel", actor_name: "Darcie Goosnell" },
      { character_name: "Wynn Bushill", actor_name: "Padriac Burden" },
      { character_name: "Wynn Bushill", actor_name: "Padriac Burden" }
    ]
  },
  {
    Title: "Santa Clarita Diet",
    Year: "2017–",
    imdbID: "tt5580540",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYxMjA3ODkxN15BMl5BanBnXkFtZTgwMDkzNjk5NDM@._V1_SX300.jpg",
    review_average: 5,
    review_count: 2842,
    extra_images: "http://dummyimage.com/250x217.jpg/ff4444/ffffff",
    director: "Dennis MacTrustey",
    writer: "Dore Tallon",
    release_date: "06/25/2018",
    movie_length: "1 hour and 25 minutes",
    actor_info: [
      { character_name: "Rickie Patten", actor_name: "Suzanna Beasleigh" },
      { character_name: "Durant MacCafferky", actor_name: "Clari Malpass" },
      { character_name: "Prent Damiata", actor_name: "Ursala Cammomile" },
      { character_name: "Athene Barnwall", actor_name: "Aloysia Harness" },
      { character_name: "Athene Barnwall", actor_name: "Aloysia Harness" }
    ]
  },
  {
    Title: "The Santa Clause 3: The Escape Clause",
    Year: "2006",
    imdbID: "tt0452681",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTI4ODQ4MzgzMl5BMl5BanBnXkFtZTcwODc5NTUzMQ@@._V1_SX300.jpg",
    review_average: 9,
    review_count: 6669,
    extra_images: "http://dummyimage.com/275x220.jpg/ff4444/ffffff",
    director: "Kate Ashard",
    writer: "Cheston Ruf",
    release_date: "04/17/2018",
    movie_rating: "R",
    movie_length: "1 hour and 50 minutes",
    actor_info: [
      { character_name: "Karim Bangs", actor_name: "Belinda Southan" },
      { character_name: "Irene Schimonek", actor_name: "Celia Aubrey" },
      { character_name: "Hank Deinhardt", actor_name: "Allin Lamplugh" },
      { character_name: "Zach Frisby", actor_name: "Sampson Radleigh" },
      { character_name: "Zach Frisby", actor_name: "Sampson Radleigh" }
    ]
  },
  {
    Title: "Bad Santa 2",
    Year: "2016",
    imdbID: "tt1798603",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjM2MjE5Mzc4OF5BMl5BanBnXkFtZTgwMjc3NjEyMDI@._V1_SX300.jpg",
    review_average: 9,
    review_count: 4783,
    extra_images: "http://dummyimage.com/365x361.jpg/ff4444/ffffff",
    director: "Sammy Edgecumbe",
    writer: "Pancho Guidera",
    release_date: "01/27/2018",
    movie_rating: "R",
    movie_length: "1 hour and 50 minutes",
    actor_info: [
      {
        character_name: "Frederich Brussell",
        actor_name: "Collin Mollindinia"
      },
      { character_name: "Ileana Eaklee", actor_name: "Edyth Bellhanger" },
      { character_name: "Kele Pratton", actor_name: "Averill Grund" },
      { character_name: "Gannon Peskin", actor_name: "Erek Speeding" },
      { character_name: "Gannon Peskin", actor_name: "Erek Speeding" }
    ]
  },
  {
    Title: "Santa Sangre",
    Year: "1989",
    imdbID: "tt0098253",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDU4YjUwYzQtNDRiNy00N2NlLTkzODUtYzVmNmE1MGRiMmE1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    review_average: 7,
    review_count: 5539,
    extra_images: "http://dummyimage.com/276x358.jpg/cc0000/ffffff",
    director: "Heall Bullan",
    writer: "Emelyne Comberbach",
    release_date: "01/19/2018",
    movie_length: "1 hour and 40 minutes",
    actor_info: [
      { character_name: "Heda Lackham", actor_name: "Hannis Clery" },
      { character_name: "Dacia Piatkow", actor_name: "Judi Ubanks" },
      { character_name: "Ringo Huckle", actor_name: "Charlie Collings" },
      { character_name: "Myrwyn Cariss", actor_name: "Lenore Peever" },
      { character_name: "Myrwyn Cariss", actor_name: "Lenore Peever" }
    ]
  },
  {
    Title: "Santa Claus Conquers the Martians",
    Year: "1964",
    imdbID: "tt0058548",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjE4OTg3MTU2Ml5BMl5BanBnXkFtZTcwOTM2NDIwNw@@._V1_SX300.jpg",
    review_average: 8,
    review_count: 4634,
    extra_images: "http://dummyimage.com/288x337.jpg/cc0000/ffffff",
    director: "Jennee McAnulty",
    writer: "Corabella Roget",
    release_date: "04/04/2018",
    movie_rating: "R",
    movie_length: "1 hour and 35 minutes",
    actor_info: [
      { character_name: "Estrella Stryde", actor_name: "Ellissa Almey" },
      { character_name: "Lyndell Garley", actor_name: "Terry Fetherby" },
      { character_name: "Rolf Dimbylow", actor_name: "Free Ellinor" },
      {
        character_name: "Zackariah Flement",
        actor_name: "Stirling Pudding"
      },
      {
        character_name: "Zackariah Flement",
        actor_name: "Stirling Pudding"
      }
    ]
  },
  {
    Title: "Santa Claus: The Movie",
    Year: "1985",
    imdbID: "tt0089961",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZDc1OGVkMmQtYTU0NC00ZTc4LWIyNjItM2IzYzcwNTA1ZmJmXkEyXkFqcGdeQXVyMjY3MjUzNDk@._V1_SX300.jpg",
    review_average: 10,
    review_count: 8608,
    extra_images: "http://dummyimage.com/201x331.jpg/dddddd/000000",
    director: "Rasla Robertazzi",
    writer: "Spike Hoggin",
    release_date: "01/17/2018",
    movie_rating: "R",
    movie_length: "2 hour and 5 minutes",
    actor_info: [
      {
        character_name: "Marrilee McAster",
        actor_name: "Leonidas Warfield"
      },
      { character_name: "Ollie Ind", actor_name: "Mahmoud Baldoni" },
      { character_name: "Rudolf Guillotin", actor_name: "Pembroke Auty" },
      { character_name: "Lainey Thorrington", actor_name: "Dar Coping" },
      { character_name: "Lainey Thorrington", actor_name: "Dar Coping" }
    ]
  },
  {
    Title: "Santa Claus Is Comin' to Town",
    Year: "1970",
    imdbID: "tt0066327",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc2NjMxMTU2Ml5BMl5BanBnXkFtZTcwNjg4NTYyMQ@@._V1_SX300.jpg",
    review_average: 4,
    review_count: 352,
    extra_images: "http://dummyimage.com/307x381.jpg/ff4444/ffffff",
    director: "Minny Copplestone",
    writer: "Dacia Dronsfield",
    release_date: "04/25/2018",
    movie_length: "1 hour and 20 minutes",
    actor_info: [
      { character_name: "Terry Kalinovich", actor_name: "Louie Keyser" },
      { character_name: "Corenda Skingle", actor_name: "Mandi Leaney" },
      { character_name: "Ansley Bilbey", actor_name: "Dolley Starkie" },
      {
        character_name: "Auroora Stone Fewings",
        actor_name: "Conchita Naismith"
      },
      {
        character_name: "Auroora Stone Fewings",
        actor_name: "Conchita Naismith"
      }
    ]
  },
  {
    Title: "500 Days of Summer",
    Year: "2009",
    imdbID: "tt1022603",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTk5MjM4OTU1OV5BMl5BanBnXkFtZTcwODkzNDIzMw@@._V1_SX300.jpg",
    review_average: 5,
    review_count: 6158,
    extra_images: "http://dummyimage.com/392x343.jpg/5fa2dd/ffffff",
    director: "Eva Tabourin",
    writer: "Minerva Grisenthwaite",
    release_date: "12/13/2017",
    movie_length: "1 hour and 25 minutes",
    actor_info: [
      { character_name: "Torry Sergeant", actor_name: "Alonzo Tavernor" },
      { character_name: "Enrico Heymann", actor_name: "Audrie Upson" },
      { character_name: "Lin Lammie", actor_name: "Kylynn Edgeon" },
      { character_name: "Sallie Jinda", actor_name: "Ginger Colling" },
      { character_name: "Sallie Jinda", actor_name: "Ginger Colling" }
    ]
  },
  {
    Title: "I Know What You Did Last Summer",
    Year: "1997",
    imdbID: "tt0119345",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDI4ODJlNGUtNjFiMy00ODgzLWIzYjgtMzgyZTljZDQ2NGZiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    review_average: 9,
    review_count: 6545,
    extra_images: "http://dummyimage.com/276x258.jpg/5fa2dd/ffffff",
    director: "Mozelle Grealy",
    writer: "Lonna Thoresbie",
    release_date: "09/07/2017",
    movie_rating: "R",
    movie_length: "1 hour and 50 minutes",
    actor_info: [
      { character_name: "Anstice Walkling", actor_name: "Ferrel Hazeup" },
      {
        character_name: "Melonie Carleman",
        actor_name: "Guillaume McSweeney"
      },
      { character_name: "Eldon Robiot", actor_name: "Waiter Dotson" },
      { character_name: "Kass Asel", actor_name: "Giffy Trillo" },
      { character_name: "Kass Asel", actor_name: "Giffy Trillo" }
    ]
  },
  {
    Title: "The Kings of Summer",
    Year: "2013",
    imdbID: "tt2179116",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc3ODA1NTI0MV5BMl5BanBnXkFtZTcwOTE4OTUzOQ@@._V1_SX300.jpg",
    review_average: 5,
    review_count: 8210,
    extra_images: "http://dummyimage.com/240x302.jpg/ff4444/ffffff",
    director: "Jolee Sabberton",
    writer: "Denni Hackleton",
    release_date: "11/16/2017",
    movie_length: "1 hour and 25 minutes",
    actor_info: [
      { character_name: "Dorothea Cranage", actor_name: "Rebecca Gutcher" },
      { character_name: "Eal Breede", actor_name: "Kay Le land" },
      { character_name: "Jacques Kerswill", actor_name: "Lek Stickells" },
      {
        character_name: "Cilka Houlison",
        actor_name: "Elaine Gheorghescu"
      },
      { character_name: "Cilka Houlison", actor_name: "Elaine Gheorghescu" }
    ]
  },
  {
    Title: "Spring, Summer, Fall, Winter... and Spring",
    Year: "2003",
    imdbID: "tt0374546",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTI0ODMwOTIxOV5BMl5BanBnXkFtZTcwMzE2NDUyMQ@@._V1_SX300.jpg",
    review_average: 6,
    review_count: 5184,
    extra_images: "http://dummyimage.com/205x209.jpg/ff4444/ffffff",
    director: "Bearnard Capps",
    writer: "Eimile Medland",
    release_date: "04/18/2018",
    movie_rating: "PG-13",
    movie_length: "1 hour and 30 minutes",
    actor_info: [
      { character_name: "Tabby Goly", actor_name: "Jeannine Gristhwaite" },
      { character_name: "Doyle Kleisle", actor_name: "Carole Gillie" },
      { character_name: "Shepard Rebanks", actor_name: "Lanni Mawman" },
      { character_name: "Farand Ebbs", actor_name: "Violante Dunlap" },
      { character_name: "Farand Ebbs", actor_name: "Violante Dunlap" }
    ]
  },
  {
    Title: "I Still Know What You Did Last Summer",
    Year: "1998",
    imdbID: "tt0130018",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTgwZmFkZmQtZTVjNC00ZTU4LWI4NjItYzdhYTg1ZjkyODZhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    review_average: 1,
    review_count: 1959,
    extra_images: "http://dummyimage.com/398x336.jpg/5fa2dd/ffffff",
    director: "Victoria Borley",
    writer: "Mortimer Cridlan",
    release_date: "09/27/2017",
    movie_rating: "G",
    movie_length: "55 minutes",
    actor_info: [
      { character_name: "Samuele Manthorpe", actor_name: "Camila Harmant" },
      { character_name: "Tracey Axelby", actor_name: "Nicolais Coultar" },
      { character_name: "Stefan Hardan", actor_name: "Claudetta Scarse" },
      { character_name: "Bea Leall", actor_name: "Dougie Shorten" },
      { character_name: "Bea Leall", actor_name: "Dougie Shorten" }
    ]
  },
  {
    Title: "Wet Hot American Summer",
    Year: "2001",
    imdbID: "tt0243655",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjdjYjlhNTctNDY0Yi00ZTM4LWE1MWItYWUzNmYwYWU0OTI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    review_average: 10,
    review_count: 9372,
    extra_images: "http://dummyimage.com/340x396.jpg/ff4444/ffffff",
    director: "Pepillo Abramowsky",
    writer: "Heywood Skunes",
    release_date: "02/28/2018",
    movie_rating: "R",
    movie_length: "2 hour and 5 minutes",
    actor_info: [
      { character_name: "Ali Ygoe", actor_name: "Cozmo Glenton" },
      { character_name: "Ainslee Hanks", actor_name: "Dinah Wardrope" },
      { character_name: "Mack Imm", actor_name: "Georgette Masterson" },
      { character_name: "Earlie Dalla", actor_name: "Godart Graeser" },
      { character_name: "Earlie Dalla", actor_name: "Godart Graeser" }
    ]
  },
  {
    Title: "Summer of Sam",
    Year: "1999",
    imdbID: "tt0162677",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjdjMDQ4ZjctYmQzNS00NjYwLWFhNTQtMGM0YmJjMmE5YmE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    review_average: 1,
    review_count: 6195,
    extra_images: "http://dummyimage.com/339x373.jpg/5fa2dd/ffffff",
    director: "Haleigh Readitt",
    writer: "Jarid Van Der Walt",
    release_date: "03/26/2018",
    movie_rating: "G",
    movie_length: "55 minutes",
    actor_info: [
      { character_name: "Garek Brickstock", actor_name: "Dena Gwatkin" },
      {
        character_name: "Caryl Tewkesberry",
        actor_name: "Alphonso Drewes"
      },
      { character_name: "Jeffrey Akenhead", actor_name: "Carolan Barnaby" },
      { character_name: "Vincenz Eyree", actor_name: "Aretha Malecky" },
      { character_name: "Morgana Mum", actor_name: "Krista Suff" },
      { character_name: "Morgana Mum", actor_name: "Krista Suff" }
    ]
  },
  {
    Title: "Summer Wars",
    Year: "2009",
    imdbID: "tt1474276",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYyOTk3OTQzM15BMl5BanBnXkFtZTcwMjU4NDYyNA@@._V1_SX300.jpg",
    review_average: 6,
    review_count: 3160,
    extra_images: "http://dummyimage.com/293x380.jpg/cc0000/ffffff",
    director: "Elysee Harmon",
    writer: "Ivy Stillert",
    release_date: "01/05/2018",
    movie_rating: "PG-13",
    movie_length: "1 hour and 30 minutes",
    actor_info: [
      { character_name: "Sidnee Eloy", actor_name: "Waylen Nursey" },
      {
        character_name: "Dexter Aitchinson",
        actor_name: "Aeriela Fancett"
      },
      { character_name: "Jandy Metrick", actor_name: "Teodoor Klimczak" },
      { character_name: "Gabrielle Dalyell", actor_name: "Cindy Rooper" },
      { character_name: "Guenevere Dominique", actor_name: "Godart Evett" },
      { character_name: "Guenevere Dominique", actor_name: "Godart Evett" }
    ]
  },
  {
    Title: "Wet Hot American Summer: First Day of Camp",
    Year: "2015",
    imdbID: "tt4341500",
    Type: "series",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1Njg2Nl5BMl5BanBnXkFtZTgwODE1MjUxNjE@._V1_SX300.jpg",
    review_average: 2,
    review_count: 817,
    extra_images: "http://dummyimage.com/367x203.jpg/dddddd/000000",
    director: "Taite Durrans",
    writer: "Arley Rumbelow",
    release_date: "02/13/2018",
    movie_rating: "G",
    movie_length: "1 hour",
    actor_info: [
      {
        character_name: "Chrysler Domenichini",
        actor_name: "Zebedee Whisby"
      },
      { character_name: "Bram Titman", actor_name: "Marissa Elman" },
      { character_name: "Barnard Sander", actor_name: "Lucilia Pawelski" },
      {
        character_name: "Bertram Grundell",
        actor_name: "Ignazio Grzegorczyk"
      },
      { character_name: "Laurena Philott", actor_name: "Mel Brayson" },
      { character_name: "Laurena Philott", actor_name: "Mel Brayson" }
    ]
  },
  {
    Title: "My Summer of Love",
    Year: "2004",
    imdbID: "tt0382189",
    Type: "movie",
    Poster:
      "https://ia.media-imdb.com/images/M/MV5BMTg2NTM0NDY1NV5BMl5BanBnXkFtZTcwMjU5OTkyMQ@@._V1_SX300.jpg",
    review_average: 9,
    review_count: 2836,
    extra_images: "http://dummyimage.com/375x387.jpg/dddddd/000000",
    director: "Coop Mant",
    writer: "Libbi Tuffs",
    release_date: "11/02/2017",
    movie_rating: "R",
    movie_length: "1 hour and 50 minutes",
    actor_info: [
      { character_name: "Pinchas Brendel", actor_name: "Asia Blinman" },
      { character_name: "Dominique Offa", actor_name: "Maryjo Branigan" },
      { character_name: "Sophia Houliston", actor_name: "Mark Westcar" },
      { character_name: "Petr Melluish", actor_name: "Arlena Penreth" },
      {
        character_name: "Carol Ditchfield",
        actor_name: "Zebulon Keeltagh"
      },
      { character_name: "Carol Ditchfield", actor_name: "Zebulon Keeltagh" }
    ]
  },
  {
    Title: "The Sons of Katie Elder",
    Year: "1965",
    imdbID: "tt0059740",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDlmOGQ3OWItNmU3OS00M2Q2LThlZmQtNzlkY2MyZjExZDNjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg",
    review_average: 7,
    review_count: 237,
    extra_images: "http://dummyimage.com/362x304.jpg/dddddd/000000",
    director: "Chrissy Tremmil",
    writer: "Eba Laneham",
    release_date: "07/14/2018",
    movie_length: "1 hour and 40 minutes",
    actor_info: [
      { character_name: "Correna Franzewitch", actor_name: "Feodor Kilby" },
      { character_name: "Kare Bruckman", actor_name: "Yovonnda Hirtz" },
      { character_name: "Freeland Kynson", actor_name: "Miltie Foot" },
      { character_name: "Dietrich Gilburt", actor_name: "Cly Parman" },
      { character_name: "Farrand Ewers", actor_name: "Jocelyn Abramovicz" },
      { character_name: "Farrand Ewers", actor_name: "Jocelyn Abramovicz" }
    ]
  },
  {
    Title: "Katie Tippel",
    Year: "1975",
    imdbID: "tt0073233",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0NzkzNGMtMTY2OS00ZjI0LTljY2UtMDRmMzQwMTc4YTE3XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
    review_average: 8,
    review_count: 4213,
    extra_images: "http://dummyimage.com/201x350.jpg/5fa2dd/ffffff",
    director: "Isador Takle",
    writer: "Kennie Damp",
    release_date: "10/04/2017",
    movie_rating: "R",
    movie_length: "1 hour and 35 minutes",
    actor_info: [
      { character_name: "Alvinia Camois", actor_name: "Barn Thorouggood" },
      { character_name: "Michal Bartod", actor_name: "Niles Jills" },
      { character_name: "Federico Kloss", actor_name: "Rik Skilbeck" },
      { character_name: "Warner Spreull", actor_name: "Henrietta Pesek" },
      { character_name: "Ange Lawlance", actor_name: "Tresa Gillion" },
      { character_name: "Ange Lawlance", actor_name: "Tresa Gillion" }
    ]
  },
  {
    Title: "Kill Katie Malone",
    Year: "2010",
    imdbID: "tt1523485",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTI4MzU5OTYwMl5BMl5BanBnXkFtZTcwNzA0NTE5Mg@@._V1_SX300.jpg",
    review_average: 6,
    review_count: 9902,
    extra_images: "http://dummyimage.com/282x285.jpg/cc0000/ffffff",
    director: "Bridie Christoffersen",
    writer: "Urbain Browse",
    release_date: "10/01/2017",
    movie_rating: "PG-13",
    movie_length: "1 hour and 30 minutes",
    actor_info: [
      {
        character_name: "Deanne Larkby",
        actor_name: "Allegra Rubinovitsch"
      },
      { character_name: "Gail Scamel", actor_name: "Anna Aucott" },
      { character_name: "Tore Baike", actor_name: "Kelsi Kinze" },
      { character_name: "Zulema Ibert", actor_name: "Audy Elders" },
      { character_name: "Ervin Franies", actor_name: "Shandeigh Woodall" },
      { character_name: "Ervin Franies", actor_name: "Shandeigh Woodall" }
    ]
  },
  {
    Title: "Alexa & Katie",
    Year: "2018–",
    imdbID: "tt6916746",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTk2NzY2NTItYWFhMS00NGM5LWIwNTgtMTEwNzdiMzE4Njk3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    review_average: 5,
    review_count: 6784,
    extra_images: "http://dummyimage.com/387x213.jpg/5fa2dd/ffffff",
    director: "Joyce Fritchly",
    writer: "Farly Keys",
    release_date: "04/23/2018",
    movie_length: "1 hour and 25 minutes",
    actor_info: [
      { character_name: "Cathyleen Izat", actor_name: "Minni Hollyar" },
      { character_name: "Anselm Tieman", actor_name: "Ofilia Ivakhno" },
      { character_name: "Martelle Ricker", actor_name: "Mel Jurkiewicz" },
      { character_name: "Carver Grace", actor_name: "Lida Ebbutt" },
      { character_name: "Corella Freake", actor_name: "Cass Marqyes" },
      { character_name: "Corella Freake", actor_name: "Cass Marqyes" }
    ]
  },
  {
    Title: "Katie Says Goodbye",
    Year: "2016",
    imdbID: "tt4547938",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGVmOGI0MTUtZWRjZS00NTk4LTg3N2QtZTg4NTY4OWU4YWU0XkEyXkFqcGdeQXVyMTQ3Njg3MQ@@._V1_SX300.jpg",
    review_average: 6,
    review_count: 8050,
    extra_images: "http://dummyimage.com/400x313.jpg/ff4444/ffffff",
    director: "Drew Whebell",
    writer: "Zsazsa Loxston",
    release_date: "10/13/2017",
    movie_rating: "PG-13",
    movie_length: "1 hour and 30 minutes",
    actor_info: [
      { character_name: "Orel Poulglais", actor_name: "Conrado Vawton" },
      { character_name: "Marice Berriball", actor_name: "Lodovico Deesly" },
      { character_name: "Ewen Gartell", actor_name: "Nan Redmire" },
      { character_name: "Jeanie Fanstone", actor_name: "Regan Leyninye" },
      { character_name: "Nikita Meeny", actor_name: "Anica oldey" },
      { character_name: "Nikita Meeny", actor_name: "Anica oldey" }
    ]
  },
  {
    Title: "Kissing Katie Holmes",
    Year: "2005",
    imdbID: "tt0477743",
    Type: "movie",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTU5MTQxMDQ1M15BMl5BanBnXkFtZTcwODYyNDUzMQ@@._V1_SX300.jpg",
    review_average: 6,
    review_count: 963,
    extra_images: "http://dummyimage.com/334x213.jpg/cc0000/ffffff",
    director: "Richie Fessions",
    writer: "Kienan Ruddiman",
    release_date: "05/06/2018",
    movie_rating: "PG-13",
    movie_length: "1 hour and 30 minutes",
    actor_info: [
      { character_name: "Lyda De Courtney", actor_name: "Forester Wooton" },
      { character_name: "Shea Scholl", actor_name: "Kettie Learoyd" },
      { character_name: "Giraldo Sporner", actor_name: "Chilton Broxton" },
      { character_name: "Eddi L'Archer", actor_name: "Lorilee Dibdin" },
      { character_name: "Sidoney Toyne", actor_name: "Bran Skeermer" },
      { character_name: "Sidoney Toyne", actor_name: "Bran Skeermer" }
    ]
  },
  {
    Title: "CBS Evening News with Katie Couric",
    Year: "2006–",
    imdbID: "tt0800281",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTQ1MTc4ODAzNl5BMl5BanBnXkFtZTcwNTc0NTM2MQ@@._V1_SX300.jpg",
    review_average: 3,
    review_count: 8493,
    extra_images: "http://dummyimage.com/295x348.jpg/ff4444/ffffff",
    director: "Normand Marzella",
    writer: "Marta Fromant",
    release_date: "07/27/2018",
    movie_length: "1 hour and 5 minutes",
    actor_info: [
      { character_name: "Valaree Herreros", actor_name: "Omar Copestick" },
      { character_name: "Ellery Lofting", actor_name: "Maryjane Laing" },
      { character_name: "Tiffie Durham", actor_name: "Juliann Gosz" },
      { character_name: "Aldin Joska", actor_name: "Francesco Hanigan" },
      { character_name: "Annice Arnson", actor_name: "Arty Frantzen" },
      { character_name: "Annice Arnson", actor_name: "Arty Frantzen" }
    ]
  },
  {
    Title: "Katie: Portrait of a Centerfold",
    Year: "1978",
    imdbID: "tt0077794",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM3MjI1NTM3Nl5BMl5BanBnXkFtZTcwMDQzMDMyOA@@._V1_SX300.jpg",
    review_average: 9,
    review_count: 2903,
    extra_images: "http://dummyimage.com/216x316.jpg/dddddd/000000",
    director: "Barbey Lafoy",
    writer: "Ana Lowles",
    release_date: "12/16/2017",
    movie_rating: "R",
    movie_length: "1 hour and 50 minutes",
    actor_info: [
      { character_name: "Calida Northing", actor_name: "Zechariah Kenryd" },
      { character_name: "Regina Smartman", actor_name: "Foster Dignan" },
      { character_name: "Olympie Ostick", actor_name: "Rodolphe Lanktree" },
      { character_name: "Rory Ollenbuttel", actor_name: "Phebe Lars" },
      {
        character_name: "Jonathon Sircombe",
        actor_name: "Shurlock Dressell"
      },
      {
        character_name: "Jonathon Sircombe",
        actor_name: "Shurlock Dressell"
      }
    ]
  },
  {
    Title: "Katie",
    Year: "2012–",
    imdbID: "tt2354136",
    Type: "series",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMWIxMjU0MjAtYmU4ZS00ZGZkLWFjZGQtYTZhMDgyNmFlNjE3XkEyXkFqcGdeQXVyMjk1MDY0Nzk@._V1_SX300.jpg",
    review_average: 3,
    review_count: 3519,
    extra_images: "http://dummyimage.com/223x367.jpg/5fa2dd/ffffff",
    director: "Colline Halvorsen",
    writer: "Harlin Trickey",
    release_date: "02/08/2018",
    movie_length: "1 hour and 5 minutes",
    actor_info: [
      { character_name: "Lorna Titcom", actor_name: "Jules Top" },
      {
        character_name: "Nadine Pizer",
        actor_name: "Zackariah Fotheringham"
      },
      {
        character_name: "Constantino Rexworthy",
        actor_name: "Romonda Tomney"
      },
      { character_name: "Tamqrah Wortt", actor_name: "Tiler Wiltshear" },
      { character_name: "Barth Duffet", actor_name: "Nari Harfoot" },
      { character_name: "Barth Duffet", actor_name: "Nari Harfoot" }
    ]
  },
  {
    Title: "Katie & Peter",
    Year: "2007–",
    imdbID: "tt1016840",
    Type: "series",
    Poster: "N/A",
    review_average: 10,
    review_count: 2897,
    extra_images: "http://dummyimage.com/269x204.jpg/ff4444/ffffff",
    director: "Ann-marie Wrightam",
    writer: "Silvanus De Cruze",
    release_date: "06/16/2018",
    movie_rating: "R",
    movie_length: "2 hour and 5 minutes",
    actor_info: [
      { character_name: "Kirby Asel", actor_name: "Loise Durram" },
      { character_name: "Clarine Maly", actor_name: "Genia Caughan" },
      { character_name: "Ashlie Leake", actor_name: "Corri Barfitt" },
      { character_name: "Dunc Stubbert", actor_name: "Ellissa Hurrion" },
      {
        character_name: "Valdemar Marioneau",
        actor_name: "Virgie Scorrer"
      },
      { character_name: "Valdemar Marioneau", actor_name: "Virgie Scorrer" }
    ]
  },
  {
    Title: "King of California",
    Year: "2007",
    imdbID: "tt0388182",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzQxMzIzMjY3N15BMl5BanBnXkFtZTcwMDMzMjM1MQ@@._V1_SX300.jpg",
    review_average: 9,
    review_count: 4909,
    extra_images: "http://dummyimage.com/311x308.jpg/5fa2dd/ffffff",
    director: "Alexei Tregea",
    writer: "Hodge Babst",
    release_date: "04/15/2018",
    movie_rating: "R",
    movie_length: "1 hour and 50 minutes",
    actor_info: [
      { character_name: "Meyer Fender", actor_name: "Elston Cocking" },
      { character_name: "Alberto Playden", actor_name: "Reggie Duley" },
      {
        character_name: "Hamilton Bielfeldt",
        actor_name: "Franky Coursor"
      },
      {
        character_name: "Byron Menchenton",
        actor_name: "Felicio Kornyshev"
      },
      { character_name: "Amy Rorke", actor_name: "Cynthy Randleson" },
      { character_name: "Amy Rorke", actor_name: "Cynthy Randleson" }
    ]
  },
  {
    Title: "California Dreamin'",
    Year: "2007",
    imdbID: "tt0449573",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjExMjk5ODAzMF5BMl5BanBnXkFtZTcwNjg2MjU1MQ@@._V1_SX300.jpg",
    review_average: 4,
    review_count: 8046,
    extra_images: "http://dummyimage.com/290x236.jpg/dddddd/000000",
    director: "Barb Furminger",
    writer: "Arlyn Drinnan",
    release_date: "12/26/2017",
    movie_length: "1 hour and 20 minutes",
    actor_info: [
      { character_name: "Ashby Odo", actor_name: "Merilee Jonas" },
      { character_name: "Levi Sainte Paul", actor_name: "Irvine Flewan" },
      { character_name: "Maurizio Rockall", actor_name: "Karoly Sackett" },
      { character_name: "Celinda Micallef", actor_name: "Ad Presshaugh" },
      { character_name: "Diarmid Beauchamp", actor_name: "Michale Mocker" },
      { character_name: "Diarmid Beauchamp", actor_name: "Michale Mocker" }
    ]
  },
  {
    Title: "California Suite",
    Year: "1978",
    imdbID: "tt0077289",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYmNkMzA1NzgtMjhhMS00MGNiLThiNzktZDA0MTE5ZjZmMWUwXkEyXkFqcGdeQXVyMTAwMzUyOTc@._V1_SX300.jpg",
    review_average: 5,
    review_count: 9123,
    extra_images: "http://dummyimage.com/255x214.jpg/dddddd/000000",
    director: "Kamillah Hews",
    writer: "Natty Haney",
    release_date: "03/25/2018",
    movie_length: "1 hour and 25 minutes",
    actor_info: [
      { character_name: "Yalonda Guarin", actor_name: "Cyrille Sambrook" },
      { character_name: "Amandi Piper", actor_name: "Helen Grier" },
      { character_name: "Jilli Moncrefe", actor_name: "Honor Defond" },
      {
        character_name: "Harriott Colerick",
        actor_name: "Elianora MacKeller"
      },
      { character_name: "Cele Lorden", actor_name: "Killy Bredes" },
      { character_name: "Cele Lorden", actor_name: "Killy Bredes" }
    ]
  },
  {
    Title: "California Split",
    Year: "1974",
    imdbID: "tt0071269",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjk5MzNjMDctYTdhNS00OWI0LWI2MzUtMDI3ODYwMDc5M2E3XkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg",
    review_average: 1,
    review_count: 4494,
    extra_images: "http://dummyimage.com/335x319.jpg/cc0000/ffffff",
    director: "Wallace Quadling",
    writer: "Cordelia Jessel",
    release_date: "11/21/2017",
    movie_rating: "G",
    movie_length: "55 minutes",
    actor_info: [
      { character_name: "Thebault Ramsay", actor_name: "Deane Catenot" },
      { character_name: "Bibbye Lowth", actor_name: "Cherie MacKellar" },
      { character_name: "Katti Merrett", actor_name: "Case Swannick" },
      { character_name: "Sheila Grigoroni", actor_name: "Sybila Urquhart" },
      { character_name: "Avis Martyns", actor_name: "Claudio Hambly" },
      { character_name: "Avis Martyns", actor_name: "Claudio Hambly" }
    ]
  },
  {
    Title: "California Dreams",
    Year: "1992–1997",
    imdbID: "tt0103380",
    Type: "series",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3ODY3NTI3NV5BMl5BanBnXkFtZTcwNDgzNjIzMg@@._V1_SX300.jpg",
    review_average: 2,
    review_count: 8557,
    extra_images: "http://dummyimage.com/318x288.jpg/ff4444/ffffff",
    director: "Elston Hammarberg",
    writer: "Ciel Cathery",
    release_date: "09/28/2017",
    movie_rating: "G",
    movie_length: "1 hour",
    actor_info: [
      { character_name: "Susanetta Collister", actor_name: "Saw Hoofe" },
      { character_name: "Nestor Persey", actor_name: "Salomi Buxsy" },
      { character_name: "Daphene Danjoie", actor_name: "Ginevra Dafydd" },
      { character_name: "Oby Mounce", actor_name: "Henry Simonot" },
      { character_name: "Pavia Goldwater", actor_name: "Abbe Dispencer" },
      { character_name: "Pavia Goldwater", actor_name: "Abbe Dispencer" }
    ]
  },
  {
    Title: "California Solo",
    Year: "2012",
    imdbID: "tt1918727",
    Type: "movie",
    Poster:
      "https://ia.media-imdb.com/images/M/MV5BMTk3MzQxMjExNl5BMl5BanBnXkFtZTcwNTY0NTE2OA@@._V1_SX300.jpg",
    review_average: 4,
    review_count: 8135,
    extra_images: "http://dummyimage.com/384x320.jpg/5fa2dd/ffffff",
    director: "Joni Sculley",
    writer: "Tobi Adam",
    release_date: "02/19/2018",
    movie_length: "1 hour and 20 minutes",
    actor_info: [
      { character_name: "Marilee Lead", actor_name: "Tammi Ottewill" },
      { character_name: "Elnora le Keux", actor_name: "Garrott Elesander" },
      { character_name: "Hyatt Legion", actor_name: "Ella Kop" },
      { character_name: "Wandis Sautter", actor_name: "Markos Venn" },
      {
        character_name: "Nancie Frank",
        actor_name: "Anne-marie Blackster"
      },
      { character_name: "Nancie Frank", actor_name: "Anne-marie Blackster" }
    ]
  },
  {
    Title: "In Old California",
    Year: "1942",
    imdbID: "tt0034889",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2ZjNjYzMDctY2E4MC00YmZhLTg5ODgtMDUzNTYxMzgwOGJhXkEyXkFqcGdeQXVyNTk1MTk0MDI@._V1_SX300.jpg",
    review_average: 2,
    review_count: 8243,
    extra_images: "http://dummyimage.com/230x388.jpg/5fa2dd/ffffff",
    director: "Marrilee Crews",
    writer: "Morna Barry",
    release_date: "09/16/2017",
    movie_rating: "G",
    movie_length: "1 hour",
    actor_info: [
      { character_name: "Carin Phette", actor_name: "Bren Asher" },
      { character_name: "Edita de Voiels", actor_name: "Jerrie Rawstron" },
      { character_name: "Rosmunda Kippie", actor_name: "Bastien Hick" },
      { character_name: "Bail Geary", actor_name: "Raleigh Krysiak" },
      { character_name: "Cindy Gimber", actor_name: "Sue Ackred" },
      { character_name: "Cindy Gimber", actor_name: "Sue Ackred" }
    ]
  },
  {
    Title: "This Ain't California",
    Year: "2012",
    imdbID: "tt2113090",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMyNzk2MDI5MF5BMl5BanBnXkFtZTcwNjI1NjIzNw@@._V1_SX300.jpg",
    review_average: 6,
    review_count: 4621,
    extra_images: "http://dummyimage.com/320x367.jpg/cc0000/ffffff",
    director: "Donny Witherop",
    writer: "Aurilia MacCoveney",
    release_date: "03/15/2018",
    movie_rating: "PG-13",
    movie_length: "1 hour and 30 minutes",
    actor_info: [
      { character_name: "Rock Knowller", actor_name: "Berkly Fullom" },
      { character_name: "Kory Limming", actor_name: "Holli Sturr" },
      { character_name: "Hamel Ghidetti", actor_name: "Byrom Timny" },
      { character_name: "Rafe Rakes", actor_name: "Benni Jakubowsky" },
      { character_name: "Amaleta Backe", actor_name: "Fidelio Glassborow" },
      { character_name: "Amaleta Backe", actor_name: "Fidelio Glassborow" }
    ]
  },
  {
    Title: "The California Kid",
    Year: "1974",
    imdbID: "tt0071268",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0NjA3NjQxOV5BMl5BanBnXkFtZTcwODk4ODU5Mw@@._V1_SX300.jpg",
    review_average: 7,
    review_count: 6121,
    extra_images: "http://dummyimage.com/291x313.jpg/5fa2dd/ffffff",
    director: "Lindy Grieve",
    writer: "Rosanna Hambric",
    release_date: "05/01/2018",
    movie_length: "1 hour and 40 minutes",
    actor_info: [
      { character_name: "Kayla Skett", actor_name: "Allayne Kubacek" },
      {
        character_name: "Welch Sunley",
        actor_name: "Shurlocke Raubenheimer"
      },
      { character_name: "Avivah Haile", actor_name: "Raynard Larciere" },
      { character_name: "Bessie Cockhill", actor_name: "Vaughn Steadman" },
      { character_name: "Jeno Carman", actor_name: "Bonni Ingerfield" },
      { character_name: "Jeno Carman", actor_name: "Bonni Ingerfield" }
    ]
  },
  {
    Title: "Fishbowl California",
    Year: "2018",
    imdbID: "tt5547910",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjIwMDYzMzc4Nl5BMl5BanBnXkFtZTgwNjgzMzQwNDI@._V1_SX300.jpg",
    review_average: 2,
    review_count: 3791,
    extra_images: "http://dummyimage.com/245x330.jpg/cc0000/ffffff",
    director: "Loy Muddimer",
    writer: "Elizabeth Grimwade",
    release_date: "10/22/2017",
    movie_rating: "G",
    movie_length: "1 hour",
    actor_info: [
      { character_name: "Roxana Wigfall", actor_name: "Glenine Chatell" },
      { character_name: "Nelson Drew-Clifton", actor_name: "Dody Rixon" },
      { character_name: "Randa Lutty", actor_name: "Madel Brandom" },
      { character_name: "Pincas Boggon", actor_name: "Anthia Kaszper" },
      { character_name: "Rudolph Dooley", actor_name: "Auroora Easton" },
      { character_name: "Rudolph Dooley", actor_name: "Auroora Easton" }
    ]
  },
  {
    Title: "Mean Girls",
    Year: "2004",
    imdbID: "tt0377092",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjE1MDQ4MjI1OV5BMl5BanBnXkFtZTcwNzcwODAzMw@@._V1_SX300.jpg",
    review_average: 3,
    review_count: 876,
    extra_images: "http://dummyimage.com/325x330.jpg/dddddd/000000",
    director: "Melantha Burfoot",
    writer: "Virgie Burtonwood",
    release_date: "05/20/2018",
    movie_length: "1 hour and 5 minutes",
    actor_info: [
      { character_name: "Carree Canti", actor_name: "Caz Boulter" },
      { character_name: "Odo Chazette", actor_name: "Deirdre Ciobotaru" },
      { character_name: "Aguste Tarry", actor_name: "Montgomery Osler" },
      { character_name: "Jolee Matz", actor_name: "Ilysa De Leek" },
      { character_name: "Hammad Gething", actor_name: "Peterus Ascraft" },
      { character_name: "Hammad Gething", actor_name: "Peterus Ascraft" }
    ]
  },
  {
    Title: "2 Broke Girls",
    Year: "2011–2017",
    imdbID: "tt1845307",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYxMDA3Mzg5NV5BMl5BanBnXkFtZTgwNDIxOTcwMDI@._V1_SX300.jpg",
    review_average: 10,
    review_count: 4826,
    extra_images: "http://dummyimage.com/333x276.jpg/ff4444/ffffff",
    director: "Neale Trevenu",
    writer: "Anabella Bontine",
    release_date: "12/04/2017",
    movie_rating: "R",
    movie_length: "2 hour and 5 minutes",
    actor_info: [
      { character_name: "Ted Ley", actor_name: "Teri Truse" },
      { character_name: "Olivero Dome", actor_name: "Marcelle O'Devey" },
      { character_name: "Lizette Rome", actor_name: "Charlean Boakes" },
      {
        character_name: "Salomon Braxton",
        actor_name: "Arlinda MacShirie"
      },
      { character_name: "Vincenz Eyree", actor_name: "Aretha Malecky" },
      { character_name: "Vincenz Eyree", actor_name: "Aretha Malecky" }
    ]
  },
  {
    Title: "Gilmore Girls",
    Year: "2000–2007",
    imdbID: "tt0238784",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTQ3NDA1ZWYtYjBmMC00NmJjLWI1NjgtYjg2NDhmMTY2YWQ4XkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_SX300.jpg",
    review_average: 10,
    review_count: 1163,
    extra_images: "http://dummyimage.com/239x375.jpg/5fa2dd/ffffff",
    director: "Lorelle Balffye",
    writer: "Roch Simes",
    release_date: "01/07/2018",
    movie_rating: "R",
    movie_length: "2 hour and 5 minutes",
    actor_info: [
      { character_name: "Uriah Chamberlin", actor_name: "Ximenes Brixey" },
      { character_name: "Steffie Fradgley", actor_name: "Jamal Sked" },
      { character_name: "Jemima Chucks", actor_name: "Joshua Luten" },
      { character_name: "Esmaria Broomhead", actor_name: "Bettine Massen" },
      { character_name: "Gabrielle Dalyell", actor_name: "Cindy Rooper" },
      { character_name: "Gabrielle Dalyell", actor_name: "Cindy Rooper" }
    ]
  },
  {
    Title: "Girls",
    Year: "2012–2017",
    imdbID: "tt1723816",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTU1Mzk2ODEzN15BMl5BanBnXkFtZTgwNDQwMjAxMTI@._V1_SX300.jpg",
    review_average: 4,
    review_count: 3760,
    extra_images: "http://dummyimage.com/378x331.jpg/ff4444/ffffff",
    director: "Aggy Brussels",
    writer: "Ronni Shobrook",
    release_date: "05/31/2018",
    movie_length: "1 hour and 20 minutes",
    actor_info: [
      { character_name: "Dotty Rawling", actor_name: "Anthia Francescone" },
      { character_name: "Juliana Mundall", actor_name: "Noelani Petrillo" },
      { character_name: "Isabeau Gavrieli", actor_name: "Terry Cleeve" },
      { character_name: "Valentin Tidey", actor_name: "Myra Cottey" },
      {
        character_name: "Bertram Grundell",
        actor_name: "Ignazio Grzegorczyk"
      },
      {
        character_name: "Bertram Grundell",
        actor_name: "Ignazio Grzegorczyk"
      }
    ]
  },
  {
    Title: "Kiss the Girls",
    Year: "1997",
    imdbID: "tt0119468",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjE2MWE1ZDYtNjNkYS00YjZmLWJkZjctOTYzYTVjMDFiN2M5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    review_average: 1,
    review_count: 9628,
    extra_images: "http://dummyimage.com/286x339.jpg/5fa2dd/ffffff",
    director: "Caleb Carruth",
    writer: "Tamqrah Connors",
    release_date: "08/02/2018",
    movie_rating: "G",
    movie_length: "55 minutes",
    actor_info: [
      { character_name: "Toma Heffernan", actor_name: "Torre Logg" },
      { character_name: "Nessi Jurisch", actor_name: "Kerwin Kelcey" },
      { character_name: "Miltie Ravens", actor_name: "Lorine Tarn" },
      { character_name: "Garwood Nortcliffe", actor_name: "Inga Stit" },
      { character_name: "Petr Melluish", actor_name: "Arlena Penreth" },
      { character_name: "Petr Melluish", actor_name: "Arlena Penreth" }
    ]
  },
  {
    Title: "Uptown Girls",
    Year: "2003",
    imdbID: "tt0263757",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODk0ODI2MTk1N15BMl5BanBnXkFtZTcwODg3Mjg3NA@@._V1_SX300.jpg",
    review_average: 1,
    review_count: 8810,
    extra_images: "http://dummyimage.com/254x328.jpg/ff4444/ffffff",
    director: "Mavra Playden",
    writer: "Geoff Leyfield",
    release_date: "08/10/2018",
    movie_rating: "G",
    movie_length: "55 minutes",
    actor_info: [
      { character_name: "Aldo Bunyard", actor_name: "Chiquia Vanyushkin" },
      {
        character_name: "Franzen De Malchar",
        actor_name: "Webster Flatte"
      },
      { character_name: "Sutherland Northam", actor_name: "Brynne Reade" },
      { character_name: "Kirstin Kitchen", actor_name: "Marquita Philpot" },
      { character_name: "Dietrich Gilburt", actor_name: "Cly Parman" },
      { character_name: "Dietrich Gilburt", actor_name: "Cly Parman" }
    ]
  },
  {
    Title: "The Powerpuff Girls",
    Year: "1998–2005",
    imdbID: "tt0175058",
    Type: "series",
    Poster:
      "https://ia.media-imdb.com/images/M/MV5BODdmZmFlMGUtZWE5NC00NmU5LTg3NzItOTNjNDc4ZTc2YzI1XkEyXkFqcGdeQXVyNjM1MTQ0NTQ@._V1_SX300.jpg",
    review_average: 2,
    review_count: 2542,
    extra_images: "http://dummyimage.com/311x213.jpg/5fa2dd/ffffff",
    director: "Hedwiga O'Henery",
    writer: "Bryn Vian",
    release_date: "09/06/2017",
    movie_rating: "G",
    movie_length: "1 hour",
    actor_info: [
      { character_name: "Marin Cumo", actor_name: "Blythe Yitzhakof" },
      { character_name: "Jerrome Hutable", actor_name: "Caressa Tewes" },
      { character_name: "Rodrique Fieller", actor_name: "Tracy Tetla" },
      { character_name: "Lorry Jannaway", actor_name: "Dita Cowoppe" },
      { character_name: "Warner Spreull", actor_name: "Henrietta Pesek" },
      { character_name: "Warner Spreull", actor_name: "Henrietta Pesek" }
    ]
  },
  {
    Title: "Beautiful Girls",
    Year: "1996",
    imdbID: "tt0115639",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTQ4OTU0ODktY2E5YS00MGFhLTgwZTEtZWFkOGMxMmFmOTg0XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
    review_average: 3,
    review_count: 7649,
    extra_images: "http://dummyimage.com/218x328.jpg/ff4444/ffffff",
    director: "Clerissa Bradnock",
    writer: "Artemas Dufall",
    release_date: "12/09/2017",
    movie_length: "1 hour and 5 minutes",
    actor_info: [
      {
        character_name: "Cirstoforo Leggis",
        actor_name: "Hughie Szymanowicz"
      },
      { character_name: "Caty Huot", actor_name: "Sadie Gyrgorcewicx" },
      { character_name: "Estel Mosdell", actor_name: "Candide Undy" },
      { character_name: "Boris Castellone", actor_name: "Paton Wardroper" },
      { character_name: "Zulema Ibert", actor_name: "Audy Elders" },
      { character_name: "Zulema Ibert", actor_name: "Audy Elders" }
    ]
  },
  {
    Title: "The Final Girls",
    Year: "2015",
    imdbID: "tt2118624",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjI4Nzk2NzAzOV5BMl5BanBnXkFtZTgwNjI1NzY4NjE@._V1_SX300.jpg",
    review_average: 8,
    review_count: 6665,
    extra_images: "http://dummyimage.com/296x252.jpg/dddddd/000000",
    director: "Gustav Bramford",
    writer: "Jacky Tidey",
    release_date: "11/21/2017",
    movie_rating: "R",
    movie_length: "1 hour and 35 minutes",
    actor_info: [
      { character_name: "Matty Fasler", actor_name: "Darsey Breeton" },
      { character_name: "Elysia Parades", actor_name: "Roxana Moorton" },
      { character_name: "Walt Eskrick", actor_name: "Mahala Pitcaithley" },
      { character_name: "Pamelina Fills", actor_name: "Kathie Furst" },
      { character_name: "Carver Grace", actor_name: "Lida Ebbutt" },
      { character_name: "Carver Grace", actor_name: "Lida Ebbutt" }
    ]
  },
  {
    Title: "The Golden Girls",
    Year: "1985–1992",
    imdbID: "tt0088526",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTIwMDE0ODU0Nl5BMl5BanBnXkFtZTcwMjg5MDcyMQ@@._V1_SX300.jpg",
    review_average: 4,
    review_count: 195,
    extra_images: "http://dummyimage.com/202x218.jpg/5fa2dd/ffffff",
    director: "Yolande Dirr",
    writer: "Zacherie Horney",
    release_date: "09/14/2017",
    movie_length: "1 hour and 20 minutes",
    actor_info: [
      { character_name: "Carmelle Weblin", actor_name: "Blisse Halbeard" },
      { character_name: "Fidel Johnsey", actor_name: "Orelle Trustie" },
      { character_name: "Brendan Wadham", actor_name: "Cherry Tetley" },
      { character_name: "Enos Fillingham", actor_name: "Wes Denholm" },
      { character_name: "Jeanie Fanstone", actor_name: "Regan Leyninye" },
      { character_name: "Jeanie Fanstone", actor_name: "Regan Leyninye" }
    ]
  },
  {
    Title: "Weird Science",
    Year: "1985",
    imdbID: "tt0090305",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzg1N2JlYWYtMmU3Zi00MzhiLWJiN2EtNzJkZjI1Njc1ZmFlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    review_average: 8,
    review_count: 850,
    extra_images: "http://dummyimage.com/284x209.jpg/ff4444/ffffff",
    director: "Bink Anscombe",
    writer: "Petey Jaquet",
    release_date: "11/08/2017",
    movie_rating: "R",
    movie_length: "1 hour and 35 minutes",
    actor_info: [
      { character_name: "Eli Field", actor_name: "Dasha Maun" },
      { character_name: "Shelby Targe", actor_name: "Junina Eldritt" },
      { character_name: "Ly Hrus", actor_name: "Burl Cubbit" },
      { character_name: "Roseline Pyper", actor_name: "Alford Skottle" },
      { character_name: "Eddi L'Archer", actor_name: "Lorilee Dibdin" },
      { character_name: "Eddi L'Archer", actor_name: "Lorilee Dibdin" }
    ]
  },
  {
    Title: "The Science of Sleep",
    Year: "2006",
    imdbID: "tt0354899",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTg3NTcxNzY5NV5BMl5BanBnXkFtZTcwODk5NTQzMQ@@._V1_SX300.jpg",
    review_average: 9,
    review_count: 6005,
    extra_images: "http://dummyimage.com/309x250.jpg/ff4444/ffffff",
    director: "Liva Yemm",
    writer: "Justinn Beelby",
    release_date: "02/26/2018",
    movie_rating: "R",
    movie_length: "1 hour and 50 minutes",
    actor_info: [
      { character_name: "Hussein Curcher", actor_name: "Tuck Shills" },
      { character_name: "Carry Cowe", actor_name: "Roseanna Custed" },
      { character_name: "Kaiser Mayston", actor_name: "Bianca O'Crotty" },
      { character_name: "Delinda Brugman", actor_name: "Eleanor Bertome" }
    ]
  },
  {
    Title: "Mystery Science Theater 3000",
    Year: "1988–1999",
    imdbID: "tt0094517",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc4Nzc0Mzc5M15BMl5BanBnXkFtZTcwMDYzNTYyMQ@@._V1._CR11,6,331,452_SY132_CR4,0,89,132_AL_.jpg_V1_SX300.jpg",
    review_average: 10,
    review_count: 6874,
    extra_images: "http://dummyimage.com/244x400.jpg/ff4444/ffffff",
    director: "Starla Hentzeler",
    writer: "Meg Blackden",
    release_date: "01/18/2018",
    movie_rating: "R",
    movie_length: "2 hour and 5 minutes",
    actor_info: [
      { character_name: "Mohammed Stroud", actor_name: "Michale Gostyke" },
      { character_name: "Tamera Swinford", actor_name: "Chantal Suarez" },
      { character_name: "Chadwick Quogan", actor_name: "Nicol Lorenzin" },
      { character_name: "Rufus Braznell", actor_name: "Whitaker Dowse" }
    ]
  },
  {
    Title: "Mystery Science Theater 3000: The Movie",
    Year: "1996",
    imdbID: "tt0117128",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzNmN2UzNTAtNmZkMS00MmI3LThhNzEtNjI1YjJlN2JiZjU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    review_average: 3,
    review_count: 6792,
    extra_images: "http://dummyimage.com/372x259.jpg/ff4444/ffffff",
    director: "Loretta Dunsford",
    writer: "Robinet Dorkens",
    release_date: "01/17/2018",
    movie_length: "1 hour and 5 minutes",
    actor_info: [
      { character_name: "Else Hutten", actor_name: "Koral Stollwerk" },
      {
        character_name: "Roosevelt Fenelow",
        actor_name: "Sheila-kathryn Gabel"
      },
      { character_name: "Zena Smuth", actor_name: "Austen McVaugh" },
      { character_name: "Fulvia Bagby", actor_name: "Sallie Attewill" }
    ]
  },
  {
    Title: "Rocket Science",
    Year: "2007",
    imdbID: "tt0477078",
    Type: "movie",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4NDYzOTMwNl5BMl5BanBnXkFtZTcwMTAwNzE1MQ@@._V1_SX300.jpg",
    review_average: 3,
    review_count: 3592,
    extra_images: "http://dummyimage.com/234x333.jpg/cc0000/ffffff",
    director: "Barnabas Loweth",
    writer: "Sybille Pearcey",
    release_date: "06/18/2018",
    movie_length: "1 hour and 5 minutes",
    actor_info: [
      { character_name: "Franzen Gurnay", actor_name: "Karna Templeton" },
      { character_name: "Ariel Abdee", actor_name: "Sidonnie Coxhell" },
      { character_name: "Diana Bonallick", actor_name: "Nealson Lidell" },
      { character_name: "Brand Woolsey", actor_name: "Hubert Twitching" }
    ]
  },
  {
    Title: "Bill Nye, the Science Guy",
    Year: "1993–1998",
    imdbID: "tt0173528",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTI0NjcwNTkxOV5BMl5BanBnXkFtZTcwNjU5NjMyMQ@@._V1_SX300.jpg",
    review_average: 6,
    review_count: 2011,
    extra_images: "http://dummyimage.com/206x204.jpg/cc0000/ffffff",
    director: "Lorianne Bernon",
    writer: "Adrian Gimbrett",
    release_date: "02/08/2018",
    movie_rating: "PG-13",
    movie_length: "1 hour and 30 minutes",
    actor_info: [
      { character_name: "Daveta Gommes", actor_name: "Marwin Menel" },
      { character_name: "Merell Cleobury", actor_name: "Pippo Poulett" },
      { character_name: "Nicoli Warden", actor_name: "Caspar MacCroary" },
      { character_name: "Wandis Deniscke", actor_name: "Letti Jayne" }
    ]
  },
  {
    Title: "My Science Project",
    Year: "1985",
    imdbID: "tt0089652",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMmYxZWY5ZTEtNDBiNC00N2FiLWJhNzMtOTcxMDM0YWE4ZjVlXkEyXkFqcGdeQXVyMjY3MjUzNDk@._V1_SX300.jpg",
    review_average: 6,
    review_count: 770,
    extra_images: "http://dummyimage.com/358x384.jpg/cc0000/ffffff",
    director: "Erda Bragg",
    writer: "Deonne Semper",
    release_date: "09/03/2018",
    movie_rating: "PG-13",
    movie_length: "1 hour and 30 minutes",
    actor_info: [
      { character_name: "Marcellus Takle", actor_name: "Sophia Forlonge" },
      { character_name: "Carolee O'Caine", actor_name: "Derry Twinbourne" },
      { character_name: "Nance Stannion", actor_name: "Sandie Brader" },
      { character_name: "Kara Basnall", actor_name: "Noell Ather" }
    ]
  },
  {
    Title: "Brainiac: Science Abuse",
    Year: "2003–2008",
    imdbID: "tt0442633",
    Type: "series",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxODU4MDA2MV5BMl5BanBnXkFtZTcwMTg4NDEzMQ@@._V1_SX300.jpg",
    review_average: 8,
    review_count: 8353,
    extra_images: "http://dummyimage.com/272x271.jpg/ff4444/ffffff",
    director: "Raff Gaitskell",
    writer: "Kirby Titchard",
    release_date: "12/19/2017",
    movie_rating: "R",
    movie_length: "1 hour and 35 minutes",
    actor_info: [
      { character_name: "Pippy Dockerty", actor_name: "Carol Gould" },
      { character_name: "Creigh Burrett", actor_name: "Jens Yggo" },
      { character_name: "Alessandra Eager", actor_name: "Eliot Hanrahan" },
      { character_name: "Leann Arents", actor_name: "Oralla Sclanders" }
    ]
  },
  {
    Title: "Weird Science",
    Year: "1994–1998",
    imdbID: "tt0108988",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzg2NjEwMjQ2OF5BMl5BanBnXkFtZTgwNjYxNjkwMzE@._V1_SX300.jpg",
    review_average: 7,
    review_count: 1751,
    extra_images: "http://dummyimage.com/355x391.jpg/cc0000/ffffff",
    director: "Yorgo Figurski",
    writer: "Zaria Reyna",
    release_date: "10/23/2017",
    movie_length: "1 hour and 40 minutes",
    actor_info: [
      { character_name: "Wolf Sackett", actor_name: "Tab Vicar" },
      { character_name: "Jodee Spillard", actor_name: "Ofilia Ikringill" },
      { character_name: "Olia Leeson", actor_name: "Denney Depport" },
      { character_name: "Sherwood Aveling", actor_name: "Chery Glanz" }
    ]
  },
  {
    Title: "Mystery Science Theater 3000: The Return",
    Year: "2017–",
    imdbID: "tt6782014",
    Type: "series",
    Poster:
      "https://ia.media-imdb.com/images/M/MV5BZjc0NGY5NzQtZWU5YS00NzY5LTk2YzMtMmYwZmYzNTAwNTZjXkEyXkFqcGdeQXVyNzUxNzY1NjM@._V1_SX300.jpg",
    review_average: 4,
    review_count: 5061,
    extra_images: "http://dummyimage.com/228x236.jpg/5fa2dd/ffffff",
    director: "Thelma Yakutin",
    writer: "Ealasaid Anfossi",
    release_date: "10/09/2017",
    movie_length: "1 hour and 20 minutes",
    actor_info: [
      { character_name: "Corbett Easom", actor_name: "Kirsti Castelin" },
      { character_name: "Tammy Patillo", actor_name: "Dov Loud" },
      { character_name: "Kay Ortner", actor_name: "Hazlett Engeham" },
      { character_name: "Chere Bewlie", actor_name: "Justina Emerton" }
    ]
  }
];

module.exports.movies = movies;
