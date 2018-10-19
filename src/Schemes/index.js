// libraries
import React from 'react'

//componenets
import Scheme from './Scheme'

class SchemesComponent extends React.Component {

    render() {

        let baseColor = this.props.baseColor && this.props.baseColor.length >= 3 ? this.props.baseColor : null

        return(
            <div className='SchemesComponent' style={{background: baseColor, WebkitScrollbarThumb: 'red'}}>
                <div className='schemes'>
                    {this.props.schemesCombinations.map((scheme, i) => (
                        <Scheme hexColor={baseColor} colors={scheme.colors} name={scheme.name} key={i} />
                    ))}
                </div>
            </div>
        )
    }
}

export default SchemesComponent
