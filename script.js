const questions = [
    {
        question: "What's your biggest fear?",
        options: [
            "Spiders",
            "Darkness",
            "Heights",
            "Enclosed Spaces",
            "Snakes",
        ],
    },
    {
        question: "Choose a favorite horror movie subgenre:",
        options: [
            "Slasher",
            "Supernatural",
            "Psychological",
            "Found Footage",
            "Thriller",
        ],
    },
    {
        question: "Select your choice of weapon:",
        options: [
            "Chainsaw",
            "Knife",
            "Sledgehammer",
            "Shotgun",
            "Axe",
        ],
    },
    {
        question: "What's your preferred method of scaring your victims?",
        options: [
            "Mind Games",
            "Stalking",
            "Gore",
            "Creeping in the Shadows",
        ],
    },
    {
        question: "Choose a chilling location:",
        options: [
            "Haunted House",
            "Cabin in the Woods",
            "Abandoned Asylum",
            "Dark Alley",
            "Cornfield",
        ],
    },
    {
        question: "What's your signature attire?",
        options: [
            "Clown Costume",
            "Mask",
            "Blood-Stained Clothes",
            "Doll Outfit",
            "Tattered Garments",
        ],
    },
    {
        question: "Select a weakness:",
        options: [
            "Water",
            "Silver",
            "Sunlight",
            "Salt",
            "None",
        ],
    },
    {
        question: "What's your motivation for terrorizing?",
        options: [
            "Revenge",
            "Psychopathy",
            "Possession",
            "Curse",
            "Unknown",
        ],
    },
    {
        question: "What is a good quality you have despite your evilnes?",
        options: [
            "Nurturing",
            "Empathy",
            "Adaptable",
            "Confident",
        ],
    }
];

const villains = [
    {
        name: "Pennywise",
        description: "You're most like Pennywise, the shape-shifting clown from IT. You like to play mind games and feed on people's fears.",
    },
    {
        name: "Barbarian",
        description: "You're most like a Barbarian from a slasher movie. You're strong and brutal, wielding your weapon with menace.",
    },
    {
        name: "Ghostface",
        description: "You're most like Ghostface from Scream. You're a master of deception and enjoy the thrill of the chase.",
    },
    {
        name: "Annabelle",
        description: "You're most like Annabelle, the possessed doll. You have an eerie and unsettling presence.",
    },
    {
        name: "Jack Torrance",
        description: "You're most like Jack Torrance from The Shining. You descend into madness in isolation.",
    },
    {
        name: "Michael Myers",
        description: "You're most like Michael Myers from Halloween. You're a relentless, emotionless force of evil.",
    },
];

const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const submitButton = document.getElementById("submit-button");
const resultContainer = document.getElementById("result-container");

let userAnswers = [];

function createQuestion(index) {
    questionContainer.innerHTML = `
        <p>${questions[index].question}</p>
    `;

    questions[index].options.forEach((option, i) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => selectOption(index, i));
        questionContainer.appendChild(button);
    });
}

function selectOption(questionIndex, optionIndex) {
    userAnswers[questionIndex] = questions[questionIndex].options[optionIndex];
    const nextQuestionIndex = questionIndex + 1;
    if (nextQuestionIndex < questions.length) {
        createQuestion(nextQuestionIndex);
    } else {
        showResult();
    }
}

function showResult() {
    let result = "";
    let maxMatch = 0;

    villains.forEach((villain, index) => {
        const match = userAnswers.reduce(
            (count, answer, i) => (answer === questions[i].options[index] ? count + 1 : count),
            0
        );

        if (match > maxMatch) {
            maxMatch = match;
            result = villain;
        }
    });

    resultContainer.innerHTML = `
        <h2>You are most like ${result.name}</h2>
        <p>${result.description}</p>
    `;
}

createQuestion(0);

submitButton.addEventListener("click", showResult);
