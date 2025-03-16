document.addEventListener("DOMContentLoaded", async function () {
  const submitButton = document.querySelector("button[type='submit']");
  const questionsContainer = document.getElementById("quiz-questions");

  function decodeHTMLEntities(text) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
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

    // Render quiz questions
    quizQuestions.forEach((question, index) => {
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
          quizQuestions[index].correctAnswer
        );
        if (answer === correctAnswer) {
          correctCount++;
        }
      });

      alert(
        `You have submitted the quiz. Your score is ${correctCount}/${quizQuestions.length}.`
      );
    });
  } catch (error) {
    console.error("Error fetching/rendering questions:", error);
    questionsContainer.innerHTML =
      "<p>Error loading quiz questions. Please try again.</p>";
  }
});
