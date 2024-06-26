var amqp = require('amqplib/callback_api');

// connects to localhost
amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  
  // Creates a channel, same as sender
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = '632856';

    channel.assertQueue(queue, {
      durable: false
    });

    // Consumes queue
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    channel.consume(queue, function(msg) {
    console.log(" [x] Received %s", msg.content.toString());
    }, {
        noAck: true
    });
  });
});

