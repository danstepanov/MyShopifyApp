import React, {ReactElement, useMemo} from 'react';
import {Text as RNText} from 'react-native';

import getColor from './getColor';
import getFontWeight from './getFontWeight';
import getFontSize from './getFontSize';
import getTextAlign from './getTextAlign';

/**
 * This function represents the Text component used throughout your app.
 * @param props
 */
const Text = ({
  // Colors
  primary,
  secondary,
  tertiary,
  title,
  disabled = false,
  hyperlink,
  error = false,
  placeholder,
  // Font sizes
  sm,
  md = true,
  lg,
  xl,
  xxl,
  // Font weights
  bold,
  heavy,
  normal,
  // Text alignments
  left,
  centered = true,
  right,
  // Other
  children,
  lineHeight,
  numberOfLines,
  style,
  onPress,
}) => {
  const color = useMemo(
    () =>
      getColor(
        primary,
        secondary,
        tertiary,
        title,
        hyperlink,
        disabled,
        error,
        placeholder,
      ),
    [
      primary,
      secondary,
      tertiary,
      title,
      hyperlink,
      disabled,
      error,
      placeholder,
    ],
  );
  const fontWeight = useMemo(
    () => getFontWeight(bold, heavy, normal),
    [bold, heavy, normal],
  );
  const fontSize = useMemo(
    () => getFontSize(sm, md, lg, xl, xxl),
    [sm, md, lg, xl, xxl],
  );
  const textAlign = useMemo(
    () => getTextAlign(centered, left, right),
    [centered, left, right],
  );

  return (
    <RNText
      numberOfLines={numberOfLines}
      style={[
        {
          color,
          fontSize,
          fontWeight,
          lineHeight,
          textAlign,
        },
        style,
      ]}
      onPress={onPress}>
      {children}
    </RNText>
  );
};

export default Text;
