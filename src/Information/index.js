import React from 'react'

//components
import Button from '../Button'
// import Selector from '../Picker/Selector'

//assets
// import constants from '../../constants'

class InformationComponent extends React.Component {

    renderStandard() {
        // return ()
    }

    renderHue() {
        // return ()
    }

    renderSaturation() {
        // return ()
    }

    renderShade() {
        // return ()
    }

    render() {

        let body = null
        if(this.props.information === 'standard') body = this.renderStandard()
        if(this.props.information === 'hue') body = this.renderHue()
        if(this.props.information === 'saturation') body = this.renderSaturation()
        if(this.props.information === 'shade') body = this.renderShade()


        return (
            <div className='InformationComponent'>

                <Button
                    title='Take me back'
                    click={this.props.onBackClick}
                />

                <div className='about'>{body}</div>

            </div>
        )
    }

} // InformationComponent

export default InformationComponent


//     <div className='wrapperSelector'>
//         <Selector
//             options={constants.SelectorOptions.hueOptions}
//             active={this.props.hue}
//             click={this.props.changeHue}/>
//     </div>
