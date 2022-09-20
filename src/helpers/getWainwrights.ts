import wainwrights from '../data/wainwrights.json';
import wainwrightsWithCompleted from '../data/wainwrightsWithCompletedField.json'
import * as _ from 'lodash';
import { Mountain } from '../models/Mountain';

export const getWainwrights = (): Mountain[] => 
  _.isEmpty(wainwrightsWithCompleted)
    ? wainwrights.map((item) =>({...item, completed: false}))
    : wainwrightsWithCompleted;