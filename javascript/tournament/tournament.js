const HEADER = 'Team                           | MP |  W |  D |  L |  P\n'
const SPACECOUNT = getSpaceCount(HEADER)

/**
 * Gets the length from the begining of line until the first column.
 *
 * @param {string} header
 * @returns {number}
 */
function getSpaceCount(header) {
  for (let i = 0; i < header.length; i++) {
    if (header[i] === '|') {
      return i
    }
  }
}

/**
 * Adds a team name to the records object.
 *
 * @param {obj} records
 * @param {str} teamName
 */
function addTeam(records, teamName) {
  records[teamName] = { MP: 0, W: 0, D: 0, L: 0, P: 0 }
}

/**
 * Updates the team record per the result of the match.
 *
 * @param {obj} records
 * @param {str} team1 Name of first team in input string.
 * @param {str} team2 Name of second team in input string.
 * @param {str} result Result of the match.
 * @returns {obj} Updated records object.
 *
 */
function processGame(records, team1, team2, result) {
  if (!(team1 in records)) {
    addTeam(records, team1)
  }

  if (!(team2 in records)) {
    addTeam(records, team2)
  }

  switch (result) {
    case 'win':
      records[team1].MP += 1
      records[team1].W += 1
      records[team1].P += 3
      records[team2].L += 1
      records[team2].MP += 1
      break

    case 'loss':
      records[team1].MP += 1
      records[team1].L += 1
      records[team2].W += 1
      records[team2].MP += 1
      records[team2].P += 3
      break

    case 'draw':
      records[team1].MP += 1
      records[team1].D += 1
      records[team1].P += 1
      records[team2].MP += 1
      records[team2].D += 1
      records[team2].P += 1
      break
  }

  return records
}

/**
 * Returns a team record formatted for a table row.
 *
 * @param {string} name
 * @param {obj} records
 * @returns {string}
 */
function formatTeamRecord(name, record) {
  let formattedName = name.padEnd(SPACECOUNT)
  let points = String(record.P).padStart(3)
  return (
    formattedName +
    `|  ${record.MP} |  ${record.W} |  ${record.D} |  ${record.L} |${points}\n`
  )
}

/**
 * Sort team alphabetically by name.
 *
 * @param {[String, number]} team1
 * @param {[String, number]} team2
 * @returns {number}
 */
function sortAlphabetically(team1, team2) {
  if (team1[0] > team2[0]) {
    return 1
  }
  return -1
}

/**
 * Sort teams by score.
 *
 * @param {[String, number]} team1
 * @param {[String, number]} team2
 * @returns {number}
 */
function sortScore(team1, team2) {
  return team2[1] - team1[1]
}

/**
 * Creates a summary of results as a multiline table, sorted alphabetically and by score.
 *
 * @param {obj} records
 * @return {str}
 */
function createTable(records) {
  let results = []

  let sortable = []
  for (let name in records) {
    sortable.push([name, records[name].P])
  }

  sortable.sort(sortAlphabetically)
  sortable.sort(sortScore)

  for (let i = 0; i < sortable.length; i++) {
    results.push(
      formatTeamRecord(sortable[i][0], records[sortable[i][0]], SPACECOUNT),
    )
  }

  return HEADER + results.join('')
}

export const tournamentTally = (input) => {
  const lines = input.split('\n')
  let records = {}
  if (input != '') {
    for (let i = 0; i < lines.length; i++) {
      let [team1, team2, result] = lines[i].split(';')
      records = processGame(records, team1, team2, result)
    }
  }

  return createTable(records).trim()
}
