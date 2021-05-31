function getStringHash(arg, mod) {
  const sum = arg.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return sum % mod;
}

function getStringHue(arg) {
  return getStringHash(arg, 256);
}

export default function getStringColor(arg) {
  return `hsl(${getStringHue(arg.toString())},100%,79%)`;
}
