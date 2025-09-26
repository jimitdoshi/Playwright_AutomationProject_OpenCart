import fs from 'fs';
import {parse} from 'csv-parse/sync';

export class DataProvider{

    static getTestDataFromJSON(filePath:string){
       let  data: any = JSON.parse(fs.readFileSync(filePath, 'utf8'));
       return data;
    }

    static getTestDataFromCSV(filePath: string){
        let data: any = parse(fs.readFileSync(filePath),{columns:true, skip_empty_lines:true});
        return data;
    }
}