// libraries
import React from 'react'


class PickerComponent extends React.Component {
    render() {
        return (
            <div className='PickerComponent open'>
                <div className='header'>
                    <a>Close</a>
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
