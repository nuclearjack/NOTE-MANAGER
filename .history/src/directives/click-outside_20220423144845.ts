import { ObjectDirective } from 'vue';

export const directiveClickOutside = (): ObjectDirective => ({
  mounted(el, binding) {
    console.log('0000000000');
    el.clickOutsideEvent = (event: Event) => {
      console.log('111111111');
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
        console.log('2222222');
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
});
