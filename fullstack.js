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
            "A) Model, View, Control", // Question 1
            "C) React", // Question 2
            "C) To connect front-end and back-end systems", // Question 3
            "B) MongoDB", // Question 4
            "C) PUT", // Question 5
            "B) Cross-Origin Resource Sharing", // Question 6
            "D) HTML", // Question 7
            "C) To verify the identity of users", // Question 8
            "D) Angular", // Question 9
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
