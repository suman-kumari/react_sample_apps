var StateComponent  = React.createClass({

  getInitialState: function(){
    return { count: 5 }
  },

  render: function(){
    return(
      <div className='Counter'>
        <h1> Initial State is: {this.state.count} </h1>
      </div>
    );
  }

});

ReactDOM.render(<StateComponent />, document.getElementById('example'));