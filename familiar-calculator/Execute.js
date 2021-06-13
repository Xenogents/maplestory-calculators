import { FamiliarData } from './FamiliarData.js'
import { Familiar } from './Familiar.js';

let scoreThreshold = 14.5
let currentBoss = 85

// all
let percentStatPercentSecondary = 0.984
let percentStatPercentTertiary = 0.945

// weapons mpot and bpot
let attackPercentBossRatio = 3.3
let attackPercentIedRatio = 11.26
let percentStatPercentAttackRatio = 10.848
let percentStatCritRateRatio = 0

// glove mpot and armor bpot
let percentStatCritDmgRatio = 9.763

// non-weapon bpot
let statAttackRatio = 4.943
let statSecondaryStatRatio = 0.991
let statTertiaryStatRatio = 1.019
let statPercentStatRatio = 7.755

let probabilityToEqual = 0
let probabilityToBeat = 0
let expectedGain = 0

for (let prime of [true, false]) {
    let firstLineOptions = FamiliarData.legendary
    let firstLinePrimeRate = 1
    let firstLineWeight = 206
    let secondLineOptions = prime ? FamiliarData.legendary : FamiliarData.unique
    let secondLinePrimeRate = prime ? FamiliarData.primeRates.secondLine : 1 - FamiliarData.primeRates.secondLine
    let secondLineWeight = prime ? 206 : 1370

    firstLineOptions.forEach(firstLine => {
        secondLineOptions.forEach(secondLine => {
            let familiar = new(Familiar)
            familiar.cube(firstLine, firstLineWeight, firstLinePrimeRate)
            familiar.cube(secondLine, secondLineWeight, secondLinePrimeRate)
            let familiarScore = calculateScore(familiar)
            if (familiarScore >= scoreThreshold) {
                probabilityToEqual += familiar.probability
                if (familiarScore > scoreThreshold) {
                    probabilityToBeat += familiar.probability
                    expectedGain += familiar.probability * (familiarScore - scoreThreshold);
                }
            }
        })
    })
}

console.log(1 / probabilityToEqual)
console.log(1 / probabilityToBeat)
console.log(expectedGain / probabilityToBeat)

function calculateScore(familiar) {
    let potentialScore = 0
    familiar.bossDamage = Math.min(120, familiar.bossDamage + currentBoss) - currentBoss
    potentialScore += familiar.attackPercent
    potentialScore += attackPercentBossRatio === 0 ? 0 : (familiar.bossDamage + familiar.damage) / attackPercentBossRatio
    potentialScore += attackPercentIedRatio === 0 ? 0 : familiar.ignoreDefense / attackPercentIedRatio
    potentialScore += percentStatPercentAttackRatio === 0 ? 0 : familiar.critRate * percentStatCritRateRatio / percentStatPercentAttackRatio
    potentialScore += percentStatPercentAttackRatio === 0 ? 0 : familiar.allStat * (1 + percentStatPercentSecondary + percentStatPercentTertiary) / percentStatPercentAttackRatio
    potentialScore += percentStatPercentAttackRatio === 0 ? 0 : familiar.primaryStatPercent / percentStatPercentAttackRatio
    potentialScore += percentStatPercentAttackRatio === 0 ? 0 : familiar.secondaryStatPercent * percentStatPercentSecondary / percentStatPercentAttackRatio
    potentialScore += percentStatPercentAttackRatio === 0 ? 0 : familiar.tertiaryStatPercent * percentStatPercentTertiary / percentStatPercentAttackRatio
    potentialScore += percentStatPercentAttackRatio === 0 ? 0 : familiar.critDmg * percentStatCritDmgRatio / percentStatPercentAttackRatio
    potentialScore += statPercentStatRatio * percentStatPercentAttackRatio === 0 ? 0 : familiar.attack * statAttackRatio / (statPercentStatRatio * percentStatPercentAttackRatio)
    potentialScore += statPercentStatRatio * percentStatPercentAttackRatio === 0 ? 0 : familiar.primaryStat / (statPercentStatRatio * percentStatPercentAttackRatio)
    potentialScore += statPercentStatRatio * percentStatPercentAttackRatio === 0 ? 0 : familiar.secondaryStat * statSecondaryStatRatio / (statPercentStatRatio * percentStatPercentAttackRatio)
    potentialScore += statPercentStatRatio * percentStatPercentAttackRatio === 0 ? 0 : familiar.tertiaryStat * statTertiaryStatRatio / (statPercentStatRatio * percentStatPercentAttackRatio)
    return potentialScore
}