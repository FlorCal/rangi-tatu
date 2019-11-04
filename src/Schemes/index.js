// libraries
import React from 'react'
import convert from 'color-convert'


//componenets
import Scheme from './Scheme'

class SchemesComponent extends React.Component {

    isBaseColorDark() {
        let darkColor = false
        if (this.props.baseColor.length >= 3 && this.props.schemesCombinations.length >= 0) {
            let color  = convert.hex.hsl(this.props.baseColor)
            if (color[2] < 50) darkColor = true
        }
        return darkColor
    }

    render() {

        let baseColor = this.props.baseColor && this.props.baseColor.length >= 3 ? this.props.baseColor : null

        let textColor = this.isBaseColorDark() ? '#ffffff' : '#333333'

        return(

            <div className='SchemesComponent' style={{background: baseColor, WebkitScrollbarThumb: 'red'}}>
                { this.props.schemesCombinations.length >= 1 ?
                    <div className='schemes'>
                        {this.props.schemesCombinations.map((scheme, i) => (
                            <Scheme hexColor={baseColor} colors={scheme.colors} name={scheme.name} key={i} />
                        ))}
                    </div> :
                    <div className='noSchemesMessage' style={{color: textColor}}>Oops! There aren&apos;t any compliant color groupings. Please choose a new color and try again.</div>
                }
            </div>
        )
    }
}

export default SchemesComponent
