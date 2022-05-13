//back end

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());




const {getJames, getHeadsOrTails, getMathEquations, getCompliment, getFacts, getFortune, addFortune, deleteFortune} = require('./controller')


app.get("/api/compliment", getCompliment);



app.get("/api/fortune", getFortune)
app.post('/api/fortune', addFortune)     //postman website, post, select raw body Json: { newFortune: "a friend is the coolest."}
app.delete('/api/fortune/:id', deleteFortune)             // postman 

app.get("/api/coin", getHeadsOrTails);

app.get("/api/math", getMathEquations);

app.get("/api/greece", getFacts);

app.get("/api/james", getJames);









app.listen(4000, () => console.log("Server running on 4000"));
