export const directiveClickOutside = {
  mounted(el, binding, vnode) {
    console.log(el);
    el.clickOutsideEvent = (event: Event) => {
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
