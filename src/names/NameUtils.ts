import { random } from "../DiceRoll";

export const barovianFamilyNames = ["Alastroi", "Antonovic", "Antonova", "Barthos", "Belasco", "Cantemir",
  "Dargovich", "Dargova", "Diavolov", "Diminski", "Dilisnya", "Drazkoi", "Garvinski", "Grejenko", "Groza",
  "Grygorovi", "Grygorova", "Ivanovich", "Ivanova", "Janek", "Karushkin", "Konstanti", "Konstanti", "Krezkov",
  "Krezkova", "Krykski", "Lansten", "Lazarescu", "Lukresh", "Lipsiege", "Martikov", "Martikova", "Mironovic",
  "Mironovn", "Moldovar", "Nikolovic", "Nikolova", "Nimirovic", "Nimirova", "Oronovich", "Oronova", "Petrovich",
  "Petrovna", "Polensky", "Radovich", "Radova", "Rilsky", "Stefanovi", "Stefanova", "Strazni"]

export const barovianMaleNames = ["Alek", "Andrej", "Anton", "Balthazar", "Bogan", "Boris", "Dargos", "Darzin",
  "Dragomir", "Emeric", "Falkon", "Frederich", "Franz", "Gargosh", "Gorek", "Grygori", "Hans", "Harkus", "Ivan",
  "Jirko", "Kobal", "Korga", "Krystofor", "Lazlo", "Livius", "Marek", "Miroslav", "Nikolaj", "Nimir", "Oleg",
  "Radovan", "Radu", "Seraz", "Sergei", "Stefan", "Tural", "Valentin", "Vasily", "Vladislav", "Waltar", "Yesper",
  "Zsolt", "Petrovna", "Polensky", "Radovich", "Radova", "Rilsky", "Stefanovi", "Stefanova", "Strazni",]

export const barovianFemaleNames = ["Alana", "Clavdia", "Danya", "Dezdrelda", "Diavola", "Dorina", "Drasha",
  "Drilvia", "Elisabeta", "Fatima", "Grilsha", "Isabella", "Ivana", "Jarzinka", "Kala", "Katerina", "Kereza",
  "Korina", "Lavinia", "Magda", "Marta", "Mathilda", "Minodora", "Mirabel", "Miruna", "Nimira", "Nyanka", "Olivenka",
  "Ruxandra", "Sorina", "Tereska", "Valentina", "Vasha", "Victoria", "Wensenci", "Zondra",]


export const generateMaleBorovianName = (familyName?: string) => {
  const n1 = random(0, barovianMaleNames.length - 1);
  familyName = familyName || barovianFamilyNames[random(0, barovianFamilyNames.length - 1)]

  return `${barovianMaleNames[n1]} ${familyName}`;
}

export const generateFemaleBorovianName = (familyName?: string) => {
  const n1 = random(0, barovianFemaleNames.length - 1);
  familyName = familyName || barovianFamilyNames[random(0, barovianFamilyNames.length - 1)]

  return `${barovianFemaleNames[n1]} ${familyName}`;
}
