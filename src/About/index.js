import React from 'react'

class AboutComponent extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className='AboutComponent'>
                <div onClick={this.props.closeAbout}>Close</div>
            </div>
        )
    }
}

export default AboutComponent
