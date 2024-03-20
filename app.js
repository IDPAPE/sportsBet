let bank = 100
let teamSize = 10
let team1Skill = 0
let team2Skill = 0
let roundNum = 0
let roundOutputMsgElem = document.getElementById('round-onscreen-msg')
let bankOutputMsgElem = document.getElementById('bank-onscreen-msg')

const players = [
    {
        name: "D'Marcus Williums",
        teamNumber: 0,
        emoji: '🏃‍♂️',
        skill: 10
    },
    {
        name: "Tyroil Smoochie-Wallace",
        teamNumber: 0,
        emoji: '🤾‍♂️',
        skill: 30
    },
    {
        name: "Jackmerius Tacktheratrix",
        teamNumber: 0,
        emoji: '🏇',
        skill: 88
    },
    {
        name: "Javaris Jamar Javarison-Lamar",
        teamNumber: 0,
        emoji: '🏌️‍♀️',
        skill: 15
    },
    {
        name: "D'Pez Poopsie",
        teamNumber: 0,
        emoji: '🏋️‍♂️',
        skill: 77
    },
    {
        name: "D'Jasper Probincrux III",
        teamNumber: 0,
        emoji: '🏌️‍♂️',
        skill: 21
    },
    {
        name: "Leoz Maxwell Jilliumz",
        teamNumber: 0,
        emoji: '🤾',
        skill: 5
    },
    {
        name: "Hingle McCringleberry",
        teamNumber: 0,
        emoji: '🏂',
        skill: 99
    },
    {
        name: "L'Carpetron Dookmarriot",
        teamNumber: 0,
        emoji: '🧘‍♀️',
        skill: 50
    },
    {
        name: "Xmus Jaxon Flaxon-Waxon",
        teamNumber: 0,
        emoji: '🚶‍♀️',
        skill: 1
    },
    {
        name: "Saggitariutt Jefferspin",
        teamNumber: 0,
        emoji: '🏋️‍♀️',
        skill: 61
    },
    {
        name: "Quatro Quatro",
        teamNumber: 0,
        emoji: '🤺',
        skill: 34
    },
    {
        name: "X-Wing @Aliciousness",
        teamNumber: 0,
        emoji: '🏄',
        skill: 71
    },
    {
        name: "Bisquiteen Trisket",
        teamNumber: 0,
        emoji: '🧜‍♂️',
        skill: 76
    },
    {
        name: "Scoish Velociraptor Maloish",
        teamNumber: 0,
        emoji: '🤸',
        skill: 47
    },
    {
        name: "Donkey Teeth",
        teamNumber: 0,
        emoji: '⛹️‍♀️',
        skill: 23
    },
    {
        name: "T.J. A.J. R.J. Backslashinfourth V",
        teamNumber: 0,
        emoji: '🕴️',
        skill: 58
    },
    {
        name: "Firstname Lastname",
        teamNumber: 0,
        emoji: '💃',
        skill: 99
    },
    {
        name: "Dan Smith",
        teamNumber: 0,
        emoji: '🧍‍♂️',
        skill: 3
    },
    {
        name: "Tiger",
        teamNumber: 0,
        emoji: '🐅',
        skill: 100
    },
]

function createTeams() {
    let selectedPlayer
    // console.log(Math.floor(Math.random() * players.length))
    for (let i = 0; i < teamSize; i++) {
        let availablePlayers = players.filter(player => player.teamNumber == 0)
        selectedPlayer = Math.floor(Math.random() * availablePlayers.length)
        // console.log(selectedPlayer)
        // console.log(availablePlayers[selectedPlayer])
        availablePlayers[selectedPlayer].teamNumber = 1
        // console.log(availablePlayers[selectedPlayer])
    }
    for (let i = 0; i < teamSize; i++) {
        let availablePlayers = players.filter(player => player.teamNumber == 0)
        selectedPlayer = Math.floor(Math.random() * availablePlayers.length)
        // console.log(selectedPlayer)
        // console.log(availablePlayers[selectedPlayer])
        availablePlayers[selectedPlayer].teamNumber = 2
    }
    console.log(players.filter(player => player.teamNumber == 2))
    console.log(players.filter(player => player.teamNumber == 1))
    drawTeam
}

function calculateTeamsSkill() {
    for (let i = 0; i < players.length; i++) {
        if (players[i].teamNumber == 1) {
            team1Skill += players[i].skill
            // console.log('team 1', team1Skill)
        }
        else {
            team2Skill += players[i].skill
            // console.log('team 2', team2Skill)
        }
    }
    console.log('FINAL T1', team1Skill)
    console.log('FINAL T2', team2Skill)
}

function placeBet(amount, team) {
    // let selectedTeam = team
    let winner = calculateWinner()
    if (bank >= amount) {
        bank -= amount
        if (team == winner) {
            bank += amount * 2
            bankOutputMsgElem.innerHTML = `Congrats, you won $${amount}!`
        }
        else {
            bankOutputMsgElem.innerHTML = `Sorry, you lost $${amount}!`
        }
    }
    else {
        bankOutputMsgElem.innerHTML = `Cannot place bet, insufficient funds`
    }
    drawBank()
    nextRound()
}

function drawTeam() {
    let team1Roster = ''
    let team2Roster = ''
    for (let i = 0; i < players.length; i++) {
        if (players[i].teamNumber == 1) {
            team1Roster += players[i].emoji
            // console.log('team 1;', team1Roster)
        }
        else {
            team2Roster += players[i].emoji
            // console.log('team 2:', team2Roster)
        }
    }
    let team1RosterElem = document.getElementById('team-1-roster')
    team1RosterElem.innerHTML = team1Roster
    let team2RosterElem = document.getElementById('team-2-roster')
    team2RosterElem.innerHTML = team2Roster
    roundOutputMsgElem.innerHTML = `Currently round: ${roundNum}, Teams have been shuffled, place your bet!`
}

function drawBank() {
    let bankRosterElem = document.getElementById('bank')
    bankRosterElem.innerHTML = `$${bank}`
}

function resetTeamNumbers() {
    players.forEach(player => {
        player.teamNumber = 0
    });
    console.log(players)
}

function calculateWinner() {
    let winner = ''
    if (team1Skill > team2Skill) {
        winner = 'team 1'
    }
    else {
        winner = 'team 2'
    }
    console.log(winner, 'wins')
    return (winner)
}

function nextRound() {
    team1Skill = 0
    team2Skill = 0
    roundNum++
    resetTeamNumbers()
    createTeams()
    calculateTeamsSkill()
    drawTeam()
    calculateWinner()
    drawBank()
}

nextRound()

// createTeams()
// calculateTeamsSkill()
// drawTeam()
// calculateWinner()
// drawBank()