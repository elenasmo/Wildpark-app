# App for Visitors (Wildpark)

As my final project for the Web-Development-Bootcamp headed by neue fische GmbH I decided to develop an app for Visitors of the Wildpark. The main feature is a map, which shows the visitors their current location and where they can find the animals, restaurants, playgrounds and restrooms.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Preview

<img src="https://res.cloudinary.com/duwqflakd/image/upload/v1572261807/localhost_3000_calendar_iPhone_6_7_8_1_o8lmk4.png" alt="drawing" width="200"/> <img src="https://res.cloudinary.com/duwqflakd/image/upload/v1572261807/localhost_3000_calendar_iPhone_6_7_8_2_mtlyfd.png" alt="drawing" width="200"/> <img src="https://res.cloudinary.com/duwqflakd/image/upload/v1572261806/localhost_3000_calendar_iPhone_6_7_8_3_no5nug.png" alt="drawing" width="200"/>

## Tech stack

- React.js
- Node.js
- MongoDB (localhost:27017)
- Express
- react-router
- mongoose
- nodemon
- REST API
- styled-components
- styled-icons
- Mapbox-API
- fullcalendar

## Run on localhost

### Setup

`git clone git@github.com:elenasmo/wildpark-app.git`

`cd wildpark-app`

`npm install`

### Requirements

- Cloudinary account
- Mapbox account

### Cloudinary

- Create an account on https://cloudinary.com/.
- Go to https://cloudinary.com/console/settings/upload#upload_presets
- Click `Enable unsigned uploading`
- Copy the preset name (the 8 character hash below name)
- Create a .env.local file in the root directory of this project and add your cloudname and preset:

```
  REACT_APP_CLOUDINARY_CLOUDNAME='your_cloudname'
  REACT_APP_CLOUDINARY_PRESET='your_preset'
```

### Mapbox

- Create an account on https://account.mapbox.com/auth/signup/

- Create a token or choose the default token
- Add the token to your .env.local file:

```
  REACT_APP_MAPBOX_TOKEN="your_token"
```

## Run the app

`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
