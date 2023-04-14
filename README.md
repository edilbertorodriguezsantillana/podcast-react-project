## Get Started

Prerequisites:

- Node.js 19+
- npm 9+

To set up the app execute the following commands:

```bash
git clone https://github.com/edilbertorodriguezsantillana/podcast-react-project.git
cd podcast-react-project
npm i
```

## Development Mode Running

##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## App Building

##### `npm run dev`

It builds the app for development test to the `dist` folder.\
This build creation mode doesn't minimize the assets.

##### `npm run build`

It builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance. The assets are bundled and minified.

## Project Configuration

#### ESLint

We use ESLint for statically analyzing our code and fix problems before deploying on production.

##### `npm run lint`

It finds and fixes problems in code on .js, .jsx, .ts, and .tsx files.

#### Prettier

We use Prettier to format our code and keep the same styling rules throughout for code consistency and maintainability of our project.

##### `npm run format`

It applies the rules configured on the .prettierrc file on the project files.

