import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

//componenets
import Container from './Container'
import Picker from './Picker'
import Intro from './Intro'
import About from './About'


class Renderer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            picker: false,
            intro: false
        }
    }

    closePicker(){
        this.setState({picker: false})
    }

    openPicker(){
        this.setState({picker: true})
    }

    render() {

        return (
            <div>
                <Container {...this.state}
                    openPicker={this.openPicker.bind(this)} />
                <Picker {...this.state}
                    closePicker={this.closePicker.bind(this)}/>
                <Intro />
                <About />
            </div>
        );
    }
}

ReactDOM.render(<Renderer />, document.getElementById('app'));
