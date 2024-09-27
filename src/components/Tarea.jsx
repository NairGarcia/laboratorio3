import PropTypes from 'prop-types';


const Tarea = ({ task, toggleComplete, deleteTask }) => {
  return (
    <li style={{
        textDecoration: task.completed ? 'line-through' : 'none',
        color: task.completed ? 'gray' : 'black'
      }}
    >
      <span onClick={() => toggleComplete(task.id)} style={{ cursor: 'pointer' }}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};


Tarea.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,  
  deleteTask: PropTypes.func.isRequired,  
};


export default Tarea;
