<template>
  <div
    :class="{
      'live-status-panel': true,
      'status-default': status === 0 || status === 3,
      'status-fail': status === 2,
      'status-ok': status === 1
    }">
    <div class="panel-dur">{{ counter.text }}</div>
    <div class="panel-main">
      <div class="icon"></div>
      <label class="text">{{ text }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ConnectStatus } from '@/core/dycast';
import useTimeCounter from '@/hooks/useTimeCounter';
import { ref, watch } from 'vue';

interface LiveStatusPanelProps {
  status: ConnectStatus;
}

const props = withDefaults(defineProps<LiveStatusPanelProps>(), {
  status: 0
});
// 计时器
const counter = useTimeCounter();
// 状态文本
const text = ref('未连接');

// 监听状态变化
watch(
  () => props.status,
  val => {
    switch (val) {
      case 0:
        text.value = '未连接';
        counter.stop();
        break;
      case 1:
        text.value = '连接中';
        counter.reset();
        counter.start();
        break;
      case 2:
        text.value = '连接失败';
        counter.stop();
        break;
      case 3:
        text.value = '已断开';
        counter.stop();
    }
  }
);

/**
 * 获取连接时长
 */
const getDuration = function () {
  return counter.text.value;
};

defineExpose({
  getDuration
});
</script>

<style lang="scss" scoped>
.live-status-panel {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  box-sizing: border-box;

  &.status-default {
    .panel-main {
      .icon {
        background-color: var(--app-warning);
      }
    }
  }
  &.status-ok {
    .panel-main {
      .icon {
        background-color: var(--app-accent-strong);
      }
    }
  }
  &.status-fail {
    .panel-main {
      .icon {
        background-color: var(--app-danger);
      }
    }
  }
  .panel-dur {
    min-width: 3.5em;
    text-align: center;
    font-weight: 600;
    font-size: 1.4rem;
    font-weight: bold;
    color: #9079ad;
  }
  .panel-main {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    .icon {
      width: 1rem;
      height: 1rem;
      box-sizing: border-box;
      border-radius: 50%;
      border: 1px solid var(--app-border-strong);
      background-color: var(--app-warning);
      transition: background-color 0.3s ease-in-out;
    }

    .text {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--app-text-muted);
    }
  }
}
</style>
