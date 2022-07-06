<script setup lang="ts">
import { defineProps } from "vue";
import { ICard } from "@/models/card.model";

const props = defineProps<{
  card: ICard;
}>();

// const router = useRouter()
// const go = () => {
//   if (name.value)
//     router.push(`/hi/${encodeURIComponent(name.value)}`)
// }

// const { t } = useI18n()
</script>

<template>
  <div class="card">
    <router-link class="icon-btn mx-2" to="/" title="test"> </router-link>
    {{ props }}
    <router-link class="icon-btn mx-2" to="/about" title="test2"> </router-link>
  </div>
</template>

<style lang="css">
.card {
  width: 300px;
  height: 350px;
  border: 1px solid black;
  border-radius: 5px;
}
</style>
