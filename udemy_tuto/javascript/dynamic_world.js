

var HelloWorld = React.createClass({
  // displayName: 'HelloWorld',

  render: function render() {
    return React.createElement(
      'div',
      {className: 'myExample'},
      '',
      React.createElement(
        'h1',
        {className: 'HelloHeader'},
        'Hello ',
        this.props.name,
        ' !'
      ),
      ' '
    );
  }
});


ReactDOM.render(React.createElement(HelloWorld,{ name: 'Ajay' }), document.getElementById('example'));


/// React.createElement('div', {className: 'mydiv'}, 'no value here')
/*
 React.createElement(
 'elementName/div',
 {className: 'myDiv'},
 'value on the elemennt'),
 React.createElement


*/