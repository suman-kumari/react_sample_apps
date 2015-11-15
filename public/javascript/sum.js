var SumComponent = React.createClass({
  getInitialState: function(){
    return { result: ''}
  },
  performSum: function(){
    this.setState({
      result: this.props.firstNumber + this.props.secondNumber
    })
  },
  render: function(){
    return(
      <div className='sum'>
        <h3> {this.state.result } </h3>
        <input type='text'value={0}  name='firstNumber'> </input>
        <input type='text' value={0} name='secondNumber'> </input>
        <button type='button' onClick={this.performSum}> Sum </button>
      </div>
    )
  }
});


ReactDOM.render(<SumComponent />, document.getElementById('example'));