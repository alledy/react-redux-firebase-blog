export function snapshotToArray(snapshot) {
    const returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        item.index = returnArr.length;
        // Add from front
        returnArr.push(item);
    });

    return returnArr;
}
