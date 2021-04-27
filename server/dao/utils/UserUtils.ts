import Utils from './Utils';
import User from '../../models/User';
import Constants from '../../components/Constants';

class UserUtils extends Utils {

    constructor() {
        super();
    }

    private readonly fieldsToFilter = ['firstName','lastName','age','description','email'];

    public getModel: Function = (user: any): User => {
        return new User(user.firstName,user.lastName, user.age,user.description,user.email) ;
    }

    public getOptions: Function = (filter: any): any => {
        let options: any = {};
        let conditions:any ={};
        
        if(filter.firstName)  this.getCondition(conditions, filter.id,this.fieldsToFilter[0]);
        
        if(filter.lastName) this.getCondition(conditions,filter.name,this.fieldsToFilter[1]);
        
        if(filter.age)  this.getCondition(conditions,filter.lastName,this.fieldsToFilter[2]);

        if(filter.description) this.getCondition(conditions,filter.description,this.fieldsToFilter[3]);

        if(filter.email) this.getCondition(conditions,filter.email,this.fieldsToFilter[3]);

        
        if (this.exists(conditions)) {
            options = conditions;
        }

        return options;
    }
    
}

export default UserUtils;
