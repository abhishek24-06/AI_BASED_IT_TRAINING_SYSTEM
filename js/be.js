document.addEventListener("DOMContentLoaded", async function () {
  const submitButton = document.querySelector("button[type='submit']");
  const questionsContainer = document.getElementById("quiz-questions");
  const scoreModal = document.getElementById("scoreModal");
  const scoreMessage = document.getElementById("scoreMessage");
  const closeModal = document.querySelector(".close");

  function decodeHTMLEntities(text) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  try {
    console.log("Fetching quiz questions...");
    const response = await fetch(
      "http://localhost:3000/api/quizQuestions?category=Backend%20Development"
    );
    console.log("Response status:", response.status);

    const quizQuestions = await response.json();
    console.log("Fetched questions:", quizQuestions);

    if (!quizQuestions || quizQuestions.length === 0) {
      throw new Error("No questions received from server");
    }

    // Shuffle the questions and select the first 10
    shuffleArray(quizQuestions);
    const selectedQuestions = quizQuestions.slice(0, 10);

    // Render quiz questions
    selectedQuestions.forEach((question, index) => {
      console.log(`Processing question ${index + 1}:`, question);

      if (!question.question || !question.options) {
        console.warn(`Skipping invalid question at index ${index}:`, question);
        return;
      }

      const questionElement = document.createElement("li");
      const decodedOptions = question.options.map((opt) =>
        decodeHTMLEntities(opt)
      );

      questionElement.innerHTML = `
        <p>${index + 1}. ${decodeHTMLEntities(question.question)}</p>
        ${decodedOptions
          .map(
            (option) => `
              <label>
                <input type="radio" name="q${index + 1}" value="${option}">
                ${option}
              </label><br>
            `
          )
          .join("")}
      `;
      questionsContainer.appendChild(questionElement);
      console.log(`Question ${index + 1} rendered successfully`);
    });

    submitButton.addEventListener("click", function () {
      const userAnswers = [];
      const questions = document.querySelectorAll("li");

      questions.forEach(function (question, index) {
        const selectedAnswer = question.querySelector("input:checked");
        if (selectedAnswer) {
          userAnswers.push(selectedAnswer.value);
        }
      });

      let correctCount = 0;
      userAnswers.forEach(function (answer, index) {
        const correctAnswer = decodeHTMLEntities(
          selectedQuestions[index].correctAnswer
        );
        if (answer === correctAnswer) {
          correctCount++;
        }
      });

      // Show the modal with the score message
      scoreMessage.textContent = `You have submitted the quiz. Your score is ${correctCount}/${selectedQuestions.length}.`;
      scoreModal.style.display = "block";
    });

    // Close the modal when the user clicks on <span> (x)
    closeModal.onclick = function () {
      scoreModal.style.display = "none";
    };

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function (event) {
      if (event.target == scoreModal) {
        scoreModal.style.display = "none";
      }
    };
  } catch (error) {
    console.error("Error fetching/rendering questions:", error);
    questionsContainer.innerHTML =
      "<p>Error loading quiz questions. Please try again.</p>";
  }
});
