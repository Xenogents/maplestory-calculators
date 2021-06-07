import { CubeData } from './CubeData.js'

class Equip {
    constructor() {
        this.probability = 1
        this.attackPercent = 0
        this.bossDamage = 0
        this.ignoreDefense = 0
        this.critDmg = 0
        this.cooldownReduction = 0
        this.damage = 0
        this.critRate = 0
        this.attackPer10 = 0
        this.attack = 0
        this.allStat = 0
        this.primaryStatPercent = 0
        this.secondaryStatPercent = 0
        this.tertiaryStatPercent = 0
        this.primaryStat = 0
        this.secondaryStat = 0
        this.tertiaryStat = 0
        this.primaryStatPer10 = 0
        this.secondaryStatPer10 = 0
        this.tertiaryStatPer10 = 0
        this.sharpEyes = false
        this.speedInfusion = false
        this.hp = 0
        this.mp = 0
        this.mesos = 0
        this.drop = 0
    }

    cube(line, totalWeight, primeRate) {
        if (line.line == CubeData.lines.PRIMEBOSSDAMAGE
                    || line.line == CubeData.lines.HALFPRIMEBOSSDAMAGE
                    || line.line == CubeData.lines.NONPRIMEBOSSDAMAGE) {
            this.bossDamage += line.value
            this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.PRIMEIGNOREDEFENSE
                    || line.line == CubeData.lines.NONPRIMEIGNOREDEFENSE) {
            this.ignoreDefense += line.value * (100 - this.ignoreDefense) / 100
            this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.PRIMECOOLDOWNREDUCTION
                    || line.line == CubeData.lines.NONPRIMECOOLDOWNREDUCTION) {
            this.cooldownReduction += line.value
            this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.ATTACKPERCENT) {this.attackPercent += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.CRITDMG) {this.critDmg += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.DAMAGE) {this.damage += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.CRITRATE) {this.critRate += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.ATTACKPER10) {this.attackPer10 += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.ATTACK) {this.attack += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.ALLSTATPERCENT) {this.allStat += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.PRIMARYSTATPERCENT) {this.primaryStatPercent += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.SECONDARYSTATPERCENT) {this.secondaryStatPercent += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.TERTIARYSTATPERCENT) {this.tertiaryStatPercent += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.PRIMARYSTAT) {this.primaryStat += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.SECONDARYSTAT) {this.secondaryStat += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.TERTIARYSTAT) {this.tertiaryStat += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.PRIMARYSTATPER10) {this.primaryStatPer10 += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.SECONDARYSTATPER10) {this.secondaryStatPer10 += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.TERTIARYSTATPER10) {this.tertiaryStatPer10 += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.SHARPEYES) {this.sharpEyes = true; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.SPEEDINFUSION) {this.speedInfusion = true; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.HP) {this.hp += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.MP) {this.mp += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.MESOS) {this.mesos += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else if (line.line == CubeData.lines.DROP) {this.drop += line.value; this.probability *= primeRate * line.weight / totalWeight
        } else {this.probability *= primeRate * line.weight / totalWeight
        }
    }
}

export { Equip };