import React from "react";
import { useState, useEffect} from "react";

const DoList = () => {
    const [inputValue, setInputValue] = useState("");
    const [list, setList] =useState ([]);
    const [visible, setVisible] = useState(null);

    const addTask = (e) => {
        if(inputValue.trim() !== ""){
            setList([...list, inputValue]);
            setInputValue("");
        }
    }

    const addTaskEnter = (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    };

    const deleteTask = (index) => {
        const newList = list.filter ((item, currentIndex) => currentIndex !== index );
        setList(newList);
    }
    return (
        <div className="container">
            <div className="d-flex gap-2">
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    onKeyDown={addTaskEnter}
                    className="form-control"
                />
                <button onClick={addTask} className="btn btn-success"> Add </button>
            </div>

            <br></br>

            <ul className="list-group">
                {list.map((item, index) => (

                    <li 
                        key={index}
                        className="list-group-item d-flex justify-content-between"
                        onMouseEnter={() => setVisible(index)}
                        onMouseLeave={() => setVisible(null)}
                    >
                        {item}
                        {visible === index && (
                            <span
                                onClick = {() => deleteTask(index)}
                                style = {{color:"red", cursor:"pointer"}}
                            >
                                X
                            </span>
                        )}
                    </li>
                    ))}
            </ul>

            <div className="mt-2">
                {
                    list.length === 0
                        ? "No tasks, add a task"
                        : `${list.length} item`
                }

            </div> 
                       
        </div>
    )
};

export default DoList;