import React from 'react'
import convert from 'color-convert'
import {CopyToClipboard} from 'react-copy-to-clipboard'


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

        return(
            <div className='SchemeComponent'>

                <div className='colors'>
                    {this.props.colors.map((color, i) =>(
                        <div key={i} style={{
                            background: `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`
                        }}/>
                    ))}
                </div>

                <div className="texts">
                    <div className='name' style={{color:baseColor}}>{this.props.name}</div>

                    <CopyToClipboard text={this.plotHexs()}>
                        <div className='hue'
                            style={{color:baseColor}}>{this.plotHexs()}</div>
                    </CopyToClipboard>

                </div>

            </div>
        )
    }
}

export default SchemeComponent
