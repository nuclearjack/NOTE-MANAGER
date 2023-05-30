import { ObjectDirective, VNode } from 'vue';

export const directiveClickOutside = (): ObjectDirective => ({
  mounted(el, binding, vnode: VNode) {
    el.clickOutsideEvent = (event: Event) => {
      if (!(el == event.target || el.contains(event.target))) {
        vnode?.appContext[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  beforeUnmount(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
});
