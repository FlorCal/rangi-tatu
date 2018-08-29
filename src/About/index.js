//libraries
import React from 'react'

//assets
import chocolate from '../app/img/chocolate.svg'
import blueMoon from '../app/img/blueMoon.svg'
import bubblegum from '../app/img/bubblegum.svg'
import pistachio from '../app/img/pistachio.svg'
import raspberry from '../app/img/raspberry.svg'
import strawberry from '../app/img/strawberry.svg'
import turmericHoney from '../app/img/turmericHoney.svg'
import vanilla from '../app/img/vanilla.svg'

let images = [chocolate, blueMoon, bubblegum, pistachio, raspberry, strawberry, turmericHoney, vanilla]



class AboutComponent extends React.Component {
    onFlorClick() {
        var win = window.open('https://github.com/FlorCal', '_blank');
        win.focus();
    }

    plotRandomImage() {
        return <img className='img' src={images[Math.floor(Math.random() * images.length)]}/>
    }

    render() {
        return (
            <div className='AboutComponent'>
                <button className='button' onClick={this.props.closeAbout}>Take me back</button>

                <div className='about'>
                    <div className='title'>what&apos;s this?</div>
                    <div className='info'>There were no sites that could generate schemes of WCAG AA compliant colors.  So I decided to do something about that, and the rest, they say, is history.
                    </div>

                    {this.plotRandomImage()}

                    <div className='madeBy'>Made with ice cream by <span>@alafritz</span> & <span onClick={this.onFlorClick.bind(this)} className='flor'>@flor.</span>
                        <div>Names supplied by <span>Emily.</span></div></div>
                </div>
            </div>
        )
    }
}

export default AboutComponent
