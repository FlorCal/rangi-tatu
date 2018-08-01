import React from 'react'
import ReactDOM from 'react-dom'

class Container extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, I am working! YAY!!</h1>
      </div>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('app'));
