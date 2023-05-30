import { boot } from 'quasar/wrappers';
// import { directiveClickOutside } from 'src/directive/click-outside';

export default boot(({ app }) => {
  app.directive('click-outside', {
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
});