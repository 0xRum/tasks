import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedAnswer, setSelectedAnswer] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAnswer(event.target.value);
    };

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select
                value={selectedAnswer}
                onChange={handleChange}
                role="combobox"
            >
                <option value="">Select an answer</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <span>{selectedAnswer === expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}
