const log = require('./log')

const flatten = arr => {
  return Array.prototype.concat(...arr)
}

module.exports.isTriggerableBranch = ({ app, context, branch, config }) => {
  return true
}
