import { MongoClient, ServerApiVersion } from 'mongodb';
export async function get() {
	const uri =
		'mongodb+srv://admin:0odMDq0btbZo15Je@kevinbookings0.jvv6z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
	const client = new MongoClient(uri, {
		
		
		serverApi: ServerApiVersion.v1
	});

  const connection = await client.connect();
  const collection = client.db('Bookings').collection('Timeslots');
  const cursor = collection.find({});
  var timeslots = [];
  await cursor.forEach(doc => timeslots.push(doc.Date));

  return {
    body:await timeslots
  }
  
}

export async function post() {
	const uri =
		'mongodb+srv://admin:0odMDq0btbZo15Je@kevinbookings0.jvv6z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
	const client = new MongoClient(uri, {
		
		
		serverApi: ServerApiVersion.v1
	});

  const connection = await client.connect();
  const collection = client.db('Bookings').collection('Timeslots');
  const cursor = collection.find({});
  var timeslots = [];
  await cursor.forEach(doc => console.log(doc));


  return {
    body:timeslots
  }
  
}
