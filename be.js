document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector("button[type='submit']");
    submitButton.addEventListener("click", function() {
        // Collect user answers
        const userAnswers = [];
        const questions = document.querySelectorAll("li");
        questions.forEach(function(question) {
            const selectedAnswer = question.querySelector("input:checked");
            if (selectedAnswer) {
                userAnswers.push(selectedAnswer.parentElement.textContent.trim().replace(/\s*\(.*?\)\s*/g, ''));
            }
        });

        // Define correct answers
        const correctAnswers = [
            "B) Create, Retrieve, Update, Delete", // Question 1
            "C) HTML", // Question 2
            "C) SQL", // Question 3
            "B) To connect front-end and back-end systems", // Question 4
            "D) Angular", // Question 5
            "A) GET", // Question 6
            "A) Model, View, Control", // Question 7
            "C) Express", // Question 8
            "B) JSON Web Token", // Question 9
            "A) The ability to handle a large number of users or requests" // Question 10
        ];

        // Compare user answers with correct answers and calculate score
        let score = 0;
        for (let i = 0; i < correctAnswers.length; i++) {
            if (userAnswers[i] === correctAnswers[i]) {
                score++;
            }
        }

        // Alert the result
        alert(`Your score: ${score}/${correctAnswers.length}`);
    });
});
