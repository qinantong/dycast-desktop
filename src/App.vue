<template>
  <IndexView />
  <UpdateDialog
    :visible="showUpdateDialog"
    :version="updateStatus.version || ''"
    :body="updateStatus.body"
    :downloading="updateStatus.downloading"
    :installed="updateStatus.installed"
    :error="updateStatus.error"
    @dismiss="showUpdateDialog = false"
    @update="handleUpdate"
    @restart="handleRestart"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import IndexView from './views/IndexView.vue';
import UpdateDialog from './components/UpdateDialog.vue';
import { useUpdater } from './hooks/useUpdater';
import { settings } from './hooks/useSettings';
import { printBrand, printInfo } from './utils/logUtil';

const { status: updateStatus, checkUpdate, downloadAndInstall, restart } = useUpdater();
const showUpdateDialog = ref(false);

// Watch for updates found by manual check (from SettingsPanel)
watch(
  () => updateStatus.value.available,
  (val) => {
    if (val) showUpdateDialog.value = true;
  },
);

onMounted(async () => {
  // Brand info after clear
  setTimeout(() => {
    console?.clear();
    printBrand();
    printInfo();
  }, 1500);

  // Only auto-check if user hasn't disabled it
  if (settings.autoUpdate) {
    await checkUpdate();
    if (updateStatus.value.available) {
      showUpdateDialog.value = true;
    }
  }
});

async function handleUpdate() {
  await downloadAndInstall();
}

async function handleRestart() {
  await restart();
}
</script>

<style lang="scss">
::selection {
  background-color: #8b968d;
  color: #fff;
}
</style>
