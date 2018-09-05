import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'
import constants from '../constants'

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
            schemes: false, // schemes page appear  or not appear

            about: false, // application/team information that overlays whole app

            baseColor: '',
            standard: 'WCAG AA',
            hue: '5°',
            shade: '5%',
            /*
            [ //combinations
              [ // scheme
                [235,50,20], // color1 [hue, saturation, lightness]
                [230,30,40], // color2
                // ..., ..., ...
              ] // , ..., ..., ...
            ]
            */    
            schemesCombinations: [] // color combinations
        }
    }

    // lifecycle
    // componentDidMount(){
    //     this.closeIntro()
    //     this.createSchemes()
    // }

    // accepts: base degree and complimantary angle degree
    // outputs: 2 complimantary color degrees
    hslComplimenatry(baseD, compD) {
        if(compD <= 0) return null

        let firstComp = baseD + 180 - compD
        if(firstComp < 0) firstComp = firstComp + 360
        if(firstComp > 360) firstComp = firstComp - 360

        let secondComp = baseD -180 + compD
        if(secondComp < 0) secondComp = secondComp + 360
        if(secondComp > 360) secondComp = secondComp - 360

        return [firstComp, secondComp]
    }

    generateCombinations() {
        // this function will end with a set state
    }


    // actions
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
        this.generateCombinations()
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
        }, constants.createSchemesDelay)
    }

    baseColorChange(e) {
        this.setState({baseColor: e.target.value})
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
                    baseColorChange={this.baseColorChange.bind(this)}
                />

                {this.state.intro ?
                    <Intro
                        closeIntro={this.closeIntro.bind(this)}/>
                    : null}

                { this.state.about ?
                    <About
                        closeAbout=
                            {this.closeAbout.bind(this)} />
                    : null}

            </div>
        );
    }
}

ReactDOM.render(<Renderer />, document.getElementById('app'));
