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
            intro: true,
            about: false,
        }
    }

    closePicker(){
        this.setState({picker: false})
    }

    openPicker(){
        this.setState({picker: true})
    }

    openAbout() {
        this.setState({about: true})
    }

    closeAbout() {
        this.setState({about: false})
    }

    closeIntro() {
        this.setState({intro: false})
    }

    render() {

        return (
            <div>
                <Container {...this.state}
                    openPicker={this.openPicker.bind(this)}
                    openAbout={this.openAbout.bind(this)}/>
                <Picker {...this.state}
                    closePicker={this.closePicker.bind(this)}/>

                { this.state.intro ?
                    <Intro
                        closeIntro={this.closeIntro.bind(this)}/>
                    : null}

                { this.state.about ?
                    <About
                        closeAbout={this.closeAbout.bind(this)}/>
                    : null}
            </div>
        );
    }
}

ReactDOM.render(<Renderer />, document.getElementById('app'));
