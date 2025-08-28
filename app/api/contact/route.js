import { MongoClient } from 'mongodb';

export async function POST(request) {
  const { name, email, subject, message } = await request.json();

  const uri = process.env.MONGODB_URL;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("dropthread"); // Optional: Replace with your database name
    const collection = database.collection("contacts"); // Optional: Replace with your collection name

    const result = await collection.insertOne({
      name,
      email,
      subject,
      message,
      submittedAt: new Date(),
    });

    return new Response(JSON.stringify({ message: "Form submitted successfully", id: result.insertedId }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error submitting form" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } finally {
    await client.close();
  }
}
