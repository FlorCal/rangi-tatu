import React from 'react'

class HeaderComponent extends React.Component {
    render() {
        return (
            <div className='HeaderComponent'>
                <a className='picker'>
                Picker
                </a>
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
