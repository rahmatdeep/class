import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://rahmatdeep:VC43JumFlkhp@ep-white-river-00133049.ap-southeast-1.aws.neon.tech/class-1?sslmode=require"
})




async function insertdata() {
    try {
        await client.connect(); // Ensure client connection is established
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
        const res = await client.query(insertQuery);
        console.log('Insertion success:', res); // Output insertion result
      } catch (err) {
        console.error('Error during the insertion:', err);
      } finally {
        await client.end(); // Close the client connection
      }
}
insertdata()