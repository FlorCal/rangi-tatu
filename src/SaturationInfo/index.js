import React from 'react'

//components
import Button from '../Button'

class SaturationInfoComponent extends React.Component {
    render() {
        return (
            <div className='SaturationInfoComponent'>
                <Button
                    title='Take me back'
                    click={this.props.closeLightInfo}
                />

                <div className='about'>

                    <div>What’s Saturation Step?</div>

                    <p>Saturation is the intensity of a color, from pure, or super bright, being 100% to gray, 0%, all while maintaining the same lightness level. The lower the saturation the more washed out colors tend to look. So the higher the step, the quicker the color gets to gray.</p>

                    <p>Test it out below with our little tool to get a better idea.</p>

                    <div>

                        <div className='wrapper'>
                        </div>
                        <img/>

                    </div>
                </div>
            </div>
        )
    }
}



export default SaturationInfoComponent
