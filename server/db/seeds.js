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
            image: "images/aardonyx.png"
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
            image: "images/abelisaurus.png"
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
            image: "images/achelousaurus.png"
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
            image: "images/achillobator.png"
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
            image: "images/acrocanthosaurus.png"
        },
        {
            name: "Allosaurus",
            diet: "carnivorous",
            period: "Late Jurassic 156-144 million years ago",
            lived_in: "USA",
            type: "large theropod",
            length: "12.0m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Tetanurae Avetheropoda Carnosauria Allosauroidea Allosauridae",
            named_by: "Marsh (1877)",
            species: "fragilis",
            link: "https://www.nhm.ac.uk/discover/dino-directory/allosaurus.html",
            image: "images/allosaurus.png"
        },
        {
            name: "Arrhinoceratops",
            diet: "herbivorous",
            period: "Late Cretaceous 72-67 million years ago",
            lived_in: "Canada",
            type: "ceratopsian",
            length: "6.0m",
            taxonomy: "Dinosauria Ornithischia Genasauria Cerapoda Marginocephalia Ceratopsia Neoceratopsia Coronosauria Ceratopsidae Chasmosaurinae",
            named_by: "Parks (1925)",
            species: "brachyops",
            link: "https://www.nhm.ac.uk/discover/dino-directory/arrhinoceratops.html",
            image: "images/arrhinoceratops.png"
        },
        {
            name: "Bambiraptor",
            diet: "carnivorous",
            period: "Late Cretaceous 84-71 million years ago",
            lived_in: "USA",
            type: "small theropod",
            length: "1.0m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Tetanurae Avetheropoda Coelurosauria Tyrannoraptora Maniraptoriformes Maniraptora Paraves Eumaniraptora Dromaeosauridae",
            named_by: "Burnham Derstler Currie Bakker Zhou and Ostrom (2000)",
            species: "feinbergorum",
            link: "https://www.nhm.ac.uk/discover/dino-directory/bambiraptor.html",
            image: "images/bambiraptor.png"
        },
        {
            name: "Brachiosaurus",
            diet: "herbivorous",
            period: "Late Jurassic 155-140 million years ago",
            lived_in: "USA",
            type: "sauropod",
            length: "30.0m",
            taxonomy: "Dinosauria Saurischia Sauropodomorpha Sauropoda Eusauropoda Neosauropoda Macronaria Camarasauromorpha Titanosauriformes Brachiosauridae",
            named_by: "Riggs (1903)",
            species: "altithorax",
            link: "https://www.nhm.ac.uk/discover/dino-directory/brachiosaurus.html",
            image: "images/brachiosaurus.png"
        },
        {
            name: "Centrosaurus",
            diet: "herbivorous",
            period: "Late Cretaceous 76-74 million years ago",
            lived_in: "Canada",
            type: "ceratopsian",
            length: "6.0m",
            taxonomy: "Dinosauria Ornithischia Genasauria Cerapoda Marginocephalia Ceratopsia Neoceratopsia Coronosauria Ceratopsidae Centrosaurinae",
            named_by: "apertus",
            species: "",
            link: "https://www.nhm.ac.uk/discover/dino-directory/centrosaurus.html",
            image: "images/centrosaurus.png"
        },
        {
            name: "Chasmosaurus",
            diet: "herbivorous",
            period: "Late Cretaceous 76-74 million years ago",
            lived_in: "Canada",
            type: "ceratopsian",
            length: "5.0m",
            taxonomy: "Dinosauria Ornithischia Genasauria Cerapoda Marginocephalia Ceratopsia Neoceratopsia Coronosauria Ceratopsidae Chasmosaurinae",
            named_by: "belli",
            species: "",
            link: "https://www.nhm.ac.uk/discover/dino-directory/chasmosaurus.html",
            image: "images/chasmosaurus.png"
        },
        {
            name: "Chungkingosaurus",
            diet: "herbivorous",
            period: "Late Jurassic 159-142 million years ago",
            lived_in: "China",
            type: "armoured dinosaur",
            length: "4.0m",
            taxonomy: "Dinosauria Ornithischia Genasauria Thyreophora Stegosauria Stegosauridae Stegosaurinae",
            named_by: "Dong Zhou and Zhang (1983)",
            species: "jiangbeiensis",
            link: "https://www.nhm.ac.uk/discover/dino-directory/chungkingosaurus.html",
            image: "images/chungkingosaurus.png"
        },
        {
            name: "Diplodocus",
            diet: "herbivorous",
            period: "Late Jurassic 155-145 million years ago",
            lived_in: "USA",
            type: "sauropod",
            length: "26.0m",
            taxonomy: "Dinosauria Saurischia Sauropodomorpha Sauropoda Eusauropoda Neosauropoda Diplodocoidea Diplodocidae",
            named_by: "Marsh (1878)",
            species: "longus",
            link: "https://www.nhm.ac.uk/discover/dino-directory/diplodocus.html",
            image: "images/diplodocus.png"
        },
        {
            name: "Dryptosaurus",
            diet: "carnivorous",
            period: "Late Cretaceous 84-65 million years ago",
            lived_in: "USA",
            type: "large theropod",
            length: "6.4m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Tetanurae Avetheropoda Coelurosauria Tyrannoraptora Tyrannosauroidea",
            named_by: "Cope (1866)",
            species: "aquilunguis",
            link: "https://www.nhm.ac.uk/discover/dino-directory/dryptosaurus.html",
            image: "images/dryptosaurus.png"
        },
        {
            name: "Einiosaurus",
            diet: "herbivorous",
            period: "Late Cretaceous 74 million years ago",
            lived_in: "USA",
            type: "ceratopsian",
            length: "6.0m",
            taxonomy: "Dinosauria Ornithischia Genasauria Cerapoda Marginocephalia Ceratopsia Neoceratopsia Coronosauria Ceratopsidae Centrosaurinae",
            named_by: "Sampson  (1995)",
            species: "procurvicornis",
            link: "https://www.nhm.ac.uk/discover/dino-directory/einiosaurus.html",
            image: "images/einiosaurus.png"
        },
        {
            name: "Eoraptor",
            diet: "carnivorous",
            period: "Late Triassic 228 million years ago",
            lived_in: "Argentina",
            type: "small theropod",
            length: "1.0m",
            taxonomy: "Dinosauria Saurischia Theropoda",
            named_by: "Sereno Forster Rogers and Monetta (1993)",
            species: "lunensis",
            link: "https://www.nhm.ac.uk/discover/dino-directory/eoraptor.html",
            image: "images/eoraptor.png"
        },
        {
            name: "Fukuiraptor",
            diet: "carnivorous",
            period: "Early Cretaceous 121-99 million years ago",
            lived_in: "Japan",
            type: "large theropod",
            length: "4.2m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Tetanurae Avetheropoda Carnosauria",
            named_by: "Azuma and Currie (2000)",
            species: "kitadaniensis",
            link: "https://www.nhm.ac.uk/discover/dino-directory/fukuiraptor.html",
            image: "images/fukuiraptor.png"
        },
        {
            name: "Gasosaurus",
            diet: "carnivorous",
            period: "Mid Jurassic 170-160 million years ago",
            lived_in: "China",
            type: "small theropod",
            length: "4.0m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Tetanurae Avetheropoda",
            named_by: "Dong and Tang (1985)",
            species: "constructus",
            link: "https://www.nhm.ac.uk/discover/dino-directory/gasosaurus.html",
            image: "images/gasosaurus.png"
        },
        {
            name: "Giganotosaurus",
            diet: "carnivorous",
            period: "Early Cretaceous 112-90 million years ago",
            lived_in: "Argentina",
            type: "large theropod",
            length: "12.5m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Tetanurae Avetheropoda Carnosauria Allosauroidea Carcharodontosauridae",
            named_by: "Coria and Salgado (1995)",
            species: "carolinii",
            link: "https://www.nhm.ac.uk/discover/dino-directory/giganotosaurus.html",
            image: "images/giganotosaurus.png"
        },
        {
            name: "Gorgosaurus",
            diet: "carnivorous",
            period: "Late Cretaceous 80-73 million years ago",
            lived_in: "USA",
            type: "large theropod",
            length: "8.6m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Tetanurae Avetheropoda Coelurosauria Tyrannoraptora Tyrannosauroidea Tyrannosauridae Albertosaurinae",
            named_by: "Lamb (1914)",
            species: "libratus",
            link: "https://www.nhm.ac.uk/discover/dino-directory/gorgosaurus.html",
            image: "images/gorgosaurus.png"
        },
        {
            name: "Hylaeosaurus",
            diet: "herbivorous",
            period: "Early Cretaceous 150-135 million years ago",
            lived_in: "United Kingdom",
            type: "armoured dinosaur",
            length: "5.0m",
            taxonomy: "Dinosauria Ornithischia Genasauria Thyreophora Ankylosauromorpha Ankylosauria",
            named_by: "Mantell (1833)",
            species: "armatus",
            link: "https://www.nhm.ac.uk/discover/dino-directory/hylaeosaurus.html",
            image: "images/hylaeosaurus.png"
        },
        {
            name: "Iguanodon",
            diet: "herbivorous",
            period: "Early Cretaceous 140-110 million years ago",
            lived_in: "United Kingdom",
            type: "euornithopod",
            length: "10.0m",
            taxonomy: "Dinosauria Ornithischia Genasauria Cerapoda Ornithopoda Euornithopoda Iguanadontia Euiguanadontia Dryomorpha Ankylopollexia Iguanodontoidea",
            named_by: "Boulenger and van Beneden (1881)",
            species: "bernissartensis",
            link: "https://www.nhm.ac.uk/discover/dino-directory/iguanodon.html",
            image: "images/iguanodon.png"
        },
        {
            name: "Irritator",
            diet: "carnivorous",
            period: "Early Cretaceous 112-99 million years ago",
            lived_in: "Brazil",
            type: "large theropod",
            length: "6.5m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Tetanurae Spinosauroidea Spinosauridae Spinosaurinae",
            named_by: "Martill Cruickshank Frey Small and Clarke (1996)",
            species: "challengeri",
            link: "https://www.nhm.ac.uk/discover/dino-directory/irritator.html",
            image: "images/irritator.png"
        },
        {
            name: "Juravenator",
            diet: "carnivorous",
            period: "Late Jurassic 154-151 million years ago",
            lived_in: "Germany",
            type: "small theropod",
            length: "0.8m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Tetanurae Avetheropoda Coelurosauria Compsognathidae",
            named_by: "G\u00f6hlich &amp; Chiappe (2006)",
            species: "starki",
            link: "https://www.nhm.ac.uk/discover/dino-directory/juravenator.html",
            image: "images/juravenator.png"
        },
        {
            name: "Khaan",
            diet: "omnivorous",
            period: "Late Cretaceous 81-75 million years ago",
            lived_in: "Mongolia",
            type: "small theropod",
            length: "1.8m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Tetanurae Avetheropoda Coelurosauria Tyrannoraptora Maniraptoriformes Maniraptora Oviraptorosauria Caenagnathoidea Oviraptoridae Ingeniinae",
            named_by: "Clark Norell and Barsbold (2001)",
            species: "mckennai",
            link: "https://www.nhm.ac.uk/discover/dino-directory/khaan.html",
            image: "images/khaan.png"
        },
        {
            name: "Leptoceratops",
            diet: "herbivorous",
            period: "Late Cretaceous 67-65 million years ago",
            lived_in: "USA",
            type: "ceratopsian",
            length: "3.0m",
            taxonomy: "Dinosauria Ornithischia Genasauria Cerapoda Marginocephalia Ceratopsia Neoceratopsia Coronosauria",
            named_by: "Brown (1914)",
            species: "gracilis",
            link: "https://www.nhm.ac.uk/discover/dino-directory/leptoceratops.html",
            image: "images/leptoceratops.png"
        },
        {
            name: "Liliensternus",
            diet: "carnivorous",
            period: "Late Triassic 205-202 million years ago",
            lived_in: "Germany",
            type: "small theropod",
            length: "5.0m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda",
            named_by: "Huene (1934)",
            species: "liliensterni",
            link: "https://www.nhm.ac.uk/discover/dino-directory/liliensternus.html",
            image: "images/liliensternus.png"
        },
        {
            name: "Lurdusaurus",
            diet: "herbivorous",
            period: "Early Cretaceous 121-112 million years ago",
            lived_in: "Niger",
            type: "euornithopod",
            length: "9.0m",
            taxonomy: "Dinosauria Ornithischia Genasauria Cerapoda Ornithopoda Euornithopoda Iguanadontia Euiguanadontia Dryomorpha Ankylopollexia Iguanodontoidea",
            named_by: "Taquet &amp; Russell (1999)",
            species: "arenatus",
            link: "https://www.nhm.ac.uk/discover/dino-directory/lurdusaurus.html",
            image: "images/lurdusaurus.png"
        },
        {
            name: "Magyarosaurus",
            diet: "herbivorous",
            period: "Late Cretaceous 71-65 million years ago",
            lived_in: "Romania",
            type: "sauropod",
            length: "5.0m",
            taxonomy: "Dinosauria Saurischia Sauropodomorpha Sauropoda Eusauropoda Neosauropoda Macronaria Camarasauromorpha Titanosauriformes Titanosauria Lithostrotia",
            named_by: "Nopcsa (1915)",
            species: "dacus",
            link: "https://www.nhm.ac.uk/discover/dino-directory/magyarosaurus.html",
            image: "images/magyarosaurus.png"
        },
        {
            name: "Megalosaurus",
            diet: "carnivorous",
            period: "Mid Jurassic 170-155 million years ago",
            lived_in: "United Kingdom",
            type: "large theropod",
            length: "9.0m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Tetanurae Spinosauroidea Megalosauridae Megalosaurinae",
            named_by: "Ritgen (1826)",
            species: "bucklandii",
            link: "https://www.nhm.ac.uk/discover/dino-directory/megalosaurus.html",
            image: "images/megalosaurus.png"
        },
        {
            name: "Metriacanthosaurus",
            diet: "carnivorous",
            period: "Late Jurassic 159-154 million years ago",
            lived_in: "United Kingdom",
            type: "large theropod",
            length: "8.2m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Tetanurae",
            named_by: "Walker (1964)",
            species: "parkeri",
            link: "https://www.nhm.ac.uk/discover/dino-directory/metriacanthosaurus.html",
            image: "images/metriacanthosaurus.png"
        },
        {
            name: "Microceratus",
            diet: "herbivorous",
            period: "Late Cretaceous 86-66 million years ago",
            lived_in: "Mongolia",
            type: "ceratopsian",
            length: "0.5m",
            taxonomy: "Dinosauria Ornithischia Genasauria Cerapoda Marginocephalia Ceratopsia Neoceratopsia Coronosauria",
            named_by: "Bohlin (1953)",
            species: "gobiensis",
            link: "https://www.nhm.ac.uk/discover/dino-directory/microceratus.html",
            image: "images/microceratus.png"
        },
        {
            name: "Microraptor",
            diet: "carnivorous",
            period: "Early Cretaceous 125-122 million years ago",
            lived_in: "China",
            type: "small theropod",
            length: "0.8m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Tetanurae Avetheropoda Coelurosauria Tyrannoraptora Maniraptoriformes Maniraptora Paraves Eumaniraptora Dromaeosauridae",
            named_by: "Xu Zhou and Wang (2000)",
            species: "zhaoianus",
            link: "https://www.nhm.ac.uk/discover/dino-directory/microraptor.html",
            image: "images/microraptor.png"
        },
        {
            name: "Monolophosaurus",
            diet: "carnivorous",
            period: "Mid Jurassic 180-159 million years ago",
            lived_in: "China",
            type: "large theropod",
            length: "5.7m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Tetanurae Avetheropoda Carnosauria",
            named_by: "Zhao and Currie (1993)",
            species: "jiangi",
            link: "https://www.nhm.ac.uk/discover/dino-directory/monolophosaurus.html",
            image: "images/monolophosaurus.png"
        },
        {
            name: "Nemegtosaurus",
            diet: "herbivorous",
            period: "Late Cretaceous 72-68 million years ago",
            lived_in: "Mongolia",
            type: "sauropod",
            length: "13.0m",
            taxonomy: "Dinosauria Saurischia Sauropodomorpha Sauropoda Eusauropoda Neosauropoda Diplodocoidea Nemegtosauridae",
            named_by: "Nowinski (1971)",
            species: "mongoliensis",
            link: "https://www.nhm.ac.uk/discover/dino-directory/nemegtosaurus.html",
            image: "images/nemegtosaurus.png"
        },
        {
            name: "Nomingia",
            diet: "omnivorous",
            period: "Late Cretaceous 72-68 million years ago",
            lived_in: "Mongolia",
            type: "small theropod",
            length: "1.6m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Tetanurae Avetheropoda Coelurosauria Tyrannoraptora Maniraptoriformes Maniraptora Oviraptorosauria Caenagnathoidea Caenagnathidae",
            named_by: "Barsbold Osm\u00f3lska Watabe Currie and Tsogtbaatar (2000)",
            species: "gobiensis",
            link: "https://www.nhm.ac.uk/discover/dino-directory/nomingia.html",
            image: "images/nomingia.png"
        },
        {
            name: "Ouranosaurus",
            diet: "herbivorous",
            period: "Early Cretaceous 115-100 million years ago",
            lived_in: "Niger",
            type: "euornithopod",
            length: "7.0m",
            taxonomy: "Dinosauria Ornithischia Genasauria Cerapoda Ornithopoda Euornithopoda Iguanadontia Euiguanadontia Dryomorpha Ankylopollexia Iguanodontoidea",
            named_by: "Taquet (1976)",
            species: "nigeriensis",
            link: "https://www.nhm.ac.uk/discover/dino-directory/ouranosaurus.html",
            image: "images/ouranosaurus.png"
        },
        {
            name: "Pachyrhinosaurus",
            diet: "herbivorous",
            period: "Late Cretaceous 76-74 million years ago",
            lived_in: "Canada",
            type: "ceratopsian",
            length: "6.0m",
            taxonomy: "Dinosauria Ornithischia Genasauria Cerapoda Marginocephalia Ceratopsia Neoceratopsia Coronosauria Ceratopsidae Centrosaurinae",
            named_by: "Sternberg (1950)",
            species: "canadensis",
            link: "https://www.nhm.ac.uk/discover/dino-directory/pachyrhinosaurus.html",
            image: "images/pachyrhinosaurus.png"
        },
        {
            name: "Panoplosaurus",
            diet: "herbivorous",
            period: "Late Cretaceous 79-75 million years ago",
            lived_in: "USA",
            type: "armoured dinosaur",
            length: "7.0m",
            taxonomy: "Dinosauria Ornithischia Genasauria Thyreophora Ankylosauromorpha Ankylosauria Nodosauridae",
            named_by: "Lambe (1919)",
            species: "mirus",
            link: "https://www.nhm.ac.uk/discover/dino-directory/panoplosaurus.html",
            image: "images/panoplosaurus.png"
        },
        {
            name: "Patagosaurus",
            diet: "herbivorous",
            period: "Mid Jurassic 164-159 million years ago",
            lived_in: "Argentina",
            type: "sauropod",
            length: "18.0m",
            taxonomy: "Dinosauria Saurischia Sauropodomorpha Sauropoda Eusauropoda Cetiosauridae",
            named_by: "Bonaparte (1979)",
            species: "fariasi",
            link: "https://www.nhm.ac.uk/discover/dino-directory/patagosaurus.html",
            image: "images/patagosaurus.png"
        },
        {
            name: "Saltopus",
            diet: "carnivorous",
            period: "Late Triassic 221-210 million years ago",
            lived_in: "United Kingdom",
            type: "small theropod",
            length: "",
            taxonomy: "Dinosauria",
            named_by: "Huene (1910)",
            species: "elginensis",
            link: "https://www.nhm.ac.uk/discover/dino-directory/saltopus.html",
            image: "images/saltopus.png"
        },
        {
            name: "Sarcosaurus",
            diet: "carnivorous",
            period: "Early Jurassic 202-195 million years ago",
            lived_in: "United Kingdom",
            type: "small theropod",
            length: "3.0m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Ceratosauria",
            named_by: "Andrews (1921)",
            species: "woodi",
            link: "https://www.nhm.ac.uk/discover/dino-directory/sarcosaurus.html",
            image: "images/sarcosaurus.png"
        },
        {
            name: "Sinraptor",
            diet: "carnivorous",
            period: "Mid Jurassic 169-142 million years ago",
            lived_in: "China",
            type: "large theropod",
            length: "7.6m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Tetanurae Avetheropoda Carnosauria Allosauroidea Sinraptoridae",
            named_by: "Gao (1992)",
            species: "hepingensis",
            link: "https://www.nhm.ac.uk/discover/dino-directory/sinraptor.html",
            image: "images/sinraptor.png"
        },
        {
            name: "Stegosaurus",
            diet: "herbivorous",
            period: "Late Jurassic 155-145 million years ago",
            lived_in: "USA",
            type: "armoured dinosaur",
            length: "9.0m",
            taxonomy: "Dinosauria Ornithischia Genasauria Thyreophora Stegosauria Stegosauridae Stegosaurinae",
            named_by: "Marsh (1877)",
            species: "armatus",
            link: "https://www.nhm.ac.uk/discover/dino-directory/stegosaurus.html",
            image: "images/stegosaurus.png"
        },
        {
            name: "Styracosaurus",
            diet: "herbivorous",
            period: "Late Cretaceous 76-70 million years ago",
            lived_in: "USA",
            type: "ceratopsian",
            length: "5.5m",
            taxonomy: "Dinosauria Ornithischia Genasauria Cerapoda Marginocephalia Ceratopsia Neoceratopsia Coronosauria Ceratopsidae Centrosaurinae",
            named_by: "Lambe (1913)",
            species: "albertensis",
            link: "https://www.nhm.ac.uk/discover/dino-directory/styracosaurus.html",
            image: "images/styracosaurus.png"
        },
        {
            name: "Triceratops",
            diet: "herbivorous",
            period: "Late Cretaceous 68-66 million years ago",
            lived_in: "USA",
            type: "ceratopsian",
            length: "9.0m",
            taxonomy: "Dinosauria Ornithischia Genasauria Cerapoda Marginocephalia Ceratopsia Neoceratopsia Coronosauria Ceratopsidae Chasmosaurinae",
            named_by: "Marsh (1889)",
            species: "horridus",
            link: "https://www.nhm.ac.uk/discover/dino-directory/triceratops.html",
            image: "images/triceratops.png"
        },
        {
            name: "Tyrannosaurus",
            diet: "carnivorous",
            period: "Late Cretaceous 68-66 million years ago",
            lived_in: "USA",
            type: "large theropod",
            length: "12.0m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Tetanurae Avetheropoda Coelurosauria Tyrannoraptora Tyrannosauroidea Tyrannosauridae Tyrannosaurinae",
            named_by: "Osborn (1905)",
            species: "rex",
            link: "https://www.nhm.ac.uk/discover/dino-directory/tyrannosaurus.html",
            image: "images/tyrannosaurus.png"
        },
        {
            name: "Velociraptor",
            diet: "carnivorous",
            period: "Late Cretaceous 74-70 million years ago",
            lived_in: "Mongolia",
            type: "small theropod",
            length: "1.8m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Tetanurae Avetheropoda Coelurosauria Tyrannoraptora Maniraptoriformes Maniraptora Paraves Eumaniraptora Dromaeosauridae",
            named_by: "Osborn (1924)",
            species: "mongoliensis",
            link: "https://www.nhm.ac.uk/discover/dino-directory/velociraptor.html",
            image: "images/velociraptor.png"
        },
        {
            name: "pterodactyl",
            diet: "carnivorous",
            period: "Late Jurrassic 148-151 million years ago",
            lived_in: "Africa and the UK",
            type: "pterosaur",
            length: "1m",
            taxonomy: "Pterosauria",
            named_by: "Collini (1784)",
            species: "pterosaurs",
            link: "https://www.nhm.ac.uk/discover/dino-directory/prosaurolophus.html",
            image: "images/Pterodactyl.png"
        },
        {
            name: "YerMaw",
            diet: "carnivorous - Pork",
            period: "20th century 56 years ago",
            lived_in: "Yer Maws Hoose",
            type: "Grumpy",
            length: "1.5m",
            taxonomy: "Amphibian",
            named_by: "Bunyan (1990)",
            species: "Lizard",
            link: "https://www.urbandictionary.com/define.php?term=yer%20maw",
            image: "images/YerMaw.png"
        },
        {
            name: "yandusaurus",
            diet: "herbivorous",
            period: "Mid Jurassic 169-159 million years ago",
            lived_in: "China",
            type: "euornithopod",
            length: "3.0m",
            taxonomy: "Dinosauria Ornithischia Genasauria Cerapoda Ornithopoda Euornithopoda",
            named_by: "He (1979)",
            species: "hongheensis",
            link: "https://www.nhm.ac.uk/discover/dino-directory/yandusaurus.html",
            image:"images/yandusaurus.png"
        },
        {
            name: "yangchuanosaurus",
            diet: "carnivorous",
            period: "Late Jurassic 160-144 million years ago",
            lived_in: "China",
            type: "large theropod",
            length: "10.0m",
            taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Tetanurae Avetheropoda Carnosauria Allosauroidea Sinraptoridae",
            named_by: "Dong Chang Li and Zhou (1978)",
            species: "shangyouensis",
            link: "https://www.nhm.ac.uk/discover/dino-directory/yangchuanosaurus.html",
            image: "images/yangchuanosaurus.png"
        },
        {
            name: "yingshanosaurus",
            diet: "herbivorous",
            period: "Late Jurassic 159-142 million years ago",
            lived_in: "China",
            type: "armoured dinosaur",
            length: "",
            axonomy: "Dinosauria Ornithischia Genasauria Thyreophora Stegosauria",
            named_by: "Watanabe (1992)",
            species: "jichuanensis",
            link: "https://www.nhm.ac.uk/discover/dino-directory/yingshanosaurus.html",
            image:"images/yingshanosaurus.png"
        },
        {
            name: "yinlong",
            diet: "herbivorous",
            period: "Mid Jurassic 159-154 million years ago",
            lived_in: "China",
            type: "ceratopsian",
            length: "1.2m",
            taxonomy: "Dinosauria Ornithischia Genasauria Cerapoda Marginocephalia Ceratopsia",
            named_by: "Xu Forster Clark and Mo (2006)",
            species: "downsi",
            link: "https://www.nhm.ac.uk/discover/dino-directory/yinlong.html",
            image:"images/yinlong.png"
        },
        {
            name: "yuanmousaurus",
            diet: "herbivorous",
            period: "Mid Jurassic 180-159 million years ago",
            lived_in: "China",
            type: "sauropod",
            length: "17.0m",
            taxonomy: "Dinosauria Saurischia Sauropodomorpha Sauropoda Eusauropoda",
            named_by: "L\u00fc Li Ji Wang Zhang and Dong (2006)",
            species: "jiangyiensis",
            link: "https://www.nhm.ac.uk/discover/dino-directory/yuanmousaurus.html",
            image:"images/yuanmousaurus.png"
        },
        {
            name: "yunnanosaurus",
            diet: "omnivorous",
            period: "Early Jurassic 205-190 million years ago",
            lived_in: "China",
            type: "sauropod",
            length: "7.0m",
            taxonomy: "Dinosauria Saurischia Sauropodomorpha Prosauropoda Plateosauria",
            named_by: "Young (1942)",
            species: "huangi",
            link: "https://www.nhm.ac.uk/discover/dino-directory/yunnanosaurus.html",
            image: "images/yunnanosaurus.png"
        },
        {
            name: "zalmoxes",
            diet: "herbivorous",
            period: "Late Cretaceous 69 million years ago",
            lived_in: "Romania",
            type: "euornithopod",
            length: "3.0m",
            taxonomy: "Dinosauria Ornithischia Genasauria Cerapoda Ornithopoda Euornithopoda Iguanadontia Rhabdodontidae",
            named_by: "Nopcsa (1902)",
            species: "robustus",
            link: "https://www.nhm.ac.uk/discover/dino-directory/zalmoxes.html",
            image:"images/zalmoxes.png"
        },
        {
            name: "zephyrosaurus",
            diet: "herbivorous",
            period: "Early Cretaceous 120-110 million years ago",
            lived_in: "USA",
            type: "euornithopod",
            length: "1.8m",
            taxonomy: "Dinosauria Ornithischia Genasauria Cerapoda Ornithopoda Euornithopoda",
            named_by: "Sues (1980)",
            species: "schaffi",
            link: "https://www.nhm.ac.uk/discover/dino-directory/zephyrosaurus.html",
            image:"images/zephyrosaurus.png"
        },
        {
            name: "zuniceratops",
            diet: "herbivorous",
            period: "Late Cretaceous 94-89 million years ago",
            lived_in: "USA",
            type: "ceratopsian",
            length: "unknown",
            taxonomy: "Dinosauria Ornithischia Genasauria Cerapoda Marginocephalia Ceratopsia Neoceratopsia Coronosauria",
            named_by: "Wolfe and Kirkland (1998)",
            species: "christopheri",
            link: "https://www.nhm.ac.uk/discover/dino-directory/zuniceratops.html",
            image:"images/zuniceratops.png"
        }

    ])