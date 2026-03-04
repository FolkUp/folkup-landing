<script setup lang="ts">
defineProps<{
  name: string
  role: string
  oneliner: string
  avatar?: string
}>()
</script>

<template>
  <div class="team-card">
    <div class="team-avatar" aria-hidden="true">
      <img
        v-if="avatar"
        :src="avatar"
        :alt="name"
        width="80"
        height="80"
        loading="lazy"
      />
      <span v-else class="team-avatar-placeholder">{{ name.charAt(0) }}</span>
    </div>
    <h3 class="team-name">{{ name }}</h3>
    <span class="team-role">{{ role }}</span>
    <p class="team-oneliner">{{ oneliner }}</p>
  </div>
</template>

<style scoped>
.team-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem 1rem;
  background: var(--color-surface);
  border-radius: 10px;
  transition: transform 0.2s ease;
}

.team-card:hover {
  transform: translateY(-2px);
}

.team-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  background: var(--color-bg);
  border: 2px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
}

.team-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-avatar-placeholder {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-bordo);
}

.team-name {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 0.25rem;
}

.team-role {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-sage);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.team-oneliner {
  font-family: var(--font-heading);
  font-style: italic;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--color-muted);
  margin: 0;
}
</style>
