
const INITIAL_STATE = {
    questions: [
        {
            Question: 'React is a __________ ?',
            option1: 'Javascript Library',
            option2: 'Framework',
            option3: "Programing Language",
            Answer: 'Javascript Library',
        },
        {
            Question: "Javascript is a:",
            option1: "Programming Language.",
            option2: "Style Sheet",
            option3: "Both A & B",
            Answer: "Programming Language.",
        },
        {
            Question: "CSS used for:",
            option1: "Website designing.",
            option2: "Backend Programming.",
            option3: "Making Website Functional.",
            Answer: "Website designing.",
        },
        {
            Question: "CSS Stand for:",
            option1: "Commenting Style Sheet.",
            option2: "Cascading Style Sheet.",
            option3: "Cast Style Sheet.",
            Answer: "Cascading Style Sheet.",
        },
        {
            Question: "HTML is a ________ language : ",
            option1: "Case Sensitive.",
            option2: "Programming.",
            option3: "Both A & B",
            Answer: "Case Sensitive.",
        },
        {
            Question: "How to write function in javascript: ",
            option1: "var func = function{}.",
            option2: "function(){}.",
            option3: "function[]().",
            Answer: "function(){}.",
        },
        {
            Question: "How to apply color on h1:",
            option1: "h1 { color : red ; }",
            option2: "h1[ color = 'red']",
            option3: "h1( color: 'red' )",
            Answer: "h1 { color : red ; }",
        },
        {
            Question: "Tick correct text to write border:",
            option1: "border : 1px solid black;",
            option2: "border:(1px, solid, black)",
            option3: "border['1px solid black']",
            Answer: "border : 1px solid black;",
        },
        {
            Question: "Correct way to show alert box:",
            option1: "ALERT('Hello World')",
            option2: "alert('Hello World')",
            option3: "Alert('Hello World')",
            Answer: "alert('Hello World')",
        },
        {
            Question: "Declare a var in javascript:",
            option1: "var name;",
            option2: "var name : ,",
            option3: "var name = ,",
            Answer: "var name;",
        },
    ]
}

const reducer = (state = INITIAL_STATE) => state

export default reducer;