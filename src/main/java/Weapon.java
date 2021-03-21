package src.main.java;

import java.util.HashMap;
import java.util.Map;

public class Weapon extends Equip {
    int attackPower;
    int attack = 0;
    int magAttack = 0;
    int bossDmg = 0;
    int dmg = 0;
    Map<Integer, Double> attackPowerPercentages = new HashMap<>();
    
    Weapon(int attackPower, int level) {
        super(level);
        this.attackPower = attackPower;
        this.attackPowerPercentages.put(3, 0.03);
        this.attackPowerPercentages.put(4, 0.044);
        this.attackPowerPercentages.put(5, 0.0605);
        this.attackPowerPercentages.put(6, 0.07986);
        this.attackPowerPercentages.put(7, 0.102487);
    }
    
    public void Flame(int flameNumber, int tier, Boolean isEternal) {
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
        } else {LevelReduction(tier);}
        
        if (isEternal) {weight *= this.eternalFlameWeights.get(tier);
        } else {weight *= this.redFlameWeights.get(tier);}
    }
    
    private void AttackIncrease(int tier) {this.attack += this.attackPower * this.multiplier * (this.attackPowerPercentages.get(tier)) + 1;}
    private void MagAttackIncrease(int tier) {this.magAttack += this.attackPower * this.multiplier * (this.attackPowerPercentages.get(tier)) + 1;}
    private void BossDmgIncrease(int tier) {this.bossDmg += tier * 2;}
    private void DmgIncrease(int tier) {this.dmg += tier;}
}
