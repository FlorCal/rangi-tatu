// libraries
import React from 'react'

class ButtonComponent extends React.Component {
    render() {
        return (

            <button className='ButtonComponent' onClick={this.props.click}>{this.props.title}</button>

        )
    }
}

export default ButtonComponent
