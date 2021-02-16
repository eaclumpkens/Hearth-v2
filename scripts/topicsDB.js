const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/hearthdb"
);

const topicSeed = [
    {
       topic: "The Catcher in the Rye", 
       category: "Books",
       label: "the catcher in the rye",
       value: "the catcher in the rye",
       genre: ["Drama"],
       age_range: ["Young Adult"],
       image: "/images/topEntertainment/catcher-rye.jpg",
       description: "The Catcher in the Rye, novel by J.D. Salinger published in 1951. The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the “phoniness” of the adult world."
    },{
       topic: "Dune",
       category: "Books",
       label: "dune",
       value: "dune",
       genre: ["Action", "Adventure", "Sci-Fi"],
       age_range: ["Young Adult", "Adult"],
       image: "/images/topEntertainment/dune.jpg",
       description: "Dune is a science fiction novel written by Frank Herbert and published in 1965. ... The novel tells the story of young Paul Atreides, heir apparent to Duke Leto Atreides and scion of House Atreides, as he and his family relocate to the planet Arrakis, the universe's only source of the spice melange."
   },{
       topic: "The Haunting of Hill House",
       category: "Books",
       label: "the haunting of hill house",
       value: "the haunting of hill house",
       genre: ["Drama", "Horror", "Mystery", "Thriller"],
       age_range: "Adult",
       image: "/images/topEntertainment/hill-house.jpg",
       description: "The Haunting of Hill House book follows four strangers, all of whom come to Hill House, long-rumored to be haunted, under the guidance of Dr. Montague, who is hoping to scientifically prove the existence of the supernatural. Over the course of the summer, the house proves itself to be extremely haunted."
   },{
       topic: "The Hobbit",
       category: "Books",
       label: "the hobbit",
       value: "the hobbit",
       genre: ["Adventure", "Fantasy"],
       age_range: ["Young Adult", "Adult"],
       image: "/images/topEntertainment/hobbit.jpg",
       description: "The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by Smaug the dragon. Bilbo's journey takes him from light-hearted, rural surroundings into more sinister territory."
   },{
       topic: "The Hunger Games",
       category: "Books",
       label: "the hunger games",
       value: "the hunger games",
       genre: ["Action", "Adventure", "Sci-Fi", "Thriller"],
       age_range: ["Young Adult"],
       image: "/images/topEntertainment/hunger-games.jpg",
       description: "The Hunger Games is a 2008 dystopian novel by the American writer Suzanne Collins. It is written in the voice of 16-year-old Katniss Everdeen, who lives in the future, post-apocalyptic nation of Panem in North America. The Capitol, a highly advanced metropolis, exercises political control over the rest of the nation."
   },{
       topic: "Titanic",
       category: "Film",
       label: "titanic",
       value: "titanic",
       genre: ["Drama", "Romance"],
       age_range: ["Young Adult", "Adult"],
       age_rating: "PG-13",
       image: "/images/topEntertainment/titanic.jpg",
       description: "James Cameron's 'Titanic' is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era -- the 'ship of dreams' -- which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic in the early hours of April 15, 1912."
   },{
       topic: "Star Wars",
       category: "Film",
       label: "star wars",
       value: "star wars",
       genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
       age_range: ["Kids", "Young Adult", "Adult"],
       age_rating: "PG",
       image: "/images/topEntertainment/star-wars.jpg",
       description: "The Imperial Forces -- under orders from cruel Darth Vader (David Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker (Mark Hamill) and Han Solo (Harrison Ford), captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 (Kenny Baker) and C-3PO (Anthony Daniels) to rescue the beautiful princess, help the Rebel Alliance, and restore freedom and justice to the Galaxy."
   },{
       topic: "Gone with the Wind",
       category: "Film",
       label: "gone with the wind",
       value: "gone with the wind",
       genre: ["Drama", "History", "Romance", "War", "Classic"],
       age_range: ["Young Adult", "Adult"],
       age_rating: "G",
       image: "/images/topEntertainment/gone-wind.jpg",
       description: " Epic Civil War drama focuses on the life of petulant Southern belle Scarlett O'Hara. Starting with her idyllic life on a sprawling plantation, the film traces her survival through the tragic history of the South during the Civil War and Reconstruction, and her tangled love affairs with Ashley Wilkes and Rhett Butler."
   },{
       topic: "Dumb and Dumber",
       category: "Film",
       label: "dumb and dumber",
       value: "dumb and dumber",
       genre: ["Comedy"],
       age_range: ["Young Adult", "Adult"],
       age_rating: "PG-13",
       image: "/images/topEntertainment/dumb-dumber.jpg",
       description: "Imbecilic best friends Lloyd Christmas (Jim Carrey) and Harry Dunne (Jeff Daniels) stumble across a suitcase full of money left behind in Harry's car by Mary Swanson (Lauren Holly), who was on her way to the airport. The pair decide to go to Aspen, Colo., to return the money, unaware that it is connected to a kidnapping. As Harry and Lloyd -- who has fallen in love with Mary -- are pursued across the country by hired killers and police, they find both their friendship and their brains tested."
   },{
       topic: "Spirited Away",
       category: "Film",
       label: "spirited away",
       value: "spirited away",
       genre: ["Animation", "Adventure", "Family", "Fantasy", "Mystery"],
       age_range: ["Kids", "Young Adult", "Adult"],
       age_rating: "PG",
       image: "/images/topEntertainment/spirited-away.jpg",
       description: "In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park. After her mother and father are turned into giant pigs, Chihiro meets the mysterious Haku (Miyu Irino), who explains that the park is a resort for supernatural beings who need a break from their time spent in the earthly realm, and that she must work there to free herself and her parents."
   },{
       topic: "The Dark Knight",
       category: "Film",
       label: "the dark knight",
       value: "the dark knight",
       genre: ["Action", "Crime", "Drama", "Thriller"],
       age_range: ["Young Adult", "Adult"],
       age_rating: "PG-13",
       image: "/images/topEntertainment/dark-knight.jpg",
       description: "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism."
   },{
       topic: "Soul",
       category: "Film",
       label: "soul",
       value: "soul",
       genre: ["Animation", "Adventure", "Comedy", "Family", "Fantasy", "Music"],
       age_range: ["Kids"],
       age_rating: "PG",
       image: "/images/topEntertainment/soul.jpg",
       description: "Ever wonder where your passion, your dreams and your interests come from? What is it that makes you... YOU? In 2020, Pixar Animation Studios takes you on a journey from the streets of New York City to the cosmic realms to discover the answers to life's most important questions."
   },{
       topic: "Game of Thrones",
       category: "Television",
       label: "game of thrones",
       value: "game of thrones",
       genre: ["Action", "Drama", "Fantasy", "Romance"],
       age_range: ["Young Adult", "Adult"],
       age_rating: "16+",
       image: "/images/topEntertainment/game-thrones.jpg",
       description: "Game of Thrones is an HBO series that tells the story of a medieval country's civil war. When the story begins, a decade-long summer is ending, and winter looms as characters battle to claim the Iron Throne, the seat of the king of the Seven Kingdoms, the regime that rules all but the northern tip of Westeros."
   },{
       topic: "The Mandalorian",
       category: "Television",
       label: "the mandalorian",
       value: "the mandalorian",
       genre: ["Action", "Adventure", "Sci-Fi"],
       age_range: ["Young Adult", "Adult"],
       age_rating: "14+",
       image: "/images/topEntertainment/mandalorian.jpg",
       description: "Plot. Five years after the fall of the Empire, a Mandalorian bounty hunter collects a bounty after a scuffle exchange in a bar on Maldo Kreis and returns to a bounty hunting guildhall on Nevarro in his ship, the Razor Crest."
   },{
       topic: "The Crown",
       category: "Television",
       label: "the crown",
       value: "the crown",
       genre: ["Biography", "Drama", "History"],
       age_range: ["Young Adult", "Adult"],
       age_rating: "15+",
       image: "/images/topEntertainment/crown.jpg",
       description: "The Crown portrays the life of Queen Elizabeth II from her wedding in 1947 to Philip, Duke of Edinburgh, until the early 21st century. The first season depicts events up to 1955, with Winston Churchill resigning as prime minister and the Queen's sister Princess Margaret deciding not to marry Peter Townsend."
   },{
       topic: "Attack on Titan",
       category: "Television",
       label: "attack on titan",
       value: "attack on titan",
       genre: ["Animation", "Action", "Adventure", "Drama", "Fantasy", "Horror"],
       age_range: ["Young Adult", "Adult"],
       age_rating: "16+",
       image: "/images/topEntertainment/attack-titan.jpg",
       description: "It is set in a world where humanity lives inside cities surrounded by enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after a Titan brings about the destruction of his hometown and the death of his mother."
   },{
       topic: "Spongebob Squarepants",
       category: "Television",
       label: "spongebob squarepants",
       value: "spongebob squarepants",
       genre: ["Animation", "Comedy", "Family", "Fantasy"],
       age_range: ["Kids"],
       age_rating: "6+",
       image: "/images/topEntertainment/spongebob.jpg",
       description: "In this lively animated adventure, undersea oddball SpongeBob SquarePants and his starfish friend, Patrick, embark on a quest to clear the name of Mr. Krabs, the owner of the Krusty Krab restaurant, who has been framed for stealing the crown of ocean deity King Neptune. Leaving the familiar confines of Bikini Bottom, SpongeBob and Patrick venture out towards Shell City, where they hope to find Neptune's crown, but numerous obstacles stand (or float) in their way."
   },{
       topic: "Mindhunter",
       category: "Television",
       label: "mindhunter",
       value: "mindhunter",
       genre: ["Crime", "Drama", "Thriller"],
       age_range: ["Adult"],
       age_rating: "16+",
       image: "/images/topEntertainment/mindhunter.jpg",
       description: "Mindhunter revolves around FBI agents Holden Ford (Jonathan Groff) and Bill Tench (Holt McCallany), along with psychologist Wendy Carr (Anna Torv), who operate the FBI's Behavioral Science Unit within the Training Division at the FBI Academy in Quantico, Virginia."
   },{
       topic: "Planet Earth",
       category: "Television",
       label: "planet earth",
       value: "planet earth",
       genre: ["Documentary"],
       age_range: ["Kids", "Young Adult", "Adult"],
       age_rating: "5+",
       image: "/images/topEntertainment/planet-earth.jpg",
       description: "Planet Earth is a 2006 British television series produced by the BBC Natural History Unit. Five years in the making, it was the most expensive nature documentary series ever commissioned by the BBC and also the first to be filmed in high definition. The series received multiple awards, including four Emmy Awards, a Peabody Award, and an award from the Royal Television Society."
   },{
       topic: "Pulp Fiction",
       category: "Film",
       label: "pulp fiction",
       value: "pulp fiction",
       genre: ["Crime", "Drama"],
       age_range: ["Adult"],
       age_rating: "R",
       image: "/images/topEntertainment/pulp-fiction.jpg",
       description: "Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace (Ving Rhames) ; his actress wife, Mia (Uma Thurman) ; struggling boxer Butch Coolidge (Bruce Willis) ; master fixer Winston Wolfe (Harvey Keitel) and a nervous pair of armed robbers, 'Pumpkin' (Tim Roth) and 'Honey Bunny'' (Amanda Plummer)."
   },{
       topic: "Euphoria",
       category: "Television",
       label: "euphoria",
       value: "euphoria",
       genre: ["Drama", "LGTBQ"],
       age_range: ["Young Adult", "Adult"],
       age_rating: "14+",
       image: "/images/topEntertainment/euphoria.jpg",
       description: "A look at life for a group of high school students as they grapple with issues of drugs, sex and violence"
   },{
       topic: "Americanah",
       category: "Books",
       label: "americanah",
       value: "americanah",
       genre: ["Drama", "Romance"],
       age_range: ["Young Adult", "Adult"],
       image: "/images/topEntertainment/americanah.jpg",
       description: "Americanah tells the story of a young Nigerian woman, Ifemelu, who immigrates to the United States to attend university. The novel traces Ifemelu's life in both countries, threaded by her love story with high school classmate Obinze. It was Adichie's third novel, published on May 14, 2013 by Alfred A. Knopf."
   },{
       topic: "House",
       category: "Television",
       label: "house",
       value: "house",
       genre: ["Drama", "Mystery"],
       age_range: ["Young Adult", "Adult"],
       age_rating: "13+",
       image: "/images/topEntertainment/house.jpg",
       description: "An antisocial maverick doctor who specializes in diagnostic medicine does whatever it takes to solve puzzling cases that come his way using his crack team of doctors and his wits."
   },{
       topic: "Rick and Morty",
       category: "Television",
       label: "rick and morty",
       value: "rick and morty",
       genre: ["Animation", "Adventure", "Comedy", "Sci-Fi"],
       age_range: ["Young Adult", "Adult"],
       age_rating: "14+",
       image: "/images/topEntertainment/rick-morty.jpg",
       description: "An animated series that follows the exploits of a super scientist and his not-so-bright grandson."
   },{
       topic: "Lady Gaga",
       category: "Music",
       label: "lady gaga",
       value: "lady gaga",
       genre: ["Pop"],
       age_range: ["Young Adult", "Adult"],
       image: "/images/topEntertainment/lady-gaga.jpg",
       description: "Stefani Joanne Angelina Germanotta, known professionally as Lady Gaga, is an American singer, songwriter, and actress. She is known for her image reinventions and musical versatility. Gaga began performing as a teenager, singing at open mic nights and acting in school plays."
   },{
       topic: "Drake",
       category: "Music",
       label: "drake",
       value: "drake",
       genre: ["Rap", "R&B"],
       age_range: ["Young Adult", "Adult"],
       image: "/images/topEntertainment/drake.jpg",
       description: "Aubrey Drake Graham is a Canadian rapper, singer, songwriter, actor, and entrepreneur. A prominent figure in popular music, Drake is credited for popularizing the Toronto sound."
   },{
       topic: "Tim McGraw",
       category: "Music",
       label: "tim mcgraw",
       value: "tim mcgraw",
       genre: ["Country"],
       age_range: ["Young Adult", "Adult"],
       image: "/images/topEntertainment/tim-mcgraw.jpg",
       description: "Samuel Timothy McGraw is an American singer, actor, and record producer. McGraw has released fifteen studio albums. 10 of those albums have reached number 1 on the Top Country Albums charts, with his 1994 breakthrough album Not a Moment Too Soon being the top country album of 1994."
   },{
       topic: "Billie Eilish",
       category: "Music",
       label: "billie eilish",
       value: "billie eilish",
       genre: ["Pop"],
       age_range: ["Young Adult", "Adult"],
       image: "/images/topEntertainment/billie-eilish.jpg",
       description: "Billie Eilish Pirate Baird O'Connell is an American singer-songwriter. She first gained attention in 2015 when she uploaded the song 'Ocean Eyes' to SoundCloud, which was subsequently released by the Interscope Records subsidiary Darkroom."
   },{
       topic: "Fleetwood Mac",
       category: "Music",
       label: "fleetwood mac",
       value: "fleetwood mac",
       genre: ["Classic Rock"],
       age_range: ["Young Adult", "Adult"],
       image: "/images/topEntertainment/fleetwood-mac.jpg",
       description: "Fleetwood Mac are a British-American rock band, formed in London in 1967. Fleetwood Mac were founded by guitarist Peter Green, drummer Mick Fleetwood and guitarist Jeremy Spencer, before bassist John McVie joined the lineup for their self-topicd debut album. Danny Kirwan joined as a third guitarist in 1968."
   },{
       topic: "The Smiths",
       category: "Music",
       label: "the smiths",
       value: "the smiths",
       genre: ["Rock", "Britpop"],
       age_range: ["Young Adult", "Adult"],
       image: "/images/topEntertainment/the-smiths.jpg",
       description: "The Smiths were a British alternative rock band who released four studio albums between 1984 and 1987 and became regarded by many music critics as the most influential British guitar band of the period. Members were singer Morrissey, guitarist Johnny Marr, bassist Andy Rourke and drummer Mike Joyce."
   },{
       topic: "H.E.R.",
       category: "Music",
       label: "h.e.r.",
       value: "h.e.r.",
       genre: ["R&B", "Soul"],
       age_range: ["Young Adult", "Adult"],
       image: "/images/topEntertainment/h-e-r.jpg",
       description: "Gabriella Sarmiento Wilson, better known professionally as H.E.R., is an American singer and songwriter. After initial music appearances and singles under her real name, Wilson re-emerged in 2016 with the H.E.R. persona, releasing her debut EP H.E.R. Volume 1. She then released subsequent EPs H.E.R"
   },{
       topic: "Zedd",
       category: "Music",
       label: "zedd",
       value: "zedd",
       genre: ["Dance", "Electronic"],
       age_range: ["Young Adult", "Adult"],
       image: "/images/topEntertainment/zedd.jpg",
       description: "Anton Zaslavski, known professionally as Zedd, is a Russian-German DJ, record producer and songwriter. He primarily produces and performs electro house music, but has diversified his genre and musical style, drawing influences from progressive house, dubstep, and classical music."
   },{
       topic: "Black Sabbath",
       category: "Music",
       label: "black sabbath",
       value: "black sabbath",
       genre: ["Classic Metal", "Metal"],
       age_range: ["Young Adult", "Adult"],
       image: "/images/topEntertainment/black-sabbath.jpg",
       description: "Black Sabbath were an English rock band formed in Birmingham in 1968 by guitarist Tony Iommi, drummer Bill Ward, bassist Geezer Butler and vocalist Ozzy Osbourne. ... After previous iterations of the group called the Polka Tulk Blues Band and Earth, the band settled on the name Black Sabbath in 1969."
   },{
       topic: "Nirvana",         
       category: "Music",
       label: "nirvana",
       value: "nirvana",
       genre: ["Punk Rock", "Rock"],
       age_range: ["Young Adult", "Adult"],
       image: "/images/topEntertainment/nirvana.jpg",
       description: "Nirvana was an American rock band formed by lead singer and guitarist Kurt Cobain and bassist Krist Novoselic in Aberdeen, Washington, in 1987. Nirvana went through a succession of drummers, the longest-lasting and best-known being Dave Grohl, who joined in 1990."
   },{
       topic: "Jojo Siwa",
       category: "Music",
       label: "jojo siwa",
       value: "jojo siwa",
       genre: ["Pop", "Family"],
       age_range: ["Kids"],
       image: "/images/topEntertainment/jojo-siwa.jpg",
       description: "Joelle Joanie 'JoJo' Siwa is an American dancer, singer, actress, and YouTube personality. She is known for appearing for two seasons on Dance Moms along with her mother, Jessalynn Siwa, and for her singles 'Boomerang' and 'Kid in a Candy Store'."
   },{
       topic: "One Direction",
       category: "Music",
       label: "one direction",
       value: "one direction",
       genre: ["Rock", "Pop"],
       age_range: ["Kids", "Young Adult", "Adult"],
       image: "/images/topEntertainment/one-direction.jpg",
       description: "The band was formed in 2010 and consisted of Liam Payne, Louis Tomlinson, Niall Horan, Harry Styles and Zayn Malik. Niall Horan is the only Irish member of the band. Louis Tomlinson is the oldest member - born 24 December 1991, while the youngest is Harry Styles who was born February 1st 1994."
   }
];

db.Topic
    .remove({})
    .then(() => db.Topic.collection.insertMany(topicSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
  });