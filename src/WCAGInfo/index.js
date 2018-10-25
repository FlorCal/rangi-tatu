import React from 'react'

//components
import Button from '../Button'

class WCAGInfoComponent extends React.Component {

    render() {
        return (
            <div className='WCAGInfoComponent'>
                <Button
                    title='Take me back'
                    click={this.props.closeWcagInfo}
                />
            </div>
        )
    }

} // WCAGInfoComponent

export default WCAGInfoComponent
