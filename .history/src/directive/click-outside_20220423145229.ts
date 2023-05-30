import { ObjectDirective } from 'vue';

export const directiveClickOutside = (): ObjectDirective => ({
  mounted(el, binding) {
    el.clickOutsideEvent = (event: Event) => {
      console.log('111111111');
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
});
