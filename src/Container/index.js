//libraries
import React from 'react'

//components
import Header from '../Header'
import PickerIntro from '../PickerIntro'
import Loading from '../Loading'
import Schemes from '../Schemes'


class ContainerComponent extends React.Component {

    render() {
        return (
            <div className='ContainerComponent'>
                <Header {...this.props} />
                {this.props.pickerIntro ? <PickerIntro /> : null}
                {this.props.loading ? <Loading /> : null}
                {this.props.schemes ? <Schemes {...this.props}
                /> : null}
            </div>
        );
    }
}

export default ContainerComponent
