import React from "react";
import { useState, useEffect} from "react";

const DoList = () => {
    const [inputValue, setInputValue] = useState("");
    const [list, setList] =([]);
    const [visible, setVisible] = useState(null);

    const addTask = (e) => {
        if(e.key==="Enter"){
            setList([...list, inputValue]);
            setInputValue("");
        }
    }

    const deleteTask = (index) => {
        const newList = list.filter ((item, currentIndex) => currentIndex !== index );

        setList(newList);
    }
    return (
        <div className="container">
            <h1>todos</h1>
        
        </div>
    )
};

export default DoList;