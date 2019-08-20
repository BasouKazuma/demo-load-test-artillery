
# Load Testing Demo using Artillery.io

Uses a sample API defined here:

https://documenter.getpostman.com/view/8371151/SVYrseFN?version=latest

## Notes

* Run all commands below from the root directory of the project

## Setup

* Install Node.js - ([download](https://nodejs.org/en/download/))
* Install Artillery - `npm install -g artillery`
* Install Artillery Expect Plugin - `npm install -g artillery-plugin-expect`
* Install project dependencies - `npm install`


## Run Tests

* Open the terminal to the root directory of this project

### Check Single Endpoint

`artillery run tests/sample.yaml`

### Create and Get Account

`artillery run tests/create_and_get_user.yaml`

### Upload and Get File

`artillery run tests/upload_and_get_file.yaml`
