//libraries
import React from 'react'
import convert from 'color-convert'

//assets
import picker from '../app/img/picker.svg'
import question from '../app/img/question.svg'

class HeaderComponent extends React.Component {

    isBaseColorLightOrDark() {
        let textColor = '#333333'
        if (this.props.baseColor && this.props.schemesCombinations.length > 0) {
            let color  = convert.hex.hsl(this.props.baseColor)
            if (color[2] < 50) textColor = '#ffffff'
        }
        return textColor
    }

    render() {
        // console.log(this.isBaseColorLightOrDark());

        let baseColor = this.props.schemes ? this.props.baseColor : null

        return (
            <div className='HeaderComponent' style={{color: this.isBaseColorLightOrDark(), background: baseColor}}>
                <div className='picker'>
                    <img onClick={this.props.openPicker} src={picker} />
                    <span onClick={this.props.openPicker}>Picker</span>
                </div>
                <h1 className='title'>
                Rangi Tatu
                </h1>
                <a className='q'>
                    <img style={{fill: this.isBaseColorLightOrDark()}} onClick={this.props.openAbout} src={question}/>
                </a>
            </div>
        )
    }

} // HeaderComponent

export default HeaderComponent
