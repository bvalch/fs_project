use dinoProject;
db.dropDatabase();

db.dinos.insertMany(
    [
        {
            name: "Aardonyx",
            diet: "herbivorous",
            period: "Early Jurassic 199-189 million years ago",
            lived_in: "South Africa",
            type: "sauropod",
            length: "8.0m",
            taxonomy: "Dinosauria Saurischia Sauropodomorpha Prosauropoda Anchisauria",
            named_by: "Yates Bonnan Neveling Chinsamy and Blackbeard 2010 (2009)",
            species: "celestae",
            link: "https://www.nhm.ac.uk/discover/dino-directory/aardonyx.html",
            image: "images/aardonyx.jpeg"
        },
        {
            name: "Abelisaurus",
            diet: "carnivorous",
            period: "Late Cretaceous 74-70 million years ago",
            lived_in: "Argentina",
            type: "large theropod",
            length: "9.0m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Ceratosauria Neoceratosauria Abelisauridae Abelisaurinae",
            named_by: "Bonaparte and Novas (1985)",
            species: "comahuensis",
            link: "https://www.nhm.ac.uk/discover/dino-directory/abelisaurus.html",
            image: "images/abeilosaurus.jpeg"
        },
        {
            name: "Achelousaurus",
            diet: "herbivorous",
            period: "Late Cretaceous 83-70 million years ago",
            lived_in: "USA",
            type: "ceratopsian",
            length: "6.0m",
            taxonomy: "Dinosauria Ornithischia Genasauria Cerapoda Marginocephalia Ceratopsia Neoceratopsia Coronosauria Ceratopsidae Centrosaurinae",
            named_by: "Sampson  (1995)",
            species: "horneri",
            link: "https://www.nhm.ac.uk/discover/dino-directory/achelousaurus.html",
            image: "images/achelousaurus.jpeg"
        },
        {
            name: "Achillobator",
            diet: "carnivorous",
            period: "Late Cretaceous 99-84 million years ago",
            lived_in: "Mongolia",
            type: "large theropod",
            length: "5.0m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Tetanurae Avetheropoda Coelurosauria Tyrannoraptora Maniraptoriformes Maniraptora Paraves Eumaniraptora Dromaeosauridae",
            named_by: "Perle Norell and Clark (1999)",
            species: "giganteus",
            link: "https://www.nhm.ac.uk/discover/dino-directory/achillobator.html",
            image: "images/achillobator.jpeg"
        },
        {
            name: "Acrocanthosaurus",
            diet: "carnivorous",
            period: "Early Cretaceous 115-105 million years ago",
            lived_in: "USA",
            type: "large theropod",
            length: "12.0m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Tetanurae Avetheropoda Carnosauria Allosauroidea Carcharodontosauridae",
            named_by: "Stovall and Langston (1950)",
            species: "atokensis",
            link: "https://www.nhm.ac.uk/discover/dino-directory/acrocanthosaurus.html",
            image: "images/acrocanthosaurus.jpeg"
        }
    ])