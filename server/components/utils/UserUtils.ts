import Utils from './Utils';
import Constants from '../Constants';

class UserUtils extends Utils {

    constructor() {
        super();
    }

    // Publics Functions
    public getFilter: Function = (params: any): any => {
        let filter: any = {};

        if(params.lastName) filter.lastName  =  this.getCondition(params.lastName);
        if(params.firstName) filter.firstName =  this.getCondition(params.firstName);
        if(params.age) filter.age =  this.getCondition(params.age);
        if(params.description) filter.description =  this.getCondition(params.description);
        if(params.email) filter.email =  this.getCondition(params.email);

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
