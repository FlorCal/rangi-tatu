import React from 'react'
import convert from 'color-convert'
import bowlWhite from '../app/img/bowl-white.svg'

// assets
import bowl from '../app/img/bowl.svg'

class LoadingComponent extends React.Component {

    isBaseColorDark() {
        let darkColor = false
        if (this.props.baseColor.length >= 3 && this.props.schemesCombinations.length >= 0) {
            let color  = convert.hex.hsl(this.props.baseColor)
            if (color[2] < 50) darkColor = true
        }
        return darkColor
    }

    render() {

        let baseColor = this.props.schemes && this.props.baseColor.length >= 3 ? this.props.baseColor : null

        let textColor = this.isBaseColorDark() ? '#ffffff' : '#333333'

        return (
            <div className='LoadingComponent' style={{background: baseColor, color: textColor}}>
                <img className='bowl' src={this.isBaseColorDark() ? bowlWhite : bowl} />
                <div className='stir'>Stir stir stir...</div>
            </div>
        )
    }
}

export default LoadingComponent
