import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

//componenets
import Container from './Container'
import Header from './Header'

class Renderer extends React.Component {
    render() {
        return (
            <div>
                <Container />
                <Header />
            </div>
        );
    }
}

ReactDOM.render(<Renderer />, document.getElementById('app'));
