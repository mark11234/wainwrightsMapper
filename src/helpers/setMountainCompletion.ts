import { Mountain } from "../models/Mountain";

export const setMountainCompletion = (mountains: Mountain[], nameToSet: string, completed: boolean): void => {
    const lowerCaseNameToSet = nameToSet.toLowerCase();
    let mountainIndex = mountains.findIndex(
        (item) => (
            item.name.toLowerCase() === lowerCaseNameToSet 
            || item.name.split('/[()\[\]]/')[0].toLowerCase() === lowerCaseNameToSet //regex matches [, (, ] or )
        )
    );
    if (mountainIndex !== -1) {
        mountains[mountainIndex].completed = completed;
    } else {
        console.log(nameToSet);
        throw new Error('Invalid mountain name, not found');
    }
}