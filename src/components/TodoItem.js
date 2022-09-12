import React from 'react';
import styles from './TodoItem.module.css';

/* eslint-disable */
function TodoItem(props) {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  // Destructuring from props.todo.(id , completed, title) to 👇
  const { completed, id, title } = props.todo;

  return (
    <li className={styles.item}>
      <input
        type='checkbox'
        className={styles.checkbox}
        checked={completed}
        onChange={() => props.handleChangeProps(id)}
      />
      <button onClick={() => props.deleteTodoProps(id)}>delete</button>
      <span style={completed ? completedStyle : null}>{title}</span>
    </li>
  );
}

export default TodoItem;
