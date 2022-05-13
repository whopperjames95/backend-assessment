let fortunes = ["A dubious friend may be an enemy in camouflage.", "A faithful friend is a strong defense.", "A lifetime of happiness lies ahead of you.", "A person of words and not deeds is like a garden full of weeds.", "A soft voice may be awfully persuasive."]



module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune)
    },

    addFortune: (req, res) => {
        const {newFortune} = req.body

        fortunes.push(newFortune)

        res.status(200).send('Fortune added.')
    },

    deleteFortune: (req, res) => {
        const {id} = req.params

        if(fortunes[+id]) {
        fortunes.splice(id, 1)

        res.status(200).send('fortune removed')
        } else {
            res.sendStatus(400)
        }
    

    },

    getHeadsOrTails: (req, res) => {
        const coins = ["Heads", "Tails"];

        let randomIndex = Math.floor(Math.random() * coins.length);
        let randomCoinSide = coins[randomIndex];

        res.status(200).send(randomCoinSide)

    },
    
    getMathEquations: (req, res) => {
        const equations = ["3 + 3 = 6", "3 X 3 = 9", "3 - 3 = 0", "3 / 3 = 1"];

        let randomIndex = Math.floor(Math.random() * equations.length);
        let randomEquation = equations[randomIndex];

        res.status(200).send(randomEquation)
    },

    getFacts: (req, res) => {
        const facts = ["The capital of Greece is named after the goddess Athena.", "Greece is one of the sunniest places in the world.", "Greek is one of the oldest languages still in use.", "Greece is made up of thousands of islands."];

        let randomIndex = Math.floor(Math.random() * facts.length);
        let randomFact = facts[randomIndex];

        res.status(200).send(randomFact)
    },
    
    getJames: (req, res) => {
        const factss = ["1. James is a Professional Programmer. ",
         "2. James Has Brown Hair. ",
          "3. James is 26 Years Old. ",
           "4. James is from Arizona."];

        res.status(200).send(factss)
    }

}    












// module.exports = {

//     getFortune: (req, res) => {
//         const fortunes = ["A dubious friend may be an enemy in camouflage.", "A faithful friend is a strong defense.", "A lifetime of happiness lies ahead of you."];

//         let randomIndex = Math.floor(Math.random() * fortunes.length);
//         let randomFortune = fortunes[randomIndex];

//         res.status(200).send(randomFortune)
//     }
// }