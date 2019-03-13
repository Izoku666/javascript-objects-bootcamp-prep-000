var playlist = {
<<<<<<< HEAD
  "Slowdive" : 'Alison',
  "My Bloody Valentine" : 'Sometimes'
};

// took a while until I changed "name" to "artistName" and "song" to "songTitle", then it worked...
function updatePlaylist(obj , artistName , songTitle)
{
  obj[artistName] = songTitle;
  return obj;
}

function removeFromPlaylist(obj , artistName)
{
  delete obj[artistName];
  return obj;
=======
  //artist : "song",
    "My Bloody Valentine" : 'Sometimes',
  "Slowdive" : 'Alison'
};

function updatePlaylist(obj , name , song)  // Playlist pl = new Playlist();
{
  obj[name] = song
  return obj
}

function removeFromPlaylist(obj , name)
{
  
>>>>>>> 12af41aa7c3ab74d9cbf308fc16bc1bab04b13da
}