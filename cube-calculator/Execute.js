import { CubeData } from './CubeData.js'
import { copyMap } from './CubeData.js'
import { Equip } from './Equip.js';

let tier4 = false
let cubeType = CubeData.cubeType.GREEN
let xenon = false
let mpot = cubeType !== CubeData.cubeType.GREEN ? true : false
let equipType = CubeData.equipType.weapon
let equipData = CubeData.weapon
let level = 275
let scoreThreshold = 22

// all
let percentStatPercentSecondary = 0

// weapons mpot and bpot
let attackPercentBossRatio = 4
let attackPercentIedRatio = 0
let percentStatPercentAttackRatio = 0
let percentStatCritRateRatio = 0

// glove mpot and armor bpot
let percentStatCritDmgRatio = 4

// glove mpot
let percentStatDseRatio = 0
let percentStatDsiRatio = 0

// non-weapon bpot
let statAttackRatio = 2.5
let statSecondaryStatRatio = 0
let statPercentStatRatio = 5

// hat
let percentStatCdrRatio = 0

// miscellaneous
let percentStatHpRatio = 0
let percentStatMpRatio = 0
let percentStatMesosRatio = 0
let percentStatDropRatio = 0

let probabilityToEqual = 0
let probabilityToBeat = 0
let expectedGain = 0

for (let secondPrime of [true, false]) {
    for (let thirdPrime of [true, false]) {
        let firstLineOptions
        let firstLinePrimeRate = 1
        let secondLineOptions
        let secondLinePrimeRate
        let thirdLineOptions
        let thirdLinePrimeRate

        if (mpot && tier4) {
            firstLineOptions = equipData.mpotLegTier4
            secondLineOptions = secondPrime ? equipData.mpotLegTier4 : equipData.mpotUniTier4
            thirdLineOptions = thirdPrime ? equipData.mpotLegTier4 : equipData.mpotUniTier4
        } else if (mpot && !tier4) {
            firstLineOptions = equipData.mpotLegTier3
            secondLineOptions = secondPrime ? equipData.mpotLegTier3 : equipData.mpotUniTier3
            thirdLineOptions = thirdPrime ? equipData.mpotLegTier3 : equipData.mpotUniTier3
        } else if (!mpot && tier4) {
            firstLineOptions = equipData.bpotLegTier4
            secondLineOptions = secondPrime ? equipData.bpotLegTier4 : equipData.bpotUniTier4
            thirdLineOptions = thirdPrime ? equipData.bpotLegTier4 : equipData.bpotUniTier4
        } else {
            firstLineOptions = equipData.bpotLegTier3
            secondLineOptions = secondPrime ? equipData.bpotLegTier3 : equipData.bpotUniTier3
            thirdLineOptions = thirdPrime ? equipData.bpotLegTier3 : equipData.bpotUniTier3
        }

        if (cubeType === CubeData.cubeType.RED) {
            secondLinePrimeRate = CubeData.primeRates.redCube.secondLine
            thirdLinePrimeRate = CubeData.primeRates.redCube.thirdLine
            if (!secondPrime) { secondLinePrimeRate = 1 - CubeData.primeRates.redCube.secondLine }
            if (!thirdPrime) { thirdLinePrimeRate = 1 - CubeData.primeRates.redCube.thirdLine }
        } else if (cubeType === CubeData.cubeType.BLACK) {
            secondLinePrimeRate = CubeData.primeRates.blackCube.secondLine
            thirdLinePrimeRate = CubeData.primeRates.blackCube.thirdLine
            if (!secondPrime) { secondLinePrimeRate = 1 - CubeData.primeRates.blackCube.secondLine }
            if (!thirdPrime) { thirdLinePrimeRate = 1 - CubeData.primeRates.blackCube.thirdLine }
        } else if (cubeType === CubeData.cubeType.GREEN) {
            secondLinePrimeRate = CubeData.primeRates.bpotCube.secondLine
            thirdLinePrimeRate = CubeData.primeRates.bpotCube.thirdLine
            if (!secondPrime) { secondLinePrimeRate = 1 - CubeData.primeRates.bpotCube.secondLine }
            if (!thirdPrime) { thirdLinePrimeRate = 1 - CubeData.primeRates.bpotCube.thirdLine }
        }

        let firstLineWeight = 0
        firstLineOptions.forEach(line => { firstLineWeight += line.weight })

        firstLineOptions.forEach(firstLine => {
            let adjustedSecondLineOptions = adjustLineOptions1Line(firstLine, secondLineOptions)
            let adjustedThirdLineOptions = adjustLineOptions1Line(firstLine, thirdLineOptions)
            let secondLineWeight = 0
            adjustedSecondLineOptions.forEach(line => { secondLineWeight += line.weight })

            adjustedSecondLineOptions.forEach(secondLine => {
                let doubleAdjustedThirdLineOptions = adjustLineOptions2Lines(firstLine, secondLine, adjustedThirdLineOptions)
                let thirdLineWeight = 0
                doubleAdjustedThirdLineOptions.forEach(line => { thirdLineWeight += line.weight })

                doubleAdjustedThirdLineOptions.forEach(thirdLine => {
                    let equip = new Equip()
                    equip.cube(firstLine, firstLineWeight, firstLinePrimeRate)
                    equip.cube(secondLine, secondLineWeight, secondLinePrimeRate)
                    equip.cube(thirdLine, thirdLineWeight, thirdLinePrimeRate)
                    let cubeScore = calculateScore(equip)
                    if (cubeScore >= scoreThreshold) {
                        probabilityToEqual += equip.probability
                        if (cubeScore > scoreThreshold) {
                            probabilityToBeat += equip.probability
                            expectedGain += equip.probability * (cubeScore - scoreThreshold);
                        }
                    }
                })
            })
        })
    }
}

console.log(1 / probabilityToEqual)
console.log(1 / probabilityToBeat)
console.log(expectedGain / probabilityToBeat)

function calculateScore(equip) {
    let potentialScore = 0
    if (equipType === CubeData.equipType.weapon || equipType === CubeData.equipType.secondary || equipType === CubeData.equipType.emblem) {
        potentialScore += equip.attackPercent
        potentialScore += attackPercentBossRatio === 0 ? 0 : (equip.bossDamage + equip.damage) / attackPercentBossRatio
        potentialScore += attackPercentIedRatio === 0 ? 0 : equip.ignoreDefense / attackPercentIedRatio
        potentialScore += percentStatCritRateRatio === 0 ? 0 : equip.critRate * percentStatPercentAttackRatio / percentStatCritRateRatio
        potentialScore += statPercentStatRatio * percentStatPercentAttackRatio === 0 ? 
                        0 : equip.attackPer10 * Math.floor(level / 10) * statAttackRatio / (statPercentStatRatio * percentStatPercentAttackRatio)
        potentialScore += percentStatPercentAttackRatio === 0 ? 0 : equip.allStat * (1 + percentStatPercentSecondary) / percentStatPercentAttackRatio
    } else {
        potentialScore += equip.critDmg * percentStatCritDmgRatio
        potentialScore += equip.cooldownReduction * percentStatCdrRatio
        potentialScore += statPercentStatRatio === 0 ? 0 : equip.attack * statAttackRatio / statPercentStatRatio
        potentialScore += equip.allStat * (1 + percentStatPercentSecondary)
        potentialScore += equip.primaryStatPercent
        potentialScore += equip.secondaryStatPercent * statSecondaryStatRatio
        potentialScore += statPercentStatRatio === 0 ? 0 : equip.primaryStat / statPercentStatRatio
        potentialScore += statPercentStatRatio === 0 ? 0 : equip.secondaryStat * statSecondaryStatRatio / statPercentStatRatio
        potentialScore += statPercentStatRatio === 0 ? 0 : equip.primaryStatPer10 * Math.floor(level / 10) / statPercentStatRatio
        potentialScore += statPercentStatRatio === 0 ? 0 : equip.secondaryStatPer10 * Math.floor(level / 10) * statSecondaryStatRatio / statPercentStatRatio
        potentialScore += equip.sharpEyes ? percentStatDseRatio : 0
        potentialScore += equip.speedInfusion ? percentStatDsiRatio : 0
        potentialScore += percentStatHpRatio === 0 ? 0 : equip.hp / percentStatHpRatio
        potentialScore += percentStatMpRatio === 0 ? 0 : equip.mp / percentStatMpRatio
        potentialScore += percentStatMesosRatio === 0 ? 0 : equip.mesos / percentStatMesosRatio
        potentialScore += percentStatDropRatio === 0 ? 0 : equip.drop / percentStatDropRatio
    }
    return potentialScore
}

function adjustLineOptions1Line(firstLine, lineOptions) {
    let adjustedLineOptions = copyMap(lineOptions)
    if (firstLine.line === CubeData.lines.ALLSKILLEVELS && adjustedLineOptions.has(CubeData.lines.ALLSKILLEVELS)) {
        adjustedLineOptions.delete(CubeData.lines.ALLSKILLEVELS)
    } else if (firstLine.line === CubeData.lines.INVINCIBILITY && adjustedLineOptions.has(CubeData.lines.INVINCIBILITY)) {
        adjustedLineOptions.delete(CubeData.lines.INVINCIBILITY)
    }
    return adjustedLineOptions
}

function adjustLineOptions2Lines(firstLine, secondLine, lineOptions) {
    let adjustedLineOptions = copyMap(lineOptions)
    if ((firstLine.line === CubeData.lines.PRIMEBOSSDAMAGE
                || firstLine.line === CubeData.lines.HALFPRIMEBOSSDAMAGE
                || firstLine.line === CubeData.lines.NONPRIMEBOSSDAMAGE)
            && (secondLine.line === CubeData.lines.PRIMEBOSSDAMAGE
                || secondLine.line === CubeData.lines.HALFPRIMEBOSSDAMAGE
                || secondLine.line === CubeData.lines.NONPRIMEBOSSDAMAGE)) {
        if (adjustedLineOptions.has(CubeData.lines.PRIMEBOSSDAMAGE)) {
            adjustedLineOptions.delete(CubeData.lines.PRIMEBOSSDAMAGE)
        }
        if (adjustedLineOptions.has(CubeData.lines.HALFPRIMEBOSSDAMAGE)) {
            adjustedLineOptions.delete(CubeData.lines.HALFPRIMEBOSSDAMAGE)
        }
        if (adjustedLineOptions.has(CubeData.lines.NONPRIMEBOSSDAMAGE)) {
            adjustedLineOptions.delete(CubeData.lines.NONPRIMEBOSSDAMAGE)
        }
    }

    if ((firstLine.line === CubeData.lines.PRIMEIGNOREDEFENSE || firstLine.line === CubeData.lines.NONPRIMEIGNOREDEFENSE)
            && (secondLine.line === CubeData.lines.PRIMEIGNOREDEFENSE || secondLine.line === CubeData.lines.NONPRIMEIGNOREDEFENSE)) {
        if (adjustedLineOptions.has(CubeData.lines.PRIMEIGNOREDEFENSE)) {
            adjustedLineOptions.delete(CubeData.lines.PRIMEIGNOREDEFENSE)
        }
        if (adjustedLineOptions.has(CubeData.lines.NONPRIMEIGNOREDEFENSE)) {
            adjustedLineOptions.delete(CubeData.lines.NONPRIMEIGNOREDEFENSE)
        }
    }

    if (firstLine.line === CubeData.lines.PERCENTINVINCIBILITY
            && secondLine.line === CubeData.lines.PERCENTINVINCIBILITY
            && adjustedLineOptions.has(CubeData.lines.PERCENTINVINCIBILITY)) {
        adjustedLineOptions.delete(CubeData.lines.PERCENTINVINCIBILITY)
    }

    if (firstLine.line === CubeData.lines.IGNOREDAMAGE
            && secondLine.line === CubeData.lines.IGNOREDAMAGE
            && adjustedLineOptions.has(CubeData.lines.IGNOREDAMAGE)) {
        adjustedLineOptions.delete(CubeData.lines.IGNOREDAMAGE)
    }

    if (firstLine.line === CubeData.lines.DROP
            && secondLine.line === CubeData.lines.DROP
            && adjustedLineOptions.has(CubeData.lines.DROP)) {
        adjustedLineOptions.delete(CubeData.lines.DROP)
    }
    return adjustedLineOptions
}