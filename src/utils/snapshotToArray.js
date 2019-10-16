export function snapshotToArray(snapshot) {
    const returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;

        // Add from front
        returnArr.unshift(item);
    });

    return returnArr;
}
