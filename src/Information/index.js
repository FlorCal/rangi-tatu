import React from 'react'

//components
import Button from '../Button'
// import Selector from '../Picker/Selector'

//assets
// import constants from '../../constants'

class InformationComponent extends React.Component {

    renderStandard() {

        return (
            <div>
                <div>What’s WCAG?</div>
                <p>
          WCAG, is short for Web Content Accessibility Guidelines. What does that even mean you ask? They’re set of documents that explain how to make web content more accessible to people with disabilities.
                </p>

                <p>
                    <span onClick={this.onWcagAAClick.bind(this)}>WCAG AA</span> refers to the lowest success criteria for color contrast ratios that allow for your website to be accessible. this means a contrast ratio of at least 4.5:1 of text or images of text.</p>

                <p><span onClick={this.onWcagAAAClick.bind(this)}>WCAG AAA</span> is the highest success criteria, this means a contrast ratio of at least 7:1 of text or images of text.</p>
            </div>
        )
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

    onWcagAAClick() {
        var win = window.open('https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/visual-audio-contrast-contrast.html', '_blank');
        win.focus();
    }

    onWcagAAAClick() {
        var win = window.open('https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/visual-audio-contrast7.html', '_blank');
        win.focus();
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
