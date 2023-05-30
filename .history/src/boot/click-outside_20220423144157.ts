import { boot } from 'quasar/wrappers';
import { directiveClickOutside } from 'src/directives/click-outside';

export default boot(({ app }) => {
  app.directive('click-outside', directiveClickOutside);
});
