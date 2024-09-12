// quizzes.js
export const quizzes = [
    {
        id: "general-knowledge",
        title: "General Knowledge",
        description: "Test your knowledge on various topics",
        questions: [
            {
                question: "What is the capital of France?",
                options: [
                    { id: "a", text: "London" },
                    { id: "b", text: "Berlin" },
                    { id: "c", text: "Paris" },
                    { id: "d", text: "Madrid" }
                ],
                correctAnswer: "c"
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: [
                    { id: "a", text: "Mars" },
                    { id: "b", text: "Venus" },
                    { id: "c", text: "Jupiter" },
                    { id: "d", text: "Saturn" }
                ],
                correctAnswer: "a"
            },
            // ... more questions ...
        ]
    },
    {
        id: "science",
        title: "Science Quiz",
        description: "Challenge yourself with these science questions",
        questions: [
            {
                question: "What is the chemical symbol for water?",
                options: [
                    { id: "a", text: "Wa" },
                    { id: "b", text: "H2O" },
                    { id: "c", text: "Ho" },
                    { id: "d", text: "Hy" }
                ],
                correctAnswer: "b"
            },
            {
                question: "What is the largest organ in the human body?",
                options: [
                    { id: "a", text: "Heart" },
                    { id: "b", text: "Liver" },
                    { id: "c", text: "Skin" },
                    { id: "d", text: "Brain" }
                ],
                correctAnswer: "c"
            },
            // ... more questions ...
        ]
    },
    {
        id: "history",
        title: "History Trivia",
        description: "Explore historical events and figures",
        questions: [
            {
                question: "In which year did Christopher Columbus first reach the Americas?",
                options: [
                    { id: "a", text: "1492" },
                    { id: "b", text: "1500" },
                    { id: "c", text: "1510" },
                    { id: "d", text: "1520" }
                ],
                correctAnswer: "a"
            },
            {
                question: "Who was the first President of the United States?",
                options: [
                    { id: "a", text: "Thomas Jefferson" },
                    { id: "b", text: "John Adams" },
                    { id: "c", text: "George Washington" },
                    { id: "d", text: "Benjamin Franklin" }
                ],
                correctAnswer: "c"
            },
            // ... more questions ...
        ]
    }
];