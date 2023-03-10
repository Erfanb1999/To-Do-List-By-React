import { useEffect, useState } from "react";
import { TfiAlignLeft } from "react-icons/tfi";
import "./Header.css";

function Header({
  setTask,
  onShowTasks,
  changeActive,
  onClearAll,
  editingTask,
}) {
  const [inputChange, setInputChange] = useState("");

  useEffect(() => {
    setInputChange(editingTask);
  }, [editingTask]);

  function addTask(e) {
    e.preventDefault();
    setTask(e.target.firstName.value);
    setInputChange("");
  }

  return (
    <header>
      <form onSubmit={addTask}>
        <TfiAlignLeft />
        <input
          type="text"
          name="firstName"
          autoFocus={true}
          value={inputChange}
          onChange={(e) => setInputChange(e.target.value)}
        />
      </form>
      <div className="tools">
        <ul>
          <li
            className={changeActive === "all" ? "active" : ""}
            onClick={() => onShowTasks("all")}
          >
            All
          </li>
          <li
            className={changeActive === "pending" ? "active" : ""}
            onClick={() => onShowTasks("pending")}
          >
            Pendibg
          </li>
          <li
            className={changeActive === "completed" ? "active" : ""}
            onClick={() => onShowTasks("completed")}
          >
            Completed
          </li>
        </ul>
        <button onClick={() => onClearAll()}>Clear All</button>
      </div>
    </header>
  );
}

export default Header;
