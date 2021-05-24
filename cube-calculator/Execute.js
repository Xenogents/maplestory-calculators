import { CubeData } from './CubeData.js'
import { Equip } from './Equip.js';

let tier4 = true
let cubeType = CubeData.cubeType.BLACK
let xenon = false
let mpot = cubeType !== CubeData.cubeType.GREEN ? true : false
let equipType = CubeData.equipType.badge
let equipData = CubeData.armor
let level = 275
let scoreThreshold = 33

let attackPercentBossRatio = 4
let attackPercentIedRatio = 0
let statAttackRatio = 0
let statSecondaryStatRatio = 0
let statPercentStatRatio = 0
let statPercentAllStatRatio = 0
let percentStatCritDmgRatio = 30
let percentStatCdrRatio = 0
let percentStatCritRateRatio = 0
let percentStatPercentAttackRatio = 0
let percentStatDseRatio = 0
let percentStatDsiRatio = 0
let percentStatHpRatio = 0
let percentStatMpRatio = 0
let percentStatMesosRatio = 0
let percentStatDropRatio = 0

let probability = 0

for (let secondPrime of [true, false]) {
    for (let thirdPrime of [true, false]) {
        let firstLineOptions
        let firstLineWeight = 0
        let firstLinePrimeRate = 1
        let secondLineOptions
        let secondLineWeight = 0
        let secondLinePrimeRate
        let thirdLineOptions
        let thirdLineWeight = 0
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

        firstLineOptions.forEach(line => { firstLineWeight += line.weight })
        secondLineOptions.forEach(line => { secondLineWeight += line.weight })
        thirdLineOptions.forEach(line => { thirdLineWeight += line.weight })

        firstLineOptions.forEach(firstLine => {
            secondLineOptions.forEach(secondLine => {
                thirdLineOptions.forEach(thirdLine => {
                    let equip = new Equip()
                    equip.cube(firstLine, firstLineWeight, firstLinePrimeRate)
                    equip.cube(secondLine, secondLineWeight, secondLinePrimeRate)
                    equip.cube(thirdLine, thirdLineWeight, thirdLinePrimeRate)
                    if (calculateScore(equip) >= scoreThreshold) {
                        probability += equip.probability
                    }
                })
            })
        })
    }
}

console.log(1 / probability)

function calculateScore(equip) {
    let potentialScore = 0
    if (equipType === CubeData.equipType.weapon || equipType === CubeData.equipType.secondary || equipType === CubeData.equipType.emblem) {
        potentialScore += equip.attackPercent
        potentialScore += attackPercentBossRatio === 0 ? 0 : (equip.bossDamage + equip.damage) / attackPercentBossRatio
        potentialScore += attackPercentIedRatio === 0 ? 0 : equip.ignoreDefense / attackPercentIedRatio
        potentialScore += percentStatCritRateRatio === 0 ? 0 : equip.critRate * percentStatPercentAttackRatio / percentStatCritRateRatio
        potentialScore += statPercentStatRatio * percentStatPercentAttackRatio === 0 ? 
                        0 : equip.attackPer10 * Math.floor(level / 10) * statAttackRatio / (statPercentStatRatio * percentStatPercentAttackRatio)
        potentialScore += statPercentStatRatio * percentStatPercentAttackRatio === 0 ?
                        0 : equip.allStat * statPercentAllStatRatio / (statPercentStatRatio * percentStatPercentAttackRatio)
    } else {
        potentialScore += equip.critDmg * percentStatCritDmgRatio
        potentialScore += equip.cooldownReduction * percentStatCdrRatio
        potentialScore += statPercentStatRatio === 0 ? 0 : equip.attack * statAttackRatio / statPercentStatRatio
        potentialScore += statPercentStatRatio === 0 ? 0 : equip.allStat * statPercentAllStatRatio / statPercentStatRatio
        potentialScore += equip.primaryStatPercent
        potentialScore += equip.secondaryStatPercent * statSecondaryStatRatio
        potentialScore += statPercentStatRatio === 0 ? 0 : equip.primaryStat / statPercentStatRatio
        potentialScore += statPercentStatRatio === 0 ? 0 : equip.secondaryStat * statSecondaryStatRatio / statPercentStatRatio
        potentialScore += statPercentStatRatio === 0 ? 0 : equip.primaryStatper10 * Math.floor(level / 10) / statPercentStatRatio
        potentialScore += statPercentStatRatio === 0 ? 0 : equip.secondaryStatper10 * Math.floor(level / 10) * statSecondaryStatRatio / statPercentStatRatio
        potentialScore += equip.sharpEyes ? percentStatDseRatio : 0
        potentialScore += equip.speedInfusion ? percentStatDsiRatio : 0
        potentialScore += percentStatHpRatio === 0 ? 0 : equip.hp / percentStatHpRatio
        potentialScore += percentStatMpRatio === 0 ? 0 : equip.mp / percentStatMpRatio
        potentialScore += percentStatMesosRatio === 0 ? 0 : equip.mesos / percentStatMesosRatio
        potentialScore += percentStatDropRatio === 0 ? 0 : equip.drop / percentStatDropRatio
    }
    return potentialScore
}