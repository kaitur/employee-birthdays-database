import  pg  from 'pg';
import { userConfig } from './user.js';

const client = new pg.Client(userConfig);

client.connect();

export async function getData(){
  let data = await client.query('SELECT * FROM employee');
  client.end();
  return data;
}