import React from 'react'

//components
import Button from '../Button'

class InfoComponent extends React.Component {


    render() {
        return (
            <div className='InfoComponent'>

                <Button
                    title='Take me back'
                    click={this.props.closeInfo}
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

} // WCAGInfoComponent

export default InfoComponent
