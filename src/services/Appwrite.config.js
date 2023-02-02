import { Client } from "appwrite";
const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("63dbfb7bd71ba62b8910");

export const account = client.account;
