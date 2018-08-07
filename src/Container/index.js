import React from 'react'

import Header from '../Header'
import Schemes from '../Schemes'


class ContainerComponent extends React.Component {
    render() {
        return (
            <div className='ContainerComponent'>
                <Header />
                <Schemes />
            </div>
        );
    }
}

export default ContainerComponent
