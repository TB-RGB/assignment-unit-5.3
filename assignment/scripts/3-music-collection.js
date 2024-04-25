console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection(collection, title, artist, yearPublished){
  let newAlbum = {title: title, artist: artist, yearPublished: yearPublished};
  collection.push(newAlbum);
  return newAlbum;
}
console.log('Album added:',addToCollection(myCollection, 'Pronounced McGee', 'Mk.gee', 2018));
console.log('Album added:',addToCollection(myCollection, 'Moon Monsoon', 'Moon Monsoon', 2019));
console.log('Album added:',addToCollection(myCollection, '40oz to Freedom', 'Sublime', 1992));
console.log('Album added:',addToCollection(myCollection, 'Led Zeppelin II', 'Led Zeppelin', 1969));
console.log('Album added:',addToCollection(myCollection, 'Circles', 'Mac Miller', 2020));
console.log('Album added:',addToCollection(myCollection, 'Settle', 'Disclosure', 2014));
console.log('Album added:',addToCollection(myCollection, 'Good Will Prevail', 'GRiZ', 2016));
console.log('Album added:',addToCollection(myCollection, 'Macadelic', 'Mac Miller', 2012));
console.log('My album collection:',myCollection);

function showCollection(collection){
  // console.log('Going through my collection, it is:')
  for (let album of collection){
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }
}

showCollection(myCollection);

function findByArtist(collection, artist){
  let matches = [];
  for (let album of collection){
    if (album.artist === artist){
      matches.push(album);
    }
  }
  return matches;
}







// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
