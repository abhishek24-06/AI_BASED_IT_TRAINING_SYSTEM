// Function to start the test
function startTest() {
    document.getElementById('courseSelection').style.display = 'none';
    document.getElementById('testContainer').style.display = 'block';

    // Mocking test questions for backend, frontend, and fullstack
    // Here you would typically load questions from a database or API
    // This is a simplified version for demonstration
    const questions = {
        Backend: [
            "What is the purpose of a database in a web application?",
            // More questions...
        ],
        Frontend: [
            "What is the main programming language used for building the frontend of a web application?",
            // More questions...
        ],
        Fullstack: [
            "What does 'MEAN' stack stand for in web development?",
            // More questions...
        ]
    };

    // Displaying the test questions
    let testContent = '';
    const course = getSelectedCourse(); // Get the course selected by the user
    questions[course].forEach((question, index) => {
        testContent += `<div><strong>Question ${index + 1}:</strong> ${question}</div>`;
        // Here you would add options for multiple choice questions
    });

    document.getElementById('testContainer').innerHTML = testContent;
}

// Function to get the selected course
function getSelectedCourse() {
    // Here you can implement logic to determine the selected course
    // For now, let's assume the user clicks on the course buttons directly
    // You can enhance this function based on your requirements
    return selectedCourse;
}

// Function to allocate course based on test results
function selectCourse(course) {
    // Here you can implement logic to allocate courses based on test results
    // For now, let's assume the course is selected directly
    selectedCourse = course;
    startTest();
}
