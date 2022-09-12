import React from 'react';
import TodoItem from './TodoItem';

/* eslint-disable */
class TodoList extends React.Component {
  render() {
    return (
      <div className='todo-list'>
        <ul>
          {this.props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChangeProps={this.props.handleChangeProps}
              deleteTodoProps={this.props.deleteTodoProps}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
