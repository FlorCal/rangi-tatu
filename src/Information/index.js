import React from 'react'

//components
import Button from '../Button'
import Selector from '../Picker/Selector'

//assets
import constants from '../../constants'

class InformationComponent extends React.Component {

    render() {

        return (
            <div className='InformationComponent'>

                <Button
                    title='Take me back'
                    click={this.props.closeInformation}
                />

                <div className='about'>

                    <div>{this.props.title}</div>

                    <p>{this.props.info}</p>

                    <p>{this.props.testBelow}</p>

                    <div className='wrapperSelector'>
                        <Selector
                            options={constants.SelectorOptions.hueOptions}
                            active={this.props.hue}
                            click={this.props.changeHue}/>
                    </div>


                </div>

            </div>
        )
    }

} // InformationComponent

export default InformationComponent
