// libraries
import React from 'react'

//componenets
import Scheme from './Scheme'

class SchemesComponent extends React.Component {


    render() {
        return(
            <div className='SchemesComponent'>
                <div className='schemes'>
                    {this.props.schemesCombinations.map((colors, i) =>(
                        <Scheme colors={colors} key={i} />
                    ))}
                </div>
            </div>
        )
    }
}

export default SchemesComponent
