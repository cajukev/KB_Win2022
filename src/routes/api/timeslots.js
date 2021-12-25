import { MongoClient, ServerApiVersion } from 'mongodb';
import { VITE_ADMIN_PW } from '../../lib/Env';
export async function get() {
	const uri =
		"mongodb+srv://admin:"+VITE_ADMIN_PW+"@kevinbookings0.jvv6z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
	const client = new MongoClient(uri, {
		serverApi: ServerApiVersion.v1
	});

  const connection = await client.connect();
  const collection = client.db('Bookings').collection('Timeslots');
  const cursor = collection.find({});
  var timeslots = [];
  await cursor.forEach(doc => timeslots.push(doc.Date));
  client.close()
  return {
    body:await timeslots
  }
  
}

export async function post(request) {
  

	const uri =
  "mongodb+srv://admin:"+VITE_ADMIN_PW+"@kevinbookings0.jvv6z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
	const client = new MongoClient(uri, {
		serverApi: ServerApiVersion.v1
	});
  const items = JSON.parse(request.body)

  const connection = await client.connect();
  const collection = client.db('Bookings').collection('Timeslots');
  collection.insertOne(items, function(err,res){
    if (err) throw err
    console.log("1 document inserted");
    connection.close();
  })

  return {
    body:null
  }
  
}
