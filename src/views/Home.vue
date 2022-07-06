<script setup lang="ts">
import { computed, WritableComputedRef } from "vue";
import { ICard } from "@/models/card.model";
import Card from "@/components/Card.vue";
import { useCardStore } from "@/stores/card";

const cardStore = useCardStore();

const todoCards: WritableComputedRef<ICard[]> = computed({
  get(): ICard[] {
    return cardStore.getTodoCards;
  },
  set(card: ICard[]): void {
    cardStore.setCard(card);
  },
});

const doingCards: WritableComputedRef<ICard[]> = computed({
  get(): ICard[] {
    return cardStore.getDoingCards;
  },
  set(card: ICard[]): void {
    cardStore.setCard(card);
  },
});

const finishedCards: WritableComputedRef<ICard[]> = computed({
  get(): ICard[] {
    return cardStore.getFinishedCards;
  },
  set(card: ICard[]): void {
    cardStore.setCard(card);
  },
});

const log = ({ moved, added }) => {
  if (moved) console.log("moved", moved);
  if (added) console.log("added", added, added.element);
};
</script>

<template>
  <div class="bg-gray-50">
    TODO
    <draggable v-model="todoCards" group="cards" @change="log">
      <div
        class="list-group-item"
        v-for="element in todoCards"
        :key="element.id"
      >
        {{ element.title }}
      </div>
    </draggable>

    DOING:
    <div class="flex justify-center">
      <draggable v-model="doingCards" group="cards" @change="log">
        <div
          class="list-group-item"
          v-for="element in doingCards"
          :key="element.id"
        >
          {{ element.title }}
        </div>
      </draggable>
    </div>

    FINISHED
    <draggable v-model="finishedCards" group="cards" @change="log">
      <div
        class="list-group-item"
        v-for="element in finishedCards"
        :key="element.id"
      >
        {{ element.title }}
      </div>
    </draggable>
  </div>
</template>

<style scoped>
.list-group-item {
  display: flex;
  background: cyan;
  border: 1px dashed black;
  width: 500px;
  padding: 10px;
}
</style>
