import Constants from '../Constants';

abstract class ResponseUtils {
    
    public static sendFile: Function=(res:any, data:any):void =>{
        res.type("image/png");
        res.send(data);
    }

    public static sendCreate:Function = (res: any): void => {
        res.status(Constants.HTTP_CREATED_STATUS_CODE);
        res.send();
    }

    public static sendQuery:Function = (res: any, data: any): void => {
        let response: any = {};
        response.data = data;
        res.status(Constants.HTTP_OK_STATUS_CODE);
        res.send(response);
    }

    public static sendEmpty:Function = (res: any): void => {
        res.status(Constants.HTTP_NO_CONTENT_STATUS_CODE);
        res.send();
    }

    public static sendInvalidReq: Function = (res: any, message: string): void => {
        let response:any = {};
        response.type = Constants.BAD_REQUEST_MESSAGE;
        response.message = message;
        res.status(Constants.HTTP_BAD_REQUEST_STATUS_CODE);
        res.send(response);
    }

    public static sendInternalError:Function = (res: any, message: string): void => {
        let response:any = {};
        response.type = Constants.INTERNAL_SERVER_ERROR_MESSAGE;
        response.message = message;
        res.status(Constants.HTTP_INTERNAL_SERVER_ERROR_STATUS_CODE);
        res.send(response);
    }

}

export default ResponseUtils;
