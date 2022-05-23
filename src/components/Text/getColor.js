import Colors from '../../styles/colors';

/**
 * This function returns the color to use for Text components based on props and theme colors.
 * @param primary
 * @param secondary
 * @param tertiary
 * @param title
 * @param hyperlink
 * @param disabled
 * @param error
 * @param placeholder
 */
const getColor = (
    primary?,
    secondary?,
    tertiary?,
    title?,
    hyperlink?,
    disabled?,
    error?,
    placeholder?,
) => {
    if (error) return Colors.errorText;
    if (disabled) return Colors.disabledText;
    if (primary) return Colors.primaryText;
    if (secondary) return Colors.secondaryText;
    if (tertiary) return Colors.tertiaryText;
    if (title) return Colors.titleText;
    if (hyperlink) return Colors.hyperlinkText;
    if (placeholder) return Colors.placeholderText;
  
    return Colors.primaryText;
}

export default getColor;
