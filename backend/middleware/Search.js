const { Client } = require('@elastic/elasticsearch')
const client = new Client({
  node: 'http://es01:9200',
  log: 'trace'
})

module.exports = client