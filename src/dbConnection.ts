import { MongoClient, Db, Collection, ObjectId } from 'mongodb';
import { MONGO_DB, MONGO_URI } from './config';

let _db: Db;
let _collectionName: string;
let _dbCollection: Collection<any>;

const DBConnection = {
    connectDB: async () => {
        const client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        _db = client.db(MONGO_DB);
    },
    setCollection: (collection: string) => {
        if (collection !== '' && collection != null) {
            _collectionName = collection;
            _dbCollection = _db.collection(collection);
        } else {
            throw 'Collection is not valid';
        }
    },
    find: async (query: Object = {}) => {
        return await _dbCollection.find(query).toArray();
    },
    findById: async (id: string) => {
        const docId = new ObjectId(id);
        return await _dbCollection.findOne({ _id: id });
    },
};

export const { connectDB, setCollection, find } = DBConnection;
