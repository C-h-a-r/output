/*
  > Index.Js is the entry point of our application.
*/

/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow-restricted-names */

// We import the modules.
const config = require("./config");
const mongoose = require("mongoose");
const Dashboard = require("./dashboard/dashboard");
const { Client, Intents, Permissions } = require("discord.js");

// We instiate the client and connect to database.
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES],
});



client.config = config;



  Dashboard(client);

 

client.login(config.token)

