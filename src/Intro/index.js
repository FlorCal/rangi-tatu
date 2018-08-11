import React from 'react'


class IntroComponent extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className='IntroComponent'>
                <div className='title'>Rangi Tatu</div>
                <div className='info'>
                    Generate accessible and pleasing sets of 3 color palettes <br/>that are WCAG2 compliant.
                    <div className='border'></div>
                </div>
                <button className='button' onClick={this.props.closeIntro}>Let&apos;s Go</button>
            </div>
        )
    }
}

export default IntroComponent
