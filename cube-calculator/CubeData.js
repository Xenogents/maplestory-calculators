import { Line } from './Line.js'

const Lines = {
    ATTACKPERCENT: "att%",
    PRIMEBOSSDAMAGE: "primeboss%",
    HALFPRIMEBOSSDAMAGE: "halfprimeboss%",
    NONPRIMEBOSSDAMAGE: "nonprimeboss%",
    PRIMEIGNOREDEFENSE: "primeied%",
    NONPRIMEIGNOREDEFENSE: "nonprimeied%",
    CRITDMG: "critdmg",
    PRIMECOOLDOWNREDUCTION: "primecdr",
    NONPRIMECOOLDOWNREDUCTION: "nonprimecdr",
    DAMAGE: "dmg",
    CRITRATE: "critrate",
    ATTACKPER10: "att+10",
    ATTACK: "attack",
    ALLSTATPERCENT: "allstat%",
    PRIMARYSTATPERCENT: "primarystat%",
    SECONDARYSTATPERCENT: "secondarystat%",  
    TERTIARYSTATPERCENT: "tertiarystat%",
    PRIMARYSTAT: "primarystat",
    SECONDARYSTAT: "secondarystat",
    TERTIARYSTAT: "tertiarystat",
    PRIMARYSTATPER10: "primarystat+10",
    SECONDARYSTATPER10: "secondarystat+10",
    TERTIARYSTATPER10: "tertiarystat+10",
    SHARPEYES: "dse",
    SPEEDINFUSION: "dsi",
    HP: "hp",
    MP: "mp",
    MESOS: "mesos",
    DROP: "drop",
    ALLSKILLLEVELS: "allskilllevels",
    INVINCIBILITY: "invincibility",
    PERCENTINVINCIBILITY: "percentinvincibility",
    IGNOREDAMAGE: "ignoredamage",
    FILLER: "filler"
}

function copyMap(lineOptions) {
    let newMap = new Map()
    lineOptions.forEach(line => {
        newMap.set(line.line, new Line(line.line, line.value, line.weight))
    })
    return newMap
}

let emblemMpotLegTier4 = new Map()
let emblemMpotLegTier3 = new Map()
let emblemMpotUniTier4 = new Map()
let emblemMpotUniTier3 = new Map()
let emblemBpotLegTier4 = new Map()
let emblemBpotLegTier3 = new Map()
let emblemBpotUniTier4 = new Map()
let emblemBpotUniTier3 = new Map()

emblemMpotLegTier4.set(Lines.PRIMARYSTATPERCENT, new Line(Lines.PRIMARYSTATPERCENT, 13, 4))
emblemMpotLegTier4.set(Lines.SECONDARYSTATPERCENT, new Line(Lines.SECONDARYSTATPERCENT, 13, 4))
emblemMpotLegTier4.set(Lines.TERTIARYSTATPERCENT, new Line(Lines.TERTIARYSTATPERCENT, 13, 4))
emblemMpotLegTier4.set(Lines.ATTACKPERCENT, new Line(Lines.ATTACKPERCENT, 13, 2))
emblemMpotLegTier4.set(Lines.CRITRATE, new Line(Lines.CRITRATE, 13, 2))
emblemMpotLegTier4.set(Lines.DAMAGE, new Line(Lines.DAMAGE, 13, 2))
emblemMpotLegTier4.set(Lines.ALLSTATPERCENT, new Line(Lines.ALLSTATPERCENT, 10, 3))
emblemMpotLegTier4.set(Lines.ATTACKPER10, new Line(Lines.ATTACKPER10, 1, 2))
emblemMpotLegTier4.set(Lines.NONPRIMEIGNOREDEFENSE, new Line(Lines.NONPRIMEIGNOREDEFENSE, 35, 2))
emblemMpotLegTier4.set(Lines.PRIMEIGNOREDEFENSE, new Line(Lines.PRIMEIGNOREDEFENSE, 40, 2))
emblemMpotLegTier4.set(Lines.FILLER, new Line(Lines.FILLER, 0, 8))

emblemMpotLegTier3.set(Lines.PRIMARYSTATPERCENT, new Line(Lines.PRIMARYSTATPERCENT, 12, 4))
emblemMpotLegTier3.set(Lines.SECONDARYSTATPERCENT, new Line(Lines.SECONDARYSTATPERCENT, 12, 4))
emblemMpotLegTier3.set(Lines.TERTIARYSTATPERCENT, new Line(Lines.TERTIARYSTATPERCENT, 12, 4))
emblemMpotLegTier3.set(Lines.ATTACKPERCENT, new Line(Lines.ATTACKPERCENT, 12, 2))
emblemMpotLegTier3.set(Lines.CRITRATE, new Line(Lines.CRITRATE, 12, 2))
emblemMpotLegTier3.set(Lines.DAMAGE, new Line(Lines.DAMAGE, 12, 2))
emblemMpotLegTier3.set(Lines.ALLSTATPERCENT, new Line(Lines.ALLSTATPERCENT, 9, 3))
emblemMpotLegTier3.set(Lines.ATTACKPER10, new Line(Lines.ATTACKPER10, 1, 2))
emblemMpotLegTier3.set(Lines.NONPRIMEIGNOREDEFENSE, new Line(Lines.NONPRIMEIGNOREDEFENSE, 35, 2))
emblemMpotLegTier3.set(Lines.PRIMEIGNOREDEFENSE, new Line(Lines.PRIMEIGNOREDEFENSE, 40, 2))
emblemMpotLegTier3.set(Lines.FILLER, new Line(Lines.FILLER, 0, 8))

emblemMpotUniTier4.set(Lines.PRIMARYSTATPERCENT, new Line(Lines.PRIMARYSTATPERCENT, 10, 5))
emblemMpotUniTier4.set(Lines.SECONDARYSTATPERCENT, new Line(Lines.SECONDARYSTATPERCENT, 10, 5))
emblemMpotUniTier4.set(Lines.TERTIARYSTATPERCENT, new Line(Lines.TERTIARYSTATPERCENT, 10, 5))
emblemMpotUniTier4.set(Lines.ATTACKPERCENT, new Line(Lines.ATTACKPERCENT, 10, 3))
emblemMpotUniTier4.set(Lines.CRITRATE, new Line(Lines.CRITRATE, 10, 4))
emblemMpotUniTier4.set(Lines.DAMAGE, new Line(Lines.DAMAGE, 10, 3))
emblemMpotUniTier4.set(Lines.ALLSTATPERCENT, new Line(Lines.ALLSTATPERCENT, 7, 4))
emblemMpotUniTier4.set(Lines.PRIMEIGNOREDEFENSE, new Line(Lines.PRIMEIGNOREDEFENSE, 30, 3))
emblemMpotUniTier4.set(Lines.FILLER, new Line(Lines.FILLER, 0, 8))

emblemMpotUniTier3.set(Lines.PRIMARYSTATPERCENT, new Line(Lines.PRIMARYSTATPERCENT, 9, 5))
emblemMpotUniTier3.set(Lines.SECONDARYSTATPERCENT, new Line(Lines.SECONDARYSTATPERCENT, 9, 5))
emblemMpotUniTier3.set(Lines.TERTIARYSTATPERCENT, new Line(Lines.TERTIARYSTATPERCENT, 9, 5))
emblemMpotUniTier3.set(Lines.ATTACKPERCENT, new Line(Lines.ATTACKPERCENT, 9, 3))
emblemMpotUniTier3.set(Lines.CRITRATE, new Line(Lines.CRITRATE, 9, 4))
emblemMpotUniTier3.set(Lines.DAMAGE, new Line(Lines.DAMAGE, 9, 3))
emblemMpotUniTier3.set(Lines.ALLSTATPERCENT, new Line(Lines.ALLSTATPERCENT, 6, 4))
emblemMpotUniTier3.set(Lines.PRIMEIGNOREDEFENSE, new Line(Lines.PRIMEIGNOREDEFENSE, 30, 3))
emblemMpotUniTier3.set(Lines.FILLER, new Line(Lines.FILLER, 0, 8))

emblemBpotLegTier4.set(Lines.PRIMARYSTATPERCENT, new Line(Lines.PRIMARYSTATPERCENT, 13, 3))
emblemBpotLegTier4.set(Lines.SECONDARYSTATPERCENT, new Line(Lines.SECONDARYSTATPERCENT, 13, 3))
emblemBpotLegTier4.set(Lines.TERTIARYSTATPERCENT, new Line(Lines.TERTIARYSTATPERCENT, 13, 3))
emblemBpotLegTier4.set(Lines.ATTACKPERCENT, new Line(Lines.ATTACKPERCENT, 13, 2))
emblemBpotLegTier4.set(Lines.CRITRATE, new Line(Lines.CRITRATE, 13, 2))
emblemBpotLegTier4.set(Lines.DAMAGE, new Line(Lines.DAMAGE, 13, 1))
emblemBpotLegTier4.set(Lines.ALLSTATPERCENT, new Line(Lines.ALLSTATPERCENT, 10, 2))
emblemBpotLegTier4.set(Lines.PRIMARYSTATPER10, new Line(Lines.PRIMARYSTATPER10, 2, 2))
emblemBpotLegTier4.set(Lines.SECONDARYSTATPER10, new Line(Lines.SECONDARYSTATPER10, 2, 2))
emblemBpotLegTier4.set(Lines.TERTIARYSTATPER10, new Line(Lines.TERTIARYSTATPER10, 2, 2))
emblemBpotLegTier4.set(Lines.ATTACKPER10, new Line(Lines.ATTACKPER10, 1, 1))
emblemBpotLegTier4.set(Lines.PRIMEIGNOREDEFENSE, new Line(Lines.PRIMEIGNOREDEFENSE, 5, 1))
emblemBpotLegTier4.set(Lines.HP, new Line(Lines.HP, 10, 3))
emblemBpotLegTier4.set(Lines.MP, new Line(Lines.MP, 10, 3))
emblemBpotLegTier4.set(Lines.FILLER, new Line(Lines.FILLER, 0, 9))

emblemBpotLegTier3.set(Lines.PRIMARYSTATPERCENT, new Line(Lines.PRIMARYSTATPERCENT, 12, 3))
emblemBpotLegTier3.set(Lines.SECONDARYSTATPERCENT, new Line(Lines.SECONDARYSTATPERCENT, 12, 3))
emblemBpotLegTier3.set(Lines.TERTIARYSTATPERCENT, new Line(Lines.TERTIARYSTATPERCENT, 12, 3))
emblemBpotLegTier3.set(Lines.ATTACKPERCENT, new Line(Lines.ATTACKPERCENT, 12, 2))
emblemBpotLegTier3.set(Lines.CRITRATE, new Line(Lines.CRITRATE, 12, 2))
emblemBpotLegTier3.set(Lines.DAMAGE, new Line(Lines.DAMAGE, 12, 1))
emblemBpotLegTier3.set(Lines.ALLSTATPERCENT, new Line(Lines.ALLSTATPERCENT, 9, 2))
emblemBpotLegTier3.set(Lines.PRIMARYSTATPER10, new Line(Lines.PRIMARYSTATPER10, 2, 2))
emblemBpotLegTier3.set(Lines.SECONDARYSTATPER10, new Line(Lines.SECONDARYSTATPER10, 2, 2))
emblemBpotLegTier3.set(Lines.TERTIARYSTATPER10, new Line(Lines.TERTIARYSTATPER10, 2, 2))
emblemBpotLegTier3.set(Lines.ATTACKPER10, new Line(Lines.ATTACKPER10, 1, 1))
emblemBpotLegTier3.set(Lines.PRIMEIGNOREDEFENSE, new Line(Lines.PRIMEIGNOREDEFENSE, 5, 1))
emblemBpotLegTier3.set(Lines.HP, new Line(Lines.HP, 10, 3))
emblemBpotLegTier3.set(Lines.MP, new Line(Lines.MP, 10, 3))
emblemBpotLegTier3.set(Lines.FILLER, new Line(Lines.FILLER, 0, 9))

emblemBpotUniTier4.set(Lines.PRIMARYSTATPERCENT, new Line(Lines.PRIMARYSTATPERCENT, 10, 3))
emblemBpotUniTier4.set(Lines.SECONDARYSTATPERCENT, new Line(Lines.SECONDARYSTATPERCENT, 10, 3))
emblemBpotUniTier4.set(Lines.TERTIARYSTATPERCENT, new Line(Lines.TERTIARYSTATPERCENT, 10, 3))
emblemBpotUniTier4.set(Lines.ATTACKPERCENT, new Line(Lines.ATTACKPERCENT, 10, 2))
emblemBpotUniTier4.set(Lines.CRITRATE, new Line(Lines.CRITRATE, 10, 2))
emblemBpotUniTier4.set(Lines.DAMAGE, new Line(Lines.DAMAGE, 10, 1))
emblemBpotUniTier4.set(Lines.ALLSTATPERCENT, new Line(Lines.ALLSTATPERCENT, 1, 2))
emblemBpotUniTier4.set(Lines.PRIMARYSTATPER10, new Line(Lines.PRIMARYSTATPER10, 1, 2))
emblemBpotUniTier4.set(Lines.SECONDARYSTATPER10, new Line(Lines.SECONDARYSTATPER10, 1, 2))
emblemBpotUniTier4.set(Lines.TERTIARYSTATPER10, new Line(Lines.TERTIARYSTATPER10, 1, 2))
emblemBpotUniTier4.set(Lines.PRIMEIGNOREDEFENSE, new Line(Lines.PRIMEIGNOREDEFENSE, 4, 1))
emblemBpotUniTier4.set(Lines.HP, new Line(Lines.HP, 7, 3))
emblemBpotUniTier4.set(Lines.MP, new Line(Lines.MP, 7, 3))
emblemBpotUniTier4.set(Lines.FILLER, new Line(Lines.FILLER, 0, 13))

emblemBpotUniTier3.set(Lines.PRIMARYSTATPERCENT, new Line(Lines.PRIMARYSTATPERCENT, 9, 3))
emblemBpotUniTier3.set(Lines.SECONDARYSTATPERCENT, new Line(Lines.SECONDARYSTATPERCENT, 9, 3))
emblemBpotUniTier3.set(Lines.TERTIARYSTATPERCENT, new Line(Lines.TERTIARYSTATPERCENT, 9, 3))
emblemBpotUniTier3.set(Lines.ATTACKPERCENT, new Line(Lines.ATTACKPERCENT, 9, 2))
emblemBpotUniTier3.set(Lines.CRITRATE, new Line(Lines.CRITRATE, 9, 2))
emblemBpotUniTier3.set(Lines.DAMAGE, new Line(Lines.DAMAGE, 9, 1))
emblemBpotUniTier3.set(Lines.ALLSTATPERCENT, new Line(Lines.ALLSTATPERCENT, 1, 2))
emblemBpotUniTier3.set(Lines.PRIMARYSTATPER10, new Line(Lines.PRIMARYSTATPER10, 1, 2))
emblemBpotUniTier3.set(Lines.SECONDARYSTATPER10, new Line(Lines.SECONDARYSTATPER10, 1, 2))
emblemBpotUniTier3.set(Lines.TERTIARYSTATPER10, new Line(Lines.TERTIARYSTATPER10, 1, 2))
emblemBpotUniTier3.set(Lines.PRIMEIGNOREDEFENSE, new Line(Lines.PRIMEIGNOREDEFENSE, 4, 1))
emblemBpotUniTier3.set(Lines.HP, new Line(Lines.HP, 7, 3))
emblemBpotUniTier3.set(Lines.MP, new Line(Lines.MP, 7, 3))
emblemBpotUniTier3.set(Lines.FILLER, new Line(Lines.FILLER, 0, 13))

let weaponMpotLegTier4 = copyMap(emblemMpotLegTier4)
let weaponMpotLegTier3 = copyMap(emblemMpotLegTier3)
let weaponMpotUniTier4 = copyMap(emblemMpotUniTier4)
let weaponMpotUniTier3 = copyMap(emblemMpotUniTier3)
let weaponBpotLegTier4 = copyMap(emblemBpotLegTier4)
let weaponBpotLegTier3 = copyMap(emblemBpotLegTier3)
let weaponBpotUniTier4 = copyMap(emblemBpotUniTier4)
let weaponBpotUniTier3 = copyMap(emblemBpotUniTier3)

weaponMpotLegTier4.set(Lines.NONPRIMEBOSSDAMAGE, new Line(Lines.NONPRIMEBOSSDAMAGE, 30, 2))
weaponMpotLegTier4.set(Lines.HALFPRIMEBOSSDAMAGE, new Line(Lines.HALFPRIMEBOSSDAMAGE, 35, 2))
weaponMpotLegTier4.set(Lines.PRIMEBOSSDAMAGE, new Line(Lines.PRIMEBOSSDAMAGE, 40, 2))
weaponMpotLegTier3.set(Lines.NONPRIMEBOSSDAMAGE, new Line(Lines.NONPRIMEBOSSDAMAGE, 30, 2))
weaponMpotLegTier3.set(Lines.HALFPRIMEBOSSDAMAGE, new Line(Lines.HALFPRIMEBOSSDAMAGE, 35, 2))
weaponMpotLegTier3.set(Lines.PRIMEBOSSDAMAGE, new Line(Lines.PRIMEBOSSDAMAGE, 40, 2))
weaponMpotUniTier4.set(Lines.NONPRIMEBOSSDAMAGE, new Line(Lines.NONPRIMEBOSSDAMAGE, 20, 3))
weaponMpotUniTier4.set(Lines.PRIMEBOSSDAMAGE, new Line(Lines.PRIMEBOSSDAMAGE, 30, 2))
weaponMpotUniTier3.set(Lines.NONPRIMEBOSSDAMAGE, new Line(Lines.NONPRIMEBOSSDAMAGE, 20, 3))
weaponMpotUniTier3.set(Lines.PRIMEBOSSDAMAGE, new Line(Lines.PRIMEBOSSDAMAGE, 30, 2))
weaponBpotLegTier4.set(Lines.PRIMEBOSSDAMAGE, new Line(Lines.PRIMEBOSSDAMAGE, 18, 1))
weaponBpotLegTier3.set(Lines.PRIMEBOSSDAMAGE, new Line(Lines.PRIMEBOSSDAMAGE, 18, 1))
weaponBpotUniTier4.set(Lines.PRIMEBOSSDAMAGE, new Line(Lines.PRIMEBOSSDAMAGE, 12, 1))
weaponBpotUniTier3.set(Lines.PRIMEBOSSDAMAGE, new Line(Lines.PRIMEBOSSDAMAGE, 12, 1))

let secondaryMpotLegTier4 = copyMap(weaponMpotLegTier4)
let secondaryMpotLegTier3 = copyMap(weaponMpotLegTier3)
let secondaryMpotUniTier4 = copyMap(weaponMpotUniTier4)
let secondaryMpotUniTier3 = copyMap(weaponMpotUniTier3)
let secondaryBpotLegTier4 = copyMap(weaponBpotLegTier4)
let secondaryBpotLegTier3 = copyMap(weaponBpotLegTier3)
let secondaryBpotUniTier4 = copyMap(weaponBpotUniTier4)
let secondaryBpotUniTier3 = copyMap(weaponBpotUniTier3)

secondaryMpotLegTier4.set(Lines.IGNOREDAMAGE, new Line(Lines.IGNOREDAMAGE, 0, 6))
secondaryMpotLegTier3.set(Lines.IGNOREDAMAGE, new Line(Lines.IGNOREDAMAGE, 0, 6))
secondaryMpotUniTier4.set(Lines.IGNOREDAMAGE, new Line(Lines.IGNOREDAMAGE, 0, 8))
secondaryMpotUniTier3.set(Lines.IGNOREDAMAGE, new Line(Lines.IGNOREDAMAGE, 0, 8))
secondaryBpotLegTier4.set(Lines.CRITDMG, new Line(Lines.CRITDMG, 1, 2))
secondaryBpotLegTier3.set(Lines.CRITDMG, new Line(Lines.CRITDMG, 1, 2))

let armorMpotLegTier4 = new Map()
let armorMpotLegTier3 = new Map()
let armorMpotUniTier4 = new Map()
let armorMpotUniTier3 = new Map()
let armorBpotLegTier4 = new Map()
let armorBpotLegTier3 = new Map()
let armorBpotUniTier4 = new Map()
let armorBpotUniTier3 = new Map()

armorMpotLegTier4.set(Lines.PRIMARYSTATPERCENT, new Line(Lines.PRIMARYSTATPERCENT, 13, 4))
armorMpotLegTier4.set(Lines.SECONDARYSTATPERCENT, new Line(Lines.SECONDARYSTATPERCENT, 13, 4))
armorMpotLegTier4.set(Lines.TERTIARYSTATPERCENT, new Line(Lines.TERTIARYSTATPERCENT, 13, 4))
armorMpotLegTier4.set(Lines.ALLSTATPERCENT, new Line(Lines.ALLSTATPERCENT, 10, 3))
armorMpotLegTier4.set(Lines.HP, new Line(Lines.HP, 12, 4))
armorMpotLegTier4.set(Lines.MP, new Line(Lines.MP, 12, 4))
armorMpotLegTier4.set(Lines.IGNOREDAMAGE, new Line(Lines.IGNOREDAMAGE, 0, 6))
armorMpotLegTier4.set(Lines.FILLER, new Line(Lines.FILLER, 0, 8))

armorMpotLegTier3.set(Lines.PRIMARYSTATPERCENT, new Line(Lines.PRIMARYSTATPERCENT, 12, 4))
armorMpotLegTier3.set(Lines.SECONDARYSTATPERCENT, new Line(Lines.SECONDARYSTATPERCENT, 12, 4))
armorMpotLegTier3.set(Lines.TERTIARYSTATPERCENT, new Line(Lines.TERTIARYSTATPERCENT, 12, 4))
armorMpotLegTier3.set(Lines.ALLSTATPERCENT, new Line(Lines.ALLSTATPERCENT, 9, 3))
armorMpotLegTier3.set(Lines.HP, new Line(Lines.HP, 12, 4))
armorMpotLegTier3.set(Lines.MP, new Line(Lines.MP, 12, 4))
armorMpotLegTier3.set(Lines.IGNOREDAMAGE, new Line(Lines.IGNOREDAMAGE, 0, 6))
armorMpotLegTier3.set(Lines.FILLER, new Line(Lines.FILLER, 0, 8))

armorMpotUniTier4.set(Lines.PRIMARYSTATPERCENT, new Line(Lines.PRIMARYSTATPERCENT, 10, 5))
armorMpotUniTier4.set(Lines.SECONDARYSTATPERCENT, new Line(Lines.SECONDARYSTATPERCENT, 10, 5))
armorMpotUniTier4.set(Lines.TERTIARYSTATPERCENT, new Line(Lines.TERTIARYSTATPERCENT, 10, 5))
armorMpotUniTier4.set(Lines.ALLSTATPERCENT, new Line(Lines.ALLSTATPERCENT, 7, 4))
armorMpotUniTier4.set(Lines.HP, new Line(Lines.HP, 9, 6))
armorMpotUniTier4.set(Lines.MP, new Line(Lines.MP, 9, 6))
armorMpotUniTier4.set(Lines.IGNOREDAMAGE, new Line(Lines.IGNOREDAMAGE, 0, 8))
armorMpotUniTier4.set(Lines.FILLER, new Line(Lines.FILLER, 0, 13))

armorMpotUniTier3.set(Lines.PRIMARYSTATPERCENT, new Line(Lines.PRIMARYSTATPERCENT, 9, 5))
armorMpotUniTier3.set(Lines.SECONDARYSTATPERCENT, new Line(Lines.SECONDARYSTATPERCENT, 9, 5))
armorMpotUniTier3.set(Lines.TERTIARYSTATPERCENT, new Line(Lines.TERTIARYSTATPERCENT, 9, 5))
armorMpotUniTier3.set(Lines.ALLSTATPERCENT, new Line(Lines.ALLSTATPERCENT, 6, 4))
armorMpotUniTier3.set(Lines.HP, new Line(Lines.HP, 9, 6))
armorMpotUniTier3.set(Lines.MP, new Line(Lines.MP, 9, 6))
armorMpotUniTier3.set(Lines.IGNOREDAMAGE, new Line(Lines.IGNOREDAMAGE, 0, 8))
armorMpotUniTier3.set(Lines.FILLER, new Line(Lines.FILLER, 0, 13))

armorBpotLegTier4.set(Lines.PRIMARYSTAT, new Line(Lines.PRIMARYSTAT, 19, 3))
armorBpotLegTier4.set(Lines.SECONDARYSTAT, new Line(Lines.SECONDARYSTAT, 19, 3))
armorBpotLegTier4.set(Lines.TERTIARYSTAT, new Line(Lines.TERTIARYSTAT, 19, 3))
armorBpotLegTier4.set(Lines.ATTACK, new Line(Lines.ATTACK, 15, 2))
armorBpotLegTier4.set(Lines.PRIMARYSTATPERCENT, new Line(Lines.PRIMARYSTATPERCENT, 8, 2))
armorBpotLegTier4.set(Lines.SECONDARYSTATPERCENT, new Line(Lines.SECONDARYSTATPERCENT, 8, 2))
armorBpotLegTier4.set(Lines.TERTIARYSTATPERCENT, new Line(Lines.TERTIARYSTATPERCENT, 8, 2))
armorBpotLegTier4.set(Lines.CRITDMG, new Line(Lines.CRITDMG, 1, 2))
armorBpotLegTier4.set(Lines.ALLSTATPERCENT, new Line(Lines.ALLSTATPERCENT, 6, 2))
armorBpotLegTier4.set(Lines.PRIMARYSTATPER10, new Line(Lines.PRIMARYSTATPER10, 2, 2))
armorBpotLegTier4.set(Lines.SECONDARYSTATPER10, new Line(Lines.SECONDARYSTATPER10, 2, 2))
armorBpotLegTier4.set(Lines.TERTIARYSTATPER10, new Line(Lines.TERTIARYSTATPER10, 2, 2))
armorBpotLegTier4.set(Lines.HP, new Line(Lines.HP, 10, 3))
armorBpotLegTier4.set(Lines.MP, new Line(Lines.MP, 10, 3))
armorBpotLegTier4.set(Lines.MESOS, new Line(Lines.MESOS, 5, 3))
armorBpotLegTier4.set(Lines.DROP, new Line(Lines.DROP, 5, 3))
armorBpotLegTier4.set(Lines.FILLER, new Line(Lines.FILLER, 0, 25))

armorBpotLegTier3.set(Lines.PRIMARYSTAT, new Line(Lines.PRIMARYSTAT, 18, 3))
armorBpotLegTier3.set(Lines.SECONDARYSTAT, new Line(Lines.SECONDARYSTAT, 18, 3))
armorBpotLegTier3.set(Lines.TERTIARYSTAT, new Line(Lines.TERTIARYSTAT, 18, 3))
armorBpotLegTier3.set(Lines.ATTACK, new Line(Lines.ATTACK, 14, 2))
armorBpotLegTier3.set(Lines.PRIMARYSTATPERCENT, new Line(Lines.PRIMARYSTATPERCENT, 7, 2))
armorBpotLegTier3.set(Lines.SECONDARYSTATPERCENT, new Line(Lines.SECONDARYSTATPERCENT, 7, 2))
armorBpotLegTier3.set(Lines.TERTIARYSTATPERCENT, new Line(Lines.TERTIARYSTATPERCENT, 7, 2))
armorBpotLegTier3.set(Lines.CRITDMG, new Line(Lines.CRITDMG, 1, 2))
armorBpotLegTier3.set(Lines.ALLSTATPERCENT, new Line(Lines.ALLSTATPERCENT, 5, 2))
armorBpotLegTier3.set(Lines.PRIMARYSTATPER10, new Line(Lines.PRIMARYSTATPER10, 2, 2))
armorBpotLegTier3.set(Lines.SECONDARYSTATPER10, new Line(Lines.SECONDARYSTATPER10, 2, 2))
armorBpotLegTier3.set(Lines.TERTIARYSTATPER10, new Line(Lines.TERTIARYSTATPER10, 2, 2))
armorBpotLegTier3.set(Lines.HP, new Line(Lines.HP, 10, 3))
armorBpotLegTier3.set(Lines.MP, new Line(Lines.MP, 10, 3))
armorBpotLegTier3.set(Lines.MESOS, new Line(Lines.MESOS, 5, 3))
armorBpotLegTier3.set(Lines.DROP, new Line(Lines.DROP, 5, 3))
armorBpotLegTier3.set(Lines.FILLER, new Line(Lines.FILLER, 0, 25))

armorBpotUniTier4.set(Lines.PRIMARYSTAT, new Line(Lines.PRIMARYSTAT, 17, 3))
armorBpotUniTier4.set(Lines.SECONDARYSTAT, new Line(Lines.SECONDARYSTAT, 17, 3))
armorBpotUniTier4.set(Lines.TERTIARYSTAT, new Line(Lines.TERTIARYSTAT, 17, 3))
armorBpotUniTier4.set(Lines.ATTACK, new Line(Lines.ATTACK, 13, 2))
armorBpotUniTier4.set(Lines.PRIMARYSTATPERCENT, new Line(Lines.PRIMARYSTATPERCENT, 6, 2))
armorBpotUniTier4.set(Lines.SECONDARYSTATPERCENT, new Line(Lines.SECONDARYSTATPERCENT, 6, 2))
armorBpotUniTier4.set(Lines.TERTIARYSTATPERCENT, new Line(Lines.TERTIARYSTATPERCENT, 6, 2))
armorBpotUniTier4.set(Lines.ALLSTATPERCENT, new Line(Lines.ALLSTATPERCENT, 5, 2))
armorBpotUniTier4.set(Lines.PRIMARYSTATPER10, new Line(Lines.PRIMARYSTATPER10, 1, 2))
armorBpotUniTier4.set(Lines.SECONDARYSTATPER10, new Line(Lines.SECONDARYSTATPER10, 1, 2))
armorBpotUniTier4.set(Lines.TERTIARYSTATPER10, new Line(Lines.TERTIARYSTATPER10, 1, 2))
armorBpotUniTier4.set(Lines.HP, new Line(Lines.HP, 7, 3))
armorBpotUniTier4.set(Lines.MP, new Line(Lines.MP, 7, 3))
armorBpotUniTier4.set(Lines.FILLER, new Line(Lines.FILLER, 0, 25))

armorBpotUniTier3.set(Lines.PRIMARYSTAT, new Line(Lines.PRIMARYSTAT, 16, 3))
armorBpotUniTier3.set(Lines.SECONDARYSTAT, new Line(Lines.SECONDARYSTAT, 16, 3))
armorBpotUniTier3.set(Lines.TERTIARYSTAT, new Line(Lines.TERTIARYSTAT, 16, 3))
armorBpotUniTier3.set(Lines.ATTACK, new Line(Lines.ATTACK, 12, 2))
armorBpotUniTier3.set(Lines.PRIMARYSTATPERCENT, new Line(Lines.PRIMARYSTATPERCENT, 5, 2))
armorBpotUniTier3.set(Lines.SECONDARYSTATPERCENT, new Line(Lines.SECONDARYSTATPERCENT, 5, 2))
armorBpotUniTier3.set(Lines.TERTIARYSTATPERCENT, new Line(Lines.TERTIARYSTATPERCENT, 5, 2))
armorBpotUniTier3.set(Lines.ALLSTATPERCENT, new Line(Lines.ALLSTATPERCENT, 4, 2))
armorBpotUniTier3.set(Lines.PRIMARYSTATPER10, new Line(Lines.PRIMARYSTATPER10, 1, 2))
armorBpotUniTier3.set(Lines.SECONDARYSTATPER10, new Line(Lines.SECONDARYSTATPER10, 1, 2))
armorBpotUniTier3.set(Lines.TERTIARYSTATPER10, new Line(Lines.TERTIARYSTATPER10, 1, 2))
armorBpotUniTier3.set(Lines.HP, new Line(Lines.HP, 7, 3))
armorBpotUniTier3.set(Lines.MP, new Line(Lines.MP, 7, 3))
armorBpotUniTier3.set(Lines.FILLER, new Line(Lines.FILLER, 0, 25))


let hatMpotLegTier4 = copyMap(armorMpotLegTier4)
let hatMpotLegTier3 = copyMap(armorMpotLegTier3)
let hatMpotUniTier4 = copyMap(armorMpotUniTier4)
let hatMpotUniTier3 = copyMap(armorMpotUniTier3)
let hatBpotLegTier4 = copyMap(armorBpotLegTier4)
let hatBpotLegTier3 = copyMap(armorBpotLegTier3)
let hatBpotUniTier4 = copyMap(armorBpotUniTier4)
let hatBpotUniTier3 = copyMap(armorBpotUniTier3)


hatMpotLegTier4.set(Lines.NONPRIMECOOLDOWNREDUCTION, new Line(Lines.NONPRIMECOOLDOWNREDUCTION, 1, 3))
hatMpotLegTier4.set(Lines.PRIMECOOLDOWNREDUCTION, new Line(Lines.PRIMECOOLDOWNREDUCTION, 2, 2))
hatMpotLegTier4.set(Lines.ALLSKILLLEVELS, new Line(Lines.ALLSKILLLEVELS, 0, 5))
hatMpotLegTier4.get(Lines.FILLER).weight = 11
hatMpotLegTier3.set(Lines.NONPRIMECOOLDOWNREDUCTION, new Line(Lines.NONPRIMECOOLDOWNREDUCTION, 1, 3))
hatMpotLegTier3.set(Lines.PRIMECOOLDOWNREDUCTION, new Line(Lines.PRIMECOOLDOWNREDUCTION, 2, 2))
hatMpotLegTier3.set(Lines.ALLSKILLLEVELS, new Line(Lines.ALLSKILLLEVELS, 0, 5))
hatMpotLegTier3.get(Lines.FILLER).weight = 11
hatMpotUniTier4.set(Lines.ALLSKILLLEVELS, new Line(Lines.ALLSKILLLEVELS, 0, 6))
hatMpotUniTier4.get(Lines.FILLER).weight = 17
hatMpotUniTier3.set(Lines.ALLSKILLLEVELS, new Line(Lines.ALLSKILLLEVELS, 0, 6))
hatMpotUniTier3.get(Lines.FILLER).weight = 17
hatBpotLegTier4.set(Lines.PRIMECOOLDOWNREDUCTION, new Line(Lines.PRIMECOOLDOWNREDUCTION, 1, 3))
hatBpotLegTier4.set(Lines.ALLSKILLLEVELS, new Line(Lines.ALLSKILLLEVELS, 0, 1))
hatBpotLegTier3.set(Lines.PRIMECOOLDOWNREDUCTION, new Line(Lines.PRIMECOOLDOWNREDUCTION, 1, 3))
hatBpotLegTier3.set(Lines.ALLSKILLLEVELS, new Line(Lines.ALLSKILLLEVELS, 0, 1))

let topMpotLegTier4 = copyMap(armorMpotLegTier4)
let topMpotLegTier3 = copyMap(armorMpotLegTier3)
let topMpotUniTier4 = copyMap(armorMpotUniTier4)
let topMpotUniTier3 = copyMap(armorMpotUniTier3)
let topBpotLegTier4 = copyMap(armorBpotLegTier4)
let topBpotLegTier3 = copyMap(armorBpotLegTier3)
let topBpotUniTier4 = copyMap(armorBpotUniTier4)
let topBpotUniTier3 = copyMap(armorBpotUniTier3)

topMpotLegTier4.set(Lines.INVINCIBILITY, new Line(Lines.INVINCIBILITY, 0, 3))
topMpotLegTier4.set(Lines.PERCENTINVINCIBILITY, new Line(Lines.PERCENTINVINCIBILITY, 0, 3))
topMpotLegTier4.get(Lines.FILLER).weight = 10
topMpotLegTier3.set(Lines.INVINCIBILITY, new Line(Lines.INVINCIBILITY, 0, 3))
topMpotLegTier3.set(Lines.PERCENTINVINCIBILITY, new Line(Lines.PERCENTINVINCIBILITY, 0, 3))
topMpotLegTier3.get(Lines.FILLER).weight = 10
topMpotUniTier4.set(Lines.INVINCIBILITY, new Line(Lines.INVINCIBILITY, 0, 4))
topMpotUniTier4.set(Lines.PERCENTINVINCIBILITY, new Line(Lines.PERCENTINVINCIBILITY, 0, 4))
topMpotUniTier4.get(Lines.FILLER).weight = 19
topMpotUniTier3.set(Lines.INVINCIBILITY, new Line(Lines.INVINCIBILITY, 0, 4))
topMpotUniTier3.set(Lines.PERCENTINVINCIBILITY, new Line(Lines.PERCENTINVINCIBILITY, 0, 4))
topMpotUniTier3.get(Lines.FILLER).weight = 19

let pantsMpotLegTier4 = copyMap(armorMpotLegTier4)
let pantsMpotLegTier3 = copyMap(armorMpotLegTier3)
let pantsMpotUniTier4 = copyMap(armorMpotUniTier4)
let pantsMpotUniTier3 = copyMap(armorMpotUniTier3)
let pantsBpotLegTier4 = copyMap(armorBpotLegTier4)
let pantsBpotLegTier3 = copyMap(armorBpotLegTier3)
let pantsBpotUniTier4 = copyMap(armorBpotUniTier4)
let pantsBpotUniTier3 = copyMap(armorBpotUniTier3)

pantsMpotLegTier4.get(Lines.FILLER).weight = 10
pantsMpotLegTier3.get(Lines.FILLER).weight = 10
pantsMpotUniTier4.get(Lines.FILLER).weight = 17
pantsMpotUniTier3.get(Lines.FILLER).weight = 17

let shoesMpotLegTier4 = copyMap(armorMpotLegTier4)
let shoesMpotLegTier3 = copyMap(armorMpotLegTier3)
let shoesMpotUniTier4 = copyMap(armorMpotUniTier4)
let shoesMpotUniTier3 = copyMap(armorMpotUniTier3)
let shoesBpotLegTier4 = copyMap(armorBpotLegTier4)
let shoesBpotLegTier3 = copyMap(armorBpotLegTier3)
let shoesBpotUniTier4 = copyMap(armorBpotUniTier4)
let shoesBpotUniTier3 = copyMap(armorBpotUniTier3)

shoesMpotLegTier4.get(Lines.FILLER).weight = 11
shoesMpotLegTier3.get(Lines.FILLER).weight = 11
shoesMpotUniTier4.get(Lines.FILLER).weight = 17
shoesMpotUniTier3.get(Lines.FILLER).weight = 17

let glovesMpotLegTier4 = copyMap(armorMpotLegTier4)
let glovesMpotLegTier3 = copyMap(armorMpotLegTier3)
let glovesMpotUniTier4 = copyMap(armorMpotUniTier4)
let glovesMpotUniTier3 = copyMap(armorMpotUniTier3)
let glovesBpotLegTier4 = copyMap(armorBpotLegTier4)
let glovesBpotLegTier3 = copyMap(armorBpotLegTier3)
let glovesBpotUniTier4 = copyMap(armorBpotUniTier4)
let glovesBpotUniTier3 = copyMap(armorBpotUniTier3)

glovesMpotLegTier4.set(Lines.CRITDMG, new Line(Lines.CRITDMG, 8, 4))
glovesMpotLegTier4.set(Lines.SPEEDINFUSION, new Line(Lines.SPEEDINFUSION, 1, 3))
glovesMpotLegTier3.set(Lines.CRITDMG, new Line(Lines.CRITDMG, 8, 4))
glovesMpotLegTier3.set(Lines.SPEEDINFUSION, new Line(Lines.SPEEDINFUSION, 1, 3))
glovesMpotUniTier4.set(Lines.PRIMARYSTATPER10, new Line(Lines.PRIMARYSTATPER10, 1, 1))
glovesMpotUniTier4.set(Lines.SECONDARYSTATPER10, new Line(Lines.SECONDARYSTATPER10, 1, 1))
glovesMpotUniTier4.set(Lines.TERTIARYSTATPER10, new Line(Lines.TERTIARYSTATPER10, 1, 1))
glovesMpotUniTier4.set(Lines.SHARPEYES, new Line(Lines.SHARPEYES, 1, 4))
glovesMpotUniTier4.get(Lines.FILLER).weight = 14
glovesMpotUniTier3.set(Lines.PRIMARYSTATPER10, new Line(Lines.PRIMARYSTATPER10, 1, 1))
glovesMpotUniTier3.set(Lines.SECONDARYSTATPER10, new Line(Lines.SECONDARYSTATPER10, 1, 1))
glovesMpotUniTier3.set(Lines.TERTIARYSTATPER10, new Line(Lines.TERTIARYSTATPER10, 1, 1))
glovesMpotUniTier3.set(Lines.SHARPEYES, new Line(Lines.SHARPEYES, 1, 4))
glovesMpotUniTier3.get(Lines.FILLER).weight = 14
glovesBpotLegTier4.set(Lines.CRITDMG, new Line(Lines.CRITDMG, 3, 2))
glovesBpotLegTier3.set(Lines.CRITDMG, new Line(Lines.CRITDMG, 3, 2))

let accessoryMpotLegTier4 = copyMap(armorMpotLegTier4)
let accessoryMpotLegTier3 = copyMap(armorMpotLegTier3)
let accessoryMpotUniTier4 = copyMap(armorMpotUniTier4)
let accessoryMpotUniTier3 = copyMap(armorMpotUniTier3)
let accessoryBpotLegTier4 = copyMap(armorBpotLegTier4)
let accessoryBpotLegTier3 = copyMap(armorBpotLegTier3)
let accessoryBpotUniTier4 = copyMap(armorBpotUniTier4)
let accessoryBpotUniTier3 = copyMap(armorBpotUniTier3)

accessoryMpotLegTier4.delete(Lines.IGNOREDAMAGE)
accessoryMpotLegTier4.set(Lines.MESOS, new Line(Lines.MESOS, 20, 3))
accessoryMpotLegTier4.set(Lines.DROP, new Line(Lines.DROP, 20, 3))
accessoryMpotLegTier4.get(Lines.FILLER).weight = 14
accessoryMpotLegTier3.delete(Lines.IGNOREDAMAGE)
accessoryMpotLegTier3.set(Lines.MESOS, new Line(Lines.MESOS, 20, 3))
accessoryMpotLegTier3.set(Lines.DROP, new Line(Lines.DROP, 20, 3))
accessoryMpotLegTier3.get(Lines.FILLER).weight = 14
accessoryMpotUniTier4.delete(Lines.IGNOREDAMAGE)
accessoryMpotUniTier3.delete(Lines.IGNOREDAMAGE)
accessoryBpotLegTier4.delete(Lines.CRITDMG)
accessoryBpotLegTier4.get(Lines.FILLER).weight = 28
accessoryBpotLegTier3.delete(Lines.CRITDMG)
accessoryBpotLegTier3.get(Lines.FILLER).weight = 28

let heartMpotLegTier4 = copyMap(armorMpotLegTier4)
let heartMpotLegTier3 = copyMap(armorMpotLegTier3)
let heartMpotUniTier4 = copyMap(armorMpotUniTier4)
let heartMpotUniTier3 = copyMap(armorMpotUniTier3)
let heartBpotLegTier4 = copyMap(armorBpotLegTier4)
let heartBpotLegTier3 = copyMap(armorBpotLegTier3)
let heartBpotUniTier4 = copyMap(armorBpotUniTier4)
let heartBpotUniTier3 = copyMap(armorBpotUniTier3)

heartMpotLegTier4.delete(Lines.IGNOREDAMAGE)
heartMpotLegTier3.delete(Lines.IGNOREDAMAGE)
heartMpotUniTier4.delete(Lines.IGNOREDAMAGE)
heartMpotUniTier3.delete(Lines.IGNOREDAMAGE)
heartBpotLegTier4.delete(Lines.CRITDMG)
heartBpotLegTier3.delete(Lines.CRITDMG)

const Emblem = {
    mpotLegTier4: emblemMpotLegTier4,
    mpotLegTier3: emblemMpotLegTier3,
    mpotUniTier4: emblemMpotUniTier4,
    mpotUniTier3: emblemMpotUniTier3,
    bpotLegTier4: emblemBpotLegTier4,
    bpotLegTier3: emblemBpotLegTier3,
    bpotUniTier4: emblemBpotUniTier4,
    bpotUniTier3: emblemBpotUniTier3
}

const Weapon = {
    mpotLegTier4: weaponMpotLegTier4,
    mpotLegTier3: weaponMpotLegTier3,
    mpotUniTier4: weaponMpotUniTier4,
    mpotUniTier3: weaponMpotUniTier3,
    bpotLegTier4: weaponBpotLegTier4,
    bpotLegTier3: weaponBpotLegTier3,
    bpotUniTier4: weaponBpotUniTier4,
    bpotUniTier3: weaponBpotUniTier3
}

const Secondary = {
    mpotLegTier4: secondaryMpotLegTier4,
    mpotLegTier3: secondaryMpotLegTier3,
    mpotUniTier4: secondaryMpotUniTier4,
    mpotUniTier3: secondaryMpotUniTier3,
    bpotLegTier4: secondaryBpotLegTier4,
    bpotLegTier3: secondaryBpotLegTier3,
    bpotUniTier4: secondaryBpotUniTier4,
    bpotUniTier3: secondaryBpotUniTier3
}

const Hat = {
    mpotLegTier4: hatMpotLegTier4,
    mpotLegTier3: hatMpotLegTier3,
    mpotUniTier4: hatMpotUniTier4,
    mpotUniTier3: hatMpotUniTier3,
    bpotLegTier4: hatBpotLegTier4,
    bpotLegTier3: hatBpotLegTier3,
    bpotUniTier4: hatBpotUniTier4,
    bpotUniTier3: hatBpotUniTier3
}

const Top = {
    mpotLegTier4: topMpotLegTier4,
    mpotLegTier3: topMpotLegTier3,
    mpotUniTier4: topMpotUniTier4,
    mpotUniTier3: topMpotUniTier3,
    bpotLegTier4: topBpotLegTier4,
    bpotLegTier3: topBpotLegTier3,
    bpotUniTier4: topBpotUniTier4,
    bpotUniTier3: topBpotUniTier3
}

const Pants = {
    mpotLegTier4: pantsMpotLegTier4,
    mpotLegTier3: pantsMpotLegTier3,
    mpotUniTier4: pantsMpotUniTier4,
    mpotUniTier3: pantsMpotUniTier3,
    bpotLegTier4: pantsBpotLegTier4,
    bpotLegTier3: pantsBpotLegTier3,
    bpotUniTier4: pantsBpotUniTier4,
    bpotUniTier3: pantsBpotUniTier3
}

const Shoes = {
    mpotLegTier4: shoesMpotLegTier4,
    mpotLegTier3: shoesMpotLegTier3,
    mpotUniTier4: shoesMpotUniTier4,
    mpotUniTier3: shoesMpotUniTier3,
    bpotLegTier4: shoesBpotLegTier4,
    bpotLegTier3: shoesBpotLegTier3,
    bpotUniTier4: shoesBpotUniTier4,
    bpotUniTier3: shoesBpotUniTier3
}

const Gloves = {
    mpotLegTier4: glovesMpotLegTier4,
    mpotLegTier3: glovesMpotLegTier3,
    mpotUniTier4: glovesMpotUniTier4,
    mpotUniTier3: glovesMpotUniTier3,
    bpotLegTier4: glovesBpotLegTier4,
    bpotLegTier3: glovesBpotLegTier3,
    bpotUniTier4: glovesBpotUniTier4,
    bpotUniTier3: glovesBpotUniTier3
}

const Armor = {
    mpotLegTier4: armorMpotLegTier4,
    mpotLegTier3: armorMpotLegTier3,
    mpotUniTier4: armorMpotUniTier4,
    mpotUniTier3: armorMpotUniTier3,
    bpotLegTier4: armorBpotLegTier4,
    bpotLegTier3: armorBpotLegTier3,
    bpotUniTier4: armorBpotUniTier4,
    bpotUniTier3: armorBpotUniTier3
}

const Accessory = {
    mpotLegTier4: accessoryMpotLegTier4,
    mpotLegTier3: accessoryMpotLegTier3,
    mpotUniTier4: accessoryMpotUniTier4,
    mpotUniTier3: accessoryMpotUniTier3,
    bpotLegTier4: accessoryBpotLegTier4,
    bpotLegTier3: accessoryBpotLegTier3,
    bpotUniTier4: accessoryBpotUniTier4,
    bpotUniTier3: accessoryBpotUniTier3
}

const Heart = {
    mpotLegTier4: heartMpotLegTier4,
    mpotLegTier3: heartMpotLegTier3,
    mpotUniTier4: heartMpotUniTier4,
    mpotUniTier3: heartMpotUniTier3,
    bpotLegTier4: heartBpotLegTier4,
    bpotLegTier3: heartBpotLegTier3,
    bpotUniTier4: heartBpotUniTier4,
    bpotUniTier3: heartBpotUniTier3
}

const CubeType = {
    RED: "red",
    BLACK: "black",
    GREEN: "green"
}

const EquipType = {
    emblem: "emblem",
    weapon: "weapon",
    secondary: "secondary",
    hat: "hat",
    top: "top",
    pants: "pants",
    shoes: "shoes",
    gloves: "gloves",
    cape: "cape",
    belt: "belt",
    shoulder: "shoulder",
    badge: "badge",
    accessory: "accessory",
    heart: "heart"
}

const RedCubePrimeRates = {
    firstLine: 1,
    secondLine: 0.1,
    thirdLine: 0.01
}

const BlackCubePrimeRates = {
    firstLine: 1,
    secondLine: 0.2,
    thirdLine: 0.05
}

const BpotCubePrimeRates = {
    firstLine: 1,
    secondLine: 0.05,
    thirdLine: 0.05
}

const CubePrimeRates = {
    redCube: RedCubePrimeRates,
    blackCube: BlackCubePrimeRates,
    bpotCube: BpotCubePrimeRates
}

const CubeData = {
    lines: Lines,
    equipType: EquipType,
    cubeType: CubeType,
    primeRates: CubePrimeRates,
    emblem: Emblem,
    weapon: Weapon,
    secondary: Secondary,
    hat: Hat,
    top: Top,
    pants: Pants,
    shoes: Shoes,
    gloves: Gloves,
    armor: Armor,
    accessory: Accessory,
    heart: Heart
}

export { CubeData };
export { copyMap };