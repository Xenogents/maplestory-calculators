export class Equip {
    constructor(level) {
        this.strength = 0;
        this.dexterity = 0;
        this.intelligence = 0;
        this.luck = 0;
        this.defense = 0;
        this.hp = 0;
        this.mp = 0;
        this.allStat = 0;
        this.levelReduction = 0;
        this.weight = 1;
        this.statMultiplier = 1 + level / 20;
        this.multiplier = 1 + level / 40;

        this.redFlameWeights = new Map();
        this.eternalFlameWeights = new Map();
        this.redFlameWeights[3] = 0.2;
        this.redFlameWeights[4] = 0.3;
        this.redFlameWeights[5] = 0.36;
        this.redFlameWeights[6] = 0.14;
        this.eternalFlameWeights[4] = 0.29;
        this.eternalFlameWeights[5] = 0.45;
        this.eternalFlameWeights[6] = 0.25;
        this.eternalFlameWeights[7] = 0.01;
    }
    
    StrIncrease(tier) {this.strength += tier * this.statMultiplier;}
    DexIncrease(tier) {this.dexterity += tier * this.statMultiplier;}
    IntIncrease(tier) {this.intelligence += tier * this.statMultiplier;}
    LukIncrease(tier) {this.luck += tier * this.statMultiplier;}
    StrDexIncrease(tier) {this.strength += tier * this.multiplier; this.dexterity += tier * this.multiplier;}
    StrIntIncrease(tier) {this.strength += tier * this.multiplier; this.intelligence += tier * this.multiplier;}
    StrLukIncrease(tier) {this.strength += tier * this.multiplier; this.luck += tier * this.multiplier;}
    DexIntIncrease(tier) {this.dexterity += tier * this.multiplier; this.intelligence += tier * this.multiplier;}
    DexLukIncrease(tier) {this.dexterity += tier * this.multiplier; this.luck += tier * this.multiplier;}
    IntLukIncrease(tier) {this.intelligence += tier * this.multiplier; this.luck += tier * this.multiplier;}
    DefenseIncrease(tier) {this.defense += tier * this.statMultiplier;}
    HPIncrease(tier) {this.hp += tier;}
    MPIncrease(tier) {this.mp += tier;}
    AllStatIncrease(tier) {this.allStat += tier;}
    LevelReduction(tier) {this.levelReduction += tier * 5;}
}
