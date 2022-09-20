import { Mountain } from "../models/Mountain"
import * as fs from 'fs';
import * as path from 'path';
// Note that file position is based on where it is called, not 
export const saveWainwrights = (wainwrights: Mountain[]): void => {
    fs.writeFile(path.join(__dirname,'..','data', 'wainwrightsWithCompletedField.json')
        , JSON.stringify(wainwrights), (err) => {
        if (err) {
            console.log(err);
        }
    })
};
