interface MultipleChoiceProps {
    question: string;
    options: string[];
    onAnswer: (answer: string) => void;
}

export function MultipleChoice({
    question,
    options,
    onAnswer
}: MultipleChoiceProps) {
    return (
        <div className="multiple-choice">
            <h2>{question}</h2>

            {options.map((option) => (
                <button
                    key={option}
                    onClick={() => onAnswer(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}