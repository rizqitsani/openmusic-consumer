class Listener {
  constructor() {
    this.listen = this.listen.bind(this);
  }

  async listen(message) {
    try {
      const { playlistId, targetEmail } = JSON.parse(
        message.content.toString(),
      );

      console.log(playlistId, targetEmail);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Listener;
