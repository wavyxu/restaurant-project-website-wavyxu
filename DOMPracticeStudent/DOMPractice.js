/* Global variables just for easy practice */

// An array of objects containing questions and answers
questions = [
  {
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language."
  },
  {
    question: "Give the selector and rule to color all paragraph text blue.",
    answer: "p {color: blue;}"
  },
  {
    question:
      "How are heading elements similar and different from the header element?",
    answer:
      "the header element is a container and can contain multiple elements. In addition it is good and commont practice to include a heading element within a header element."
  },
  {
    question:
      "When would you want to use an article element and when would this generally not be necessary?",
    answer: "To be written..."
  }
];

// Initial question to display
qIndex = 0;

// Set up variables to hold element references

// Example of variables and initialization
qCountSpan = document.getElementById("qCount");
qIndexSpan = document.getElementById("qIndex");

showQuestion();


// initialize buttons
initButtons();


/* Functions defined below here */

/* Attach buttons to their handler functions here. Button id:
 BForward BBack BShow BShowQC BRemove BHideA BAddQ BHideQC */
function initButtons() {
  // Show and hide creator
  // Show and hide answer
  // Forward and back Questions
  // Remove question

    // 1. Forward and back Questions
    document.getElementById("BForward").addEventListener("click", getNext);
    document.getElementById("BBack").addEventListener("click", getPre);

    // 2. Add question
    document.getElementById("BAddQ").addEventListener("click", addQuestion);

    // 3. Remove question
    document.getElementById("BRemove").addEventListener("click", removeQuestion);


    // 4. Show and hide creator
    document.getElementById("BShowQC").addEventListener("click", toggleQuestionCreator);
    document.getElementById("BShowQC").disabled = true;

    document.getElementById("BHideQC").addEventListener("click", toggleQuestionCreator);

    // 5. Show and hide answer
    document.getElementById("BShow").addEventListener("click", showAns);
    document.getElementById("BShow").disabled = true;
    document.getElementById("BHideA").addEventListener("click", hideAns);




}

/* You may want to define functions like the following to attach to buttons */

/* Takes the content from the text areas and adds
 to the quesiton list */
function addQuestion() {
  // You provide the functionality.
}

function showQuestion() {
    // Initialize content
    qCountSpan.innerHTML = questions.length;
    qIndexSpan.innerHTML = qIndex + 1;

    // show question
    let que = document.getElementById("contentQ");
    que.innerHTML = "";
    let p1 = document.createElement("p");
    if (questions.length > 0) {
      p1.innerHTML = questions[qIndex].question;

    } else {
      p1.innerHTML = "";
    }

    que.appendChild(p1);

    // show answer
    let ans = document.getElementById("contentA");
    ans.innerHTML = "";
    let p2 = document.createElement("p");
    if (questions.length > 0) {

      p2.innerHTML = questions[qIndex].answer;
    } else {
      p2.innerHTML = "";
    }
    ans.appendChild(p2);
}

function getNext() {
    qIndex++;
    if (qIndex < 0) {
        qIndex = questions.length - 1;
    }
    if (qIndex >= questions.length) {
        qIndex = 0;
    }
    showQuestion();
}

function getPre() {
    qIndex--;
    if (qIndex < 0) {
        qIndex = questions.length - 1;
    }
    if (qIndex >= questions.length) {
        qIndex = 0;
    }
  showQuestion();
}

function enableRemove() {
    if (question.length == 0) {
      document.getElementById("BRemove").disabled = true;
    } else {
      document.getElementById("BRemove").disabled = false;
    }
}

function hideAns() {
    if (document.getElementById("currentA").classList.contains("showAnswer")) {
        document.getElementById("currentA").classList.remove("showAnswer");
    }

    document.getElementById("currentA").classList.add("hideAnswer");
    document.getElementById("BShow").disabled = false;
}

function showAns () {
    if (document.getElementById("currentA").classList.contains("hideAnswer")) {
        document.getElementById("currentA").classList.remove("hideAnswer");
    }
    document.getElementById("currentA").classList.add("showAnswer");
}

function addQuestion() {
    let q = document.getElementById("Question").value;
    let a = document.getElementById("Answer").value;

    var qa = {question : q, answer : a};
    questions.push(qa);

    qIndex = questions.length - 1;
    showQuestion();
    enableDisableRemoveQuestion();
}

function removeQuestion() {
    questions.splice(qIndex, 1);

    if (qIndex >= questions.length) {
        qIndex--;
    }

    if (questions.length == 0) {
        document.getElementById("BRemove").disabled = true;
    }

    showQuestion();
    enableDisableRemoveQuestion();
}

function toggleQuestionCreator() {
    if (document.getElementById("BShowQC").disabled == true) {
        hideQuestionCreator();
    }
    else {
        showQuestionCreator();
    }
}

function showQuestionCreator() {
    document.getElementById("QCreator").classList.remove("hideStuff");
    document.getElementById("QCreator").classList.add("showStuff");

    // Disable the "Show Question Creator" button if we have already displayed the creator.
    document.getElementById("BShowQC").disabled = true;
}

function hideQuestionCreator() {
    document.getElementById("QCreator").classList.remove("showStuff");
    document.getElementById("QCreator").classList.add("hideStuff");

    // Enable the "Show Question Creator" button if we are hiding the creator.
    document.getElementById("BShowQC").disabled = false;
}