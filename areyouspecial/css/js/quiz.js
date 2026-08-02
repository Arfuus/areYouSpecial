
let currentQuestion = 0;

let answersSelected = [];


const container = document.getElementById("quiz-container");

const progress = document.getElementById("progress");



function displayQuestion() {


    let q = questions[currentQuestion];


    container.innerHTML = `

        <h2>${q.question}</h2>

        ${q.answers.map((answer, index) => `

                <button class="option"
                onclick="selectAnswer(${index})">

                ${answer.text}

                </button>

            `).join("")
        }

    `;



    updateProgress();

}



function selectAnswer(index) {


    let q = questions[currentQuestion];


    answersSelected.push({

        label: q.answers[index].label,

        rarity: q.answers[index].rarity

    });



    currentQuestion++;



    if (currentQuestion < questions.length) {

        displayQuestion();

    }

    else {


        localStorage.setItem(
            "rareAnswers",
            JSON.stringify(answersSelected)
        );


        window.location.href = "result.html";

    }


}



function updateProgress() {


    let percent =
        (currentQuestion / questions.length) * 100;


    progress.innerHTML = `

    <div class="progress-bar"
    style="width:${percent}%"></div>

    `;

}



displayQuestion();