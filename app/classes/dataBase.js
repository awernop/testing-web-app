import fs from 'fs';
import path from 'path'

const pathToFileDB = path.join(process.cwd(), './testResults.json')

export default class dataBaseReaderWriter {
    static async _readDatabase() {
        return JSON.parse(fs.readFileSync(pathToFileDB))
    }

    static async _appendDatabase(database, info) {
         database.push(info)
     }

    static async _writeDatabase(database) {
        const _rewrite = JSON.stringify(database);
        fs.writeFileSync(pathToFileDB, _rewrite);
    }
}