// libraries
import React from 'react'

import picker from '../app/img/picker.svg'

class PickerComponent extends React.Component {


    render() {

        return (
            <div className={'PickerComponent' + (this.props.picker ? ' open' : '' ) }>

                <div className='header'>

                    <div className='title'>
                        <img src={picker} />
                        <span>Picker</span>
                    </div>

                    <div className='close' onClick={this.props.closePicker}>
                        Close
                        <div></div>
                    </div>
                </div>

                <div className='menu'>
                    Menu
                </div>

                <div className='button'>
                    Button
                </div>

            </div>
        )
    }
}

export default PickerComponent
