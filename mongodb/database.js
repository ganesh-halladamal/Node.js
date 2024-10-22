const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://7022815741:Ganesh%402001@ganeshnode.5rhbg.mongodb.net/NamasteNode?retryWrites=true&w=majority';

const client = new MongoClient(url);

// Database Name
const dbName = 'NamasteNode';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());