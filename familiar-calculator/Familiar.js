import { FamiliarData } from './FamiliarData.js'

class Familiar {
    constructor() {
        this.probability = 1
        this.attackPercent = 0
        this.bossDamage = 0
        this.ignoreDefense = 0
        this.critDmg = 0
        this.damage = 0
        this.critRate = 0
        this.attack = 0
        this.allStat = 0
        this.primaryStatPercent = 0
        this.secondaryStatPercent = 0
        this.tertiaryStatPercent = 0
        this.primaryStat = 0
        this.secondaryStat = 0
        this.tertiaryStat = 0
    }

    cube(line, totalWeight, primeRate) {
        if (line.line.includes("boss")) { this.bossDamage += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line.includes("ied")) { this.ignoreDefense += line.value * (100 - this.ignoreDefense) / 100; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line.includes("att%")) {this.attackPercent += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line.includes("critdmg")) {this.critDmg += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line.includes("damage")) {this.damage += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line.includes("critrate")) {this.critRate += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line.includes("attack")) {this.attack += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line.includes("allstat%")) {this.allStat += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line.includes("primstat%")) {this.primaryStatPercent += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line.includes("secstat%")) {this.secondaryStatPercent += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line.includes("tertstat%")) {this.tertiaryStatPercent += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line.includes("primarystat")) {this.primaryStat += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line.includes("secondarystat")) {this.secondaryStat += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line.includes("tertiarystat")) {this.tertiaryStat += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line.includes("percentdex")) {this.secondaryStatPercent += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == FamiliarData.lines.ALLSTAT) {
            this.primaryStat += line.value
            this.secondaryStat += line.value
            this.tertiaryStat += line.value
            this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == FamiliarData.lines.RANDOMDEXLINE) {this.secondaryStat += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else {this.probability *= primeRate * line.weight / totalWeight
        }
    }
}

export { Familiar };