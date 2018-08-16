// libraries
import React from 'react'

// components
import Button from '../Button'
import Selector from './Selector'

// assets
import picker from '../app/img/picker.svg'

class PickerComponent extends React.Component {


    render() {

        return (
            <div className={'PickerComponent' + (this.props.picker ? ' open' : '' ) }>

                <div className='header'>
                    <img src={picker} />
                    <div className='title'>Picker</div>
                    <div className='close' onClick={this.props.closePicker}>
                        Close
                    </div>
                </div>

                <div className='DropHex'>
                    <div className='title' >Drop in a hex code</div>
                    <input className='wrapper' type='text' placeholder='#FFFFFF' maxLength='7'/>
                </div>

                <Selector
                    passClass='standard'
                    title='WCAG Standard'
                    options={['WCAG AA', 'WCAG AAA']}
                    active={this.props.standard}
                    click={this.props.changeStandard}/>

                <Selector
                    passClass='hue'
                    title='Hue Step'
                    options={['5°', '10°', '15°', '20°']}
                    active={this.props.hue}
                    click={this.props.changeHue}/>

                <Selector
                    passClass='shade'
                    title='Shade/Light Step'
                    options={['5%', '10%', '15%', '20%']}
                    active={this.props.shade}
                    click={this.props.changeShade}/>


                <div className='button' onClick={this.props.openLoading}>
                    <Button passClass='title' title='Create'/>
                </div>

            </div>
        )
    }
}

export default PickerComponent
