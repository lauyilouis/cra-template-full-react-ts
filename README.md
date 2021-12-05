# cra-template-full-react-ts
The CRA template with everything you need to start building a scalable production grade React app.

## Get started
The template for [Create React App](https://github.com/facebook/create-react-app) (based on [cra-template-redux-typescript](https://github.com/reduxjs/cra-template-redux-typescript)).
To use this template within your project, add `--template full-react-ts` when creating a new app.
For example:
```sh
npx create-react-app my-app --template full-react-ts
```
Cloning this repo pulls down the template only; not a bundled and configured Create React App.

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

## For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
