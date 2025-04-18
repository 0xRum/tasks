import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <div className="form-switch">
                <input
                    type="checkbox"
                    role="checkbox"
                    checked={isEditMode}
                    onChange={() => {
                        setIsEditMode(!isEditMode);
                    }}
                />
            </div>
            {!isEditMode ?
                <div>
                    {name} is {isStudent ? "a student" : "not a student"}
                </div>
            :   <div>
                    <input
                        type="text"
                        role="textbox"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <label>
                        <input
                            type="checkbox"
                            role="checkbox"
                            checked={isStudent}
                            onChange={() => {
                                setIsStudent(!isStudent);
                            }}
                        />
                        Student
                    </label>
                </div>
            }
        </div>
    );
}
