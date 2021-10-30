import { random } from "./DiceRoll";

export const specialCards = ["Ghost", "Innocent", "Marionette", "Darklord", "Mists", "Executioner", "Broken One", "Tempter", "Beast", "Donjon", "Raven", "Seer", "Artifact", "Horseman"];
export const cardSuits = ["Glyphs", "Swords", "Coins", "Stars"];


export const getRandomCard = () => {
  const n = random(1, 9);
  const suit = random(0, 3);

  return `${n} of ${cardSuits[suit]}`;
}

export const getRandomHighDeckCard = () => {
  return specialCards[random(0, specialCards.length - 1)];
}