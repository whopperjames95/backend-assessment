const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)








const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)





const coinBtn = document.getElementById("coinButton")

const getHeadsOrTails = () => {
    axios.get("http://localhost:4000/api/coin")
    .then(res => {
        const data = res.data;
        alert(data)
    });
};

coinBtn.addEventListener('click', getHeadsOrTails)




const mathBtn = document.getElementById("mathButton")

const getMathEquations = () => {
    axios.get("http://localhost:4000/api/math")
    .then(res => {
        const data = res.data
        alert(data)
    });
};

mathBtn.addEventListener('click', getMathEquations)




const factBtn = document.getElementById("factButton")

const getFacts = () => {
    axios.get("http://localhost:4000/api/greece")
    .then(res => {
        const data = res.data
        alert(data)
    });
};

factBtn.addEventListener('click', getFacts)




const jamesBtn = document.getElementById("jamesButton")

const getJames = () => {
    axios.get("http://localhost:4000/api/james")
    .then(res => {
        const data = res.data
        alert(data)
    });
};

jamesBtn.addEventListener('click', getJames)
