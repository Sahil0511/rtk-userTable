import { Chance } from "chance";

const chance = Chance();

export const data = () => {
  return chance.name({ middle: true });
};
