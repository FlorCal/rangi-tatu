import React from 'react'

class HeaderComponent extends React.Component {
    render() {
        return (
            <div className='HeaderComponent'>
                <div className='picker' onClick={this.props.openPicker}>
                    Picker
                </div>
                <h1 className='title'>
                Rangi Tatu
                </h1>
                <a className='q'>
                ?
                </a>
            </div>
        )
    }
}

export default HeaderComponent
