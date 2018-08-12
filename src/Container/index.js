import React from 'react'

import Header from '../Header'
import PickerIntro from '../PickerIntro'
import Schemes from '../Schemes'


class ContainerComponent extends React.Component {

    render() {

        return (
            <div className='ContainerComponent'>
                <Header {...this.props} />
                {!this.props.closeIntro ? <PickerIntro /> : null}
                <Schemes {...this.props} />
            </div>
        );
    }
}

export default ContainerComponent
