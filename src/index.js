import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

//componenets
import Container from './Container'

class Renderer extends React.Component {
    render() {
        return (
            <div>
                <Container />
            </div>
        );
    }
}

ReactDOM.render(<Renderer />, document.getElementById('app'));
