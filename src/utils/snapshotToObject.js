export function snapshotToObject(snapshot) {
    const returnObj = {};
    const obj = snapshot.val();

    for (let [postKey, commentObj] of Object.entries(obj)) {
        returnObj[postKey] = Object.values(commentObj);
    }
    return returnObj;
}
