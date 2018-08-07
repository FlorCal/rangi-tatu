import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

//componenets
import Container from './Container'
import Picker from './Picker'
import Intro from './Intro'


class Renderer extends React.Component {
    render() {
        return (
            <div>
                <Container />
                <Picker />
                <Intro />
            </div>
        );
    }
}

ReactDOM.render(<Renderer />, document.getElementById('app'));
