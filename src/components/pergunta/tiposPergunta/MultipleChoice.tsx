import { useState, useEffect, useRef } from "react";
import type { MultipleChoiceQuestion } from "../../../types/questions";
import './multiple-choice.css'

type MultipleChoiceProps = {
    question: MultipleChoiceQuestion
    onAnswer: (questionId: number, answerId: string, isCorrect: boolean) => void
    onNext: () => void;
}

export function MultipleChoice({
    question,
    onAnswer,
    onNext
}: MultipleChoiceProps) {

    const [selected, setSelected] = useState<string | null>(null)
    const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null)
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        setSelected(null);
        setFeedback(null);
    
        return () => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        };
      }, [question.id]);

      function handleClick(answerId: string) {
        if (selected !== null) return;

        const isCorrect = answerId === question.correctAnswer

        setSelected(answerId)
        setFeedback(isCorrect ? "correct" : "wrong")

        onAnswer(question.id, answerId, isCorrect)

        timeoutRef.current = setTimeout(() => {
            onNext();
          }, 1000);
      } 



      return (
        <div className="multiple-choice">
          <h2>{question.question}</h2>
      
          <div className="answers">
            {question.options.map((option) => {
              const isSelected = selected === option.id;
      
              let className = "answer";
      
              if (isSelected && feedback === "correct") {
                className += " answer-correct";
              } else if (isSelected && feedback === "wrong") {
                className += " answer-wrong";
              }
      
              return (
                <div key={option.id}>
                  <button
                    className={className}
                    onClick={() => handleClick(option.id)}
                    disabled={selected !== null}
                  >
                    {option.image && (
                      <img src={option.image} alt={option.text} />
                    )}
      
                    {option.text}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      );
      
}