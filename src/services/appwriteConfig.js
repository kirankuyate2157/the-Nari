import { Client, Account } from "appwrite";

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("63dbfb7bd71ba62b8910");

const account = new Account(client);
export default account;
