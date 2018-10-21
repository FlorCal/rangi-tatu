//libraries
import React from 'react'

//assets
import bowl from '../app/img/bowl.svg'


class PickerIntroComponent extends React.Component {
    render() {
        return (
            <div className='PickerIntroComponent' >
                <div className='bowl'>
                    <img src={bowl}/>
                </div>
                <div className='instruction'>
                    Bwana, drop in that hex code so I can
                    get to mixing these colors up
                </div>
            </div>
        )
    }
}


export default PickerIntroComponent
