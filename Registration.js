import {MongoClient} from "mongodb";

export default class Registration {
    constructor() {
        this.mongoClient = new MongoClient("mongodb://localhost:27017/", { useUnifiedTopology: true });
    }

    appendUser(user) {
        this.mongoClient.connect((error, client) => {
            if (error) {
                return console.log(error);
            }
            const db = client.db('usersDB');
            const  collection = db.collection('users');
            collection.insertOne(user, (err, result) => {
                if (err) {
                    return console.log(err);
                }
                console.log(result);
                client.close();
            });
        });
        return true;
    }

}