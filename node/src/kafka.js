const { Kafka } = require('kafkajs')

process.env.KAFKAJS_NO_PARTITIONER_WARNING = '1'

const kafka = new Kafka({
    clientId: 'kafka-node',
    brokers: ['localhost:9092']
});

module.exports = kafka;