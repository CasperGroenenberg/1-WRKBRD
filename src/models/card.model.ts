import { CardStatus } from "@/models/card.enum";
export interface ICard {
  id: number;
  title: string;
  author: string;
  date: Date;
  body: string;
  status: CardStatus;
}
