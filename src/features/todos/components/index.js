import React, { Component } from 'react';
import TodoList from "../components/TodoList";
import TodoFilter from "../components/TodoFilter";
import TodoInput from "../components/TodoInput";

export default class Todo extends Component {
  render() {
    return (
      <div>
        <TodoInput onAddTodo={this.props.addItem} />
        <TodoList todos={this.props.todos} filter={this.props.filter} selectItem={this.props.onToggleItem} />
        <TodoFilter status={this.props.filter} onSelectFilter={this.props.selectFilter} />
      </div>
    );
  }
}
