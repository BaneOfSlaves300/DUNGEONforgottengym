export default class Homepage {
    get homeResponse() {
        return this._homeResponse;
    }

    set homeResponse(value) {
        this._homeResponse = value;
    }
    constructor() {
        this._homeResponse = {
            title : "master",
            message : "of the slaves"
        };
    }

}