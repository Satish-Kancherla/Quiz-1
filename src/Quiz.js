import React, { useState } from 'react';
const Quiz = () => {

    const questions = [
		{
			questionText:  "What does HTML stand for?",
			answerOptions: [
				{ answerText: "Hyper Text Preprocessor", isCorrect: false },
				{ answerText:"Hyper Tool Multi Language", isCorrect: false },
				{ answerText:"Hyper Text Markup Language", isCorrect: true },
				{ answerText: "Hyper Text Multiple Language", isCorrect: false },
			],
		},
		{
			questionText: "What does CSS stand for?",
			answerOptions: [
				{ answerText:  "Common Style Sheet", isCorrect: false },
				{ answerText: "Cascading Style Sheet", isCorrect: true },
				{ answerText: "Computer Style Sheet", isCorrect: false },
				{ answerText: "Colorful Style Sheet", isCorrect: false },
			],
		},
		{
			questionText: "What does SQL stand for?",
			answerOptions: [
				{ answerText: "Structured Query Language", isCorrect: true },
				{ answerText: "Stylish Question Language", isCorrect: false },
				{ answerText: "Stylesheet Query Language", isCorrect: false },
				{ answerText: "Statement Question Language", isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

    const [currentQuestion, setCurrentQuestion]= useState(0);
    const [score,setScore]=useState(0);
    const [showScore,setShowScore]=useState(false);


    const handleButton= ( isCorrect)=>{
		
        if (isCorrect === true){
            setScore(score + 1);
        }
		

        const next=currentQuestion +1;
        if (next < questions.length){
            setCurrentQuestion(next);
        }else{
            setShowScore(true);
        }
    }

	const handleReset =()=>{
		setScore(0);
		setShowScore(false);
		setCurrentQuestion(0);
	}

	return (
		<div className='app'>
			{showScore ? (
				<div className='section'>
					<div className='score-section'>
						You scored {score} out of {questions.length}
					</div>
					<div className='score-button'>
						<button onClick={handleReset}>Reset</button>
					</div>
				</div>
				
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion+1}</span>/{questions.length}
						</div>
						<div className='question-text'>
                            {questions[currentQuestion].questionText}
                        </div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions)=>(<button onClick={() =>handleButton(answerOptions.isCorrect)}>{answerOptions.answerText}</button>))}
					</div>
					
				</>
			)}
		</div>
	);
    
}   
export default Quiz;