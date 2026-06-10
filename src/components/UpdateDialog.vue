<template>
  <Teleport to="body">
    <Transition name="update-dialog">
      <div v-if="visible" class="update-overlay" @click.self="dismiss">
        <div class="update-dialog">
          <div class="dialog-header">
            <span class="dialog-icon">🎉</span>
            <h3>发现新版本</h3>
          </div>

          <div class="dialog-body">
            <p class="version-info">
              当前版本可升级至 <strong>v{{ version }}</strong>
            </p>

            <!-- Release notes -->
            <div v-if="body" class="release-notes">
              <div class="notes-label">更新内容</div>
              <div class="notes-content" v-text="sanitizedBody"></div>
            </div>

            <!-- Download progress -->
            <div v-if="downloading" class="download-status">
              <span class="spinner"></span>
              正在下载更新...
            </div>

            <!-- Installed -->
            <div v-if="installed" class="installed-status">
              ✅ 更新已就绪，重启应用后生效
            </div>

            <!-- Error -->
            <div v-if="error" class="error-status">
              ❌ {{ error }}
            </div>
          </div>

          <div class="dialog-footer">
            <template v-if="!installed">
              <button
                class="btn btn-secondary"
                @click="dismiss"
                :disabled="downloading"
              >
                稍后提醒
              </button>
              <button
                class="btn btn-primary"
                @click="handleUpdate"
                :disabled="downloading"
              >
                {{ downloading ? '下载中...' : '立即更新' }}
              </button>
            </template>
            <template v-else>
              <button class="btn btn-primary" @click="handleRestart">
                重启应用
              </button>
            </template>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  visible: boolean;
  version: string;
  body: string | null;
  downloading: boolean;
  installed: boolean;
  error: string | null;
}>();

const emit = defineEmits<{
  dismiss: [];
  update: [];
  restart: [];
}>();

const sanitizedBody = computed(() => {
  if (!props.body) return '';
  // Strip markdown headers/formatting for plain text display
  return props.body
    .replace(/^###?\s+/gm, '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\[(.+?)\]\(.+?\)/g, '$1')
    .trim();
});

function dismiss() {
  if (!props.downloading) {
    emit('dismiss');
  }
}

function handleUpdate() {
  emit('update');
}

function handleRestart() {
  emit('restart');
}
</script>

<style lang="scss" scoped>
.update-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
}

.update-dialog {
  background: #1e1e2e;
  border: 1px solid #313244;
  border-radius: 12px;
  width: 420px;
  max-width: 90vw;
  max-height: 80vh;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
}

.dialog-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 24px 0;

  .dialog-icon {
    font-size: 24px;
  }

  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #cdd6f4;
  }
}

.dialog-body {
  padding: 16px 24px;
  flex: 1;
  overflow-y: auto;

  .version-info {
    margin: 0 0 12px;
    color: #a6adc8;
    font-size: 14px;

    strong {
      color: #89b4fa;
    }
  }
}

.release-notes {
  .notes-label {
    font-size: 12px;
    color: #6c7086;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 6px;
  }

  .notes-content {
    background: #181825;
    border: 1px solid #313244;
    border-radius: 8px;
    padding: 12px;
    font-size: 13px;
    color: #bac2de;
    line-height: 1.6;
    white-space: pre-line;
    max-height: 200px;
    overflow-y: auto;
  }
}

.download-status,
.installed-status,
.error-status {
  margin-top: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.download-status {
  background: #1e1e2e;
  border: 1px solid #45475a;
  color: #89b4fa;
}

.installed-status {
  background: #1e2a1e;
  border: 1px solid #40a02b;
  color: #a6e3a1;
}

.error-status {
  background: #2e1e1e;
  border: 1px solid #f38ba8;
  color: #f38ba8;
}

.spinner {
  width: 14px;
  height: 14px;
  border: 2px solid #45475a;
  border-top-color: #89b4fa;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 16px 24px;
  border-top: 1px solid #313244;
}

.btn {
  padding: 8px 18px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: all 0.15s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.btn-primary {
  background: #89b4fa;
  color: #1e1e2e;

  &:hover:not(:disabled) {
    background: #74c7ec;
  }
}

.btn-secondary {
  background: transparent;
  color: #a6adc8;
  border: 1px solid #45475a;

  &:hover:not(:disabled) {
    background: #313244;
    color: #cdd6f4;
  }
}

// Transition
.update-dialog-enter-active,
.update-dialog-leave-active {
  transition: opacity 0.2s;
}

.update-dialog-enter-from,
.update-dialog-leave-to {
  opacity: 0;
}

.update-dialog-enter-active .update-dialog {
  transition: transform 0.2s;
}

.update-dialog-enter-from .update-dialog {
  transform: scale(0.95);
}
</style>
