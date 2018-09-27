import React from 'react'
import ReactDOM from 'react-dom'
import convert from 'color-convert'
import contrast from 'get-contrast'
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

            baseColor: '', // will always start with #
            standard: 'WCAG AA',
            hue: '20°',
            shade: '10%',
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
    componentDidMount(){
        this.closeIntro()
        // this.createSchemes()
    }

    // accepts: base degree and complimantary angle degree
    // outputs: 2 complimantary color degrees [firstComp, secondComp]
    hslComplimentary(baseD, compD) {
        if (compD <= 0) return null

        let firstComp = baseD + 180 - compD
        if (firstComp < 0) firstComp = firstComp + 360
        if (firstComp > 360) firstComp = firstComp - 360

        let secondComp = baseD -180 + compD
        if(secondComp < 0) secondComp = secondComp + 360
        if(secondComp > 360) secondComp = secondComp - 360

        return [firstComp, secondComp]
    }

    isSchemeWcagCompliant(colorScheme) {
        let wcagStandard = this.state.standard.split(' ')[1] // ['WCAG', 'AA'] or ['WCAG', 'AAA'] -> 'AA' 0r 'AAA'
        let passWcag = false

        colorScheme.forEach(color => {
            let hslBackground = `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`
            let colorContrast = contrast.score(this.state.baseColor, hslBackground) // get-contrast library checks for AAA & AA contrast

            if (colorContrast === wcagStandard || colorContrast === 'AAA') {
                passWcag = true
            }
        })// stepping through colors in colorScheme

        return passWcag
    } // checks if scheme colors are wcag compliant


    generateCombinations(callback) {
        let newSchemesCombinations = []
        let baseHsl = convert.hex.hsl(this.state.baseColor.replace('#', ''))
        let hue = parseInt(this.state.hue)
        let count1 = 0
        let count2 = 0

        for(let d = 5; d <= 90; d += hue) { // primary hue step
            for(let dd = d + hue; dd <= 90; dd += hue){ // secondary hue step
                let complimentaryColors1 = this.hslComplimentary(baseHsl[0], d)
                let complimentaryColors2 = this.hslComplimentary(baseHsl[0], dd)

                let shade = parseInt(this.state.shade)

                // FIXME: 15% shade actually stops at 90 and never reaches 100

                for (let l = constants.minShadeLightStep;
                    l <= constants.maxShadeLightStep;
                    l += shade) { // shade/light step by 10°

                    for (let s = constants.minSaturationStep;
                        s <= constants.maxSaturationStep;
                        s += constants.saturationStep) { // saturation step by 10%

                        count1 += 1

                        let colorScheme = [
                            [complimentaryColors1[0], s, l],
                            [complimentaryColors2[0], s, l],
                            [complimentaryColors2[1], s, l],
                            [complimentaryColors1[1], s, l]
                        ]

                        if(this.isSchemeWcagCompliant(colorScheme)) {
                            count2 += 1
                            newSchemesCombinations.push(colorScheme)
                        }// if all colors in colorScheme are wcag compliant, scheme will be pushed

                    } // stepping through saturation
                } // stepping through shade/lightness

            }
        }

        console.log(count1);
        console.log(count2);
        this.setState({schemesCombinations: newSchemesCombinations}, callback)
    } //

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

        this.setState({
            pickerIntro: false,
            picker: false,
            loading: true
        })

        // callback func created to wait for schemes to be generated before loading page clears
        setTimeout(() => {
            this.generateCombinations(() =>
                this.setState({
                    loading: false,
                    schemes: true
                })
            )
        }, 500)
    }

    baseColorChange(e) {
        let val = e.target.value.startsWith('#') ? e.target.value : '#' + e.target.value
        this.setState({baseColor: val})
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
