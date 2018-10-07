import React from 'react'

//components
import Button from '../Button'

class IntroComponent extends React.Component {
    render() {

        return (
            <div className='IntroComponent'>

                <div className='title'>Rangi Tatu</div>

                <div className='info'>
                    Generate accessible and pleasing sets of 4 color palettes <br/>that are WCAG2 compliant.
                </div>

                <div className='border'></div>

                <Button
                    title='Let&apos;s Go'
                    click={this.props.closeIntro}/>

            </div>
        )
    }
}

export default IntroComponent
