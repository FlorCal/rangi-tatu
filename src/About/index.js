import React from 'react'

class AboutComponent extends React.Component {
    render() {
        return (
            <div className='AboutComponent'>
                <div onClick={this.props.closeAbout}>Close</div>
            </div>
        )
    }
}

export default AboutComponent
