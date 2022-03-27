class Listener {
  constructor(playlistService) {
    this._playlistService = playlistService;
    this.listen = this.listen.bind(this);
  }

  async listen(message) {
    try {
      const { playlistId, targetEmail } = JSON.parse(
        message.content.toString(),
      );

      const songs = await this._playlistService.getPlaylistSongs(playlistId);

      console.log(songs);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Listener;
