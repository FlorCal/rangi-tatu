import React from 'react'
import convert from 'color-convert'
import {CopyToClipboard} from 'react-copy-to-clipboard'


class SchemeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false,
            hoveredHex: null
        }
    }

    onColorMouseEnter(hex) {
        this.setState({hoveredHex:hex})
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

        return(
            <div className='SchemeComponent'>

                <div className='colors'>
                    {this.props.colors.map((color, i) =>(
                        <CopyToClipboard
                            key={i}
                            text={'#' + convert.hsl.hex(color)}
                            onCopy={() => this.setState({copied: true})}>
                            <div
                                onMouseEnter={this.onColorMouseEnter.bind(this, '#' + convert.hsl.hex(color))}
                                onMouseLeave={() => this.setState({
                                    hoveredHex: null,
                                    copied: false
                                })}
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
                        {this.state.copied ? <span>Copied!</span> : <span>Click or tap to copy</span>}
                    </div>

                </div>

            </div>
        )
    }
}

export default SchemeComponent


// {this.state.copied ? <div className='copied' style={{color: 'red'}}>Copied</div> : null}
