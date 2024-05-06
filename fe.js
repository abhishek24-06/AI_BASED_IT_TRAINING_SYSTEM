document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector("button[type='submit']");
    submitButton.addEventListener("click", function() {
        // Collect user answers
        const userAnswers = [];
        const questions = document.querySelectorAll("li");
        questions.forEach(function(question) {
            const selectedAnswer = question.querySelector("input:checked");
            if (selectedAnswer) {
                userAnswers.push(selectedAnswer.parentElement.textContent.trim());
            }
        });

        // Check user answers against correct answers
        const correctAnswers = [
            "D) dim", // Question 1
            "A) Hyper Text Markup Language", // Question 2
            "C) color", // Question 3
            "D) date-time", // Question 4
            "B) push()", // Question 5
            "B) <link href=\"style.css\" rel=\"stylesheet\">", // Question 6
            "B) <div>", // Question 7
            "A) Hides the element", // Question 8
            "C) &", // Question 9
            "B) // This is a comment" // Question 10
        ];

        // Compare user answers with correct answers
        let correctCount = 0;
        userAnswers.forEach(function(answer, index) {
            if (answer === correctAnswers[index]) {
                correctCount++;
            }
        });

        // Alert the result
        alert(`You have submitted the quiz. Your score is ${correctCount}/${correctAnswers.length}.`);
    });
});
