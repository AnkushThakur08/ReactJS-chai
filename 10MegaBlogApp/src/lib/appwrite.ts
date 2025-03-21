import { Account, Client } from "appwrite";
import { config } from "../config/config";

export const client = new Client();

client.setEndpoint(config.appWriteUrl).setProject(config.appWriteProjectID);

export const account = new Account(client);
export { ID } from "appwrite";
