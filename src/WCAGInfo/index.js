import React from 'react'

//components
import Button from '../Button'

class WCAGInfoComponent extends React.Component {

    onWcagAAClick() {
        var win = window.open('https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/visual-audio-contrast-contrast.html', '_blank');
        win.focus();
    }

    onWcagAAAClick() {
        var win = window.open('https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/visual-audio-contrast7.html', '_blank');
        win.focus();
    }

    render() {
        return (
            <div className='WCAGInfoComponent'>

                <Button
                    title='Take me back'
                    click={this.props.closeWcagInfo}
                />

                <div className='about'>

                    <div>What’s WCAG?</div>
                    <p>WCAG, is short for Web Content Accessibility Guidelines. What does that even mean you ask? They’re set of documents that explain how to make web content more accessible to people with disabilities</p>
                    <p>WCAG AA refers to the lowest success criteria for color contrast ratios that allow for your website to be accessible. this means a contrast ratio of at least 4.5:1 of text or images of text.</p>
                    <p>WCAG AAA is the highest success criteria, this means a contrast ratio of at least 7:1 of text or images of text.</p>

                </div>

                <div className='links'>

                    <span>WCAG AA Link:</span>
                    <div className='link' onClick={this.onWcagAAClick.bind(this)}>
                    https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/visual-audio-contrast-contrast.html
                    </div>
                    <span>WCAG AAA Link:</span>
                    <div className='link' onClick={this.onWcagAAAClick.bind(this)}>
                    https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/visual-audio-contrast7.html
                    </div>

                </div>

            </div>
        )
    }

} // WCAGInfoComponent

export default WCAGInfoComponent
