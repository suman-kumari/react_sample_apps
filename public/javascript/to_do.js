var DecoratedItem = React.createClass({
  render: function(){
    return <li key={this.props.key}> {this.props.item.toUpperCase()} </li>;
  }
});

var TodoList = React.createClass({
  render: function(){
    var itemEls = this.props.items.map(function(itemText, index){
      return < DecoratedItem item={itemText} key={index} />;
   });

   return <ul>{ itemEls }</ul>;
  }
});

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      items: []
    };
  },

  handleSubmit: function(e){
    e.preventDefault();
    let text = ReactDOM.findDOMNode(this.refs.todoText).value;
    let {items} = this.state;
    items.push(text);

    if(text){
      this.setState({ items: items});
    }

    this.refs.todoText.value = " ";
  },

  render: function(){
    return(
      <div className='todo'>
        <h3> Todo App </h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref="todoText" placeholder='Add a task.' />
          <button className='button'> { 'Add #' + this.state.items.length + 1 + ' Item'} </button>
        </form>
      </div>)
  }
})


ReactDOM.render(<TodoApp/>, document.getElementById('example'));
