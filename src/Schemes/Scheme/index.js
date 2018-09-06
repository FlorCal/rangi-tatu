import React from 'react'
import convert from 'color-convert'

class SchemeComponent extends React.Component {
    plotHexs() {
        let hexArr = []
        this.props.colors.forEach(color => {
            hexArr.push('#' + convert.hsl.hex(color))
        })
        return hexArr.join(' / ')
    }
    render() {
        return(
            <div className='SchemeComponent'>

                <div className='colors'>
                    {this.props.colors.map((color, i) =>(
                        <div key={i} style={{
                            background: `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`
                        }}/>
                    ))}
                </div>

                <div className='name'>Name</div>
                <div className='hue'>{this.plotHexs()}</div>
                <div className='copy'>Copy</div>

            </div>
        )
    }
}

export default SchemeComponent
