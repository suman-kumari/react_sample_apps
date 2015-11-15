var Todo = React.createClass({
  render: function(){
    return(<ul> <li className='todo'>  { this.props.todo } </li> </ul>
      );
  }
});

ReactDOM.render(<div>
      <h1> Things to Do </h1>
        <div clasName='form-inline'>
          <div createClass='form-group'>
            <input clasName='form-conrol' placeholder='Add to do' />
            <button className='btn  btn-default btn-sm'> + </button>
          </div>
        </div>
        <Todo todo="call Henry"/>
        <Todo todo='Pay phonebill'/>
        <Todo todo='pay Internet Bill'/>
         </div>, document.getElementById('to_do'));