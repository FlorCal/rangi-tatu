import React from 'react'
import bowlWhite from '../app/img/bowl-white.svg'

//helpers
import helpers from '../app/helpers'

// assets
import bowl from '../app/img/bowl.svg'

class LoadingComponent extends React.Component {

    render() {

        let isBaseColorDark = helpers.isBaseColorDark(this.props)

        let baseColor = this.props.baseColor.length >= 3 ? this.props.baseColor : null

        let textColor = isBaseColorDark ? '#ffffff' : '#333333'

        return (
            <div className='LoadingComponent' style={{background: baseColor, color: textColor}}>
                <img className='bowl' src={isBaseColorDark ? bowlWhite : bowl} />
                <div className='stir'>Stir stir stir ...</div>
            </div>
        )
    }
}

export default LoadingComponent
