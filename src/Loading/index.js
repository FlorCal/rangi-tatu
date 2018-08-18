import React from 'react'

// assets
import bowl from '../app/img/bowl.svg'

class LoadingComponent extends React.Component {
    render() {
        return (
            <div className='LoadingComponent'>
                <img className='bowl' src={bowl} />
                <div className='stir'>Stir stir stir...</div>
            </div>
        )
    }
}

export default LoadingComponent
