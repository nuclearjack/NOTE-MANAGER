import { boot } from 'quasar/wrappers';
// import { directiveClickOutside } from 'src/directive/click-outside';

export default boot(({ app }) => {
  app.directive('click-outside', {
    mounted(el, binding) {
      el.clickOutsideEvent = (event: Event) => {
        if (!(el === event.target || el.contains(event.target))) {
          // console.log(222222);
          binding.value = event;
          console.log(event);
        }
      };
      document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
      document.body.removeEventListener('click', el.clickOutsideEvent);
    },
  });
});