import PropTypes from 'prop-types';
import Tarea from './Tarea';


const ListaTareas = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <Tarea
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};


ListaTareas.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};


export default ListaTareas;
