## Table of Contents

- [Concept](#concept)
- [Technologies](#technologies)
- [Installation](#installation)
- [Testing](#functionality)
- [Future Developments](#future-developments)
- [Links and Screenshots](#links-and-screenshots)
- [Created By](#created-by)
- [License](#license)

## Concept

API POST endpoint: receives a list of 100 robots from API endpoint, providing their current position on an xy-plane along and battery life. The endpoint makes an HTTP request to the robots endpoint and return which robot is the best to transport the load based on which one is closest the load's location. If there is more than 1 robot within 10 distance units of the load, the robot with the highest charge is returned.

## Technologies

- JavaScript
- NodeJS
- Netlify

## Installation

To use this project, first clone and navigate to the project repo in your terminal using the commands below:

```
$ git clone https://github.com/eaclumpkens/robot-routing.git
$ cd ./robot-routing
```

Once the repo is cloned and you've ensured you are in the correct repo, if not previously installed, run the following code to install NPM & Netlify's CLI:

```
$ npm install -g npm
$ npm i netlify-cli -g
```

Install NPM packages:

```
$ npm i
```

To start the server locally, run the following command:

```
$ ntl dev
```

![Run Locally](media/localhost.gif)

Ensure server is running locally at

```
http://localhost:8888/
```


## Testing

Create POST request using API Platform such as Postman, ensuring the request body is valid JSON

```
{
  "loadId": 321,
  "x": 40,
  "y": 35
}

```

Payload response should be displayed as following: 
![Postman](media/postman.gif)

## Future Developments

**Additional Error Handlings**
Ensure all error cases are handled and try/catches used appropriately

**Automated Testing**
Implement a library such as JestJS or otherwise to integrate automated testing

**Prod Endpoint**
POST API requests to lvie URL rather than necessitating local hosting

**.Net**
I'd like to be able to recreate this project using the .Net framework


## Created by

- [Elisabeth Clumpkens](mailto:eaclumpkens@gmail.com)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
