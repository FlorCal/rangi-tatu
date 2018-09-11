import React from 'react'
import convert from 'color-convert'

import createRandomNames from '../../app/data/name.js'

class SchemeComponent extends React.Component {
    plotHexs() {
        let hexArr = []
        this.props.colors.forEach(color => {
            hexArr.push('#' + convert.hsl.hex(color))
        })
        return hexArr.join(' / ')
    }
    render() {

        let baseColor = this.props.hexColor
        console.log(baseColor)
        return(
            <div className='SchemeComponent'>

                <div className='colors'>
                    {this.props.colors.map((color, i) =>(
                        <div key={i} style={{
                            background: `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`
                        }}/>
                    ))}
                </div>

                <div className='name' style={{color:baseColor}}>{createRandomNames()}</div>
                <div className='hue' style={{color:baseColor}}>{this.plotHexs()}</div>
                <div className='copy' style={{color:baseColor}}>Copy</div>

            </div>
        )
    }
}

export default SchemeComponent
