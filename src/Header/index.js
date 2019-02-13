//libraries
import React from 'react'

//helpers
import helpers from '../app/helpers'

//assets
import picker from '../app/img/picker.svg'
import picker2 from '../app/img/picker2.svg'
import question from '../app/img/question.svg'
import question2 from '../app/img/question2.svg'


class HeaderComponent extends React.Component {

    render() {

        let isBaseColorDark = helpers.isBaseColorDark(this.props)
        
        let baseColor = this.props.baseColor.length >= 3 ? this.props.baseColor : null

        let textColor = isBaseColorDark ? '#ffffff' : '#333333'

        return (
            <div className='HeaderComponent' style={{color: textColor, background: baseColor}}>
                <div className='picker'>
                    <img onClick={this.props.openPicker} src={isBaseColorDark ? picker2 : picker} />
                    <span onClick={this.props.openPicker} style={{color: textColor}}>Picker</span>
                </div>
                <h1 className='title'>
                Rangi Bora
                </h1>
                <a className='q'>
                    <img onClick={this.props.openAbout} src={isBaseColorDark ? question2 : question}/>
                </a>
            </div>
        )
    }

} // HeaderComponent

export default HeaderComponent
