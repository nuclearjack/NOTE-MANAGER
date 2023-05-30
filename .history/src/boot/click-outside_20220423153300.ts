import { boot } from 'quasar/wrappers';
import { directiveClickOutside } from 'src/directive/click-outside';
console.log(directiveClickOutside);

export default boot(({ app }) => {
  app.directive('click-outside', directiveClickOutside);
});
