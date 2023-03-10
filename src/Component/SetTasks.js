import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import "./SetTasks.css";

function SetTasks({
  item,
  onCloseMenu,
  onDoneTask,
  onEditingTask,
  onDeletingTask,
}) {
  const { text, done, menuTool } = item;

  return (
    <div className="item-box">
      <input
        type="checkbox"
        checked={done}
        onChange={(e) => onDoneTask(e.target, item)}
      />
      <p style={{ textDecoration: done ? "line-through" : "" }}>{text}</p>
      <span onClick={() => onCloseMenu(item)}>
        <FontAwesomeIcon icon={faEllipsis} />
      </span>
      <ul className={menuTool ? "" : "hide"}>
        <li onClick={() => onEditingTask(item)}>
          <FontAwesomeIcon icon={faPen} />
          <span>Edit</span>
        </li>
        <li onClick={() => onDeletingTask(item)}>
          <FontAwesomeIcon icon={faTrashCan} />
          <span>delete</span>
        </li>
      </ul>
    </div>
  );
}

export default SetTasks;
