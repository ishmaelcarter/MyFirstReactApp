
var TodoApp = React.createClass({
	getInitialState: function(){
  return {items: ['TODO 1', 'TODO 2']};
  },
  updateItems: function(newItem){
  		var allItems=this.state.items.concat([newItem]);
		this.setState({items: allItems});
  },
  
  render: function(){
  	return (
      <div>
    	 <TodoHeader />
        <TodoList items = {this.state.items} />
        <TodoForm onFormSubmit={this.updateItems}/>
      </div>
    );
  }
})

var TodoHeader = React.createClass({
	render: function(){
  	return(
    	<h2>TODO</h2>
    );
  }
});

var TodoForm = React.createClass({
		getInitialState: function(){
  return {item: ''};
  },
	handleSubmit: function(e){
  	e.preventDefault();
  	this.props.onFormSubmit(this.state.item)
    this.setState({item: ''});
    return;
  },
   	onChange: function(e){
    	this.setState({
      	item: e.target.value
      });
    },
  
  render: function(){
  	return(
    	<form onSubmit={this.handleSubmit}>
      	<input type='text' ref='item' onChange={this.onChange} value={this.state.item}/> 
        <input type='submit' value='Add'/> 
       </form>
    )
  }
})

var TodoList = React.createClass({
	render: function(){
  	var createItem = function(itemText){
    	return(
      	<TodoListItem>{itemText}</TodoListItem>
      );
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

var TodoListItem = React.createClass({
	render: function(){
  	return (
    <li>{this.props.children}</li>
    );
  }
});

ReactDOM.render(<TodoApp />, document.getElementById('todo'));
