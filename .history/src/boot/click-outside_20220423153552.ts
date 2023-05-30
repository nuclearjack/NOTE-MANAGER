import { boot } from 'quasar/wrappers';
import directiveClickOutside from 'src/directive/click-outside';

export default boot(({ app }) => {
  app.directive('click-outside', directiveClickOutside);
});
