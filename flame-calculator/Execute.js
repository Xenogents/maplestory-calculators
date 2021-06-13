import { Armor } from './Armor.js'
import { Weapon } from './Weapon.js'

function getLocalStorage(label) {
    if (document.getElementById(label).type == "checkbox") {
        if (localStorage.getItem(label) && localStorage.getItem(label) !== "\"\"") {
            document.getElementById(label).checked = JSON.parse(localStorage.getItem(label))
            return JSON.parse(localStorage.getItem(label))
        } else {
            return false
        }
    } else if (document.getElementById(label).type == "number") {
        if (localStorage.getItem(label) && localStorage.getItem(label) !== "\"\"") {
            document.getElementById(label).value = JSON.parse(localStorage.getItem(label))
            return JSON.parse(localStorage.getItem(label))
        } else {
            return 0
        }
    }
}

let isWeapon = getLocalStorage("isWeapon");                     document.getElementById("isWeapon").addEventListener('click', updateIsWeapon)
let isFlameAdvantaged = getLocalStorage("isFlameAdvantaged");   document.getElementById("isFlameAdvantaged").addEventListener('click', updateIsFlameAdvantaged)
let level = getLocalStorage("level");                           document.getElementById("level").addEventListener('input', updateLevel)
let flameThreshold = getLocalStorage("flameThreshold");         document.getElementById("flameThreshold").addEventListener('input', updateFlameThreshold)
let attackWeight = getLocalStorage("attackWeight");             document.getElementById("attackWeight").addEventListener('input', updateAttackWeight)
let allStatWeight = getLocalStorage("allStatWeight");           document.getElementById("allStatWeight").addEventListener('input', updateAllStatWeight)
let secondaryWeight = getLocalStorage("secondaryWeight");       document.getElementById("secondaryWeight").addEventListener('input', updateSecondaryWeight)
let tertiaryWeight = getLocalStorage("tertiaryWeight");         document.getElementById("tertiaryWeight").addEventListener('input', updateTertiaryWeight)
let bossWeight = getLocalStorage("bossWeight");                 document.getElementById("bossWeight").addEventListener('input', updateBossWeight)
let attackPower = getLocalStorage("attackPower");               document.getElementById("attackPower").addEventListener('input', updateAttackPower)

function updateFlameValues() {
    if (isEternal && isFlameAdvantaged) {
        minTier = 4
        maxTier = 7
    } else if (!isEternal && isFlameAdvantaged) {
        minTier = 3
        maxTier = 6
    } else if (isEternal && !isFlameAdvantaged) {
        minTier = 2
        maxTier = 5
    } else {
        minTier = 1
        maxTier = 4
    }
}

function updateIsWeapon() {isWeapon = document.getElementById("isWeapon").checked;                              localStorage.setItem("isWeapon", JSON.stringify(isWeapon))}
function updateIsFlameAdvantaged() {isFlameAdvantaged = document.getElementById("isFlameAdvantaged").checked;   localStorage.setItem("isFlameAdvantaged", JSON.stringify(isFlameAdvantaged))}
function updateLevel() {level = document.getElementById("level").value;                                         localStorage.setItem("level", JSON.stringify(level))}
function updateFlameThreshold() {flameThreshold = document.getElementById("flameThreshold").value;              localStorage.setItem("flameThreshold", JSON.stringify(flameThreshold))}
function updateAttackWeight() {attackWeight = document.getElementById("attackWeight").value;                    localStorage.setItem("attackWeight", JSON.stringify(attackWeight))}
function updateAllStatWeight() {allStatWeight = document.getElementById("allStatWeight").value;                 localStorage.setItem("allStatWeight", JSON.stringify(allStatWeight))}
function updateSecondaryWeight() {secondaryWeight = document.getElementById("secondaryWeight").value;           localStorage.setItem("secondaryWeight", JSON.stringify(secondaryWeight))}
function updateTertiaryWeight() {tertiaryWeight = document.getElementById("tertiaryWeight").value;              localStorage.setItem("tertiaryWeight", JSON.stringify(tertiaryWeight))}
function updateBossWeight() {bossWeight = document.getElementById("bossWeight").value;                          localStorage.setItem("bossWeight", JSON.stringify(bossWeight))}
function updateAttackPower() {attackPower = document.getElementById("attackPower").value;                       localStorage.setItem("attackPower", JSON.stringify(attackPower))}

let minTier = 0
let maxTier = 0
let isEternal
document.getElementById("calculateFlames").addEventListener("click", calculate)

function calculate() {
    let probabilityToEqual
    let probabilityToBeat
    let expectedGain
    let expectedFlamesToEqual
    let expectedFlamesToBeat
    let expectedFlameScoreGain
    let result = []

    isEternal = true
    updateFlameValues()
    result = calculateProbability()
    probabilityToEqual = result[0]
    probabilityToBeat = result[1]
    expectedGain = result[2]
    expectedFlamesToEqual = (1 / probabilityToEqual).toFixed(2) + " eternal flames to equal or beat current"
    expectedFlamesToBeat = (1 / probabilityToBeat).toFixed(2) + " eternal flames to beat current"
    expectedFlameScoreGain = (expectedGain / probabilityToBeat).toFixed(2) + " expected flame score increase after beating current"
    document.getElementById("expectedEternalFlamesToEqual").innerHTML = expectedFlamesToEqual
    document.getElementById("expectedEternalFlamesToBeat").innerHTML = expectedFlamesToBeat
    document.getElementById("expectedEternalFlameGain").innerHTML = expectedFlameScoreGain

    isEternal = false
    updateFlameValues()
    result = calculateProbability()
    probabilityToEqual = result[0]
    probabilityToBeat = result[1]
    expectedGain = result[2]
    expectedFlamesToEqual = (1 / probabilityToEqual).toFixed(2) + " red flames to equal or beat current"
    expectedFlamesToBeat = (1 / probabilityToBeat).toFixed(2) + " red flames to beat current"
    expectedFlameScoreGain = (expectedGain / probabilityToBeat).toFixed(2) + " expected flame score increase after beating current"
    document.getElementById("expectedRedFlamesToEqual").innerHTML = expectedFlamesToEqual
    document.getElementById("expectedRedFlamesToBeat").innerHTML = expectedFlamesToBeat
    document.getElementById("expectedRedFlameGain").innerHTML = expectedFlameScoreGain
}

function calculateProbability() {
    let probabilityToEqual = 0
    let probabilityToBeat = 0
    let expectedGain = 0
    let result = []
    if (isFlameAdvantaged) {
        result = calculate4Lines()
        probabilityToEqual += result[0]
        probabilityToBeat += result[1]
        expectedGain += result[2]
    } else {
        result = calculate4Lines()
        probabilityToEqual += result[0] * 0.05
        probabilityToBeat += result[1] * 0.05
        expectedGain += result[2] * 0.05
        result = calculate3Lines()
        probabilityToEqual += result[0] * 0.15
        probabilityToBeat += result[1] * 0.15
        expectedGain += result[2] * 0.15
        result = calculate2Lines()
        probabilityToEqual += result[0] * 0.35
        probabilityToBeat += result[1] * 0.35
        expectedGain += result[2] * 0.35
        result = calculate1Line()
        probabilityToEqual += result[0] * 0.45
        probabilityToBeat += result[1] * 0.45
        expectedGain += result[2] * 0.45
    }
    return [probabilityToEqual, probabilityToBeat, expectedGain]
}

function calculate4Lines() {
    let probabilityToEqual = 0
    let probabilityToBeat = 0
    let expectedGain = 0
    for (let firstLine = 1; firstLine <= 16; firstLine++) {
        for (let secondLine = firstLine + 1; secondLine <= 17; secondLine++) {
            for (let thirdLine = secondLine + 1; thirdLine <= 18; thirdLine++) {
                for (let fourthLine = thirdLine + 1; fourthLine <= 19; fourthLine++) {
                    for (let tier1 = minTier; tier1 <= maxTier; tier1++) {
                        for (let tier2 = minTier; tier2 <= maxTier; tier2++) {
                            for (let tier3 = minTier; tier3 <= maxTier; tier3++) {
                                for (let tier4 = minTier; tier4 <= maxTier; tier4++) {
                                    if (isWeapon) {
                                        let weapon = new Weapon(attackPower, level)
                                        weapon.Flame(firstLine, tier1, isEternal, isFlameAdvantaged)
                                        weapon.Flame(secondLine, tier2, isEternal, isFlameAdvantaged)
                                        weapon.Flame(thirdLine, tier3, isEternal, isFlameAdvantaged)
                                        weapon.Flame(fourthLine, tier4, isEternal, isFlameAdvantaged)
                                        let flameScore = calculateScore(weapon)

                                        if (flameScore >= flameThreshold) {
                                            probabilityToEqual += weapon.weight
                                            if (flameScore > flameThreshold) {
                                                probabilityToBeat += weapon.weight
                                                expectedGain += weapon.weight * (flameScore - flameThreshold)
                                            }
                                        }
                                    } else {
                                        let armor = new Armor(level)
                                        armor.Flame(firstLine, tier1, isEternal, isFlameAdvantaged)
                                        armor.Flame(secondLine, tier2, isEternal, isFlameAdvantaged)
                                        armor.Flame(thirdLine, tier3, isEternal, isFlameAdvantaged)
                                        armor.Flame(fourthLine, tier4, isEternal, isFlameAdvantaged)
                                        let flameScore = calculateScore(armor)
                                        
                                        if (flameScore >= flameThreshold) {
                                            probabilityToEqual += armor.weight
                                            if (flameScore > flameThreshold) {
                                                probabilityToBeat += armor.weight
                                                expectedGain += armor.weight * (flameScore - flameThreshold)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return [probabilityToEqual / (19*18*17*16/24), probabilityToBeat / (19*18*17*16/24), expectedGain / (19*18*17*16/24)]
}

function calculate3Lines() {
    let probabilityToEqual = 0
    let probabilityToBeat = 0
    let expectedGain = 0
    for (let firstLine = 1; firstLine <= 17; firstLine++) {
        for (let secondLine = firstLine + 1; secondLine <= 18; secondLine++) {
            for (let thirdLine = secondLine + 1; thirdLine <= 19; thirdLine++) {
                for (let tier1 = minTier; tier1 <= maxTier; tier1++) {
                    for (let tier2 = minTier; tier2 <= maxTier; tier2++) {
                        for (let tier3 = minTier; tier3 <= maxTier; tier3++) {
                            if (isWeapon) {
                                let weapon = new Weapon(attackPower, level)
                                weapon.Flame(firstLine, tier1, isEternal)
                                weapon.Flame(secondLine, tier2, isEternal)
                                weapon.Flame(thirdLine, tier3, isEternal)
                                let flameScore = calculateScore(weapon)

                                if (flameScore >= flameThreshold) {
                                    probabilityToEqual += weapon.weight
                                    if (flameScore > flameThreshold) {
                                        probabilityToBeat += weapon.weight
                                        expectedGain += weapon.weight * (flameScore - flameThreshold)
                                    }
                                }
                            } else {
                                let armor = new Armor(level)
                                armor.Flame(firstLine, tier1, isEternal)
                                armor.Flame(secondLine, tier2, isEternal)
                                armor.Flame(thirdLine, tier3, isEternal)
                                let flameScore = calculateScore(armor)

                                if (flameScore >= flameThreshold) {
                                    probabilityToEqual += armor.weight
                                    if (flameScore > flameThreshold) {
                                        probabilityToBeat += armor.weight
                                        expectedGain += armor.weight * (flameScore - flameThreshold)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return [probabilityToEqual / (19*18*17/6), probabilityToBeat / (19*18*17/6), expectedGain / (19*18*17/6)]
}

function calculate2Lines() {
    let probabilityToEqual = 0
    let probabilityToBeat = 0
    let expectedGain = 0
    for (let firstLine = 1; firstLine <= 18; firstLine++) {
        for (let secondLine = firstLine + 1; secondLine <= 19; secondLine++) {
            for (let tier1 = minTier; tier1 <= maxTier; tier1++) {
                for (let tier2 = minTier; tier2 <= maxTier; tier2++) {
                    if (isWeapon) {
                        let weapon = new Weapon(attackPower, level)
                        weapon.Flame(firstLine, tier1, isEternal)
                        weapon.Flame(secondLine, tier2, isEternal)
                        let flameScore = calculateScore(weapon)
                        if (flameScore >= flameThreshold) {
                            probabilityToEqual += weapon.weight
                            if (flameScore > flameThreshold) {
                                probabilityToBeat += weapon.weight
                                expectedGain += weapon.weight * (flameScore - flameThreshold)
                            }
                        }
                    } else {
                        let armor = new Armor(level)
                        armor.Flame(firstLine, tier1, isEternal)
                        armor.Flame(secondLine, tier2, isEternal)
                        let flameScore = calculateScore(armor)

                        if (flameScore >= flameThreshold) {
                            probabilityToEqual += armor.weight
                            if (flameScore > flameThreshold) {
                                probabilityToBeat += armor.weight
                                expectedGain += armor.weight * (flameScore - flameThreshold)
                            }
                        }
                    }
                }
            }
        }
    }
    return [probabilityToEqual / (19*18/2), probabilityToBeat / (19*18/2),  expectedGain / (19*18/2)]
}

function calculate1Line() {
    let probabilityToEqual = 0
    let probabilityToBeat = 0
    let expectedGain = 0
    for (let firstLine = 1; firstLine <= 19; firstLine++) {
        for (let tier1 = minTier; tier1 <= maxTier; tier1++) {
            if (isWeapon) {
                let weapon = new Weapon(attackPower, level)
                weapon.Flame(firstLine, tier1, isEternal)
                let flameScore = calculateScore(weapon)

                if (flameScore >= flameThreshold) {
                    probabilityToEqual += weapon.weight
                    if (flameScore > flameThreshold) {
                        probabilityToBeat += weapon.weight
                        expectedGain += weapon.weight * (flameScore - flameThreshold)
                    }
                }
            } else {
                let armor = new Armor(level)
                armor.Flame(firstLine, tier1, isEternal)
                let flameScore = calculateScore(armor)

                if (flameScore >= flameThreshold) {
                    probabilityToEqual += armor.weight
                    if (flameScore > flameThreshold) {
                        probabilityToBeat += armor.weight
                        expectedGain += armor.weight * (flameScore - flameThreshold)
                    }
                }
            }
        }
    }
    return [probabilityToEqual / 19, probabilityToBeat / 19,  expectedGain / 19]
}

function calculateScore(equip) {
    let score
    if (isWeapon) {
        score = equip.attack * attackWeight
            + equip.allStat * allStatWeight
            + equip.bossDmg * bossWeight
            + equip.dmg * bossWeight
            + equip.strength
            + equip.dexterity * secondaryWeight
            + equip.luck * tertiaryWeight
    } else {
        score = equip.allStat * allStatWeight
            + equip.attack * attackWeight
            + equip.strength
            + equip.dexterity * secondaryWeight
            + equip.luck * tertiaryWeight
    }
    return score
}