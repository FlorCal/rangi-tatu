import React from 'react'
import convert from 'color-convert'
import {CopyToClipboard} from 'react-copy-to-clipboard'


class SchemeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: null,
            hoveredHex: null
        }
    }

    onColorMouseEnter(hex) {
        this.setState({hoveredHex:hex, copied: false})
    }

    onColorMouseLeave() {
        this.setState({hoveredHex:null, copied: null})
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

        let highlightHexBackground = hex => {
            return hex === this.state.hoveredHex ?
                {backgroundColor: baseColor, color: hex} : {}
        }

        let messageToBeDisplayed = () => {
            if (this.state.copied === null) {
                return ''
            }
            if (this.state.copied === false){
                return 'Click or tap to copy'
            }
            return 'Copied!'
        }

        return(
            <div className='SchemeComponent'>

                <div className='colors'>
                    {this.props.colors.map((color, i) =>(
                        <CopyToClipboard
                            key={i}
                            text={convert.hsl.hex(color)}
                            onCopy={() => this.setState({copied: true})}>
                            <div
                                onMouseEnter={this.onColorMouseEnter.bind(this, '#' + convert.hsl.hex(color))}
                                onMouseLeave={this.onColorMouseLeave.bind(this)}
                                onTouchStart={this.onColorMouseEnter.bind(this, '#' + convert.hsl.hex(color))}
                                onTouchEnd={this.onColorMouseLeave.bind(this)}
                                style={{
                                    background: `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`,
                                }}/>
                        </CopyToClipboard>
                    ))}
                </div>

                <div className="texts">
                    <div className='name' style={{color:baseColor}}>{this.props.name}</div>

                    <div style={{marginLeft: -8}}>
                        {this.plotHexs().map( (hex, i) => (
                            <div className='hue'
                                key={i}
                                style={{color:baseColor}}>
                                <div className='hexCode' style={highlightHexBackground(hex)}>{hex}</div>
                                { i < (this.plotHexs().length - 1) ? ' / ' : ''}
                            </div>

                        ))}
                    </div>

                    <div className='copyMessage' style={{color:baseColor}}>
                        <span>{messageToBeDisplayed()}</span>
                    </div>

                </div>

            </div>
        )
    }
}

export default SchemeComponent
