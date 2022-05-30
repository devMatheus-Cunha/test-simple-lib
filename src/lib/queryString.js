const keyValueToString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error("Please check your params")
  }
  return `${key}=${value}`
}

module.exports.queryString = (obj) => {
  return Object.entries(obj).map(keyValueToString).join("&")
}