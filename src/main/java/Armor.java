package src.main.java;

public class Armor extends Equip {
    int attack = 0;
    int magAttack = 0;
    int speed = 0;
    int jump = 0;
    
    Armor(int level) {
        super(level);
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
        } else if (flameNumber == 17) {SpeedIncrease(tier);
        } else if (flameNumber == 18) {JumpIncrease(tier);
        } else {LevelReduction(tier);
        }
        
        if (flameType.equals("red")) {
            weight *= this.redFlameWeights.get(tier);
        } else if (flameType.equals("eternal")) {
            weight *= this.eternalFlameWeights.get(tier);
        }
    }
    
    private void AttackIncrease(int tier) {this.attack += tier;}
    private void MagAttackIncrease(int tier) {this.magAttack += tier;}
    private void SpeedIncrease(int tier) {this.speed += tier;}
    private void JumpIncrease(int tier) {this.jump += tier;}
}