import { TextStyle } from 'react-native';
import { FontWeights } from '../../styles/typography';

/**
 * This function returns the font weight to use for Text components based on props.
 * @param bold
 * @param heavy
 * @param normal
 */
const getFontWeight = (
    bold?,
    heavy?,
    normal?
) => {
    if (bold) return FontWeights.BOLD;
    if (heavy) return FontWeights.HEAVY;
    if (normal) return FontWeights.NORMAL;

    return FontWeights.NORMAL;
}

export default getFontWeight;
