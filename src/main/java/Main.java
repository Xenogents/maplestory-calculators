package src.main.java;

public class Main {
    public static void main(String[] args) {
        int level = 200;
        int attackPower = 255;
        String flameType = "eternal";
        String equipType = "weapon";
        Double flameThreshold = 1200.0;
        
        Double attackWeighting = 4.0;
        Double allStatWeighting = 8.5;
        Double bossWeighting = 24.0;
        Double secondaryWeighting = 0.125;
        Double probability = 0.0;
        
        int minTier = 0;
        int maxTier = 0;
        if (flameType.equals("red")) {
            minTier = 3;
            maxTier = 6;
        } else if (flameType.equals("eternal")) {
            minTier = 4;
            maxTier = 7;
        }
        
        int iterations = 0;
        for (int firstLine = 1; firstLine <= 16; firstLine++) {
            for (int secondLine = firstLine + 1; secondLine <= 17; secondLine++) {
                for (int thirdLine = secondLine + 1; thirdLine <= 18; thirdLine++) {
                    for (int fourthLine = thirdLine + 1; fourthLine <= 19; fourthLine++) {
                        for (int tier1 = minTier; tier1 <= maxTier; tier1++) {
                            for (int tier2 = minTier; tier2 <= maxTier; tier2++) {
                                for (int tier3 = minTier; tier3 <= maxTier; tier3++) {
                                    for (int tier4 = minTier; tier4 <= maxTier; tier4++) {
                                        iterations++;
                                        if (equipType.equals("weapon")) {
                                            Weapon weapon = new Weapon(attackPower, level);
                                            weapon.Flame(firstLine, tier1, flameType);
                                            weapon.Flame(secondLine, tier2, flameType);
                                            weapon.Flame(thirdLine, tier3, flameType);
                                            weapon.Flame(fourthLine, tier4, flameType);
                                            if (weapon.attack * attackWeighting + weapon.allStat * allStatWeighting
                                                    + weapon.bossDmg * bossWeighting + weapon.dmg * bossWeighting
                                                    + weapon.strength + weapon.dexterity * secondaryWeighting >= flameThreshold) {
                                                probability += weapon.weight;
                                            }
                                        } else if (equipType.equals("armor")) {
                                            Armor armor = new Armor(level);
                                            armor.Flame(firstLine, tier1, flameType);
                                            armor.Flame(secondLine, tier2, flameType);
                                            armor.Flame(thirdLine, tier3, flameType);
                                            armor.Flame(fourthLine, tier4, flameType);
                                            if (armor.allStat * allStatWeighting + armor.attack * attackWeighting
                                                    + armor.strength + armor.dexterity * secondaryWeighting >= flameThreshold) {
                                                probability += armor.weight;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        System.out.printf("Expected number of " + flameType + " flames needed is: %f\n", (19*18*17*16/24) / probability);
    }
}
