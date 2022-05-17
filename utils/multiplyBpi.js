export default function multiplyBpi(bpiObject, multiplier = 1000) {

  // We want to keep this function pure so let's not modify our bpiObject in place 
  const bpiObjectCopy = { ...bpiObject };

  // Multiply all entries
  for (let key in bpiObjectCopy) {
    bpiObjectCopy[key] = bpiObjectCopy[key] * multiplier;
  }

  return bpiObjectCopy;
}
