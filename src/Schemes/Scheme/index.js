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
        let baseColor = this.props.hexColor

        let hexAlign = this.props.name.length > 15 ? 'end' : 'center';

        return(
            <div className='SchemeComponent'>

                <div className='colors'>
                    {this.props.colors.map((color, i) =>(
                        <div key={i} style={{
                            background: `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`
                        }}/>
                    ))}
                </div>

                <div className='name' style={{color:baseColor}}>{this.props.name}</div>
                <div className='hue'
                    style={{color:baseColor, alignSelf: hexAlign}}>{this.plotHexs()}</div>
                <div className='copy' style={{color:baseColor}}>Copy</div>

            </div>
        )
    }
}

export default SchemeComponent
