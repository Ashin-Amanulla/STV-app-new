function q() {
    const getObjectKey = (obj, value) => Object.keys(obj).filter(key => obj[key] === value)

//transfer vote of eliminated candidates
const transferVotes = (cotes, candidateToEliminate) => votes.map(vote => vote.filter(x => x !== candidateToEliminate))

// Assuming you have an array of votes called `votes`
const candidateVotes = [
  ['Alice', 'Bob', 'Charlie'],
  ['Alice', 'Bob', 'Charlie'],
  ['Bob', 'Charlie', 'Alice'],
  ['Charlie', 'Bob', 'Alice'],
  ['Alice', 'Charlie', 'Bob'],
  ['Bob', 'Charlie', 'Alice'],
  ['Charlie', 'Bob', 'Alice'],
  ['Charlie', 'Alice', 'Bob'],
  ['Charlie', 'Alice', 'Bob'],
  ['Alice', 'Charlie', 'Bob'],
  ['Bob', 'Charlie', 'Alice'],
  ['Bob', 'Alice', 'Charlie'],
  ['Bob', 'Charlie', 'Alice'],
  ['Charlie', 'Alice', 'Bob'],
  ['Charlie', 'Bob', 'Alice'],
  ['Alice', 'Charlie', 'Bob'],
  ['Bob', 'Alice', 'Charlie'],
  ['Charlie', 'Bob', 'Alice'],
  ['Charlie', 'Alice', 'Bob'],
  ['Alice', 'Bob', 'Charlie'],
  [],
  ['Alice'],
  []
];

let votes = candidateVotes;
const seats = 1; // Number of seats available

getWinner(votes, (winner) => {
  console.log(winner)
});

function getWinner(votes, callback) {
  let winner
  let voteCountArray = [];
  
  
const quota = Math.floor(totalVotes / (seats + 1)) + 1; // Calculate the quota
console.log(totalVotes)
  
  
  let maxLength = votes.reduce((maxLength, currentValue) => currentValue && currentValue.length > maxLength ? currentValue.length : maxLength,0)

  for (let i = 0; i < maxLength; i++) { //should change static given value '3'
    let res = {};
    for (let j = 0; j < votes.length; j++) {
      if (votes[j][i])	res[votes[j][i]] = (res[votes[j][i]] || 0) + 1
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
    gotWinner(winner)
  } 
  
  if (winner) return gotWinner(winner)
	
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

}