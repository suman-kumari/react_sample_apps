var DecoratedItem = React.createClass({
  render: function(){
    var capitalizeItem = function(item){
      item.toUpperCase();
    };
  return <ul> {this.props.items.map(capitalizeItem)} </ul>;
  }
});

var TodoList = React.createClass({
  getInitialState: function(){
    return { eachItem: '' }
  },
  configureEachItem: function(item){
    this.setState({
      eachItem: item.toUpperCase()
    })
  },
  render: function(){
    var createItem = function(itemText){
      // return < DecoratedItem item={this.configureEachItem(itemText)}/>;
      return <li> { itemText} </li>;
     // return <li> { this.configureEachItem(itemText) } </li>;
   };

  // return <DecoratedItem />;
  return <ul> { this.props.items.map(createItem) } </ul>;
  }
});

/*0.   with line 27 & 22 enabled,Application works fine as expected */

// Before jumping to following cases, notice there are multiple return statements in TodoList#render method. Here I am trying out to call other component. so while testing ensure only one return statement is enabled in the render & createItem method.

/*
  1. with following two lines enabled, I am trying to just return the same attribute in a capitalize form(refer line 16).
    it gives me error at (this.configureEachItem(itemText)) section.(TypeError this is undefined)
  27: return <ul> { this.props.items.map(createItem) } </ul>;
  23: return <li> { this.configureEachItem(itemText) } </li>;
*/

/*
  2. what I trying is enable the line 26, disable the other return statements inside the createItem method & the render method.
  Enabled lines: return <DecoratedItem />;
  Error says, this.props.items is undefined
  Does it mean, the props is only available upto one level. like here the items was in initialState for TodoApp component, but we accessed it upto one level i.e. TodoList. But it can't be accessed anymore up in the level,  like in DecoratedItem Component ?
*/

var TodoApp = React.createClass({
  getInitialState: function(){
    return {items: [],  text: ''}
  },

  onChange: function(e){
    // e.target will pick the data froom the text value the binding has been done.
    // this setState basically assigns the value attribute of the input field with the entered value!
    this.setState({ text: e.target.value });
  },

  handleSubmit: function(e){
    e.preventDefault();
    //to connect with the, the items list(which is configured in the Initialstate) we use this.state.items
    //this.state.items.concat([this.state.text])
    if(this.state.text != ''){
      var updatedItemList = this.state.items.concat(this.state.text);
      this.setState({items: updatedItemList, text: '' });
    }
  },

  render: function(){
    return(
      <div className='todo'>
        <h3> Todo App </h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.onChange} value={this.state.text} placeholder='Add a task.' />
          <button className='button'> { 'Add #' + this.state.items.length + 1 + ' Item'} </button>
        </form>
      </div>)
  }
})


ReactDOM.render(<TodoApp/>, document.getElementById('example'));