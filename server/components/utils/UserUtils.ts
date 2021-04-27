import Utils from './Utils';
import Constants from '../Constants';

class UserUtils extends Utils {

    constructor() {
        super();
    }

    // Publics Functions
    public getFilter: Function = (params: any): any => {
        let filter: any = {};

        if(params.lastName) filter.lastName  =  params.lastName;
        if(params.firstName) filter.firstName =  params.firstName;
        if(params.age) filter.age =  params.age;
        if(params.description) filter.description =  params.description;
        if(params.email) filter.email =  params.email;

        return filter;
    }

    public validateFields: Function = (body: any): any => {
        if(!body) throw new Error (Constants.EMPTY_BODY);
        if(!body.firstName) throw new Error(Constants.EMPTY_FIRST_NAME);
        if(!body.lastName) throw new Error(Constants.EMPTY_LAST_NAME);
        if(!body.email) throw new Error(Constants.EMPTY_EMAIL);
    }
}

export default UserUtils;
