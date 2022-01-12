
# Search and Cropping Images

It is a small project that I created to put together what I learned about NodeJS and ReactJS. What it basically does is search for images with Google's custom search API, and then it allows you to crop the image, with the help of the CropperJS library.


## Run Locally

Clone the project

```bash
  git clone https://github.com/MiltonSantander/search-and-cropping-images.git
```

Go to the project directory

```bash
  cd search-and-cropping-images
```

Install dependencies

```bash
  cd server
  npm install
  cd ../client
  npm install
```

Start the server

```bash
  cd server
  npm start
```

Start the client

```bash
  cd client
  npm start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.

`API_KEY`

`SEARCH_ENGINE_ID`

To know more about how to get your own API key and search engine id, check out this [guide](https://developers.google.com/custom-search/v1/overview).

## Other Dependencies
* [Node.js (version 14.x is recommended)](https://nodejs.org/en/).