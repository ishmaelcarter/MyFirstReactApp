import React from 'react';

var TodoApp = React.createClass({
  displayName: 'TodoApp',

  getInitialState: function getInitialState() {
    return { items: ['TODO 1', 'TODO 2'] };
  },
  updateItems: function updateItems() {
    var allItems = this.state.items.concat([newItem]);
    this.setState({ items: allItems });
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(TodoHeader, null),
      React.createElement(TodoList, { items: this.state.items }),
      React.createElement(TodoForm, { onFormSubmit: this.updateItems })
    );
  }
});

var TodoHeader = React.createClass({
  displayName: 'TodoHeader',

  render: function render() {
    return React.createElement(
      'h2',
      null,
      'TODO'
    );
  }
});

var TodoForm = React.createClass({
  displayName: 'TodoForm',

  getInitialState: function getInitialState() {
    return { item: '' };
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit(this.state.item);
    this.setState({ item: '' });
    return;
  },
  onChange: function onChange(e) {
    this.setState({
      item: e.target.value
    });
  },

  render: function render() {
    return React.createElement(
      'form',
      { onSubmit: this.handleSubmit },
      React.createElement('input', { type: 'text', ref: 'item', onChange: this.onChange, value: this.state.item }),
      React.createElement('input', { type: 'submit', value: 'Add' })
    );
  }
});

var TodoList = React.createClass({
  displayName: 'TodoList',

  render: function render() {
    var createItem = function createItem(itemText) {
      return React.createElement(
        TodoListItem,
        null,
        itemText
      );
    };
    return React.createElement(
      'ul',
      null,
      this.props.items.map(createItem)
    );
  }
});

var TodoListItem = React.createClass({
  displayName: 'TodoListItem',

  render: function render() {
    return React.createElement(
      'li',
      null,
      this.props.children
    );
  }
});

ReactDOM.renderComponent(React.createElement(TodoApp, null), getElementById('todo'));