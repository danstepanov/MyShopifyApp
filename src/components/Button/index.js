import React, {ReactElement, useMemo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Text from '../Text';
import getFontSize from '../Text/getFontSize';
import getButtonColor from './getButtonColor';
import getTextColor from './getTextColor';
import capitalizeFirstLetter from '../../utilities/capitalizeFirstLetter';

/**
 * This function represents the Button component to be used throughout the app.
 * @param props
 */
function Button({
  // Button types
  primary,
  secondary,
  title,
  hyperlink,
  // Button states
  disabled = false,
  loading,
  // Button styles
  buttonStyle,
  style,
  titleStyle,
  // Button props
  onPress,
  titleText,
  // Font sizes
  sm,
  md,
  lg,
  xl,
  xxl,
  // Font weights
  normal,
  bold,
  heavy = true,
}) {
  const textColorProps = useMemo(
    () => getTextColor(primary, secondary, title, hyperlink, disabled),
    [primary, secondary, title, hyperlink, disabled],
  );
  const fontSize = useMemo(
    () => getFontSize(sm, md, lg, xl, xxl),
    [sm, md, lg, xl, xxl],
  );
  const buttonColorStyle = useMemo(
    () => getButtonColor(primary, secondary, disabled),
    [primary, secondary, disabled],
  );

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={[styles.container, style, buttonColorStyle, buttonStyle]}
      onPress={onPress}>
      <Text
        bold={bold}
        disabled={disabled}
        heavy={heavy}
        normal={normal}
        style={[titleStyle, {fontSize}]}
        {...textColorProps}>
        {capitalizeFirstLetter(titleText)}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 5,
  },
});

export default Button;
