import React from 'react'
import convert from 'color-convert'
import {CopyToClipboard} from 'react-copy-to-clipboard'


class SchemeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false
        }
    }

    plotHexs() {
        let hexArr = []
        this.props.colors.forEach(color => {
            hexArr.push('#' + convert.hsl.hex(color))
        })
        return hexArr
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

                    {this.plotHexs().map( (hex, i) => (
                        <CopyToClipboard key={i} text={hex} onCopy={() => this.setState({copied: true})}>
                            <span className='hue' style={{color:baseColor}}>{hex}{ i < (this.plotHexs().length - 1) ? ' / ' : ''}</span>
                        </CopyToClipboard>
                    ))}

                </div>

            </div>
        )
    }
}

export default SchemeComponent


// {this.state.copied ? <div className='copied' style={{color: 'red'}}>Copied</div> : null}
