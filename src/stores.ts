import { atom } from "nanostores";

export type Brand = {
  name: string;
};

export const brand = atom<Brand | null>(null);

export const stores = {
  brand,
};
