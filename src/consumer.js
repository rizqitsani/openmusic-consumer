require('dotenv').config();
const amqp = require('amqplib');

const Listener = require('./listener');
const PlaylistService = require('./PlaylistsService');

const init = async () => {
  const playlistService = new PlaylistService();
  const listener = new Listener(playlistService);

  const connection = await amqp.connect(process.env.RABBITMQ_SERVER);
  const channel = await connection.createChannel();

  await channel.assertQueue('export:playlists', {
    durable: true,
  });

  channel.consume('export:playlists', listener.listen, { noAck: true });
};

init();
