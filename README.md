# Demo

See demo [here](https://vilka27.github.io/oat_te/index.html)

# Install & Build

Open project folder in your terminal, then run
```
npm install
npm run build
```

# Run

Open project folder in your terminal, then run
```
npm run start
```

Open http://localhost:8080/

# About

This package implements bunch of components.

Each component located in own folder, and consists of .js and .scss files

List component can be used to display any data as styled list.

Page component fetches data from specified url, renders pagination and renders list component using received data. It also receives optional rendering function to pass into list component and mapping function to convert response data to list data

Test-taker-details component simply renders provided data.

Test-taker-preview component accepts data needed to display preview, fetches data from specified url, accept optional mapping function to convert response data to test-taker-deatils data.

# Used technologies & tools

Sass CSS preprocessor

Css class naming convention [BEM](https://en.bem.info)

ESlint

[http-server](https://www.npmjs.com/package/http-server) to run project locally

VSCode