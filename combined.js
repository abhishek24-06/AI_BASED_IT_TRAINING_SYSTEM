document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector("button[type='submit']");
    submitButton.addEventListener("click", function() {
        // Collect user answers
        const userAnswers = [];
        const questions = document.querySelectorAll("li");
        questions.forEach(function(question) {
            const selectedAnswer = question.querySelector("input:checked");
            if (selectedAnswer) {
                userAnswers.push(selectedAnswer.parentElement.textContent.trim().replace(/\s*\(.?\)\s/g, ''));
            }
        });

        // Define correct answers for each category
        const correctAnswers = {
            frontend: [
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
            ],
            backend: [
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
            ],
            fullstack: [
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
            ]
        };

        // Compare user answers with correct answers and calculate scores
        let scores = {
            frontend: 0,
            backend: 0,
            fullstack: 0
        };

        // Loop through user answers and correct answers, calculate scores for each category
        Object.keys(correctAnswers).forEach(function(category) {
            for (let i = 0; i < correctAnswers[category].length; i++) {
                if (userAnswers[i] === correctAnswers[category][i]) {
                    scores[category]++;
                }
            }
        });


        
        // Find the category with the highest score
        let highestScoreCategory = "frontend";
        if (scores.backend > scores[highestScoreCategory]) {
            highestScoreCategory = "backend";
            window.location.href = 'be_lecture.html';
        }
        else if (scores.fullstack > scores[highestScoreCategory]) {
            highestScoreCategory = "fullstack";
            window.location.href = 'fullstack_lecture.html';
        }
        else
        {
            window.location.href = 'fe_lecture.html';
        }

        // Hide all video categories
        const categories = document.querySelectorAll(".category");
        categories.forEach(function(category) {
            category.style.display = "none";
        });

        // Show only the category with the highest score
        const highestScoreCategoryVideos = document.querySelector(`.${highestScoreCategory}`);
        highestScoreCategoryVideos.style.display = "block";

        // Alert the result
        alert(`Your score in ${highestScoreCategory} is highest. Showing only ${highestScoreCategory} videos.`);
    });
});
