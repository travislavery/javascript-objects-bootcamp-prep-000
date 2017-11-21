var playlist = {
  "artist": "song"
}

function updatePlaylist(playlistObj, artistName, songTitle) {
  Object.assign(playlistObj, {artistName: songTitle})
  return playlistObj
}

function removeFromPlaylist(playlistObj, artistName) {
  delete playlistObj.artistName
}