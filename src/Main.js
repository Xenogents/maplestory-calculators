import { Armor } from './Armor.js';
import { Weapon } from './Weapon.js';

function getLocalStorage(label) {
    if (document.getElementById(label).type == "checkbox") {
        if (localStorage.getItem(label)) {
            document.getElementById(label).checked = JSON.parse(localStorage.getItem(label));
            return JSON.parse(localStorage.getItem(label));
        } else {
            return false;
        }
    } else if (document.getElementById(label).type == "number") {
        if (localStorage.getItem(label)) {
            document.getElementById(label).value = JSON.parse(localStorage.getItem(label));
            return JSON.parse(localStorage.getItem(label)); 
        } else {
            return 1;
        }
    }
}

let isEternal = getLocalStorage("isEternal");             document.getElementById("isEternal").addEventListener('click', updateIsEternal);
let isWeapon = getLocalStorage("isWeapon");               document.getElementById("isWeapon").addEventListener('click', updateIsWeapon);
let isXenon = getLocalStorage("isXenon");                 document.getElementById("isXenon").addEventListener('click', updateIsXenon);
let level = getLocalStorage("level");                     document.getElementById("level").addEventListener('input', updateLevel);
let flameThreshold = getLocalStorage("flameThreshold");   document.getElementById("flameThreshold").addEventListener('input', updateFlameThreshold);
let attackWeight = getLocalStorage("attackWeight");       document.getElementById("attackWeight").addEventListener('input', updateAttackWeight);
let allStatWeight = getLocalStorage("allStatWeight");     document.getElementById("allStatWeight").addEventListener('input', updateAllStatWeight);
let secondaryWeight = getLocalStorage("secondaryWeight"); document.getElementById("secondaryWeight").addEventListener('input', updateSecondaryWeight);
let bossWeight = getLocalStorage("bossWeight");           document.getElementById("bossWeight").addEventListener('input', updateBossWeight);
let attackPower = getLocalStorage("attackPower");         document.getElementById("attackPower").addEventListener('input', updateAttackPower);

function updateIsEternal() {
    isEternal = document.getElementById("isEternal").checked;
    localStorage.setItem("isEternal", JSON.stringify(isEternal))
    if (isEternal) {
        minTier = 4;
        maxTier = 7;
    } else {
        minTier = 3;
        maxTier = 6;
    }
}
function updateIsWeapon() {isWeapon = document.getElementById("isWeapon").checked;                    localStorage.setItem("isWeapon", JSON.stringify(isWeapon))}
function updateIsXenon() {isXenon = document.getElementById("isXenon").checked;                       localStorage.setItem("isXenon", JSON.stringify(isXenon))}
function updateLevel() {level = document.getElementById("level").value;                               localStorage.setItem("level", JSON.stringify(level))}
function updateFlameThreshold() {flameThreshold = document.getElementById("flameThreshold").value;    localStorage.setItem("flameThreshold", JSON.stringify(flameThreshold))}
function updateAttackWeight() {attackWeight = document.getElementById("attackWeight").value;          localStorage.setItem("attackWeight", JSON.stringify(attackWeight))}
function updateAllStatWeight() {allStatWeight = document.getElementById("allStatWeight").value;       localStorage.setItem("allStatWeight", JSON.stringify(allStatWeight))}
function updateSecondaryWeight() {secondaryWeight = document.getElementById("secondaryWeight").value; localStorage.setItem("secondaryWeight", JSON.stringify(secondaryWeight))}
function updateBossWeight() {bossWeight = document.getElementById("bossWeight").value;                localStorage.setItem("bossWeight", JSON.stringify(bossWeight))}
function updateAttackPower() {attackPower = document.getElementById("attackPower").value;             localStorage.setItem("attackPower", JSON.stringify(attackPower))}

let minTier = 0;
let maxTier = 0;
updateIsEternal();
document.getElementById("calculate").addEventListener("click", calculate);
function calculate() {
    let probability = 0;
    for (let firstLine = 1; firstLine <= 16; firstLine++) {
        for (let secondLine = firstLine + 1; secondLine <= 17; secondLine++) {
            for (let thirdLine = secondLine + 1; thirdLine <= 18; thirdLine++) {
                for (let fourthLine = thirdLine + 1; fourthLine <= 19; fourthLine++) {
                    for (let tier1 = minTier; tier1 <= maxTier; tier1++) {
                        for (let tier2 = minTier; tier2 <= maxTier; tier2++) {
                            for (let tier3 = minTier; tier3 <= maxTier; tier3++) {
                                for (let tier4 = minTier; tier4 <= maxTier; tier4++) {
                                    if (isWeapon) {
                                        let weapon = new Weapon(attackPower, level);
                                        weapon.Flame(firstLine, tier1, isEternal);
                                        weapon.Flame(secondLine, tier2, isEternal);
                                        weapon.Flame(thirdLine, tier3, isEternal);
                                        weapon.Flame(fourthLine, tier4, isEternal);
                                        let flameScore = weapon.attack * attackWeight + weapon.allStat * allStatWeight
                                                + weapon.bossDmg * bossWeight + weapon.dmg * bossWeight
                                                + weapon.strength + weapon.dexterity * secondaryWeight;
                                        if (isXenon) {flameScore += weapon.dexterity * (1 - secondaryWeight) + weapon.luck;}
                                        if (flameScore >= flameThreshold) {probability += weapon.weight;}
                                    } else {
                                        let armor = new Armor(level);
                                        armor.Flame(firstLine, tier1, isEternal);
                                        armor.Flame(secondLine, tier2, isEternal);
                                        armor.Flame(thirdLine, tier3, isEternal);
                                        armor.Flame(fourthLine, tier4, isEternal);
                                        let flameScore = armor.allStat * allStatWeight + armor.attack * attackWeight
                                                + armor.strength + armor.dexterity * secondaryWeight;
                                        if (isXenon) {flameScore += armor.dexterity * (1 - secondaryWeight) + armor.luck;}
                                        if (flameScore >= flameThreshold) {probability += armor.weight;}
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    let flameType;
    if (isEternal) {flameType = "eternal";
    } else {flameType = "red";}
    let output = "Expected number of " + flameType + " flames needed is: " + (19*18*17*16/24) / probability;
    document.getElementById("output").innerHTML = output;
}