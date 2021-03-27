import { Equip } from './Equip.js';

class Weapon extends Equip {
    constructor(attackPower, level) {
        super(level);
        this.attackPower = attackPower;
        this.attack = 0;
        this.magAttack = 0;
        this.bossDmg = 0;
        this.dmg = 0;

        this.attackPowerPercentages = new Map();
        this.attackPowerPercentages[3] = 0.03;
        this.attackPowerPercentages[4] = 0.044;
        this.attackPowerPercentages[5] = 0.0605;
        this.attackPowerPercentages[6] = 0.07986;
        this.attackPowerPercentages[7] = 0.102487;
    }
    
    Flame(flameNumber, tier, isEternal) {
        if (flameNumber == 1) {this.StrIncrease(tier);
        } else if (flameNumber == 2) {this.DexIncrease(tier);
        } else if (flameNumber == 3) {this.IntIncrease(tier);
        } else if (flameNumber == 4) {this.LukIncrease(tier);
        } else if (flameNumber == 5) {this.StrDexIncrease(tier);
        } else if (flameNumber == 6) {this.StrIntIncrease(tier);
        } else if (flameNumber == 7) {this.StrLukIncrease(tier);
        } else if (flameNumber == 8) {this.DexIntIncrease(tier);
        } else if (flameNumber == 9) {this.DexLukIncrease(tier);
        } else if (flameNumber == 10) {this.IntLukIncrease(tier);
        } else if (flameNumber == 11) {this.AttackIncrease(tier);
        } else if (flameNumber == 12) {this.MagAttackIncrease(tier);
        } else if (flameNumber == 13) {this.DefenseIncrease(tier);
        } else if (flameNumber == 14) {this.HPIncrease(tier);
        } else if (flameNumber == 15) {this.MPIncrease(tier);
        } else if (flameNumber == 16) {this.AllStatIncrease(tier);
        } else if (flameNumber == 17) {this.BossDmgIncrease(tier);
        } else if (flameNumber == 18) {this.DmgIncrease(tier);
        } else {this.LevelReduction(tier);}
        
        if (isEternal) {this.weight *= this.eternalFlameWeights[tier];
        } else {this.weight *= this.redFlameWeights[tier];}
    }
    
    AttackIncrease(tier) {this.attack += this.attackPower * this.multiplier * (this.attackPowerPercentages.get(tier)) + 1;}
    MagAttackIncrease(tier) {this.magAttack += this.attackPower * this.multiplier * (this.attackPowerPercentages.get(tier)) + 1;}
    BossDmgIncrease(tier) {this.bossDmg += tier * 2;}
    DmgIncrease(tier) {this.dmg += tier;}
}

export { Weapon };
