//!-------------- MAIN ------ 
const stvWinner = (candidateVotes) => {

  let votes = candidateVotes;
  const seats = 1; // Number of seats available

  getWinner(votes, seats, (winner) => {
    console.log(winner)
  });



}






const getObjectKey = (obj, value) => Object.keys(obj).filter(key => obj[key] === value)

//transfer vote of eliminated candidates
const transferVotes = (votes, candidateToEliminate) => votes.map(vote => vote.filter(x => x !== candidateToEliminate))

function getWinner(votes, seats, callback) {
  let winner;
  let voteCountArray = []; //to count the number of votes present for winner finding


  const quota = Math.floor(totalVotes / (seats + 1)) + 1; // Calculate the quota
  console.log(totalVotes)

// to find the longest array size so that ranking can be done
  let maxLength = votes.reduce((maxLength, currentValue) => currentValue && currentValue.length > maxLength ? currentValue.length : maxLength, 0)

  for (let i = 0; i < maxLength; i++) { //to find the top rankings list of candidate or counting and so on
    let res = {};
    for (let j = 0; j < votes.length; j++) {
      if (votes[j][i]) res[votes[j][i]] = (res[votes[j][i]] || 0) + 1
    }
    voteCountArray.push(res);
  }
  console.log(voteCountArray);

  let voteCount = voteCountArray[0];
  for (const candidate in voteCount) {
    let votesNo = voteCount[candidate];
    if (votesNo >= quota) {
      winner = candidate;
      break;
    }
  }

  //if there is a tie
  console.log(Object.keys(voteCount))
  if (!winner && Object.keys(voteCount).length === 2) {
    winner = Object.keys(voteCount).toString()
    callback(winner)
  }

  if (winner) return callback(winner)

  let j = 0
  let candidateToEliminate
  while (j < voteCountArray.length && !candidateToEliminate) {
    let voteNos = voteCountArray[j]
    let lowest = totalVotes
    for (const candidate in voteNos) {
      if (lowest > voteNos[candidate]) {
        lowest = voteNos[candidate]
      }
    }

    let candidate_with_lowest = getObjectKey(voteNos, lowest)
    //console.log("lowest -> ", lowest, candidate_with_lowest)

    //if length not 0, there are more than 1 candidates in last position
    if (candidate_with_lowest.length === 1) candidateToEliminate = candidate_with_lowest[0]

    j++
  }

  //console.log("candidateToEliminate ", candidateToEliminate)

  //console.log(votes)
  votes = transferVotes(votes, candidateToEliminate)
  //console.log(votes)

  getWinner(votes, callback)
}

module.exports = stvWinner