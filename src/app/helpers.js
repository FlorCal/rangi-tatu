import contrast from 'get-contrast'

export default {

    isBaseColorDark: (props) => {
        let darkColor = false

        if (props.baseColor.length >= 3 && props.schemesCombinations.length >= 0) {

            let colorContrast = contrast.score(props.baseColor, '#fff')

            if (colorContrast === 'AA') darkColor = true
        }
        return darkColor
    }
}
