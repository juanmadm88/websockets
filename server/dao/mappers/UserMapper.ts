import Mapper from './Mapper';

class UserMapper extends Mapper {

    constructor() {
        super();
        let model: any = {
            firstName: {
                type: String,
                unique: false,
                required: true
            },
            lastName: {
                type: String,
                unique: false,
                required: true
            },
            age: {
                type: Number,
                unique: false,
                required: false
            },
            description: {
                type: String,
                unique: false,
                required: false
            },
            email: {
                type: String,
                unique: true,
                required: true
            }
        };
        this.createSchema(model, {autoIndex: false, timestamps: false, versionKey: false});
    }

    public getObjectId: Function = (id: any): any => {
        return this.objectId(id);
    }

    public getEntityModel: Function = (): Promise<any> => {
        return this.getModel('User');
    }

}

export default UserMapper;
