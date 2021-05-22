import { Equip } from './Equip.js';

class Armor extends Equip {    
    constructor(level) {
        super(level);
        this.attack = 0;
        this.magAttack = 0;
        this.speed = 0;
        this.jump = 0;
    }
    
    Flame(flameNumber, tier, isEternal, isFlameAdvantaged) {
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
        } else if (flameNumber == 17) {this.SpeedIncrease(tier);
        } else if (flameNumber == 18) {this.JumpIncrease(tier);
        } else {this.LevelReduction(tier);}

        if (isEternal && isFlameAdvantaged) {
            this.weight *= this.advantagedEternalFlameWeights[tier];
        } else if (isEternal && !isFlameAdvantaged) {
            this.weight *= this.eternalFlameWeights[tier];
        } else if (!isEternal && isFlameAdvantaged) {
            this.weight *= this.advantagedRedFlameWeights[tier];
        } else {
            this.weight *= this.redFlameWeights[tier];
        }
    }
    
    AttackIncrease(tier) {this.attack += tier;}
    MagAttackIncrease(tier) {this.magAttack += tier;}
    SpeedIncrease(tier) {this.speed += tier;}
    JumpIncrease(tier) {this.jump += tier;}
}

export { Armor };
