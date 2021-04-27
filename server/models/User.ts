

class User {

    private firstName: String;
    private lastName: String;
    private age: Number;
    private description: String;
    private email: String;

    constructor(aFirstName?:String,aLastName?:String,anAge?:Number, aDescription?:String,anEmail?:String) {
        (aFirstName)   ?   this.firstName = aFirstName : this.firstName = "unknown";
        (aLastName)    ?   this.lastName = aLastName : this.lastName = "unknown";
        (anAge)        ?   this.age = anAge : this.age = 0;
        (aDescription) ?   this.description = aDescription : this.description = "";
        (anEmail)      ?   this.email = anEmail : this.email = "unknown";

    }

    public getFirstName: Function = (): String => {
        return this.firstName;
    }

    public setFirstName: Function = (aFirstName: String): void => {
        this.firstName = aFirstName;
    }

    public getLastName: Function = (): String => {
        return this.lastName;
    }

    public setLastName: Function = (aLastName: String): void => {
        this.lastName = aLastName;
    }

    public getAge: Function = (): Number => {
        return this.age;
    }

    public setAge: Function = (anAge: Number): void => {
        this.age = anAge;
    }

    public setDescription: Function = (aDescription: String): void => {
        this.description = aDescription;
    }

    public getDescription: Function = (): String => {
        return this.description;
    }

    public setEmail: Function = (anEmail: String): void => {
        this.email = anEmail;
    }

    public getEmail: Function = (): String => {
        return this.email;
    }
}

export default User;
