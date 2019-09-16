// Imports the Google Cloud client library
const { PubSub } = require('@google-cloud/pubsub');
const projectId = process.env.PUBSUB_PROJECT_ID;
const pubsub = new PubSub({ projectId });

// Create topics and subscriptions
const topicIds = process.env.PUBSUB_TOPIC_IDS.split(',');
topicIds.forEach(topic => {
  // Create topic
  pubsub.createTopic(topic).then(result => {
    console.log(result);

    // Create subscription
    pubsub.topic(topic).createSubscription(topic + '-subscription').then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    });
  }).catch(err => {
    console.log(err);
  });
});
