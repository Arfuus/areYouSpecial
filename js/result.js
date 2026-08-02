const answers =
JSON.parse(localStorage.getItem("rareAnswers"));


if(!answers){
window.location.href="index.html";
}


let probability = 1;


answers.forEach(a=>{
probability *= a.rarity;
});



let people =
Math.round(1/probability);



document.getElementById("score").innerHTML = `

<div class="score-number">
${(probability*100).toFixed(8)}%
</div>

`;



document.getElementById("description").innerHTML = `

Tu es environ :

<h2>
1 personne sur ${people.toLocaleString()}
</h2>

`;



let rareTraits =
answers
.filter(a=>a.rarity <= 0.10)
.sort((a,b)=>a.rarity-b.rarity);



document.getElementById("details").innerHTML = `

<h3>
✨ Ce qui te rend vraiment rare :
</h3>


${
rareTraits.map(a=>`

<div class="trait">

<strong>${a.label}</strong>

<br>

${(a.rarity*100).toFixed(2)}% de la population

</div>

`).join("")
}

`;
