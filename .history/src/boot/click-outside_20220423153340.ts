import { boot } from 'quasar/wrappers';
import { directiveClickOutside } from 'src/directive/click-outside';
console.log(12112313132231332, directiveClickOutside);

export default boot(({ app }) => {
  app.directive('click-outside', directiveClickOutside);
});
