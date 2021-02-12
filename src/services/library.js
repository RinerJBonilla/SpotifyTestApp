import firebase from "../firebase/config";

export const addToLibraryFirebase = (song, ownerId) => {
  if (song && ownerId) {
    return firebase.database().ref(`playlist/${ownerId}/${song.id}`).set(song);
  }
};

export const deleteLibraryFirebase = (songId, ownerId) => {
  if (songId && ownerId) {
    return firebase.database().ref(`playlist/${ownerId}/${songId}`).remove();
  }
};

export const getLibraryFirebase = async (ownerId) => {
  if (ownerId) {
    const reff = firebase.database().ref(`playlist/${ownerId}`);
    let res = [];
    res = await reff.once("value");
    let newArray = [];
    res.forEach((snap) => {
      newArray.push(snap.val());
    });
    return newArray;
  }
};
