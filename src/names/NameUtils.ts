import { random } from "../DiceRoll";

export enum NameType {
  Barovian = "Barovian", Vistani = "Vistani"
}

export enum Gender {
  male = "male", female = "female"
}

export const namesArray = {
  Barovian: {
    family:
      ["Alastroi", "Antonovic", "Antonova", "Barthos", "Belasco", "Cantemir",
        "Dargovich", "Dargova", "Diavolov", "Diminski", "Dilisnya", "Drazkoi", "Garvinski", "Grejenko", "Groza",
        "Grygorovi", "Grygorova", "Ivanovich", "Ivanova", "Janek", "Karushkin", "Konstanti", "Konstanti", "Krezkov",
        "Krezkova", "Krykski", "Lansten", "Lazarescu", "Lukresh", "Lipsiege", "Martikov", "Martikova", "Mironovic",
        "Mironovn", "Moldovar", "Nikolovic", "Nikolova", "Nimirovic", "Nimirova", "Oronovich", "Oronova", "Petrovich",
        "Petrovna", "Polensky", "Radovich", "Radova", "Rilsky", "Stefanovi", "Stefanova", "Strazni"],
    male: ["Alek", "Andrej", "Anton", "Balthazar", "Bogan", "Boris", "Dargos", "Darzin",
      "Dragomir", "Emeric", "Falkon", "Frederich", "Franz", "Gargosh", "Gorek", "Grygori", "Hans", "Harkus", "Ivan",
      "Jirko", "Kobal", "Korga", "Krystofor", "Lazlo", "Livius", "Marek", "Miroslav", "Nikolaj", "Nimir", "Oleg",
      "Radovan", "Radu", "Seraz", "Sergei", "Stefan", "Tural", "Valentin", "Vasily", "Vladislav", "Waltar", "Yesper",
      "Zsolt", "Petrovna", "Polensky", "Radovich", "Radova", "Rilsky", "Stefanovi", "Stefanova", "Strazni",],
    female: ["Alana", "Clavdia", "Danya", "Dezdrelda", "Diavola", "Dorina", "Drasha",
      "Drilvia", "Elisabeta", "Fatima", "Grilsha", "Isabella", "Ivana", "Jarzinka", "Kala", "Katerina", "Kereza",
      "Korina", "Lavinia", "Magda", "Marta", "Mathilda", "Minodora", "Mirabel", "Miruna", "Nimira", "Nyanka", "Olivenka",
      "Ruxandra", "Sorina", "Tereska", "Valentina", "Vasha", "Victoria", "Wensenci", "Zondra",],
  },
  Vistani: {
    male: ["Bela", "Grigori", "Iosif", "Karol", "Ludovic", "Nicu", "Pyotr", "Simione", "Stefan",
      "Vasile", "Arrigal", "Stanimir", "Ratka", "Parpol"],
    female: ["Ana", "Eliza", "Isabela", "Lela", "Natasha", "Papusza", "Rozalina", "Sofya", "Ursula",
      "Yvonne", "Damia", "Alenka", "Mirabel", "Sorvia", "Ezmerelda"],
    family: ["Argintari", "Ashkali", "Aurari", "Bashalde", "Beticos", "Blidari", "Bosha", "Boyash",
      "Chergari", "Chingianes", "Chivute", "Churara", "Costorari", "Cutitari", "Djambas", "Erlide", "Erlije", "Gabori", "Gelderari",
      "Grastari", "Herari", "Hungaros", "Jenische", "Kabudji", "Kalderash", "Kale", "Kantarai", "Kirpachi", "Kobzari", "Kopanari",
      "Kotorara", "Kovachi", "Lacatuchi", "Laieshi", "Lalleri", "Lautari", "Lingurari", "Lingurari", "Lovara", "Ludari", "Machvaya",
      "Mango", "Manouche", "Mechkari", "Mestere", "Netotsi", "Padureani", "Potcovari", "Rlia", "Romanichal", "Romungro", "Rudari",
      "Rudari", "Salahori", "Sfirnari", "Shoshoraya", "Sinti", "Sitari", "Ursari", "Vatrashi", "Xoraxai", "Xoraxane", "Yevkos",
      "Zingaros", "Zlatari",]
  }
}


export const generateName = (nameType: NameType, gender: Gender, familyName?: string) => {
  const names = namesArray[nameType];
  const n1 = random(0, names[gender].length - 1);
  familyName = familyName || names.family[random(0, names.family.length - 1)]

  return `${names[gender][n1]} ${familyName}`;

}

export const generateMaleName = (nameType: NameType, familyName?: string) => {
  return generateName(nameType, Gender.male, familyName);
}

export const generateFemaleName = (nameType: NameType, familyName?: string) => {
  return generateName(nameType, Gender.female, familyName);
}
