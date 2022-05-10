//back end

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());




const { getCompliment } = require('./controller')

// const {getComopliment, getFortune, addFortune, deleteFortune} = require('./controller')



const { getFortune } = require('./controller')
      

const { getHeadsOrTails } = require('./controller')

const { getMathEquations } = require('./controller')

const { getFacts } = require('./controller')


//Put, Post, Delete, Get

const { getJames, deleteJames } = require('./controller')







app.get("/api/compliment", getCompliment);



app.get("/api/fortune", getFortune)
//app.post('/api/fortune', addFortune)     postman website, post, select raw body Json: { newFortune: "a friend is the coolest."}
// app.delete('/api/fortune/:id', delteFortune)              postman 




app.get("/api/coin", getHeadsOrTails);

app.get("/api/math", getMathEquations);

app.get("/api/greece", getFacts);

//Put, Post, Delete, Get

app.get("/api/james", getJames);
app.delete("/api/james/:id", deleteJames);
//app.put("api/james:id", updateJames)
// app.post("api/james", createJames)








app.listen(4000, () => console.log("Server running on 4000"));
