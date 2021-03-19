package src.main.java;

import java.util.HashMap;
import java.util.Map;

public class Weapon {
    int attackPower;
    int multiplier;
    int statMultiplier;
    int strength = 0;
    int dexterity = 0;
    int intelligence = 0;
    int luck = 0;
    int attack = 0;
    int magAttack = 0;
    int defense = 0;
    int hp = 0;
    int mp = 0;
    int bossDmg = 0;
    int dmg = 0;
    int allStat = 0;
    int levelReduction = 0;
    double weight = 1;
    Map<Integer, Double> attackPowerPercentages = new HashMap<>();
    Map<Integer, Double> redFlameWeights = new HashMap<>();
    Map<Integer, Double> eternalFlameWeights = new HashMap<>();
    
    Weapon(int attackPower, int level) {
        this.attackPower = attackPower;
        statMultiplier = level / 20;
        multiplier = level / 40;
        this.attackPowerPercentages.put(3, 0.03);
        this.attackPowerPercentages.put(4, 0.044);
        this.attackPowerPercentages.put(5, 0.0605);
        this.attackPowerPercentages.put(6, 0.07986);
        this.attackPowerPercentages.put(7, 0.102487);
        this.redFlameWeights.put(3, 0.2);
        this.redFlameWeights.put(4, 0.3);
        this.redFlameWeights.put(5, 0.36);
        this.redFlameWeights.put(6, 0.14);
        this.eternalFlameWeights.put(4, 0.29);
        this.eternalFlameWeights.put(4, 0.45);
        this.eternalFlameWeights.put(4, 0.25);
        this.eternalFlameWeights.put(4, 0.01);
    }
    
    public void Flame(int flameNumber, int tier, String flameType) {
        if (flameNumber == 1) {StrIncrease(tier);
        } else if (flameNumber == 2) {DexIncrease(tier);
        } else if (flameNumber == 3) {IntIncrease(tier);
        } else if (flameNumber == 4) {LukIncrease(tier);
        } else if (flameNumber == 5) {StrDexIncrease(tier);
        } else if (flameNumber == 6) {StrIntIncrease(tier);
        } else if (flameNumber == 7) {StrLukIncrease(tier);
        } else if (flameNumber == 8) {DexIntIncrease(tier);
        } else if (flameNumber == 9) {DexLukIncrease(tier);
        } else if (flameNumber == 10) {IntLukIncrease(tier);
        } else if (flameNumber == 11) {AttackIncrease(tier);
        } else if (flameNumber == 12) {MagAttackIncrease(tier);
        } else if (flameNumber == 13) {DefenseIncrease(tier);
        } else if (flameNumber == 14) {HPIncrease(tier);
        } else if (flameNumber == 15) {MPIncrease(tier);
        } else if (flameNumber == 16) {AllStatIncrease(tier);
        } else if (flameNumber == 17) {BossDmgIncrease(tier);
        } else if (flameNumber == 18) {DmgIncrease(tier);
        } else {LevelReduction(tier);
        }
        
        if (flameType.equals("red")) {
            weight *= this.redFlameWeights.get(tier);
        } else if (flameType.equals("eternal")) {
            weight *= this.eternalFlameWeights.get(tier);
        }
    }
    
    private void StrIncrease(int tier) {this.strength += tier * this.statMultiplier;}
    private void DexIncrease(int tier) {this.dexterity += tier * this.statMultiplier;}
    private void IntIncrease(int tier) {this.intelligence += tier * this.statMultiplier;}
    private void LukIncrease(int tier) {this.luck += tier * this.statMultiplier;}
    private void StrDexIncrease(int tier) {this.strength += tier * this.multiplier; this.dexterity += tier * this.multiplier;}
    private void StrIntIncrease(int tier) {this.strength += tier * this.multiplier; this.intelligence += tier * this.multiplier;}
    private void StrLukIncrease(int tier) {this.strength += tier * this.multiplier; this.luck += tier * this.multiplier;}
    private void DexIntIncrease(int tier) {this.dexterity += tier * this.multiplier; this.intelligence += tier * this.multiplier;}
    private void DexLukIncrease(int tier) {this.dexterity += tier * this.multiplier; this.luck += tier * this.multiplier;}
    private void IntLukIncrease(int tier) {this.intelligence += tier * this.multiplier; this.luck += tier * this.multiplier;}
    private void AttackIncrease(int tier) {this.attack += this.attackPower * this.multiplier * this.attackPowerPercentages.get(tier);}
    private void MagAttackIncrease(int tier) {this.magAttack += this.attackPower * this.multiplier * this.attackPowerPercentages.get(tier);}
    private void DefenseIncrease(int tier) {this.defense += tier * this.statMultiplier;}
    private void HPIncrease(int tier) {this.hp += tier;}
    private void MPIncrease(int tier) {this.mp += tier;}
    private void AllStatIncrease(int tier) {this.allStat += tier;}
    private void BossDmgIncrease(int tier) {this.bossDmg += tier * 2;}
    private void DmgIncrease(int tier) {this.dmg += tier;}
    private void LevelReduction(int tier) {this.levelReduction += tier * 5;}
}
