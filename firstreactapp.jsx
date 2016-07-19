
var TodoApp = React.createClass({
	getInitialState: function(){
  return {user: ['Ishmael Carter'], items: ['no', 'TODO 2', 'TODO 3'], completedItems: ['DID']};
  },

  removeItem: function(currItem) {
    debugger;
    
    var idx = this.state.items.indexOf(currItem);
    var newItems = this.state.items.slice();
    newItems.splice(idx, 1);
    this.setState({items: newItems});
    /*
    var idx = this.state.items.indexOf(currItem);
    this.state.items.splice(idx, 1);
    this.setState({items: this.state.items});
    */
  }, 

  updateItems: function(newItem){
    var allItems=this.state.items.concat([newItem]);
    this.setState({items: allItems});
  },
  
  render: function(){
  	return (
      <div class="TodoApp">
    	 <TodoHeader />
        <TodoList items={this.state.items} onClick={this.removeItem} />
        <TodoForm onFormSubmit={this.updateItems}/>
      </div>
    );
  }
})

var TopHeader = React.createClass({
  render: function(){
    return(
      <div>
      <h1 className="TopHeader">Nice!</h1>
      <p className="user">{this.state.user}</p>
      </div>
      )
  }
})

var TodoHeader = React.createClass({
	render: function(){
  	return(<div>
      <img href
    	<h2 className="TodoHeader">Post Something Nice</h2>
      </div>
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
    	<form className='TodoForm' onSubmit={this.handleSubmit}>
      	<input type='text' ref='item' onChange={this.onChange} value={this.state.item} className="FormBox"/> 
        <input className='FormButton' type='submit' value='Add' /> 
       </form>
    )
  }
})

var TodoList = React.createClass({
/*
  propTypes: {
    items: React.propTypes. ... array,
    onClick: React.propTypes.Func
  }
 */

	render: function(){
  	var createItem = function(itemText){
    	return(
      	<TodoListItem itemText={itemText} onClick={this.props.onClick}/>
      );
    }.bind(this);

    return (
      <ul className="TodoList">{this.props.items.map(createItem)}</ul>
    );
  }
});

  var TodoListItem = React.createClass({
    handleClick: function(){
      //debugger;
      this.props.onClick(this.props.itemText);
    /*var newItems=this.state.items.splice(items.indexOf(itemText), 1);
    this.setState({items: newItems});*/
  },
	render: function(){
  	return (
    <li onClick={this.handleClick} className="TodoListItem">{this.props.itemText}</li>
    );
  },
});




ReactDOM.render(<TodoApp/>, document.getElementById('todo'));
