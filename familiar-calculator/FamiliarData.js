import { Line } from './Line.js'

const Lines = {
    PRIMEATTACKPERCENT: "primeatt%",
    NONPRIMEATTACKPERCENT: "nonprimeatt%",
    PRIMEBOSSDAMAGE: "primeboss%",
    HALFPRIMEBOSSDAMAGE: "halfprimeboss%",
    NONPRIMEBOSSDAMAGE: "nonprimeboss%",
    PRIMEIGNOREDEFENSE: "primeied%",
    HALFPRIMEIGNOREDEFENSE: "halfprimeied%",
    NONPRIMEIGNOREDEFENSE: "nonprimeied%",
    PRIMECRITDMG: "primecritdmg",
    NONPRIMECRITDMG: "nonprimecritdmg",
    PRIMEDAMAGE: "primedamage",
    NONPRIMEDAMAGE: "nonprimedamage",
    PRIMECRITRATE: "primecritrate",
    NONPRIMECRITRATE: "nonprimecritrate",
    PRIMEALLSTATPERCENT: "primeallstat%",
    NONPRIMEALLSTATPERCENT: "nonprimeallstat%",
    ALLSTAT: "allstat",
    PRIMEATTACK: "primeattack",
    NONPRIMEATTACK: "nonprimeattack",
    PRIMARYSTATPERCENT: "primstat%",
    SECONDARYSTATPERCENT: "secstat%", 
    TERTIARYSTATPERCENT: "tertstat%",
    NONPRIMEPRIMARYSTATPERCENT: "nonprimeprimstat%",
    NONPRIMESECONDARYSTATPERCENT: "nonprimesecstat%", 
    NONPRIMETERTIARYSTATPERCENT: "nonprimetertstat%",
    PRIMEPRIMARYSTAT: "primeprimarystat",
    PRIMESECONDARYSTAT: "primesecondarystat",
    PRIMETERTIARYSTAT: "primetertiarystat",
    NONPRIMEPRIMARYSTAT: "nonprimeprimarystat",
    NONPRIMESECONDARYSTAT: "nonprimesecondarystat",
    NONPRIMETERTIARYSTAT: "nonprimetertiarystat",
    RANDOMPRIMEPERCENTDEX: "randomprimepercentdex",
    RANDOMNONPRIMEPERCENTDEX: "randomnonprimepercentdex",
    RANDOMDEXLINE: "randomdexline",
    FILLER: "filler"
}

let legendary = new Map()
let unique = new Map()

legendary.set(Lines.PRIMARYSTATPERCENT, new Line(Lines.PRIMARYSTATPERCENT, 9, 3))
legendary.set(Lines.SECONDARYSTATPERCENT, new Line(Lines.SECONDARYSTATPERCENT, 9, 3))
legendary.set(Lines.TERTIARYSTATPERCENT, new Line(Lines.TERTIARYSTATPERCENT, 9, 3))
legendary.set(Lines.RANDOMPRIMEPERCENTDEX, new Line(Lines.RANDOMPRIMEPERCENTDEX, 3, 3))
legendary.set(Lines.PRIMEATTACKPERCENT, new Line(Lines.PRIMEATTACKPERCENT, 9, 3))
legendary.set(Lines.PRIMECRITRATE, new Line(Lines.PRIMECRITRATE, 9, 3))
legendary.set(Lines.PRIMECRITDMG, new Line(Lines.PRIMECRITDMG, 6, 6))
legendary.set(Lines.PRIMEDAMAGE, new Line(Lines.PRIMEDAMAGE, 9, 3))
legendary.set(Lines.PRIMEALLSTATPERCENT, new Line(Lines.PRIMEALLSTATPERCENT, 5, 2))
legendary.set(Lines.PRIMEIGNOREDEFENSE, new Line(Lines.PRIMEIGNOREDEFENSE, 50, 3))
legendary.set(Lines.NONPRIMEIGNOREDEFENSE, new Line(Lines.NONPRIMEIGNOREDEFENSE, 45, 3))
legendary.set(Lines.PRIMEBOSSDAMAGE, new Line(Lines.PRIMEBOSSDAMAGE, 50, 2))
legendary.set(Lines.HALFPRIMEBOSSDAMAGE, new Line(Lines.HALFPRIMEBOSSDAMAGE, 45, 2))
legendary.set(Lines.NONPRIMEBOSSDAMAGE, new Line(Lines.NONPRIMEBOSSDAMAGE, 40, 2))
legendary.set(Lines.FILLER, new Line(Lines.FILLER, 0, 165))

unique.set(Lines.PRIMEPRIMARYSTAT, new Line(Lines.PRIMEPRIMARYSTAT, 8, 20))
unique.set(Lines.PRIMESECONDARYSTAT, new Line(Lines.PRIMESECONDARYSTAT, 8, 20))
unique.set(Lines.PRIMETERTIARYSTAT, new Line(Lines.PRIMETERTIARYSTAT, 8, 20))
unique.set(Lines.RANDOMDEXLINE, new Line(Lines.RANDOMDEXLINE, 1, 60))
unique.set(Lines.PRIMEATTACK, new Line(Lines.PRIMEATTACK, 8, 15))
unique.set(Lines.NONPRIMEPRIMARYSTAT, new Line(Lines.NONPRIMEPRIMARYSTAT, 7, 20))
unique.set(Lines.NONPRIMESECONDARYSTAT, new Line(Lines.NONPRIMESECONDARYSTAT, 7, 20))
unique.set(Lines.NONPRIMETERTIARYSTAT, new Line(Lines.NONPRIMETERTIARYSTAT, 7, 20))
unique.set(Lines.NONPRIMEATTACK, new Line(Lines.NONPRIMEATTACK, 7, 15))
unique.set(Lines.PRIMARYSTATPERCENT, new Line(Lines.PRIMARYSTATPERCENT, 6, 3))
unique.set(Lines.SECONDARYSTATPERCENT, new Line(Lines.SECONDARYSTATPERCENT, 6, 3))
unique.set(Lines.TERTIARYSTATPERCENT, new Line(Lines.TERTIARYSTATPERCENT, 6, 3))
unique.set(Lines.RANDOMPRIMEPERCENTDEX, new Line(Lines.RANDOMPRIMEPERCENTDEX, 2, 6))
unique.set(Lines.RANDOMNONPRIMEPERCENTDEX, new Line(Lines.RANDOMNONPRIMEPERCENTDEX, 1, 6))
unique.set(Lines.PRIMEATTACKPERCENT, new Line(Lines.PRIMEATTACKPERCENT, 6, 3))
unique.set(Lines.PRIMECRITRATE, new Line(Lines.PRIMECRITRATE, 6, 3))
unique.set(Lines.PRIMECRITDMG, new Line(Lines.PRIMECRITDMG, 3, 6))
unique.set(Lines.NONPRIMEPRIMARYSTATPERCENT, new Line(Lines.NONPRIMEPRIMARYSTATPERCENT, 5, 3))
unique.set(Lines.NONPRIMESECONDARYSTATPERCENT, new Line(Lines.NONPRIMESECONDARYSTATPERCENT, 5, 3))
unique.set(Lines.NONPRIMETERTIARYSTATPERCENT, new Line(Lines.NONPRIMETERTIARYSTATPERCENT, 5, 3))
unique.set(Lines.NONPRIMEATTACKPERCENT, new Line(Lines.NONPRIMEATTACKPERCENT, 5, 3))
unique.set(Lines.NONPRIMECRITRATE, new Line(Lines.NONPRIMECRITRATE, 5, 3))
unique.set(Lines.NONPRIMECRITDMG, new Line(Lines.NONPRIMECRITDMG, 2, 6))
unique.set(Lines.PRIMEDAMAGE, new Line(Lines.PRIMEDAMAGE, 6, 3))
unique.set(Lines.NONPRIMEDAMAGE, new Line(Lines.NONPRIMEDAMAGE, 5, 3))
unique.set(Lines.ALLSTAT, new Line(Lines.ALLSTAT, 4, 5))
unique.set(Lines.PRIMEALLSTATPERCENT, new Line(Lines.PRIMEALLSTATPERCENT, 3, 2))
unique.set(Lines.NONPRIMEALLSTATPERCENT, new Line(Lines.NONPRIMEALLSTATPERCENT, 2, 2))
unique.set(Lines.PRIMEIGNOREDEFENSE, new Line(Lines.PRIMEIGNOREDEFENSE, 40, 2))
unique.set(Lines.HALFPRIMEIGNOREDEFENSE, new Line(Lines.HALFPRIMEIGNOREDEFENSE, 35, 2))
unique.set(Lines.NONPRIMEIGNOREDEFENSE, new Line(Lines.NONPRIMEIGNOREDEFENSE, 30, 2))
unique.set(Lines.PRIMEBOSSDAMAGE, new Line(Lines.PRIMEBOSSDAMAGE, 40, 2))
unique.set(Lines.HALFPRIMEBOSSDAMAGE, new Line(Lines.HALFPRIMEBOSSDAMAGE, 35, 2))
unique.set(Lines.NONPRIMEBOSSDAMAGE, new Line(Lines.NONPRIMEBOSSDAMAGE, 30, 2))
unique.set(Lines.FILLER, new Line(Lines.FILLER, 0, 1079))

const FamiliarPrimeRates = {
    firstLine: 1,
    secondLine: 0.01
}

const FamiliarData = {
    lines: Lines,
    primeRates: FamiliarPrimeRates,
    legendary: legendary,
    unique: unique
}

export { FamiliarData };