import React from 'react'

//components
import Button from '../Button'
import Selector from '../Picker/Selector'

//assets
import constants from '../../constants'

class InformationComponent extends React.Component {

    renderStandard() {

        return (
            <div>
                <div className='title'>What’s WCAG?</div>
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

        return (
            <div>
                <div className='title'>What’s Hue Step?</div>

                <p>Hue is also known as color or the position on a color wheel. Hue step is the degree of separation between different colors on the wheel. So the wider the hue step, the larger the variance of colors but lower the number of combinations.</p>

                <p className='test'>Test it out below with our little tool to get a better idea.</p>

                <div className={'visual hue' + this.props.hue.replace('°', '')}>
                    <div className='wrapperSelector'>
                        <Selector
                            options={constants.SelectorOptions.hueOptions}
                            active={this.props.hue}
                            click={this.props.changeHue}/>
                    </div>
                </div>

            </div>
        )
    }

    renderSaturation() {
        return (
            <div className='saturation'>
                <div className='title'>What’s Saturation Step?</div>

                <p>Saturation is the intensity of a color, from pure, or super bright, being 100% to gray, 0%, all while maintaining the same lightness level. The lower the saturation the more washed out colors tend to look. So the higher the step, the quicker the color gets to gray.</p>

                <p className='test'>Test it out below with our little tool to get a better idea.</p>

                <div className={'visual saturation' + this.props.saturation.replace('%', '')}
                    style={{height:140}}>
                    <div className='wrapperSelector'>
                        <Selector
                            options={constants.SelectorOptions.saturationOptions}
                            active={this.props.saturation}
                            click={this.props.changeSaturation}/>
                    </div>
                </div>
            </div>
        )
    }

    renderShade() {
        return (
            <div>
                <div className='title'>What’s Shade/Light Step?</div>

                <p>Shade and or Light is how close to being fully luminated (100%, white)   or dark a color is (0%, black). So the higher the step the more drastic the lighter or darker a color becomes.</p>

                <p className='test'>Test it out below with our little tool to get a better idea.</p>

                <div className={'visual shade' + this.props.shade.replace('%', '')}
                    style={{height:140}}>
                    <div className='wrapperSelector'>
                        <Selector
                            options={constants.SelectorOptions.shadeOptions}
                            active={this.props.shade}
                            click={this.props.changeShade}/>
                    </div>
                </div>
            </div>
        )
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
