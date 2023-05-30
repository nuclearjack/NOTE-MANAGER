export const directiveClickOutside = {
  mounted(el, binding, vnode) {
    el.clickOutsideEvent = (event) => {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  beforeUnmount(el: Element) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
};
