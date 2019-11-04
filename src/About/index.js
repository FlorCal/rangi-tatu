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
    onFritzClick() {
        var win = window.open('http://www.alafritz.com/', '_blank');
        win.focus();
    }

    onFlorClick() {
        var win = window.open('http://florcalderon.com/', '_blank');
        win.focus();
    }

    onEmilyClick() {
        var win = window.open('https://www.fantasynamegenerators.com/', '_blank');
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
                    <div className='info'>There were no sites that could generate schemes of WCAG2 AA compliant colors.  So I decided to do something about that, and the rest, they say, is history
                    </div>

                    {this.plotRandomImage()}

                    <div className='madeBy'>Made with ice cream by <span onClick={this.onFritzClick.bind(this)}>Fritz</span> & <span onClick={this.onFlorClick.bind(this)} className='flor'>Flor.</span>
                        <div>Names supplied by <span onClick={this.onEmilyClick.bind(this)} >Emily.</span></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutComponent
