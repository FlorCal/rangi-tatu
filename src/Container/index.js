import React from 'react'

import Header from '../Header'
import Schemes from '../Schemes'


class ContainerComponent extends React.Component {

    render() {

        return (
            <div className='ContainerComponent'>
                <Header {...this.props} />
                <Schemes {...this.props} />
            </div>
        );
    }
}

export default ContainerComponent
