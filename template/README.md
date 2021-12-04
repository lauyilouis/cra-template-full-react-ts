# Full React Typescript App Starter V1.0.0
### The CRA template with everything you need to start building a scalable production grade React app.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [full-react-ts template](https://github.com/lauyilouis/cra-template-full-react-ts) (based on [cra-template-redux-typescript](https://github.com/reduxjs/cra-template-redux-typescript)).

## Tech stack
The template is using popular tech of the React community.
1. Typescript v4 [https://www.typescriptlang.org/]
2. React v17  [https://reactjs.org/docs/getting-started.html]
3. Redux v7 + Redux Toolkit v1 [https://redux.js.org/introduction/getting-started]
4. Material UI v5 [https://mui.com/]
5. Styled Components v5 [https://styled-components.com/docs/basics#getting-started]
5. React Router v6 [https://reactrouter.com/docs/en/v6/getting-started/overview]

## Features

1. Highly scalable folder structure. Make your source file well organized.
2. Modern `redux` and `@reduxjs/toolkit` setup with example. Save your learning time.
3. Customizable `webpack` config and `tsconfig` using `craco`. Need not to `npm run eject` anymore!
4. Comprehensive `eslint` customized for React + Typescript. No more messy code style.
5. React Material UI using `styled-components` as style engine setup already.
6. Configured to run linting and unit test before `npm run build`.
7. Comprehensive examples for demonstrations.

## Get started

1. run `npm install`
2. run `npm start`
3. If you are using VSCode, install the following extensions:
3.1. ESLint [https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint]  
3.2. vscode-styled-components [https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components]

## Initial template structure
### Skeleton
The template is using the modulization structure which is highly scalable. The main concept is to group files in the same scope in the same folder.  
There are components for demo purposes. You may remove or edit any component.
```
.
|--- public                                 # Contain assets for public access
    |--- favicon.ico
    |--- index.html
    |--- manifest.json
    └--- robots.txt
|--- src                                    # Source files
    |--- constants                          # Global reusable constants
    |--- redux                              # Anything related to redux
        |--- app                            # App scope files
            |--- hooks.ts                   # Use these hooks instead of plain `useDispatch` and `useSelector`
            └--- store.ts                   # The global redux store
        └--- features                       # Slices (reducer, action and thunks) to be placed here
            └--- counter                    # A demo counter slice and it's related files
                |--- counterAPI.ts          # Mock async API
                |--- counterSlice.spec.ts   # Unit test
                └--- counterSlice.ts        # Slice
    |--- services                           # Global helper functions
    |--- ui
        |--- components                     # Global reusable components
            |--- atomic                     # Atomic components to be consumed or composited
                |--- Counter
                └--- Slider
            └--- composite                  # Composite of atmoic components
                └--- SliderGroup 
        |--- layout                         # Layout of the whole app. App bar should be placed here
            |--- Layout                     # Pure UI Stateless Component. Only render props
                |--- components             # Local components only used by Layout
                └--- index.tsx 
            └--- index.tsx                  # Container Component. Handles states and data.
        |--- pages
            └--- home
                |--- home.css               # CSS file is not recommended. Use style-components instead
                └--- index.tsx
        |--- App.test.tsx                   # Unit test
        └--- App.tsx                        # App initialization done here. Edit if you have more
    |--- index.css                          # Global style. Remove if don't need
    |--- index.tsx                          # App entry point
    |--- react-app-env.d.ts                 # Do not edit
    └--- setupTests.ts                      # Do not edit
|--- .gitignore                    
|--- craco.config.js                        # Override webpack and tsconfig here.
|--- package.json
|--- README.md
|--- tsconfig.json
└--- tsconfig.paths.json                    # Overide tsconfig paths here.
```

### What is modulization folder structure?

It is done by distributing components into 2 scopes:
1. Global - Consumed by whole app or multiple scopes. (i.e. `src/ui/components`)
2. Local - Consumed by a single component or scope. (e.g. `src/ui/components/layout/Layout/components`)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  

The page will reload if you make edits.  
You will also see any lint errors in the console.  

### `npm lint`

Run eslint to lint your source code to check if there is any linting error. It helps enforce consistent code styles.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder. It runs linting and unit tests before the build. Any error will stop the build.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
