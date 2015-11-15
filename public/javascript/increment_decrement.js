var StateComponent = React.createClass({
  getInitialState: function(){
    return { count: 10}
  },

  incrementCounter: function(){
    this.setState({
      count: this.state.count + 2
    })
  },

  decrementCounter: function(){
    this.setState({
      count: this.state.count - 2
    })
  },

  render: function(){
    return(
      <div className='StateComponent'>
         <h1> {this.state.count} </h1>
         <button type='button' onClick={this.incrementCounter}> Increment </button>
         <button type='button' onClick={this.decrementCounter}> Decrement </button>
      </div>
      )
  }
});


ReactDOM.render(<StateComponent/>, document.getElementById('example'));