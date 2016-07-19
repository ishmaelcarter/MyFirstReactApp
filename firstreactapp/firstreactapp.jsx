
var TodoApp = React.createClass({
  getInitialState: function(){
  return {user: ['Ishmael Carter', 'Riley Cooper'], items: ['If you aint aim too high then you aim too low', 
  'So ahead of my time even when i rhyme about the future I be reminiscing'], 
  completedItems: ['DID']};
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
      <TopHeader />
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
      <h1 className="TopHeader">Memoir</h1>
      <img src="jcolehorrible.jpg" alt="J Cole" className="JColeUserPhoto" />
      <p className="user"><a>J. Cole</a></p>
      </div>
      )
  }
})

var TodoHeader = React.createClass({
  render: function(){
    return(<div>
      <h2 className="TodoHeader">A great man once said...</h2>
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
        <input className='FormButton' type='submit' value='J Cole Horrible' /> 
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
