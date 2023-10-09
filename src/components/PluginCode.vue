<template>
  <div class="plugin-code">
    <div class="style-toggle">
      <span class="style-toggle__label">API Style: </span>
      <div class="toggle">
        <div
          :class="[
            'toggle__item',
            $apiStyle === 'functions' ? 'toggle__item--active' : ''
          ]"
          :key="updateCounter"
          @click="apiStyle.set('functions')"
        >
          Functions
        </div>
        <div
          :class="[
            'toggle__item',
            $apiStyle === 'classes' ? 'toggle__item--active' : ''
          ]"
          :key="updateCounter"
          @click="apiStyle.set('classes')"
        >
          Classes
        </div>
      </div>
    </div>
    <div v-show="$apiStyle === 'functions'">
      <slot name="FunctionalStyle"></slot>
    </div>
    <div v-show="$apiStyle === 'classes'">
      <slot name="ClassicalStyle"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { apiStyle } from '../stores/apiStyleStore'
import { useStore } from '@nanostores/vue'

const $apiStyle = useStore(apiStyle)
const updateCounter = ref(0)

onMounted(() => {
  updateCounter.value++
})
</script>

<style scoped>
.plugin-code {
  position: relative;
}

.style-toggle__label {
  font-size: 12px;
  font-weight: 600;
  margin-right: 4px;
}

.style-toggle {
  font-size: 14px;
  position: absolute;
  left: 0;
  top: 0;
  padding: 5px 16px;
  border-bottom: 1px solid var(--sl-color-gray-5);
  width: 100%;
}
.toggle {
  display: inline-flex;
  align-items: center;
  padding: 1.5px;
  /* border: 1px solid var(--sl-color-gray-5); */
  border-radius: 5px;
}

.toggle__item {
  margin: 0;
  width: 72px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
}

.toggle__item--active {
  background: #0ea5e9;
  color: white;
}
</style>

<style>
.plugin-code pre.astro-code {
  padding-top: 45px;
}
</style>
