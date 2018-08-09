//libraries
import React from 'react'

//assets
import picker from '../app/img/picker.svg'
import question from '../app/img/question.svg'

class HeaderComponent extends React.Component {
    render() {
        return (
            <div className='HeaderComponent'>
                <div className='picker' onClick={this.props.openPicker}>
                    <img src={picker} />
                    <span>Picker</span>
                </div>
                <h1 className='title'>
                Rangi Tatu
                </h1>
                <a className='q'>
                    <img src={question} />
                </a>
            </div>
        )
    }
}

export default HeaderComponent
