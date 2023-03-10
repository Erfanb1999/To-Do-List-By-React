import SetTasks from "./SetTasks";
import "./Tasks.css";

function Tasks({
  tasks,
  onCloseMenu,
  onDoneTask,
  showTasks,
  onEditingTask,
  onDeletingTask,
}) {
  const allTasks =
    showTasks === "all"
      ? tasks.all
      : showTasks === "pending"
      ? tasks.pending
      : tasks.complete;
  const myTasks = allTasks.map((item, index) => (
    <SetTasks
      item={item}
      key={index}
      onCloseMenu={onCloseMenu}
      onDoneTask={onDoneTask}
      onEditingTask={onEditingTask}
      onDeletingTask={onDeletingTask}
    />
  ));

  return (
    <div className="tasks">
      {allTasks.length ? myTasks : <p>You Don't Have any Task Here</p>}
    </div>
  );
}

export default Tasks;
