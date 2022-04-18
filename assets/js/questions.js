// list of all questions, options, and answers
var questionList = [
    {
        title: "Who's that Pokemon?",
        options: ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"],
        answer: "Bulbasaur",
        image: "./assets/images/1-Bulbasaur.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Venonat", "Paras", "Golbat", "Ivysaur"],
        answer: "Ivysaur",
        image: "./assets/images/2-Ivysaur.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Bulbasaur", "Ivysaur", "Venomoth", "Venusaur"],
        answer: "Venusaur",
        image: "./assets/images/3-Venusaur.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"],
        answer: "Charmander",
        image: "./assets/images/4-Charmander.jpg"
    },
    
    {
        title: "Who's that Pokemon?",
        options: ["Venomoth", "Charmeleon", "Charmander", "Squirtle"],
        answer: "Charmeleon",
        image: "./assets/images/5-Charmeleon.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Charizard", "Vileplume", "Charmander", "Venonat"],
        answer: "Charizard",
        image: "./assets/images/6-Charizard.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Pikachu", "Paras", "Charmander", "Squirtle"],
        answer: "Squirtle",
        image: "./assets/images/7-Squirtle.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Pikachu", "Bulbasaur", "Charmander", "Wartortle"],
        answer: "Wartortle",
        image: "./assets/images/8-Wartortle.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Blastoise", "Bulbasaur", "Venomoth", "Squirtle"],
        answer: "Blastoise",
        image: "./assets/images/9-Blastoise.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Weedle", "Caterpie", "Charmander", "Squirtle"],
        answer: "Caterpie",
        image: "./assets/images/10-Caterpie.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Metapod", "Kakuna", "Vileplume", "Squirtle"],
        answer: "Metapod",
        image: "./assets/images/11-Metapod.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Zubat", "Butterfree", "Paras", "Beedrill"],
        answer: "Butterfree",
        image: "./assets/images/12-Butterfree.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Weedle", "Gloom", "Oddish", "Caterpie"],
        answer: "Weedle",
        image: "./assets/images/13-Weedle.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Metapod", "Beedrill", "Kakuna", "Squirtle"],
        answer: "Kakuna",
        image: "./assets/images/14-Kakuna.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Butterfree", "Bulbasaur", "Beedrill", "Zubat"],
        answer: "Beedrill",
        image: "./assets/images/15-Beedrill.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Pidgeot", "Pidgeotto", "Venonat", "Pidgey"],
        answer: "Pidgey",
        image: "./assets/images/16-Pidgey.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Pidgey", "Paras", "Pidgeotto", "Pidgeot"],
        answer: "Pidgeotto",
        image: "./assets/images/17-Pidgeotto.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Pidgey", "Bulbasaur", "Pidgeotto", "Pidgeot"],
        answer: "Pidgeot",
        image: "./assets/images/18-Pidgeot.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Rattata", "Bulbasaur", "Raticate", "Squirtle"],
        answer: "Rattata",
        image: "./assets/images/19-Rattata.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Vileplume", "Gloom", "Rattata", "Raticate"],
        answer: "Raticate",
        image: "./assets/images/20-Raticate.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Fearow", "Oddish", "Parasect", "Spearow"],
        answer: "Spearow",
        image: "./assets/images/21-Spearow.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Pikachu", "Fearow", "Spearow", "Zubat"],
        answer: "Fearow",
        image: "./assets/images/22-Fearow.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Arbok", "Venonat", "Vileplume", "Ekans"],
        answer: "Ekans",
        image: "./assets/images/23-Ekans.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Arbok", "Bulbasaur", "Charmander", "Ekans"],
        answer: "Arbok",
        image: "./assets/images/24-Arbok.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Pikachu", "Raichu", "Diglett", "Squirtle"],
        answer: "Pikachu",
        image: "./assets/images/25-Pikachu.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Parasect", "Venomoth", "Raichu", "Pikachu"],
        answer: "Raichu",
        image: "./assets/images/26-Raichu.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Diglett", "Sandslash", "Charmander", "Sandshrew"],
        answer: "Sandshrew",
        image: "./assets/images/27-Sandshrew.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Sandshrew", "Bulbasaur", "Sandslash", "Vileplume"],
        answer: "Sandslash",
        image: "./assets/images/28-Sandslash.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Nidoran", "Nidorina", "Diglett", "Nidoqueen"],
        answer: "Nidoran",
        image: "./assets/images/29-Nidoran.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Nidoran", "Nidorina", "Charmander", "Nidoqueen"],
        answer: "Nidorina",
        image: "./assets/images/30-Nidorina.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Nidoran", "GlooNidorinam", "Venomoth", "Nidoqueen"],
        answer: "Nidoqueen",
        image: "./assets/images/31-Nidoqueen.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Nidoran", "Diglett", "Nidorino", "Nidoking"],
        answer: "Nidoran",
        image: "./assets/images/32-Nidoran.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Nidoran", "Venomoth", "Nidorino", "Nidoking"],
        answer: "Nidorino",
        image: "./assets/images/33-Nidorino.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Nidoran", "Oddish", "Nidorino", "Nidoking"],
        answer: "Nidoking",
        image: "./assets/images/34-Nidoking.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Clefable", "Clefairy", "Charmander", "Squirtle"],
        answer: "Clefairy",
        image: "./assets/images/35-Clefairy.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Zubat", "Diglett", "Clefable", "Vileplume"],
        answer: "Clefable",
        image: "./assets/images/36-Clefable.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Ninetales", "Golbat", "Venomoth", "Vulpix"],
        answer: "Vulpix",
        image: "./assets/images/37-Vulpix.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Parasect", "Vulpix", "Diglett", "Ninetales"],
        answer: "Ninetales",
        image: "./assets/images/38-Ninetales.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Venomoth", "Wigglytuff", "Oddish", "Jigglypuff"],
        answer: "Jigglypuff",
        image: "./assets/images/39-Jigglypuff.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Diglett", "Wigglytuff", "Charmander", "Jigglypuff"],
        answer: "Wigglytuff",
        image: "./assets/images/40-Wigglytuff.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Zubat", "Bulbasaur", "Charmander", "Venonat"],
        answer: "Zubat",
        image: "./assets/images/41-Zubat.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Pikachu", "Golbat", "Diglett", "Parasect"],
        answer: "Golbat",
        image: "./assets/images/42-Golbat.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Oddish", "Bulbasaur", "Venomoth", "Squirtle"],
        answer: "Oddish",
        image: "./assets/images/43-Oddish.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Diglett", "Bulbasaur", "Gloom", "Squirtle"],
        answer: "Gloom",
        image: "./assets/images/44-Gloom.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Venomoth", "Bulbasaur", "Vileplume", "Squirtle"],
        answer: "Vileplume",
        image: "./assets/images/45-Vileplume.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Pikachu", "Bulbasaur", "Paras", "Vileplume"],
        answer: "Paras",
        image: "./assets/images/46-Paras.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Venomoth", "Parasect", "Golbat", "Squirtle"],
        answer: "Parasect",
        image: "./assets/images/47-Parasect.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Pikachu", "Venomoth", "Venonat", "Squirtle"],
        answer: "Venonat",
        image: "./assets/images/48-Venonat.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Venomoth", "Bulbasaur", "Charmander", "Gloom"],
        answer: "Venomoth",
        image: "./assets/images/49-Venomoth.jpg"
    },

    {
        title: "Who's that Pokemon?",
        options: ["Pikachu", "Gloom", "Charmander", "Diglett"],
        answer: "Diglett",
        image: "./assets/images/50-Diglett.jpg"
    },






];
