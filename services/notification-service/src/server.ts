import amqp from 'amqplib';

async function start() {
  const connection = await amqp.connect(process.env.RABBITMQ_URL!);
  const channel = await connection.createChannel();

  await channel.assertQueue(process.env.QUEUE_NAME!);

  channel.consume(queue, (msg) => {
    if (msg) {
      console.log('Notification received:', msg.content.toString());
      channel.ack(msg);
    }
  });

  console.log('notification-service listening for messages');
}

start().catch(console.error);
