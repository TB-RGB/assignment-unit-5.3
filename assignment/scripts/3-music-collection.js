console.log("***** Music Collection *****");
// Safe Zone -- Write code below this line
let myCollection = [];


/**
 * Function to add albums as objects to the collection param
 * 
 * @param {
 * } collection 
 * @param {*} title 
 * @param {*} artist 
 * @param {*} yearPublished 
 * @returns Object newAlbum with title, artist, and yearPublished properties
 */
function addToCollection(collection, title, artist, yearPublished) {
  let newAlbum = { title: title, artist: artist, yearPublished: yearPublished };
  collection.push(newAlbum);
  return newAlbum;
}
console.log(
  "Album added:",
  addToCollection(myCollection, "Pronounced McGee", "Mk.gee", 2018)
);
console.log(
  "Album added:",
  addToCollection(myCollection, "Moon Monsoon", "Moon Monsoon", 2019)
);
console.log(
  "Album added:",
  addToCollection(myCollection, "40oz to Freedom", "Sublime", 1992)
);
console.log(
  "Album added:",
  addToCollection(myCollection, "Led Zeppelin II", "Led Zeppelin", 1969)
);
console.log(
  "Album added:",
  addToCollection(myCollection, "Circles", "Mac Miller", 2020)
);
console.log(
  "Album added:",
  addToCollection(myCollection, "Settle", "Disclosure", 2014)
);
console.log(
  "Album added:",
  addToCollection(myCollection, "Good Will Prevail", "GRiZ", 2016)
);
console.log(
  "Album added:",
  addToCollection(myCollection, "Macadelic", "Mac Miller", 2012)
);
console.log("My album collection:", myCollection);


/**
 * logs each object in collection and iterpolates properties into string of album info
 * @param {*} collection 
 */
function showCollection(collection) {
  for (let album of collection) {
    console.log(
      `${album.title} by ${album.artist}, published in ${album.yearPublished}`
    );
  }
}

showCollection(myCollection);


/**
 * Finds albums by the artist param within given collection
 * @param {*} collection 
 * @param {*} artist 
 * @returns matches array, populated if any match has been found
 */
function findByArtist(collection, artist) {
  let matches = [];
  for (let album of collection) {
    if (album.artist === artist) {
      matches.push(album);
    }
  }
  return matches;
}

console.log(
  "Albums by Mac Miller in collection:",
  findByArtist(myCollection, "Mac Miller")
);
console.log(
  "Albums by Mk.gee in collection:",
  findByArtist(myCollection, "Mk.gee")
);
console.log(
  "Albums by Taylor Swift in collection:",
  findByArtist(myCollection, "Taylor Swift")
);

/**
 * Searches collection by obj searchCriteria artist and yearPublished props
 * @param {*} collection 
 * @param {*} searchCriteria 
 * @returns collection if searchCriteria is not fullfilled
 * @returns searchResults if searchCriteria is fullfilled; either empty if no match, else, populated with album object
 */
function search(collection, searchCriteria) {
  let searchResults = [];
  if (searchCriteria === undefined) {
    console.log("No search object, here are all albums being searched:");
    return collection;
  } else if (Object.keys(searchCriteria).length === 0) {
    console.log(
      "Search criteria is an empty object, here are all albums searched:"
    );
    return collection;
  }
  for (let prop in searchCriteria) {
    if (searchCriteria[prop] === "") {
      console.log(`${prop} is empty, here are all albums searched:`);
      return collection;
    }
  }
  for (let album of collection) {
    if (
      album.artist === searchCriteria.artist &&
      album.yearPublished === searchCriteria.yearPublished
    ) {
      console.log(
        `An album by ${searchCriteria.artist} published in ${searchCriteria.yearPublished} has been found`
      );
      searchResults.push(album);
      return searchResults;
    }
  }
  return searchResults;
}

console.log(
  "Searching for album by Ray Charles from 1957, matches are:",
  search(myCollection, { artist: "Ray Charles", yearPublished: 1957 })
);
console.log(
  "Search for Sublime album from 1992 is:",
  search(myCollection, { artist: "Sublime", yearPublished: 1992 })
);
console.log(search(myCollection));
console.log(search(myCollection, { artist: "", yearPublished: 1995 }));
console.log(
  search(myCollection, { artist: "Soccer Mommy", yearPublished: "" })
);

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection:
      typeof myCollection !== "undefined" ? myCollection : undefined,
    addToCollection:
      typeof addToCollection !== "undefined" ? addToCollection : undefined,
    showCollection:
      typeof showCollection !== "undefined" ? showCollection : undefined,
    findByArtist:
      typeof findByArtist !== "undefined" ? findByArtist : undefined,
    search: typeof search !== "undefined" ? search : undefined,
  };
} catch (e) {
  // Do nothing
}
