<template>
  <Transition name="opin" :duration="500">
    <div class="feed-dialog" v-show="visible">
      <div className="feed-dialog-close" @click="hideFeedDialog">
        <i className="ice-close-b icon"></i>
      </div>
      <div class="feed-dialog-main">
        <div className="coin">
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="128" height="128">
            <path
              d="M512 0c282.760533 0 512 229.239467 512 512 0 282.760533-229.239467 512-512 512-282.760533 0-512-229.239467-512-512C0 229.239467 229.239467 0 512 0z"
              fill="#FCE815"></path>
            <path
              d="M951.569067 249.309867L65.024 761.890133a510.498133 510.498133 0 0 1-13.687467-26.2144L935.662933 224.392533c5.5296 8.192 10.8544 16.4864 15.906134 24.917334z m-33.314134-48.9472L39.1168 708.608c-11.6736-28.023467-20.821333-57.002667-27.306667-86.664533l845.0048-488.448c22.391467 20.411733 42.973867 42.8032 61.44 66.8672z"
              fill="#FFDE92"></path>
            <path
              d="M512 34.133333C248.081067 34.133333 34.133333 248.081067 34.133333 512s213.947733 477.866667 477.866667 477.866667 477.866667-213.947733 477.866667-477.866667S775.918933 34.133333 512 34.133333z"
              fill="#FCE815"></path>
            <path
              d="M906.001067 241.527467c5.597867 8.123733 10.9568 16.418133 16.042666 24.917333L94.549333 744.789333c-4.778667-8.6016-9.352533-17.339733-13.653333-26.248533L906.0352 241.527467zM825.685333 151.483733a480.733867 480.733867 0 0 1 62.805334 66.116267l-819.541334 473.770667a474.248533 474.248533 0 0 1-25.941333-87.381334L825.685333 151.483733z"
              fill="#FFF9BC"></path>
            <path
              d="M512 136.533333C304.64 136.533333 136.533333 304.64 136.533333 512s168.106667 375.466667 375.466667 375.466667 375.466667-168.106667 375.466667-375.466667S719.36 136.533333 512 136.533333z"
              fill="#FFC91A"></path>
            <path
              d="M730.385067 206.5408A375.022933 375.022933 0 0 1 887.466667 512c0 207.36-168.106667 375.466667-375.466667 375.466667-194.901333 0-355.157333-148.548267-373.691733-338.602667L730.385067 206.506667z"
              fill="#FFB50D"></path>
            <path
              d="M409.6 307.2m65.8432 0l73.1136 0q65.8432 0 65.8432 65.8432l0 277.9136q0 65.8432-65.8432 65.8432l-73.1136 0q-65.8432 0-65.8432-65.8432l0-277.9136q0-65.8432 65.8432-65.8432Z"
              fill="#FFF48A"></path>
          </svg>
        </div>
        <div className="qr-box">
          <img className="qr" alt="QR" :src="qrCover" />
        </div>
        <div className="tip">
          <span>微信扫码，可投喂UP ٩( 'ω' )و</span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import qrCover from '@/assets/images/feed.png';
import { isBoolean } from '@/utils/typeUtil';

interface FeedDialogProps {
  modelValue?: boolean;
}

const props = withDefaults(defineProps<FeedDialogProps>(), {
  modelValue: false
});

const visible = ref(false);

const emits = defineEmits({ 'update:modelValue': (value: boolean) => isBoolean(value) });

const hideFeedDialog = () => {
  visible.value = false;
  emits('update:modelValue', false);
};

watch(
  () => props.modelValue,
  val => {
    if (val) {
      visible.value = true;
    } else {
      if (visible.value) visible.value = false;
    }
  }
);
</script>

<style lang="scss" scoped>
$bg: #f7f6f5;

.opin-enter-active,
.opin-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.opin-enter-from,
.opin-leave-to {
  opacity: 0;
}

.feed-dialog {
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $bg;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.feed-dialog-close {
  position: absolute;
  right: 3rem;
  top: 3rem;
  cursor: pointer;
  color: #e94829;
  will-change: transform;
  transition: transform 0.2s ease-in-out;
  transform: rotateZ(-180deg);
  .icon {
    font-size: 2rem;
  }
  &:active {
    transform: rotateZ(0deg);
    transition-duration: 0s;
  }
}

.feed-dialog-main {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .qr-box {
    width: 16rem;
    height: 16rem;
    border-radius: 5rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 1rem;
    background: #f7f6f5;
    box-shadow:
      9px 9px 12px #e1e0df,
      -9px -9px 12px #ffffff;
    .qr {
      width: 100%;
      height: 100%;
      border-radius: 20%;
      object-fit: cover;
    }
  }
  .tip {
    user-select: none;
    margin-top: 24px;
    font-size: 1.5rem;
    font-family: 'dymht';
    color: #9aa7b1;
    text-shadow:
      1px 1px 1px #333,
      -1px -1px 1px #fff;
  }
  .coin {
    position: absolute;
    top: 0;
    z-index: -1;
    animation: putCoin 3s ease infinite;
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
}

@keyframes putCoin {
  0% {
    transform: translateY(0%);
  }
  24% {
    transform: translateY(-200%) rotateY(360deg) scale(1.2);
  }
  50% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>
