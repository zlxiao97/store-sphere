import { useEventListener } from '@vueuse/core';
import { ref } from 'vue';

export const useHeaderHeight = () => {
  const headerHeight = ref(0)

  const updateHeaderHeight = () => {
    const header = document.getElementById('header');
    headerHeight.value = header.offsetHeight;
  }

  useEventListener(window, 'load', updateHeaderHeight)
  useEventListener(window, 'resize', updateHeaderHeight)

  return { headerHeight }
}