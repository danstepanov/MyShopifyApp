import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import Colors from '../../styles/colors';

const styles = StyleSheet.create({
    disabledButton: { backgroundColor: Colors.disabledButton },
    secondaryButton: { backgroundColor: Colors.secondaryButton, borderColor: Colors.primaryButton, borderWidth: 1 },
    primaryButton: { backgroundColor: Colors.primaryButton }
});

/**
 * This function returns the color styles to use for Button components based on props.
 * @param primary
 * @param secondary
 * @param disabled
 */
const getButtonColor = (
    primary?,
    secondary?,
    disabled?
) => {
    if (disabled) return styles.disabledButton;
    if (secondary) return styles.secondaryButton;

    return styles.primaryButton;
}

export default getButtonColor;
