import UserController from '../controllers/UserController';

class Router {

    private static instance: Router;
    private routes: any;
    private userController: UserController;

    private constructor() {
        this.userController = new UserController();
    }

    public static getInstance: Function = (): Router => {
        if (!Router.instance) {
            Router.instance = new Router();
        }
        return Router.instance;
    }

    public init: Function = (express: any): void => {
        this.routes = express.Router();

        this.routes.route('/users')
            .post(this.userController.create);
        
        this.routes.route('/users')
            .get(this.userController.get);
            
        this.routes.route('/users/:id')
            .put(this.userController.update);
        
    }

    public getRoutes: Function = (): any => {
        return this.routes;
    }

}

export default Router;
