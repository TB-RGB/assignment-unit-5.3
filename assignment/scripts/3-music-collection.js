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
 * @param {*} tracks []
 * @returns Object newAlbum with title, artist, yearPublished, and tracks[] properties
 */
function addToCollection(collection, title, artist, yearPublished, tracks) {
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks,
  };
  collection.push(newAlbum);
  return newAlbum;
}
console.log(
  "Album added:",
  addToCollection(myCollection, "Pronounced McGee", "Mk.gee", 2018, [
    { name: "If He", duration: "4:54" },
    { name: "Roll With the Punches", duration: "3:47" },
    { name: "I Know How You Get", duration: "4:51" },
    { name: "You", duration: "5:11" },
    { name: "Unaware", duration: "4:28" },
    { name: "Priorities", duration: "4:04" },
    { name: "Over Here", duration: "4:16" },
    { name: "Anabell", duration: "3:29" },
    { name: "i", duration: "4:20" }
  ])
);
console.log(
  "Album added:",
  addToCollection(myCollection, "Moon Monsoon", "Moon Monsoon", 2019, [
    { name: "All I Want", duration: "5:03" },
    { name: "Reach Us", duration: "4:21" },
    { name: "The Bay", duration: "4:45" },
    { name: "Didn't Catch Your Name", duration: "3:59" },
    { name: "The Perfect Wave", duration: "4:19" },
  ])
);
console.log(
  "Album added:",
  addToCollection(myCollection, "40oz. to Freedom", "Sublime", 1992, [
    { name: "Waiting For My Ruca", duration: "2:21" },
    { name: "40oz. To Freedom", duration: "3:04" },
    { name: "Smoke Two Joints", duration: "2:54" },
    { name: "We're Only Gonna Die For Our Arrogance", duration: "3:08" },
    { name: "Don't Push", duration: "4:20" },
    { name: "5446 That's My Number/Ball And Chain", duration: "5:18" },
    { name: "Badfish", duration: "3:06" },
    { name: "Let's Go Get Stoned", duration: "3:33" },
    { name: "New Thrash", duration: "1:31" },
    { name: "Scarlet Begonias", duration: "3:32" },
    { name: "Live At E's", duration: "3:09" },
    { name: "D.J.'s", duration: "3:18" },
    { name: "Chica Me Tipo", duration: "2:17" },
    { name: "Right Back", duration: "2:50" },
    { name: "What Happened", duration: "3:28" },
    { name: "New Song", duration: "3:14" },
    { name: "Ebin", duration: "3:33" },
    { name: "Date Rape", duration: "3:38" },
    { name: "Hope", duration: "1:44" },
    { name: "KRS-One", duration: "2:24"},
    { name: "Rivers Of Babylon", duration: "2:30"},
    { name: "Thanx", duration: "4:24" }
  ])
);
console.log(
  "Album added:",
  addToCollection(myCollection, "Led Zeppelin II", "Led Zeppelin", 1969, [
    { name: "Whole Lotta Love", duration: "5:34" },
    { name: "What Is and What Should Never Be", duration: "4:48" },
    { name: "The Lemon Song", duration: "6:20" },
    { name: "Thank You", duration: "4:47" },
    { name: "Heartbreaker", duration: "4:14" },
    { name: "Living Loving Maid (She's Just a Woman)", duration: "2:42" },
    { name: "Ramble On", duration: "4:35" },
    { name: "Moby Dick", duration: "4:21" },
    { name: "Bring It On Home", duration: "4:20" },
  ])
);
console.log(
  "Album added:",
  addToCollection(myCollection, "Circles", "Mac Miller", 2020, [
    { name: "Circles", duration: "2:51" },
    { name: "Complicated", duration: "3:53" },
    { name: "Blue World", duration: "3:30" },
    { name: "Good News", duration: "5:43" },
    { name: "I Can See", duration: "3:41" },
    { name: "Everybody", duration: "4:17" },
    { name: "Woods", duration: "4:47" },
    { name: "Hand Me Downs", duration: "4:59" },
    { name: "That's On Me", duration: "3:38" },
    { name: "Hands", duration: "3:20" },
    { name: "Surf", duration: "5:31" },
    { name: "Once a Day", duration: "2:41" },
  ])
);
console.log(
  "Album added:",
  addToCollection(myCollection, "Settle", "Disclosure", 2014, [
    { name: "Intro", duration: "1:02" },
    { name: "When a Fire Starts to Burn", duration: "4:45" },
    { name: "Latch (feat. Sam Smith)", duration: "4:16" },
    { name: "F for You", duration: "4:30" },
    { name: "White Noise (feat. AlunaGeorge)", duration: "4:38" },
    { name: "Defeated No More (feat. Ed Macfarlane)", duration: "6:08" },
    { name: "Stimulation", duration: "5:21" },
    { name: "Voices (feat. Sasha Keable)", duration: "4:10" },
    { name: "Second Chance", duration: "2:28" },
    { name: "Grab Her!", duration: "5:14" },
    { name: "You & Me (feat. Eliza Doolittle)", duration: "4:27" },
    { name: "January (feat. Jamie Woon)", duration: "5:55" },
    { name: "Confess to Me (feat. Jessie Ware)", duration: "4:11" },
    { name: "Help Me Lose My Mind (feat. London Grammar)", duration: "4:05" },
  ])
);
console.log(
  "Album added:",
  addToCollection(myCollection, "Good Will Prevail", "GRiZ", 2016, [
    { name: "Wicked (feat. Eric Krasno)", duration: "5:54" },
    { name: "Can't Hold Me Down (feat. Tash Neal)", duration: "3:36" },
    { name: "My Friends And I (feat. Prob Cause)", duration: "5:11" },
    { name: "I Don't Mind (feat. Sunsquabi, Artifakts & iDA HAWK)", duration: "4:36" },
    { name: "Good Times Roll (feat. Big Gigantic)", duration: "4:04" },
    { name: "Feelin' Fine", duration: "4:24" },
    { name: "PS GFY (feat. Cherub)", duration: "4:12" },
    { name: "What We've Become (feat. Cory Enemy & Natalola)", duration: "4:12" },
    { name: 'If There Ever Comes a Day (feat. Eli "Paperboy" Reed & Louis Futon)', duration: "3:23" },
    { name: "Rather Be Free (feat. Muzzy Bearr)", duration: "4:47" },
    { name: "Gotta Push On (feat. Brasstracks & Eric Krasno)", duration: "4:33" },
    { name: "Before I Go (feat. Leo Napier)", duration: "7:07" },
    { name: "Driftin' (feat. Son Little)", duration: "3:13" },
  ])
);
console.log(
  "Album added:",
  addToCollection(myCollection, "Macadelic", "Mac Miller", 2012, [
    { name: "Love Me As I Have Loved You", duration: "1:16"},
    { name: "Desperado", duration: "4:01" },
    { name: "Loud", duration: "2:51" },
    { name: "Thoughts From a Balcony", duration: "3:06" },
    { name: "Aliens Fighting Robots (feat. Sir Michael Rocks)", duration: "4:40" },
    { name: "Vitamins", duration: "3:04" },
    { name: "Fight the Feeling (feat. Kendrick Lamar and Iman Omari)", duration: "5:02" },
    { name: "Lucky Ass Bitch (feat. Juicy J)", duration: "4:18" },
    { name: "The Mourning After", duration: "3:09" },
    { name: "1 Threw 8", duration: "3:58" },
    { name: "Ignorant (feat. Cam'ron)", duration: "3:34" },
    { name: "The Question (feat. Lil Wayne)", duration: "6:12"},
    { name: "Angels (When She Shuts Her Eyes)", duration: "3:24"},
    { name: "Sunlight (feat. Iman Omari)", duration: "2:46"},
    { name: "Clarity", duration: "4:36"},
    { name: "America (feat. Casey Veggies and Joey Badass)", duration: "4:34"},
    { name: "Fuck 'Em All", duration: "4:24" },
  ])
);
console.log("My album collection:", myCollection);

/**
 *logs each object in collection and iterpolates properties into string of album info
 * @param {*} album 
 * @returns 
 */
function listTracks(album) {
  let albInfo = `${album.title} by ${album.artist}, published in ${album.yearPublished}:\n`;
  for (let i = 1; i <= album.tracks.length; i++){
    let track = album.tracks[i-1];
    albInfo += `${i}. ${track.name}: ${track.duration}\n`;
  }
  return albInfo;
}

/**
 * Uses the listTracks function to generate a string ouput album info, for each album in the collection
 * @param {*} collection 
 */
function showCollection(collection) {
  for (let album of collection){
    console.log(listTracks(album));
  }
}

showCollection(myCollection);

/**
 * Finds albums by the artist param within given collection
 * @param {*} collection
 * @param {*} artist
 * @returns 'matches' array, populated if any match has been found
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
  } else if (searchCriteria.length === 0) {
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
  if (searchCriteria.hasOwnProperty('trackName')) {
    let results = collection;
    results = results.filter((record) => record.tracks.some((track) => track.name === searchCriteria.trackName));
    console.log(`A track with the title '${searchCriteria.trackName}' has been found on:`);
    return results;
  } else {
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
console.log('Search for "artist: Mk.gee" and "yearPublished: 2018"', search(myCollection, { artist: "Mk.gee", yearPublished: 2018}));
console.log('Search for track "Roll With the Punches"', search(myCollection, { trackName: "Roll With the Punches"}));
console.log('Search for track "Badfish"', search(myCollection, { trackName: "Badfish"}));


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
