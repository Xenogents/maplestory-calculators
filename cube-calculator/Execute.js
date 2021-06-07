import { CubeData } from './CubeData.js'
import { copyMap } from './CubeData.js'
import { Equip } from './Equip.js';

function getLocalStorage(label) {
    if (document.getElementById(label).type === "checkbox") {
        if (localStorage.getItem(label) && localStorage.getItem(label) !== "\"\"") {
            document.getElementById(label).checked = JSON.parse(localStorage.getItem(label))
            return JSON.parse(localStorage.getItem(label))
        } else {
            return false
        }
    } else if (document.getElementById(label).type === "number") {
        if (localStorage.getItem(label) && localStorage.getItem(label) !== "\"\"") {
            document.getElementById(label).value = JSON.parse(localStorage.getItem(label))
            return JSON.parse(localStorage.getItem(label))
        } else {
            return 0
        }
    } else if (document.getElementById(label).type === "select-one") {
        if (localStorage.getItem(label) && localStorage.getItem(label) !== "\"\"") {
            document.getElementById(label).value = JSON.parse(localStorage.getItem(label))
            return JSON.parse(localStorage.getItem(label))
        } else {
            return "weapon"
        }
    }
}

let isBpot = getLocalStorage("isBpot");                                 document.getElementById("isBpot").addEventListener('click', updateIsBpot);
let isTier4 = getLocalStorage("isTier4");                               document.getElementById("isTier4").addEventListener('click', updateIsTier4);
let characterLevel = getLocalStorage("characterLevel");                 document.getElementById("characterLevel").addEventListener('input', updateCharacterLevel);
let cubeThreshold = getLocalStorage("cubeThreshold");                   document.getElementById("cubeThreshold").addEventListener('input', updateCubeThreshold);
let bossRatio = getLocalStorage("bossRatio");                           document.getElementById("bossRatio").addEventListener('input', updateBossRatio);
let iedRatio = getLocalStorage("iedRatio");                             document.getElementById("iedRatio").addEventListener('input', updateIedRatio);
let percentStatRatio = getLocalStorage("percentStatRatio");             document.getElementById("percentStatRatio").addEventListener('input', updatePercentStatRatio);
let critRateRatio = getLocalStorage("critRateRatio");                   document.getElementById("critRateRatio").addEventListener('input', updateCritRateRatio);
let attRatio = getLocalStorage("attRatio");                             document.getElementById("attRatio").addEventListener('input', updateAttRatio);
let secondaryRatio = getLocalStorage("secondaryRatio");                 document.getElementById("secondaryRatio").addEventListener('input', updateSecondaryRatio);
let tertiaryRatio = getLocalStorage("tertiaryRatio");                   document.getElementById("tertiaryRatio").addEventListener('input', updateTertiaryRatio);
let statRatio = getLocalStorage("statRatio");                           document.getElementById("statRatio").addEventListener('input', updateStatRatio);
let critDmgRatio = getLocalStorage("critDmgRatio");                     document.getElementById("critDmgRatio").addEventListener('input', updateCritDmgRatio);
let speedInfusionRatio = getLocalStorage("speedInfusionRatio");         document.getElementById("speedInfusionRatio").addEventListener('input', updateSpeedInfusionRatio);
let sharpEyesRatio = getLocalStorage("sharpEyesRatio");                 document.getElementById("sharpEyesRatio").addEventListener('input', updateSharpEyesRatio);
let cooldownRatio = getLocalStorage("cooldownRatio");                   document.getElementById("cooldownRatio").addEventListener('input', updateCooldownRatio);
let percentSecondaryRatio = getLocalStorage("percentSecondaryRatio");   document.getElementById("percentSecondaryRatio").addEventListener('input', updatePercentSecondaryRatio);
let percentTertiaryRatio = getLocalStorage("percentTertiaryRatio");     document.getElementById("percentTertiaryRatio").addEventListener('input', updatePercentTertiaryRatio);
let hpRatio = getLocalStorage("hpRatio");                               document.getElementById("hpRatio").addEventListener('input', updateHpRatio);
let mpRatio = getLocalStorage("mpRatio");                               document.getElementById("mpRatio").addEventListener('input', updateMpRatio);
let equipType = getLocalStorage("equipType");                           document.getElementById("equipType").addEventListener('click', updateEquipType);
let equipData

function updateIsBpot() {isBpot = document.getElementById("isBpot").checked;                                                localStorage.setItem("isBpot", JSON.stringify(isBpot))}
function updateIsTier4() {isTier4 = document.getElementById("isTier4").checked;                                             localStorage.setItem("isTier4", JSON.stringify(isTier4))}
function updateCharacterLevel() {characterLevel = Number(document.getElementById("characterLevel").value);                          localStorage.setItem("characterLevel", JSON.stringify(characterLevel))}
function updateCubeThreshold() {cubeThreshold = Number(document.getElementById("cubeThreshold").value);                             localStorage.setItem("cubeThreshold", JSON.stringify(cubeThreshold))}
function updateBossRatio() {bossRatio = Number(document.getElementById("bossRatio").value); console.log(typeof bossRatio);                                        localStorage.setItem("bossRatio", JSON.stringify(bossRatio))}
function updateIedRatio() {iedRatio = Number(document.getElementById("iedRatio").value);                                            localStorage.setItem("iedRatio", JSON.stringify(iedRatio))}
function updatePercentStatRatio() {percentStatRatio = Number(document.getElementById("percentStatRatio").value);                    localStorage.setItem("percentStatRatio", JSON.stringify(percentStatRatio))}
function updateCritRateRatio() {critRateRatio = Number(document.getElementById("critRateRatio").value);                             localStorage.setItem("critRateRatio", JSON.stringify(critRateRatio))}
function updateAttRatio() {attRatio = Number(document.getElementById("attRatio").value);                                            localStorage.setItem("attRatio", JSON.stringify(attRatio))}
function updateSecondaryRatio() {secondaryRatio = Number(document.getElementById("secondaryRatio").value);                          localStorage.setItem("secondaryRatio", JSON.stringify(secondaryRatio))}
function updateTertiaryRatio() {tertiaryRatio = Number(document.getElementById("tertiaryRatio").value);                             localStorage.setItem("tertiaryRatio", JSON.stringify(tertiaryRatio))}
function updateStatRatio() {statRatio = Number(document.getElementById("statRatio").value);                                         localStorage.setItem("statRatio", JSON.stringify(statRatio))}
function updateCritDmgRatio() {critDmgRatio = Number(document.getElementById("critDmgRatio").value);                                localStorage.setItem("critDmgRatio", JSON.stringify(critDmgRatio))}
function updateSpeedInfusionRatio() {speedInfusionRatio = Number(document.getElementById("speedInfusionRatio").value);              localStorage.setItem("speedInfusionRatio", JSON.stringify(speedInfusionRatio))}
function updateSharpEyesRatio() {sharpEyesRatio = Number(document.getElementById("sharpEyesRatio").value);                          localStorage.setItem("sharpEyesRatio", JSON.stringify(sharpEyesRatio))}
function updateCooldownRatio() {cooldownRatio = Number(document.getElementById("cooldownRatio").value);                             localStorage.setItem("cooldownRatio", JSON.stringify(cooldownRatio))}
function updatePercentSecondaryRatio() {percentSecondaryRatio = Number(document.getElementById("percentSecondaryRatio").value);     localStorage.setItem("percentSecondaryRatio", JSON.stringify(percentSecondaryRatio))}
function updatePercentTertiaryRatio() {percentTertiaryRatio = Number(document.getElementById("percentTertiaryRatio").value);        localStorage.setItem("percentTertiaryRatio", JSON.stringify(percentTertiaryRatio))}
function updateHpRatio() {hpRatio = Number(document.getElementById("hpRatio").value);                                               localStorage.setItem("hpRatio", JSON.stringify(hpRatio))}
function updateMpRatio() {mpRatio = Number(document.getElementById("mpRatio").value);                                               localStorage.setItem("mpRatio", JSON.stringify(mpRatio))}
function updateEquipType() {equipType = document.getElementById("equipType").value;                                         localStorage.setItem("equipType", JSON.stringify(equipType))}
function updateEquipData() {
    if (equipType === CubeData.equipType.weapon) {equipData = CubeData.weapon}
    else if (equipType === CubeData.equipType.secondary) {equipData = CubeData.secondary}
    else if (equipType === CubeData.equipType.emblem) {equipData = CubeData.emblem}
    else if (equipType === CubeData.equipType.accessory) {equipData = CubeData.accessory}
    else if (equipType === CubeData.equipType.hat) {equipData = CubeData.hat}
    else if (equipType === CubeData.equipType.top) {equipData = CubeData.top}
    else if (equipType === CubeData.equipType.pants) {equipData = CubeData.pants}
    else if (equipType === CubeData.equipType.shoes) {equipData = CubeData.shoes}
    else if (equipType === CubeData.equipType.gloves) {equipData = CubeData.gloves}
    else if (equipType === CubeData.equipType.shoulder) {equipData = CubeData.armor}
    else if (equipType === CubeData.equipType.cape) {equipData = CubeData.armor}
    else if (equipType === CubeData.equipType.belt) {equipData = CubeData.armor}
    else if (equipType === CubeData.equipType.heart) {equipData = CubeData.heart}
    else if (equipType === CubeData.equipType.badge) {equipData = CubeData.heart}
}

document.getElementById("calculateCubes").addEventListener("click", calculate);

function calculate() {
    updateEquipData()
    let firstResult = []
    let secondResult = []
    let firstCubeType
    let scoreType

    if (isBpot) {
        firstResult = calculateProbability(CubeData.cubeType.GREEN)
        firstCubeType = CubeData.cubeType.GREEN
    } else {
        firstResult = calculateProbability(CubeData.cubeType.RED)
        secondResult = calculateProbability(CubeData.cubeType.BLACK)
        firstCubeType = CubeData.cubeType.RED
    }

    if (equipType === CubeData.equipType.weapon || equipType === CubeData.equipType.secondary || equipType === CubeData.equipType.emblem) {
        scoreType = "%Att"
    } else {
        scoreType = "%Stat"
    }
    
    let expectedCubesToEqual = (1 / firstResult[0]).toFixed(2) + " " + firstCubeType + " cubes to equal or beat current"
    let expectedCubesToBeat = (1 / firstResult[1]).toFixed(2) + " " + firstCubeType + " cubes to beat current"
    let expectedCubeScoreGain = (firstResult[2] / firstResult[1]).toFixed(2) + " expected " + scoreType +  " increase after beating current"
    document.getElementById("expectedFirstCubesToEqual").innerText = expectedCubesToEqual;
    document.getElementById("expectedFirstCubesToBeat").innerText = expectedCubesToBeat;
    document.getElementById("expectedFirstCubeGain").innerText = expectedCubeScoreGain;
    document.getElementById("expectedSecondCubesToEqual").innerText = "";
    document.getElementById("expectedSecondCubesToBeat").innerText = "";
    document.getElementById("expectedSecondCubeGain").innerText = "";

    if (!isBpot) {
        expectedCubesToEqual = (1 / secondResult[0]).toFixed(2) + " " + CubeData.cubeType.BLACK + " cubes to equal or beat current"
        expectedCubesToBeat = (1 / secondResult[1]).toFixed(2) + " " + CubeData.cubeType.BLACK + " cubes to beat current"
        expectedCubeScoreGain = (secondResult[2] / firstResult[1]).toFixed(2) + " expected " + scoreType +  " increase after beating current"
        document.getElementById("expectedSecondCubesToEqual").innerText = expectedCubesToEqual;
        document.getElementById("expectedSecondCubesToBeat").innerText = expectedCubesToBeat;
        document.getElementById("expectedSecondCubeGain").innerText = expectedCubeScoreGain;
    }
}

function calculateProbability(cubeType) {
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
    
            if (isBpot && isTier4) {
                firstLineOptions = equipData.bpotLegTier4
                secondLineOptions = secondPrime ? equipData.bpotLegTier4 : equipData.bpotUniTier4
                thirdLineOptions = thirdPrime ? equipData.bpotLegTier4 : equipData.bpotUniTier4
            } else if (isBpot && !isTier4){
                firstLineOptions = equipData.bpotLegTier3
                secondLineOptions = secondPrime ? equipData.bpotLegTier3 : equipData.bpotUniTier3
                thirdLineOptions = thirdPrime ? equipData.bpotLegTier3 : equipData.bpotUniTier3
            } else if (!isBpot && isTier4) {
                firstLineOptions = equipData.mpotLegTier4
                secondLineOptions = secondPrime ? equipData.mpotLegTier4 : equipData.mpotUniTier4
                thirdLineOptions = thirdPrime ? equipData.mpotLegTier4 : equipData.mpotUniTier4
            } else {
                firstLineOptions = equipData.mpotLegTier3
                secondLineOptions = secondPrime ? equipData.mpotLegTier3 : equipData.mpotUniTier3
                thirdLineOptions = thirdPrime ? equipData.mpotLegTier3 : equipData.mpotUniTier3
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
                        if (cubeScore >= cubeThreshold) {
                            probabilityToEqual += equip.probability
                            if (cubeScore > cubeThreshold) {
                                probabilityToBeat += equip.probability
                                expectedGain += equip.probability * (cubeScore - cubeThreshold);
                            }
                        }
                    })
                })
            })
        }
    }
    return [probabilityToEqual, probabilityToBeat, expectedGain]
}

function calculateScore(equip) {
    let potentialScore = 0
    if (equipType === CubeData.equipType.weapon || equipType === CubeData.equipType.secondary || equipType === CubeData.equipType.emblem) {
        potentialScore += equip.attackPercent
        potentialScore += bossRatio === 0 ? 0 : (equip.bossDamage + equip.damage) / bossRatio
        potentialScore += iedRatio === 0 ? 0 : equip.ignoreDefense / iedRatio
        potentialScore += percentStatRatio === 0 ? 0 : equip.critRate * critRateRatio / percentStatRatio
        potentialScore += statRatio * percentStatRatio === 0 ? 
                        0 : equip.attackPer10 * Math.floor(characterLevel / 10) * attRatio / (statRatio * percentStatRatio)
        potentialScore += percentStatRatio === 0 ? 0 : equip.allStat * (1 + percentSecondaryRatio + percentTertiaryRatio) / percentStatRatio
        potentialScore += percentStatRatio === 0 ? 0 : equip.primaryStatPercent / percentStatRatio
        potentialScore += percentStatRatio === 0 ? 0 : equip.secondaryStatPercent * percentSecondaryRatio / percentStatRatio
        potentialScore += percentStatRatio === 0 ? 0 : equip.tertiaryStatPercent * percentTertiaryRatio / percentStatRatio
    } else {
        potentialScore += equip.critDmg * critDmgRatio
        potentialScore += equip.cooldownReduction * cooldownRatio
        potentialScore += statRatio === 0 ? 0 : equip.attack * attRatio / statRatio
        potentialScore += equip.allStat * (1 + percentSecondaryRatio + percentTertiaryRatio)
        potentialScore += equip.primaryStatPercent
        potentialScore += equip.secondaryStatPercent * percentSecondaryRatio
        potentialScore += equip.tertiaryStatPercent * percentTertiaryRatio
        potentialScore += statRatio === 0 ? 0 : equip.primaryStat / statRatio
        potentialScore += statRatio === 0 ? 0 : equip.secondaryStat * secondaryRatio / statRatio
        potentialScore += statRatio === 0 ? 0 : equip.tertiaryStat * tertiaryRatio / statRatio
        potentialScore += statRatio === 0 ? 0 : equip.primaryStatPer10 * Math.floor(characterLevel / 10) / statRatio
        potentialScore += statRatio === 0 ? 0 : equip.secondaryStatPer10 * Math.floor(characterLevel / 10) * secondaryRatio / statRatio
        potentialScore += statRatio === 0 ? 0 : equip.tertiaryStatPer10 * Math.floor(characterLevel / 10) * tertiaryRatio / statRatio
        potentialScore += equip.sharpEyes ? sharpEyesRatio : 0
        potentialScore += equip.speedInfusion ? speedInfusionRatio : 0
        potentialScore += hpRatio === 0 ? 0 : equip.hp / hpRatio
        potentialScore += mpRatio === 0 ? 0 : equip.mp / mpRatio
    }
    return potentialScore
}

function adjustLineOptions1Line(firstLine, lineOptions) {
    let adjustedLineOptions = copyMap(lineOptions)
    if (firstLine.line === CubeData.lines.ALLSKILLLEVELS && adjustedLineOptions.has(CubeData.lines.ALLSKILLLEVELS)) {
        adjustedLineOptions.delete(CubeData.lines.ALLSKILLLEVELS)
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

    if (secondLine.line === CubeData.lines.ALLSKILLLEVELS && adjustedLineOptions.has(CubeData.lines.ALLSKILLLEVELS)) {
        adjustedLineOptions.delete(CubeData.lines.ALLSKILLLEVELS)
    }
    
    if (secondLine.line === CubeData.lines.INVINCIBILITY && adjustedLineOptions.has(CubeData.lines.INVINCIBILITY)) {
        adjustedLineOptions.delete(CubeData.lines.INVINCIBILITY)
    }

    return adjustedLineOptions
}