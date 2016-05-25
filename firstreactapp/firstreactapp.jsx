
var TodoApp = React.createClass({
	getInitialState: function(){
  return {thingsTodo: ['TODO 1', 'TODO 2']};
  },
  updateThingsTodo: function(newItem){
  		var allItems=this.state.items.concat([newItem]);
		this.setState({thingsTodo: allItems});
  },
  
  render: function(){
  	return (
      <div>
    	 <TodoHeader />
        <TodoList thingsTodo = {this.state.thingsTodo} />
        <TodoForm onFormSubmit={this.updateThingsTodo}/>
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
    this.setState({input: ''});
    return;
  },
   	onChange: function(e){
    	this.setState({
      	input: e.target.value
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
  	var createInput = function(inputText){
    	return(
      	<TodoListItem>{inputText}</TodoListItem>
      );
    };
    return <ul>{this.props.items.map(createInput)}</ul>;
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
