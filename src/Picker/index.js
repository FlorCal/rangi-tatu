// libraries
import React from 'react'

// components
import Button from '../Button'
import Selector from './Selector'

// assets
import picker from '../app/img/picker.svg'
import constants from '../../constants'

class PickerComponent extends React.Component {


    render() {

        let buttonPassClass = 'title' + (this.props.baseColor.length < 4 ? ' restrict' : '')

        return (
            <div className={'PickerComponent' + (this.props.picker ? ' open' : '' ) }>

                <div className='header'>
                    <img src={picker} />
                    <div className='title'>Picker</div>
                    <div className='close' onClick={this.props.closePicker}>
                        Close
                    </div>
                </div>

                <div className='selectorWrapper'>

                    <div className='DropHex'>
                        <div className='title' >Drop in a hex code</div>
                        <input className='wrapper' type='text' placeholder='#FFFFFF' maxLength='7'
                            value={this.props.baseColor}
                            onChange={this.props.baseColorChange.bind(this)}/>
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
                        options={constants.SelectorOptions.hueOptions}
                        active={this.props.hue}
                        click={this.props.changeHue}/>

                    <Selector
                        passClass='saturation'
                        title='Saturation Step'
                        options={constants.SelectorOptions.saturationOptions}
                        active={this.props.saturation}
                        click={this.props.changeSaturation}/>

                    <Selector
                        passClass='shade'
                        title='Shade/Light Step'
                        options={constants.SelectorOptions.shadeOptions}
                        active={this.props.shade}
                        click={this.props.changeShade}/>


                    <div className='button'>
                        <Button
                            click={this.props.createSchemes}
                            passClass={buttonPassClass}
                            title='Create'/>
                    </div>
                    
                </div>


            </div>
        )
    }
}

export default PickerComponent
