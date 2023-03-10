import { useState } from "react";
import Header from "./Component/Header";
import Tasks from "./Component/Tasks";

import "./App.css";

function App() {
  const [allTasks, setAllTasks] = useState({
    all: [],
    pending: [],
    complete: [],
  });

  const [showTasks, setShowTasks] = useState("all");

  function addTask(text) {
    if (allTasks.all.some((item) => item.editing === true)) {
      allTasks.all.forEach((item) => {
        if (item.editing === true) {
          item.text = text;
          item.editing = false;
        }
      });
      setAllTasks({ ...allTasks });
    } else {
      const addItem = {
        text,
        done: false,
        menuTool: false,
        editing: false,
      };
      setAllTasks({
        ...allTasks,
        all: [...allTasks.all, addItem],
        pending: [...allTasks.pending, addItem],
      });
    }
  }

  function closeMenu(openMenu) {
    const closeAllMenu = allTasks.all.map((item) => {
      if (item === openMenu) {
        item.menuTool = item.menuTool ? false : true;
      } else {
        item.menuTool = false;
      }
      return item;
    });
    setAllTasks({ ...allTasks, all: closeAllMenu });
  }

  function doneTaskHandler(inputElem, doneTask) {
    doneTask.done = inputElem.checked;
    let value;
    if (inputElem.checked) {
      value = allTasks.pending.filter((item) => item !== doneTask);
      allTasks.complete.push(doneTask);
      setAllTasks({ ...allTasks, pending: value });
    } else {
      value = allTasks.complete.filter((item) => item !== doneTask);
      allTasks.pending.push(doneTask);
      setAllTasks({ ...allTasks, complete: value });
    }
  }

  function clearAllTasks() {
    setAllTasks({
      all: [],
      pending: [],
      complete: [],
    });
  }

  const [editingTask, setEditingTask] = useState("");

  function editingTaskHandler(thisTask) {
    allTasks.all.forEach((item) => {
      if (item.editing === true) {
        item.editing = false;
      }
    });
    thisTask.menuTool = false;
    thisTask.editing = true;
    setAllTasks({ ...allTasks });
    setEditingTask(thisTask.text);
  }

  function deletingTaskHandler(thisTask) {
    for (let key in allTasks) {
      const checkIndex = allTasks[key].findIndex((item) => item === thisTask);
      if (checkIndex !== -1) {
        allTasks[key].splice(checkIndex, 1);
      }
    }
    setAllTasks({ ...allTasks });
  }

  return (
    <div className="container">
      <Header
        setTask={addTask}
        changeActive={showTasks}
        editingTask={editingTask}
        onShowTasks={setShowTasks}
        onClearAll={clearAllTasks}
      />
      <Tasks
        tasks={allTasks}
        showTasks={showTasks}
        onCloseMenu={closeMenu}
        onDoneTask={doneTaskHandler}
        onEditingTask={editingTaskHandler}
        onDeletingTask={deletingTaskHandler}
      />
    </div>
  );
}

export default App;
