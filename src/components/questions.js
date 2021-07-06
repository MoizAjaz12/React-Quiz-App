
import { useSelector } from "react-redux";
import { useState } from "react";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Questions = () => {
    const state = useSelector(state => state)
    // console.log(state)
    let [count, setCount] = useState(0)
    let [score , setScore] = useState(0)
    const nxt = (e) => {
        count <= 9 ? setCount(count + 1) : console.log(count)
        if( e === state.questions[count].Answer){
            setScore(score + 1)
        }
    };

    const pass = () =>{
        if (score >= 6) {
            <p>Pass</p>
        }else{
            <p>Fail</p>
        }
    }

    return (
        <div className="quiz_box">
            <header>
            <h1 className="title">React Quiz App</h1>
            <p className="title">60% Passing Marks</p>
            </header>
            {count <= 9 ?
                <section>
                <h2 className="que_text">
                   <span>Q{count + 1}). {state.questions[count].Question}</span> 
                    <br />
                    <br />
                    <button value={state.questions[count].option1} className="option" onClick={(e) => nxt(e.target.value)} > 1. {state.questions[count].option1} </button>
                    <button value={state.questions[count].option2} className="option" onClick={(e) => nxt(e.target.value)} > 2. {state.questions[count].option2} </button> 
                    <button value={state.questions[count].option3} className="option" onClick={(e) => nxt(e.target.value)} > 3. {state.questions[count].option3} </button> 

                    <hr />
                    <h5 className="total_que"><span>{count+1} of 10 Questions</span></h5>
                </h2>
                </section>
                :
                 <h2 className="que_text">
                        <br />
                    Your Score Is {score} out of {state.questions.length}
                    <br />
                    Your Percentage is {score/10*100}%
                    <br />
                    <br />
                    {/* {render(progressInstance)} */}
                    <progress id="file" value={score*10} max="100"> 32% </progress>

                    <hr />
                    <br />
                  </h2>}
        </div>
    )
};


export default Questions;