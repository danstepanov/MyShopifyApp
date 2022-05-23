/**
 * This function returns the text color props to use for the Button's text based on props.
 * @param primary
 * @param secondary
 * @param disabled
 */
const getTextColor = (primary, secondary, title, hyperlink, disabled) => {
  if (disabled) {
    return {disabled: true};
  }
  if (secondary) {
    return {primary: true};
  }
  if (title) {
    return {title: true};
  }
  if (hyperlink) {
    return {hyperlink: true};
  }
  if (primary) {
    return {secondary: true};
  }

  return {defaultColor: true};
};

export default getTextColor;
