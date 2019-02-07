import React from 'react'

//components
import Button from '../Button'

//assets

class LightInfoComponent extends React.Component {

    render() {
        return (
            <div className='LightInfoComponent'>

                <Button
                    title='Take me back'
                    click={this.props.closeLightInfo}
                />

                <div className='about'>

                    <div>What’s Hue Step?</div>

                    <p>Shade and or Light is how close to being fully luminated (100%, white)   or dark a color is (0%, black). So the higher the step the more drastic the lighter or darker a color becomes</p>

                    <p>Test it out below with our little tool to get a better idea.</p>

                    <div>

                        <div className='wrapper'>
                        </div>

                    </div>
                </div>

            </div>
        )
    }

} // LightInfoComponent

export default LightInfoComponent
