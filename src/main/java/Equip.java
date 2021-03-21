package src.main.java;

import java.util.HashMap;
import java.util.Map;

public class Equip {
    int multiplier;
    int statMultiplier;
    int strength = 0;
    int dexterity = 0;
    int intelligence = 0;
    int luck = 0;
    int defense = 0;
    int hp = 0;
    int mp = 0;
    int allStat = 0;
    int levelReduction = 0;
    double weight = 1;
    Map<Integer, Double> redFlameWeights = new HashMap<>();
    Map<Integer, Double> eternalFlameWeights = new HashMap<>();
    
    Equip(int level) {
        statMultiplier = 1 + level / 20;
        multiplier = 1 + level / 40;
        this.redFlameWeights.put(3, 0.2);
        this.redFlameWeights.put(4, 0.3);
        this.redFlameWeights.put(5, 0.36);
        this.redFlameWeights.put(6, 0.14);
        this.eternalFlameWeights.put(4, 0.29);
        this.eternalFlameWeights.put(5, 0.45);
        this.eternalFlameWeights.put(6, 0.25);
        this.eternalFlameWeights.put(7, 0.01);
    }
    
    public void StrIncrease(int tier) {this.strength += tier * this.statMultiplier;}
    public void DexIncrease(int tier) {this.dexterity += tier * this.statMultiplier;}
    public void IntIncrease(int tier) {this.intelligence += tier * this.statMultiplier;}
    public void LukIncrease(int tier) {this.luck += tier * this.statMultiplier;}
    public void StrDexIncrease(int tier) {this.strength += tier * this.multiplier; this.dexterity += tier * this.multiplier;}
    public void StrIntIncrease(int tier) {this.strength += tier * this.multiplier; this.intelligence += tier * this.multiplier;}
    public void StrLukIncrease(int tier) {this.strength += tier * this.multiplier; this.luck += tier * this.multiplier;}
    public void DexIntIncrease(int tier) {this.dexterity += tier * this.multiplier; this.intelligence += tier * this.multiplier;}
    public void DexLukIncrease(int tier) {this.dexterity += tier * this.multiplier; this.luck += tier * this.multiplier;}
    public void IntLukIncrease(int tier) {this.intelligence += tier * this.multiplier; this.luck += tier * this.multiplier;}
    public void DefenseIncrease(int tier) {this.defense += tier * this.statMultiplier;}
    public void HPIncrease(int tier) {this.hp += tier;}
    public void MPIncrease(int tier) {this.mp += tier;}
    public void AllStatIncrease(int tier) {this.allStat += tier;}
    public void LevelReduction(int tier) {this.levelReduction += tier * 5;}
}