<template>
  <Transition name="opac" mode="out-in">
    <div v-if="!hasSSid" class="sid-tool" :class="{ active: isKeyActive, hover: isKeyHover }">
      <!-- tooltip -->
      <div class="sid-key-tooltip">
        <span class="key-tooltip_text">点击导入凭证</span>
        <span class="key-tooltip_arrow"></span>
      </div>
      <div class="sid-tool-main">
        <!-- 输入框 -->
        <input ref="input" class="sid-tool-input" type="text" placeholder="请输入sessionid" :disabled="inputDisabled" />
        <!-- 图标 -->
        <div class="sid-tool-key" @click="handleBtnClick" @mouseenter="handleKeyHover" @mouseleave="handleKeyNotHover">
          <i class="ice-keya icon"></i>
        </div>
      </div>
      <!-- 保存按钮 -->
      <div class="sid-save" title="保存" @click="handleSave">
        <span class="back"></span>
        <span class="front">
          <i class="ice-checkmark icon"></i>
        </span>
      </div>
      <div class="sid-help" title="help" @click="handleHelpOpen">
        <i class="ice-help icon"></i>
      </div>
      <!-- 加载条 -->
      <div class="sid-loading" v-show="inputDisabled">
        <div class="sid-loading-mask"></div>
        <section class="dots-container">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </section>
      </div>
      <!-- 帮助弹窗 -->
      <SidToolHelp v-model="helpVisible" />
    </div>
    <div v-else class="sid-user">
      <div class="sid-user-card">
        <div class="sid-user-avatar">
          <img class="user-avatar" alt="头像" :src="uerAvatar" />
        </div>
        <div class="sid-user-info">
          <a class="user-name" target="_blank" :href="userLink">{{ userName }}</a>
          <div class="user-fs">
            <div class="user-fsi user-follow">
              <div class="name">关注</div>
              <div class="value">{{ userFollowing }}</div>
            </div>
            <div class="user-fsi user-fans">
              <div class="name">粉丝</div>
              <div class="value">{{ userFollower }}</div>
            </div>
          </div>
          <div class="user-sign">{{ userSign }}</div>
        </div>
        <div class="sid-user-logout" title="退出" @click="delSidCookie">
          <i class="ice-logout icon"></i>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, useTemplateRef } from 'vue';
import SidToolHelp from './SidToolHelp.vue';
import { getMeInfo } from '@/core/request';
import SkMessage from '@/components/Message';
import { CLog } from '@/utils/logUtil';
import { hasCookie, removeCookie, setCookie } from '@/utils/cookieUtil';

// 输入框Ref
const inputRef = useTemplateRef('input');
// 是否激活
const isKeyActive = ref(false);
// 是否悬停
const isKeyHover = ref(false);
let keyActive = false;
let keyHover = false;
// 输入框禁用
const inputDisabled = ref(false);

// 帮助弹窗
const helpVisible = ref(false);

// 是否已有登录凭证
const hasSSid = ref(false);

// 用户信息
// 头像
const uerAvatar = ref('');
// 用户名
const userName = ref('');
// 粉丝
const userFollower = ref(0);
// 关注
const userFollowing = ref(0);
// 签名
const userSign = ref('');
// 用户主页链接
const userLink = ref('');

// 秘钥按钮点击
const handleBtnClick = function () {
  if (keyActive) {
    keyActive = false;
    isKeyActive.value = false;
    isKeyHover.value = true;
    keyHover = true;
    inputRef.value?.blur();
  } else {
    keyActive = true;
    isKeyActive.value = true;
    isKeyHover.value = false;
    keyHover = false;
    inputRef.value?.focus();
  }
};

// 悬停
const handleKeyHover = function () {
  if (keyActive) return;
  isKeyHover.value = true;
  keyHover = true;
};
// 非悬停
const handleKeyNotHover = function () {
  if (keyHover) {
    keyHover = false;
    isKeyHover.value = false;
  }
};

/** 帮助弹窗点击 */
const handleHelpOpen = function () {
  helpVisible.value = true;
};

/**
 * 请求用户信息
 */
const requestMeInfo = function () {
  getMeInfo()
    .then(res => {
      if (res.code !== 0) {
        // 获取失败
        if (res.code === 20003) {
          // 用户未登录
          CLog.warn(`Request Me Info Error: (${res.code})${res.msg}`);
          SkMessage.warning('用户未登录，请先登录');
        } else {
          // 其它错误
          CLog.error(`Request Me Info Error: (${res.code})${res.msg}`);
          SkMessage.error('请求失败，请检查sessionid是否有误');
        }
      } else {
        // 获取成功
        if (res.data) {
          const info = res.data;
          // 设置信息
          uerAvatar.value = info.avatar;
          userName.value = info.nickname;
          userFollower.value = info.follower;
          userFollowing.value = info.following;
          userSign.value = info.sign || '';
          userLink.value = `https://www.douyin.com/user/${info.uid}`;
          hasSSid.value = true;
        } else {
          CLog.info(`用户信息为空: (${res.code})${res.msg}`);
          SkMessage.warning('用户信息为空，请检查sessionid是否有误');
        }
      }
    })
    .catch(err => {
      CLog.error(err);
      SkMessage.error('请求失败，请检查sessionid是否有误');
    })
    .finally(() => {
      inputDisabled.value = false;
    });
};

/** 保存cookie */
const setSidCookie = function (sid: string) {
  // 保存cookie
  // 官网实际会添加多个相同值的cookie，但经测试有这一个就够用了
  setCookie({
    name: 'sessionid',
    value: sid,
    path: '/',
    maxAge: 604800,
    secure: true
  });
  // document.cookie = `sid_tt=${sid}; Path=/; Max-Age=604800; Secure`;
  // document.cookie = `sessionid_ss=${sid}; Path=/; Max-Age=604800; Secure`;
  // 一个自定义，标识作用的cookie
  setCookie({
    name: '__lg',
    value: 'true',
    path: '/',
    maxAge: 604800,
    secure: true
  });
};

/** 删除cookie */
const delSidCookie = function () {
  removeCookie('sessionid');
  removeCookie('__lg');
  hasSSid.value = false;
};

/** 保存 */
const handleSave = function () {
  if (!keyActive) return;
  const ssid = inputRef.value?.value.trim();
  if (!ssid) return;
  // 保存cookie
  setSidCookie(ssid);
  // 请求用户信息
  //  - 禁用输入框
  inputDisabled.value = true;
  requestMeInfo();
};

// 组件挂载前
onBeforeMount(() => {
  // 验证是否存在登录凭证 cookie
  if (hasCookie('__lg')) {
    inputDisabled.value = true;
    // 获取登录用户信息
    requestMeInfo();
  }
});
</script>

<style lang="scss" scoped>
@use 'sass:math';

$bg: #f7f6f5;
$sidToolH: 32px;
$iconColor: #9aa7b1;
$iconColorH: #f39800;
$iconColorA: #38b48b;
$btnSize: $sidToolH;
$tooltipColor: #303133;
$phColor: #b4c3cf;
$inputColor: #6b798e;
$inputDisabledColor: #a5acb1;

$saveBtnW: 24px;
$saveBtnH: 20px;
$saveBtnRgb: rgb(0, 253, 186);
$saveBtnSRgb: rgb(0, 153, 121);

$helpSize: 16px;
$helpColor: #9aa7b1;
$helpColorH: #fcc800;

$loadingDotC: rgb(156, 219, 183);
$loadingDotB: #65db98;
$loadingDotSize: 15px;

// 用户信息卡片
$avatarSize: 52px;
$nameColor: #5f766a;
$signColor: #ac9f8a;
$fsiNColor: #bec2bc;
$fsiVColor: #9d9d82;
$fsiHrColor: #a8b092;
$lgoutColor: #a7aaa1;
$lgoutHColor: #e94829;

.opac-enter-active,
.opac-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.opac-enter-from,
.opac-leave-to {
  opacity: 0;
}

.sid-tool {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: $sidToolH + 12px;
  box-sizing: border-box;
  padding: 6px 12px;
  gap: 6px;
  &.active {
    .sid-tool-main {
      box-shadow:
        inset -2px -2px 3px 0 #ffffff,
        inset 2px 2px 3px 0 #c7c8c8,
        inset -0.5px -0.5px 0 0 #ffffff,
        inset 0.5px 0.5px 0 0 #a0a0a0;
      // width: 100%;
      flex-grow: 1;
      transition:
        box-shadow 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
        flex-grow 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    }
    .sid-tool-key {
      color: $iconColorA;
      .icon {
        transform: rotateZ(0deg);
        transition: transform 0.3s ease-in-out;
      }
    }
    .sid-tool-input {
      width: 100%;
    }
    .sid-save {
      opacity: 1;
      transform: translateY(0);
      transition:
        0.5s transform 0.3s ease-in,
        0.5s opacity 0.3s ease-in;
    }
  }
  &.hover {
    .sid-key-tooltip {
      opacity: 1;
      transform: translate(6px, -130%);
    }
    .sid-tool-key {
      color: $iconColorH;
    }
  }
}

.sid-tool-main {
  display: inline-flex;
  align-items: center;
  position: relative;
  width: $sidToolH;
  height: $sidToolH;
  border-radius: math.div($btnSize, 2);
  box-shadow:
    inset 2px 2px 3px 0 #ffffff,
    inset -2px -2px 3px 0 #c7c8c8,
    inset -0.5px -0.5px 0 0 #ffffff,
    inset 0.5px 0.5px 0 0 #a0a0a0,
    2px 2px 3px 0 rgba(0, 0, 0, 0.15),
    -2px -2px 3px 0 #ffffff;
  transition:
    box-shadow 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    0.3s flex-grow 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  &:hover {
    box-shadow:
      inset 2px 2px 3px 0 #ffffff,
      inset -2px -2px 3px 0 #c7c8c8,
      inset -0.5px -0.5px 0 0 #ffffff,
      inset 0.5px 0.5px 0 0 #a0a0a0,
      1px 1px 1px 0 rgba(0, 0, 0, 0.15),
      -1px -1px 1px 0 #ffffff;
  }
  &:active {
    box-shadow:
      inset -2px -2px 3px 0 #ffffff,
      inset 2px 2px 3px 0 #c7c8c8,
      inset -0.5px -0.5px 0 0 #ffffff,
      inset 0.5px 0.5px 0 0 #a0a0a0;
  }
}

.sid-tool-key {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: $btnSize;
  height: $btnSize;
  position: absolute;
  top: 0;
  left: 0;
  color: $iconColor;
  transition: color 0.3s ease-in-out;
  .icon {
    display: inline-flex;
    font-size: 24px;
    transform: rotateZ(135deg);
    transition: 0.3s transform 0.3s ease-in-out;
  }
}
.sid-key-tooltip {
  opacity: 0;
  user-select: none;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(6px, -100%);
  background-color: $tooltipColor;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  z-index: 1000;
  transition:
    opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  .key-tooltip_arrow {
    position: absolute;
    z-index: -1;
    width: 10px;
    height: 10px;
    bottom: -5px;
    left: 12px;
    &::before {
      position: absolute;
      right: 0;
      width: 10px;
      height: 10px;
      z-index: -1;
      content: ' ';
      transform: rotate(45deg);
      background: $tooltipColor;
      box-sizing: border-box;
      border: 1px solid $tooltipColor;
      border-bottom-right-radius: 2px;
      border-top-color: transparent;
      border-left-color: transparent;
    }
  }
}
.sid-tool-input {
  // 清除样式
  outline: none;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  width: $btnSize;
  height: $sidToolH;
  padding-left: $btnSize;
  box-sizing: border-box;
  font-family: 'dymht';
  font-size: 14px;
  color: $inputColor;
  &::placeholder {
    color: $phColor;
  }
  &:disabled {
    color: $inputDisabledColor;
  }
}

.sid-save {
  opacity: 0;
  transform: translateY(100%);
  width: $saveBtnW;
  height: $saveBtnH;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  outline: 5px solid rgba($saveBtnRgb, 0.5);
  margin: 0 5px;
  border-radius: 100%;
  position: relative;
  transition:
    transform 0.3s ease-in,
    opacity 0.3s ease-in;
  .back {
    background: $saveBtnSRgb;
    border-radius: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .front {
    background: linear-gradient(0deg, rgba($saveBtnRgb, 0.6) 20%, $saveBtnRgb 50%);
    box-shadow: 0 6px 5px -2px rgba($saveBtnSRgb, 0.5);
    border-radius: 100%;
    position: absolute;
    border: 1px solid $saveBtnSRgb;
    box-sizing: border-box;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: inherit;
    transform: translateY(-15%);
    transition: transform 0.15s ease-in;
    color: #fff;
    .icon {
      font-size: 12px;
    }
  }
  &:active {
    .front {
      transform: translateY(0%);
    }
  }
}

.sid-help {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: $helpSize;
  height: $helpSize;
  color: $helpColor;
  transition: color 0.2s ease;
  cursor: pointer;
  &:hover {
    color: $helpColorH;
  }
  .icon {
    font-size: $helpSize;
  }
}

.sid-loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 3px 6px;
  .sid-loading-mask {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .dots-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 6px 12px;
  }

  .dot {
    height: $loadingDotSize;
    width: $loadingDotSize;
    margin-right: math.div($loadingDotSize, 2);
    border-radius: math.div($loadingDotSize, 2);
    background-color: $loadingDotC;
    animation: pulse 1.5s infinite ease-in-out;
  }

  .dot:last-child {
    margin-right: 0;
  }

  .dot:nth-child(1) {
    animation-delay: -0.3s;
  }

  .dot:nth-child(2) {
    animation-delay: -0.1s;
  }

  .dot:nth-child(3) {
    animation-delay: 0.1s;
  }
}

.sid-user {
  width: 100%;
  box-sizing: border-box;
  padding: 6px 12px;
  position: relative;
}

.sid-user-card {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 0 12px 12px 0;
  padding: 8px 12px;
  background: linear-gradient(120deg, #f7f6f5, #ece9e6, #ffffff);
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-left: none;
  box-shadow: 5px 0 3px 0 rgba(0, 0, 0, 0.15);
}

.sid-user-avatar {
  width: $avatarSize;
  height: $avatarSize;
  border-radius: math.div($avatarSize, 2);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .user-avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.sid-user-info {
  flex-grow: 1;
  margin-left: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: 'dymht';
  .user-name {
    display: block;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 6px;
    color: $nameColor;
    -webkit-app-region: no-drag;
    outline: none;
    text-decoration: none;
  }
  .user-fs {
    user-select: none;
    display: flex;
    align-items: center;
  }
  .user-fsi {
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    & + .user-fsi::before {
      content: '';
      display: block;
      width: 0;
      height: 16px;
      border-left: 1px solid $fsiHrColor;
      margin: 0 8px;
    }
    .name {
      color: $fsiNColor;
    }
    .value {
      margin-left: 4px;
      color: $fsiVColor;
      max-width: 80px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .user-sign {
    user-select: none;
    margin-top: 5px;
    font-size: 12px;
    color: $signColor;
    line-height: 1.2;
    font-weight: 400;
  }
}

.sid-user-logout {
  margin-left: 8px;
  color: $lgoutColor;
  transition: color 0.2s ease;
  .icon {
    font-size: 18px;
  }
  &:hover {
    color: $lgoutHColor;
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    background-color: $loadingDotC;
    box-shadow: 0 0 0 0 rgba($loadingDotC, 0.7);
  }

  50% {
    transform: scale(1.2);
    background-color: $loadingDotB;
    box-shadow: 0 0 0 10px rgba($loadingDotC, 0);
  }

  100% {
    transform: scale(0.8);
    background-color: $loadingDotC;
    box-shadow: 0 0 0 0 rgba($loadingDotC, 0.7);
  }
}
</style>
