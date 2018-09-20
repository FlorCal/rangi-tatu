//libraries
import React from 'react'

//assets
import picker from '../app/img/picker.svg'
import question from '../app/img/question.svg'

class HeaderComponent extends React.Component {
    render() {

        return (
            <div className='HeaderComponent'>
                <div className='picker'>
                    <img onClick={this.props.openPicker} src={picker} />
                    <span onClick={this.props.openPicker} >Picker</span>
                </div>
                <h1 className='title'>
                Rangi Tatu
                </h1>
                <a className='q'>
                    <img onClick={this.props.openAbout} src={question} />
                </a>
            </div>
        )
    }
}

export default HeaderComponent
