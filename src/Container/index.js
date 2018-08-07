import React from 'react'

import Picker from '../Picker'
import Header from '../Header'

class ContainerComponent extends React.Component {
    render() {
        return (
            <div className='ContainerComponent'>
                <Picker />
                <Header />
            </div>
        );
    }
}

export default ContainerComponent
