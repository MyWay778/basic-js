const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) {
    return false
  }
  members = members.sort()
  let dreamTeamName=[]
  for (let name of members) {
    if (typeof name === 'string') {
      name = name.trim()
      dreamTeamName.push(name[0].toUpperCase())
    }
  }
  return dreamTeamName.sort().join('')
};
