
const answers =
    JSON.parse(localStorage.getItem("rareAnswers"));



const scoreElement =
    document.getElementById("score");


const description =
    document.getElementById("description");


const details =
    document.getElementById("details");



if (!answers) {

    window.location.href = "index.html";

}



let probability = 1;



answers.forEach(answer => {

    probability *= answer.rarity;

});



let percentage =
    probability * 100;



let people =
    Math.round(1 / probability);



if (people < 1) {

    people = 1;

}



scoreElement.innerHTML = `

<div class="score-number">

${percentage.toFixed(6)}%

</div>

`;



description.innerHTML = `

Tu fais partie d'environ :

<h2>

1 personne sur ${people.toLocaleString()}

</h2>

`;



details.innerHTML = `

<h3>Ce qui te rend unique :</h3>

${answers.map(a => `

<div class="trait">

${a.label}

</div>

`).join("")

    }

`;
