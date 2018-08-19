//libraries
import React from 'react'

//assets
import chocolate from '../app/img/chocolate.svg'

class AboutComponent extends React.Component {
    render() {
        return (
            <div className='AboutComponent'>
                <button className='button' onClick={this.props.closeAbout}>Take me back</button>

                <div className='about'>
                    <div className='title'>what&apos;s this?</div>
                    <div className='info'>There were no sites that could generate schemes of WCAG AA compliant colors.  So I decided to do something about that, and the rest, they say, is history.
                    </div>

                    <img className='img' src={chocolate}/>

                    <div className='madeBy'>Made with ice cream by @alafritz & @valerie</div>
                </div>
            </div>
        )
    }
}

export default AboutComponent
