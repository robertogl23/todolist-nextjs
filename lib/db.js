import clientPromise from './mongodb'
export default class Db {
    client ;
    db ;

    async getDb(){
        try {
            const client = await clientPromise
            const db     = await client.db();

            return {
                client,
                db
            }
        } catch (error) {
            console.log('error db', error);
            return false
        }

    }
}