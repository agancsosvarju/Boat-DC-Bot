require('dotenv').config();
const express = require('express');
const passport = require('passport');
const { Strategy } = require('passport-discord');

const app = express();
app.use(express.static('public'));

passport.use(new Strategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    scope: ['identify', 'guilds']
}, (accessToken, refreshToken, profile, done) => done(null, profile)));

app.get('/auth/discord', passport.authenticate('discord'));
app.listen(3000, () => console.log('✅ Szerver fut: http://localhost:3000'));
