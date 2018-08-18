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
            intro: true, // landing page
            picker: true, // side menu
            pickerIntro: true, // instructions for picker
            loading: false, // appears after picker create button clicked and before Schemes
            schemes: false,

            about: false, // application/team information that overlays whole app

            standard: 'WCAG AA',
            hue: '5°',
            shade: '5%',
        }
    }

    closePicker() {
        this.setState({picker: false})
    }

    openPicker() {
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

    changeStandard(val) {
        this.setState({standard: val})
    }

    changeHue(val) {
        this.setState({hue: val})
    }

    changeShade(val) {
        this.setState({shade: val})
    }

    createSchemes() {
        this.setState({
            pickerIntro: false,
            picker: false,
            loading: true
        })
        setTimeout(() => {
            this.setState({
                loading: false,
                schemes: true
            })
        }, 500)
    }


    render() {

        return (
            <div>
                <Container {...this.state}
                    openPicker={this.openPicker.bind(this)}
                    openAbout={this.openAbout.bind(this)}/>

                <Picker {...this.state}
                    closePicker={this.closePicker.bind(this)}
                    changeStandard={this.changeStandard.bind(this)}
                    changeHue={this.changeHue.bind(this)}
                    changeShade={this.changeShade.bind(this)}
                    createSchemes={this.createSchemes.bind(this)}
                />

                {this.state.intro ?
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
