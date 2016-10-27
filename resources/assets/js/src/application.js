import Application from "notadd/libraries/Application";
import boot from 'notadd/initializers/boot';
import routes from "notadd/initializers/routes";
const application = new Application();
application.initializers.add('routes', routes);
application.initializers.add('boot', boot, -100);
export default application;