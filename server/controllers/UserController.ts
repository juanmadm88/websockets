import Constants from '../components/Constants';
import ResponseUtils from '../components/utils/ResponseUtils';
import UserUtils from '../components/utils/UserUtils';
import UserService from '../service/UserService';

class UserController {

    private service: UserService;
    private utils: UserUtils;
    
    constructor() {
        this.service = new UserService();
        this.utils = new UserUtils();
    }

    public create: Function = async (req: any, res: any): Promise<any> => {
        try{
            this.utils.validateFields(req.body);
        }catch(error){
            ResponseUtils.sendInvalidReq(res,error.message);
        }
        try {
            const filter = this.utils.getFilter(req.body);
            const foundUser = await this.service.get({email:filter.email});
            if(this.utils.exists(foundUser)) return ResponseUtils.sendInvalidReq(res,Constants.USER_EMAIL_EXISTS)
            await this.service.create(req.body);
            ResponseUtils.sendCreate(res);
        } catch(error) {
            ResponseUtils.sendInternalError(res, error.message);
        }
    }

    public get: Function = async (req: any, res: any): Promise<any> => {
        let filter: any = {};
        try {
            filter = this.utils.getFilter(req.query);
        } catch(error) {
            ResponseUtils.sendInvalidReq(res, error.message);
        }
        try {
            const users: any = await this.service.get(filter);
            if (!this.utils.exists(users)) return ResponseUtils.sendInvalidReq(res,Constants.USER_NOT_EXISTS);
            ResponseUtils.sendQuery(res, users);
        } catch (error) {
            ResponseUtils.sendInternalError(res, error.message);
        }
    }
    
    public update: Function = async (req: any, res: any): Promise<any> => {
        if (!req.params.id) {
            return ResponseUtils.sendInvalidReq(res, Constants.ID_NOT_EXISTS);
        }
        let userId: Number = req.params.id;
        let user: any = req.body;
        try {
            await this.service.update(userId, user);
            ResponseUtils.sendEmpty(res);
        } catch(error) {
            ResponseUtils.sendInternalError(res, error, 500);
        }
    }
}

export default UserController;
