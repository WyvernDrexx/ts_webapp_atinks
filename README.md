# Procyon Web App V2

## Table of contents

- [Project Structure](#project-structure)
- [Yarn Upgrade](#yarn-upgrade)
- [Technologies Used](#technologies-used)
  - [ReactJs](#reactjs)
  - [ViteJs](#vitejs)
  - [ReactQuery](#react-query)
  - [Typescript](#typescript)
  - [React Router V6.6.2](#react-router-v662)
  - [Yarn](#yarn)

## Project Structure

Most of the code lives in the `src` folder and looks like this:

```sh
src
|
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # re-exporting different libraries preconfigured for the application
|
+-- providers         # all of the application providers
|
+-- routes            # routes configuration
|
+-- stores            # global state stores
|
+-- test              # test utilities and mock server
|
+-- types             # base types used across the application
|
+-- utils             # shared utility functions
```

In order to scale the application in the easiest and most maintainable way, keep most of the code inside the `features` folder, which should contain different feature-based things. Every `feature` folder should contain domain specific code for a given feature. This will allow you to keep functionalities scoped to a feature and not mix its declarations with shared things. This is much easier to maintain than a flat folder structure with many files.

A feature could have the following structure:

```sh
src/features/awesome-feature
|
+-- api         # exported API request declarations and api hooks related to a specific feature
|
+-- assets      # assets folder can contain all the static files for a specific feature
|
+-- components  # components scoped to a specific feature
|
+-- hooks       # hooks scoped to a specific feature
|
+-- routes      # route components for a specific feature pages
|
+-- stores      # state stores for a specific feature
|
+-- types       # typescript types for TS specific feature domain
|
+-- utils       # utility functions for a specific feature
|
+-- index.ts    # entry point for the feature, it should serve as the public API of the given feature and exports everything that should be used outside the feature
```

Everything from a feature should be exported from the `index.ts` file which behaves as the public API of the feature.

You should import stuff from other features only by using:

`import {AwesomeComponent} from "@/features/awesome-feature"`

and not

`import {AwesomeComponent} from "@/features/awesome-feature/components/AwesomeComponent`

## Yarn Upgrade

The `yarn` package installer needs to upgraded from v1 to v3.  v1 is no longer maintained.
Follow these steps after installation:

1. Run command on the project `yarn set version berry`
2. Then do, `yarn install` this will migrate the lock file to support yarn 3.

## Technologies Used

The following are the core libraries and framework used for creating and designing the web app.

## ReactJs

ReactJs will be used as a frontend UI library for creating the web app.

Github: [https://github.com/facebook/react](https://github.com/facebook/react)

Github Stars: 200K

## ViteJs

[Vite](https://vitejs.dev/) is a build tool that significantly improves the front-end development experience. You can use Vite to set up a development environment for frameworks like Vue and React, and even for a vanilla JavaScript app with a dev server and hot reloading in just three commands.

A better alternative to create-react-app.

Github Stars: 59.1K

## React Query

React Query is a library for easily handling server-side data in React applications. It allows developers to declaratively manage the loading, caching, and updating of data in their applications using hooks, making it easy to handle common use cases such as pagination, caching, and background updates. React Query also includes features for handling network and server errors, and for controlling the stale-while-revalidate caching strategy.

Site: [React Query](https://react-query-v3.tanstack.com/overview)

Github Stars: 32.4K

## Typescript

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

Typescript has become an industry standard for development with Javascript on

frontend and NodeJs on the backend.

Github Stars: 87.4K

Github: [https://github.com/microsoft/TypeScript/#readme](https://github.com/microsoft/TypeScript/#readme)

## React Router V6.6.2

React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

Github: [https://github.com/remix-run/react-router](https://github.com/remix-run/react-router)

Github Stars: 49.3K

## Yarn

Yarn is a package manager developed by Facebook which is an alternative to npm. Yarn is much faster when it comes to downloading and installing packages as compared to npm because npm downloads sequentially while yarn downloads in parallel.

Yarn is also considered safe and stable then npm.

Github: [https://github.com/yarnpkg/berry](https://github.com/yarnpkg/berry)
