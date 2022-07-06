import { defineStore } from "pinia";
import { ICard } from "@/models/card.model";

const dummyCards: Array<ICard> = [
  {
    id: 1,
    title: "whatever",
    author: "casper",
    date: new Date(),
    body: "nody",
  },
  {
    id: 2,
    title: "whatever",
    author: "casper",
    date: new Date(),
    body: "nody",
  },
  {
    id: 3,
    title: "whatever",
    author: "casper",
    date: new Date(),
    body: "nody",
  },
];

export const useDumStore = defineStore({
  id: "cart",
  state: () => ({
    dummyCards,
  }),
  getters: {
    items: (state) => state.dummyCards,
  },
});
