import { acceptHMRUpdate, defineStore } from "pinia";
import { ICard } from "@/models/card.model";
import { CardStatus } from "@/models/card.enum";

const dummyCardsTodo: Array<ICard> = [
  {
    id: 1,
    title: "whatever1",
    author: "casper",
    date: new Date(),
    body: "nody",
    status: CardStatus.DOING,
  },
  {
    id: 2,
    title: "whatever2",
    author: "casper",
    date: new Date(),
    body: "nody",
    status: CardStatus.TODO,
  },
  {
    id: 3,
    title: "whatever3",
    author: "casper",
    date: new Date(),
    body: "nody",
    status: CardStatus.TODO,
  },
  {
    id: 4,
    title: "whatever4",
    author: "casper",
    date: new Date(),
    body: "nody",
    status: CardStatus.FINISHED,
  },
  {
    id: 5,
    title: "whatever5",
    author: "casper",
    date: new Date(),
    body: "nodys",
    status: CardStatus.FINISHED,
  },
];

export const useCardStore = defineStore({
  id: "cards",
  state: () => ({
    cards: <ICard[]>dummyCardsTodo,
  }),
  getters: {
    getTodoCards: (state) => {
      return state.cards.filter((card) => card.status === CardStatus.TODO);
    },
    getDoingCards: (state) => {
      return state.cards.filter((card) => card.status === CardStatus.DOING);
    },
    getFinishedCards: (state) => {
      return state.cards.filter((card) => card.status === CardStatus.FINISHED);
    },
  },
  actions: {
    setCard(cards: ICard[]) {
      this.cards = [...this.cards, ...cards];
    },
  },
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCardStore, import.meta.hot));
