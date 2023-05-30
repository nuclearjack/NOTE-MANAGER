import { boot } from 'quasar/wrappers';
import { directiveClickOutside } from 'src/directives';

export default boot(({ app }) => {
  app.directive('click-outside', directiveClickOutside);
});
