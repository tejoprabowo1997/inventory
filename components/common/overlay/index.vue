<script lang="ts" setup>
  const overlayStore = useOverlayStore();

  const overlay = computed(() => overlayStore.getShow);
  const message = computed(() => overlayStore.getMessage);
</script>

<template>
  <v-overlay :model-value="overlay" class="align-center justify-center" persistent>
    <!--    {{ message }}-->
    <v-progress-circular color="pink" indeterminate size="64" />
  </v-overlay>
</template>

<style scoped></style>
