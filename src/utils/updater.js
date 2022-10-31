export default function updater(setAttributes) {
  return (attributeName) => {
    return (value) => {
      const attributeUpdate = {}
      attributeUpdate[attributeName] = value
      setAttributes(attributeUpdate)
    }
  }
}
