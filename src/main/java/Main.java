package src.main.java;

public class Main {
    public static void main(String[] args) {
        int level = 150;
        int attackPower = 255;
        Boolean isEternal = true;
        Boolean isWeapon = false;
        Boolean isXenon = true;
        Double flameThreshold = 225.0;
        
        Double attackWeighting = 5.0;
        Double allStatWeighting = 22.5;
        Double bossWeighting = 23.0;
        Double secondaryWeighting = 0.125;
        Double probability = 0.0;
        
        int minTier = 0;
        int maxTier = 0;
        if (isEternal) {
            minTier = 4;
            maxTier = 7;
        } else {
            minTier = 3;
            maxTier = 6;
        }
        
        for (int firstLine = 1; firstLine <= 16; firstLine++) {
            for (int secondLine = firstLine + 1; secondLine <= 17; secondLine++) {
                for (int thirdLine = secondLine + 1; thirdLine <= 18; thirdLine++) {
                    for (int fourthLine = thirdLine + 1; fourthLine <= 19; fourthLine++) {
                        for (int tier1 = minTier; tier1 <= maxTier; tier1++) {
                            for (int tier2 = minTier; tier2 <= maxTier; tier2++) {
                                for (int tier3 = minTier; tier3 <= maxTier; tier3++) {
                                    for (int tier4 = minTier; tier4 <= maxTier; tier4++) {
                                        if (isWeapon) {
                                            Weapon weapon = new Weapon(attackPower, level);
                                            weapon.Flame(firstLine, tier1, isEternal);
                                            weapon.Flame(secondLine, tier2, isEternal);
                                            weapon.Flame(thirdLine, tier3, isEternal);
                                            weapon.Flame(fourthLine, tier4, isEternal);
                                            Double flameScore = weapon.attack * attackWeighting + weapon.allStat * allStatWeighting
                                                    + weapon.bossDmg * bossWeighting + weapon.dmg * bossWeighting
                                                    + weapon.strength + weapon.dexterity * secondaryWeighting;
                                            if (isXenon) {flameScore += weapon.dexterity * (1 - secondaryWeighting) + weapon.luck;}
                                            if (flameScore >= flameThreshold) {probability += weapon.weight;}
                                        } else {
                                            Armor armor = new Armor(level);
                                            armor.Flame(firstLine, tier1, isEternal);
                                            armor.Flame(secondLine, tier2, isEternal);
                                            armor.Flame(thirdLine, tier3, isEternal);
                                            armor.Flame(fourthLine, tier4, isEternal);
                                            Double flameScore = armor.allStat * allStatWeighting + armor.attack * attackWeighting
                                                    + armor.strength + armor.dexterity * secondaryWeighting;
                                            if (isXenon) {flameScore += armor.dexterity * (1 - secondaryWeighting) + armor.luck;}
                                            if (flameScore >= flameThreshold) {probability += armor.weight;}
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        String flameType;
        if (isEternal) {flameType = "eternal";
        } else {flameType = "red";}
        System.out.printf("Expected number of " + flameType + " flames needed is: %f\n", (19*18*17*16/24) / probability);
    }
}
