// libraries
import React from 'react'

//componenets
import Scheme from './Scheme'

class SchemesComponent extends React.Component {

    // plots
    plotSchemes() {
        let out = []
        for(let i = 0; i < 6; i++) {
            out.push(<Scheme passKey={i}/>)
        }
        return out
    }

    render() {
        return(
            <div className='SchemesComponent'>
                <div className='schemes'>
                    {this.plotSchemes()}
                </div>
            </div>
        )
    }
}

export default SchemesComponent
