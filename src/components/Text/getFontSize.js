import { FontSizes } from '../../styles/typography';

/**
 * This function returns the font size to use for Text components based on props.
 * @param sm
 * @param md
 * @param lg
 * @param xl
 * @param xxl
 */
const getFontSize = (
    sm?,
    md?,
    lg?,
    xl?,
    xxl?
): number | undefined => {
    if (sm) return FontSizes.SMALL;
    if (lg) return FontSizes.LARGE;
    if (xl) return FontSizes.XLARGE;
    if (xxl) return FontSizes.XXLARGE;
    if (md) return FontSizes.MEDIUM;

    return FontSizes.MEDIUM;
}

export default getFontSize;