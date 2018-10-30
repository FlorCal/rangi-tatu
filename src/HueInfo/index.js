import React from 'react'

//components
import Button from '../Button'

class HueInfoComponent extends React.Component {


    render() {
        return (
            <div className='HueInfoComponent'>

                <Button
                    title='Take me back'
                    click={this.props.closeHueInfo}
                />

                <div className='about'>

                    <div></div>
                    <p></p>

                    <p></p>

                    <p></p>

                </div>

            </div>
        )
    }

} // HueInfoComponent

export default HueInfoComponent
