<script setup lang="ts">
defineProps<{
  name: string
  letter: string
  count: string
  description: string
  url: string
  accent: string
}>()
</script>

<template>
  <a :href="url" class="project-card" target="_blank" rel="noopener noreferrer">
    <div class="card-icon" :style="{ backgroundColor: accent }">
      <span>{{ letter }}</span>
    </div>
    <div class="card-body">
      <div class="card-header">
        <h3>{{ name }}</h3>
        <span class="card-count">{{ count }}</span>
      </div>
      <p>{{ description }}</p>
    </div>
  </a>
</template>

<style scoped>
.project-card {
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--color-surface);
  border-radius: 10px;
  text-decoration: none;
  color: var(--color-text);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  min-height: 44px;
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(42, 39, 37, 0.08);
}

.card-icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon span {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
}

.card-body {
  min-width: 0;
}

.card-header {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}

.card-header h3 {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0;
  color: var(--color-text);
}

.card-count {
  font-size: 0.8rem;
  color: var(--color-muted);
  white-space: nowrap;
}

.card-body p {
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--color-muted);
  margin: 0;
}
</style>
