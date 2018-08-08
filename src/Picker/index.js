// libraries
import React from 'react'


class PickerComponent extends React.Component {


    render() {

        return (
            <div className={'PickerComponent' + (this.props.picker ? ' open' : '' ) }>
                <div className='header'>
                    <div onClick={this.props.closePicker}>Close</div>
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
