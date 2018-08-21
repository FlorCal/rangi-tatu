import React from 'react'

import Scheme from './Scheme'

class SchemesComponent extends React.Component {

    schemes() {
        let out = []
        for(let i = 0; i < 10; i++) {
            out.push(Scheme)
        }
        return Scheme
    }

    render() {
        return(
            <div className='SchemesComponent'>
                <div className='schemes'>
                    <Scheme />
                </div>
            </div>
        )
    }
}

export default SchemesComponent
