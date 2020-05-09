# Gist QA scenarios

Gist QA scenarios automation testing using cypress.
- https://gist.github.com/nigorice/f7b441a309bf2a8904fbad35b7051e4b

## Installation

Using npm install
```bash
npm install
```
Or install cypress desktop https://docs.cypress.io/guides/getting-started/installing-cypress.html

## Setup Env

Copy cypress.json.example to cypress.json
```bash
$ cp cypress.json.example cypress.json
```

Change the username and password with your github account
```json
{
    "projectId": null,
    "env": {
        "base_url": "https://github.com",
        "gits_url": "https://gist.github.com",
        "username": null,
        "password": null
    }
  }
```

## Usage

```bash
$ cypress run --browser chrome  | Run with launch browser
$ npx cypress run               | Run with headless mode
```

## Note

Github detect bot activity, so when after sign in need to input the verify code