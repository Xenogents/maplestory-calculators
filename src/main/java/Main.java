package src.main.java;

public class Main {
    public static void main(String[] args) {
        int level = 200;
        int attackPower = 255;
        String flameType = "red";
        Double flameThreshold = 500.0;
        
        Double attackWeighting = 4.0;
        Double allStatWeighting = 20.0;
        Double bossWeighting = 6.0;
        Double secondaryWeighting = 0.15;
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
        
        for (int firstLine = 1; firstLine <= 19; firstLine++) {
            for (int secondLine = 1; secondLine <= 19; secondLine++) {
                for (int thirdLine = 1; thirdLine <= 19; thirdLine++) {
                    for (int fourthLine = 1; fourthLine <= 19; fourthLine++) {
                        for (int tier1 = minTier; tier1 <= maxTier; tier1++) {
                            for (int tier2 = minTier; tier2 <= maxTier; tier2++) {
                                for (int tier3 = minTier; tier3 <= maxTier; tier3++) {
                                    for (int tier4 = minTier; tier4 <= maxTier; tier4++) {
                                        Weapon weapon = new Weapon(attackPower, level);
                                        weapon.Flame(firstLine, tier1, flameType);
                                        weapon.Flame(secondLine, tier2, flameType);
                                        weapon.Flame(thirdLine, tier3, flameType);
                                        weapon.Flame(fourthLine, tier4, flameType);
                                        if (weapon.attack * attackWeighting + weapon.allStat * allStatWeighting
                                                + weapon.bossDmg * bossWeighting + weapon.dmg * bossWeighting
                                                + weapon.strength * (1 + secondaryWeighting) >= flameThreshold) {
                                            probability += weapon.weight;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        System.out.println(Math.pow(19, 4) / probability);
    }
}
