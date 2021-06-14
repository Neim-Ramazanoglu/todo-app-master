import React, { useState } from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content } = props;
  const [active, setActive] = useState(false);
  const checked = () => {
    setActive(!active);
    console.log(content);
  };

  return (
    <div onClick={checked} className={active ? "checked" : " "}>
      {content}
      <button className="delete btn btn-danger" >Sil</button>
    </div>
  );
}

export default Todo;
