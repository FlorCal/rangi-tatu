import React from 'react'

class AboutComponent extends React.Component {
    render() {
        return (
            <div className='AboutComponent'>
                <div className='button' onClick={this.props.closeAbout}>Take me back</div>
            </div>
        )
    }
}

export default AboutComponent
