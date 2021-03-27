import { Armor } from './Armor.js';
import { Weapon } from './Weapon.js';

let level = 150;
let attackPower = 255;
let isEternal = true;
let isWeapon = false;
let isXenon = true;
let flameThreshold = 225;

let attackWeighting = 5;
let allStatWeighting = 22.5;
let bossWeighting = 23;
let secondaryWeighting = 0.125;
let probability = 0;

let minTier = 0;
let maxTier = 0;
if (isEternal) {
    minTier = 4;
    maxTier = 7;
} else {
    minTier = 3;
    maxTier = 6;
}

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
                                    let flameScore = weapon.attack * attackWeighting + weapon.allStat * allStatWeighting
                                            + weapon.bossDmg * bossWeighting + weapon.dmg * bossWeighting
                                            + weapon.strength + weapon.dexterity * secondaryWeighting;
                                    if (isXenon) {flameScore += weapon.dexterity * (1 - secondaryWeighting) + weapon.luck;}
                                    if (flameScore >= flameThreshold) {probability += weapon.weight;}
                                } else {
                                    let armor = new Armor(level);
                                    armor.Flame(firstLine, tier1, isEternal);
                                    armor.Flame(secondLine, tier2, isEternal);
                                    armor.Flame(thirdLine, tier3, isEternal);
                                    armor.Flame(fourthLine, tier4, isEternal);
                                    let flameScore = armor.allStat * allStatWeighting + armor.attack * attackWeighting
                                            + armor.strength + armor.dexterity * secondaryWeighting;
                                    if (isXenon) {flameScore += armor.dexterity * (1 - secondaryWeighting) + armor.luck;}
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
console.log("Expected number of " + flameType + " flames needed is: " + (19*18*17*16/24) / probability);
