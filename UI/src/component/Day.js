import React from "react";
import Set from "./Set";
import Todo from "./Todos/Todo";
import Done from "./Todos/Done";
import "../Day.css"

const Day = () => {
    return <div style={{
        padding: '70px 30px 0px 280px'
    }}>
        <Set />
        <h3 style={{textAlign:"left", margin:"-20px"}}>2022.2.24 To do List</h3>
        <button className={"function"} style={{margin:"20px 20px 20px 800px"}}>Sort</button>
        <button className={"function"}>Export</button>
        <Todo />
        <Done />
    </div>;
};

export default Day;