import convert from 'color-convert'

export default {
    isBaseColorDark: (props) => {
        let darkColor = false
        if (props.baseColor.length >= 3 && props.schemesCombinations.length >= 0) {
            let color  = convert.hex.hsl(props.baseColor)
            if (color[2] < 50) darkColor = true
        }
        return darkColor
    }
}
