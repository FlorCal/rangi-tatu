import React from 'react'

class SchemeComponent extends React.Component {
    render() {
        return(
            <div key={this.props.passKey ? this.props.passKey : null}
                className='SchemeComponent'>
                <div className='color1'></div>
                <div className='color2'></div>
                <div className='color3'></div>
                <div className='name'>Name</div>
                <div className='hue'>#000000  /  #000000  /  #000000</div>
                <div className='copy'>Copy</div>

            </div>
        )
    }
}

export default SchemeComponent
