export enum DiceType {
  d4 = 4,
  d6 = 6,
  d8 = 8,
  d10 = 10,
  d12 = 12,
  d20 = 20,
  d100 = 100
}

export const roll = (qt: number, type: DiceType) => {
  return _roll(qt, type)();
}

export const _roll = (qt: number, type: DiceType) => {

  return () => {
    let v = 0;

    for (let i = 0; i < qt; i++)
      v += random(1, type);

    return v;
  }
}

export const random = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min) + min);
}