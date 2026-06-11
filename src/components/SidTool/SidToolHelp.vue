<template>
  <Transition name="fade" @after-leave="handleTransLeave" :duration="500">
    <div class="sid-tool-help" v-show="visible">
      <!-- 遮罩 -->
      <div class="sid-tool-help_mask" @click="handleClose"></div>
      <!-- 内容 -->
      <div role="dialog" class="sid-tool-help_main">
        <h3 class="help-title">一则说明</h3>
        <div class="help-article">
          <div class="article-content">
            <p class="article-tip">
              由于官方做了某些更新，目前，未登录的话是无法获取到礼物信息的，只有登录后，才能正常获取礼物信息
            </p>
            <h4 class="article-h">怎么办？</h4>
            <p class="article-p">
              现在，如果想获取礼物信息，需要导入一个登录凭证(cookie)，具体操作可参考下侧；如果不想，无需任何操作
            </p>
            <h4 class="article-h">参考操作</h4>
            <p class="article-p">
              首先，<a class="article-a" href="https://live.douyin.com/" target="_blank">打开官网</a
              >；同时，确保自己是已登录状态，未登录则先自行登录
            </p>
            <p class="article-p">
              接着，在官网界面打开浏览器开发者工具(可按<span class="article-code">F12</span>)，具体操作可参考下图
            </p>
            <img class="article-img" alt="控制台" :src="cover" />
            <p class="article-p">复制官网cookie中sessionid的值</p>
            <p class="article-p">最后将复制的值粘贴到输入框内保存即可</p>
            <p class="article-p">
              如果使用过程中礼物信息接收不到就尝试更新下sessionid的值，保证它与你官网登录账户的sessionid一致
            </p>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import cover from '@/assets/images/help-article.jpg';
import { isBoolean } from '@/utils/typeUtil';

interface SidToolHelpProp {
  modelValue?: boolean;
}

const props = withDefaults(defineProps<SidToolHelpProp>(), {
  modelValue: false
});

// 是否可见
const visible = ref(false);

const emits = defineEmits({ 'update:modelValue': (value: boolean) => isBoolean(value) });

/** 关闭弹窗 */
const handleClose = function () {
  close();
};

const handleTransLeave = function () {
  emits('update:modelValue', false);
};

const open = function () {
  visible.value = true;
};

const close = function () {
  visible.value = false;
};

onMounted(() => {
  if (props.modelValue) {
    open();
  }
});

watch(
  () => props.modelValue,
  val => {
    if (val) {
      // 打开
      open();
    } else {
      // 关闭
      if (visible.value) {
        close();
      }
    }
  }
);
</script>

<style lang="scss" scoped>
$titleC: #d08635;
$textC: #6b798e;
$tipC: #98d98e;
$hC: #354e6b;
$linkC: #6ca8af;

.fade-enter-active,
.fade-leave-active {
  .sid-tool-help_mask {
    transition: opacity 0.3s cubic-bezier(0.55, 0, 0.1, 1);
  }
  .sid-tool-help_main {
    transition:
      opacity 0.3s cubic-bezier(1, 0.5, 0.8, 1),
      transform 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }
}

// 进入初 & 离开末
.fade-enter-from,
.fade-leave-to {
  .sid-tool-help_mask {
    opacity: 0;
  }
  .sid-tool-help_main {
    opacity: 0;
    transform: translateY(100%);
  }
}

.sid-tool-help {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.sid-tool-help_mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

.sid-tool-help_main {
  max-width: 750px;
  width: 60%;
  height: 80%;
  background-color: #fff;
  border-radius: 12px;
  box-sizing: border-box;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8px 12px;
  .help-title {
    font-weight: 700;
    font-size: 21px;
    font-weight: bold;
    color: $titleC;
    margin: 0;
  }
  .help-article {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .article-content {
    margin-top: 18px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    color: $textC;
    gap: 8px;
    padding-bottom: 36px;
  }
  .article-p {
    color: $textC;
    margin: 0;
    font-size: 16px;
    margin-left: 5px;
    line-height: 1.5;
    text-indent: 2em;
  }
  .article-tip {
    margin: 0;
    color: $tipC;
    font-size: 14px;
    line-height: 1.2;
  }
  .article-h {
    font-size: 18px;
    font-weight: bold;
    color: $hC;
    margin: 0;
  }
  .article-a {
    color: $linkC;
  }
  .article-code {
    border: 1px solid #ecd452;
    border-radius: 3px;
    box-sizing: border-box;
    padding: 2px 5px;
    margin: 0 3px;
    background-color: rgba(236, 212, 82, 0.7);
    color: #d452ec;
  }
  .article-img {
    width: 70%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 12px;
    margin: 0 auto;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.15);
  }
}
</style>
