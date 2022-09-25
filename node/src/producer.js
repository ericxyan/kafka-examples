const kafka = require("./kafka")

const producer = kafka.producer()

async function main() {
    await producer.connect()

    const responses = await producer.send({
        topic: 'test-topic',
        messages: [{
            key: 'message-1',
            value: JSON.stringify({
                language: 'js',
                value: 'value-1'
            })
        }]
    })

    console.log('published messages', { responses })
}

main()
