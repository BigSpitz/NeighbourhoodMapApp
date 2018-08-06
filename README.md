# NeighbourhoodMapApp
A single page app mapping ampelokipous and points of interest

# Getting Started
First you have to get the app files either by zip file from https://github.com/BigSpitz/NeighbourhoodMapApp
or by cloning it by going to your desired folder and execUting in the terminal
`git clone https://github.com/BigSpitz/NeighbourhoodMapApp.git`

# Prerequisites
In order to be able to run the app you will need to have npm installed. For
detailed information you can go to https://www.npmjs.com/get-npm .

# Installing
To install the app you simply have to access the app folder by the terminal or
comand prompt and type `npm install` and afterwards `npm start`, then the app
will brgon running in a localhost port etc '3000'. But if you want to
use the provided service worker you will need to also run `npm run build` and then
`serve -s build` if any package is needed you will be notified by the prompt.

# Built with
Reactjs using Google the Maps Api and Foursquare Api.

# Notes and Comments on Project and code
This project was made really rushed because of the time frame. I will keep improving it
as it is a project which can be used as a part of ones portfolio. Unfortunately I have been
using the google maps api key a lot and even if I issue another one it still blocks me, so
I hope it will be taken in consideration when the app is reviewed as it is functional in 'developer mode',
in which date I hope foursquare will have also unblocked me. Some notes on my code, the fetching codes
are really messy and I think they can be further improved, I would like to take another crack at using
react waterfall, alothough I couldn't make it work.My coffeArray state array can benefit from
trimming the objects to only the values needed like ll, id, address. Generally I would like to use a more
object oriented approach. Thank you for reading my readme file and enjoy the app!!
