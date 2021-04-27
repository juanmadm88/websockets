import Constants from '../components/Constants';
import Logger from '../components/Logger';
import UserDAO from '../dao/UserDAO';

class UserService {

    private dao: UserDAO;
    private logger: Logger;

    constructor() {
        this.dao = new UserDAO();
        this.logger = new Logger('UserService');
    }

    public create: Function = async (user: any): Promise<any> => {
        try {
            return await this.dao.create(user);
        } catch (reason) {
            this.logger.error(Constants.ERROR_MESSAGE_CREATE_USER + ' ' + reason);
            throw new Error(Constants.ERROR_MESSAGE_CREATE_USER);
        }
    }

    public get: Function = async (filter: any): Promise<any> => {
        try {
            return await this.dao.get(filter);
        } catch (reason) {
            this.logger.error(Constants.ERROR_MESSAGE_GET_USER + ' ' + reason);
            throw new Error(Constants.ERROR_MESSAGE_GET_USER);
        }
    }
    public update: Function = async (id: Number ,user: any): Promise<any> => {
        try {
            return await this.dao.update(id, user);
        } catch (reason) {
            this.logger.error(Constants.ERROR_MESSAGE_UPDATE_USER + id + ' ' + reason);
            throw new Error(Constants.ERROR_MESSAGE_UPDATE_USER);
        }
    }
}

export default UserService;
