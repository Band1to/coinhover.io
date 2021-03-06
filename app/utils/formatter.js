export const capitalizeFirst = string => string.charAt(0).toUpperCase() + string.slice(1);

export const truncate = (text, count) => {
  const trimmed = text.substring(0, count);
  return text.length > 20 ? `${trimmed}...` : text;
};

// https://github.com/amirfl/react-native-num-textinput
export const cleanNonNumeric = (text) => {
  const precision = 3;
  if (!text || typeof text !== 'string') { return ''; }
  // Remove non numeric and non .- chars
  text = text.replace(/[^\d.-]/g, '');
  // Remove extra periods ('.', only one, at most left allowed in the string)
  const splitText = text.split('.');
  text = splitText.shift() + (splitText.length ? `.${splitText[0].slice(0, precision)}` : '');
  // Remove '-' signs if there is more than one, or if it is not most left char
  for (let i = 1; i < text.length; i++) {
   		const char = text.substr(i, 1);
   		if (char == '-') {
 			text = text.substr(0, i) + text.substr(i + 1);
 			// decrement value to avoid skipping character
 			i--;
   		}
  }
  // Remove leading zeros
  text = text.replace(/^(-)?0+(?=\d)/, '$1'); // ?=\d is a positive lookahead, which matches any digit 0-9
  return text;
};
