## RecipeApp

* In this project, a Recipe Application was created in the React environment.
* [EDAMAM](https://www.edamam.com/) Recipe Search API was used in this application.
* You can access the live version of this project from the following link. You can login without leaving the username and password fields blank.

  https://react-recipeapp-kerimmstfdemir.netlify.app/

## Project Skeleton

```
Recipe-App (main folder)
|
├── README.md 
├── node_modules
├── LICENSE
├── .gitignore     
├── public
│     └── index.html
├── src
|    ├── assets
|    |     └── [images]
│    ├── components
│    │     ├── header
│    │     │     ├── Header.jsx
│    │     │     ├── Header.styled.jsx
│    │     │     └── SearchForm.jsx
│    │     └── navbar
│    │           ├── Navbar.jsx
│    │           ├── Navbar.styled.jsx
|    |           └── navbar.css
|    ├── context
|    |     └── context.js
│    ├── pages
│    │     ├── about
│    │     │     ├── About.jsx
│    │     │     ├── About.styled.jsx
|    |     |     └── about.css
│    │     ├── details
│    │     │     ├── Details.jsx
│    │     │     └── Details.styled.jsx
│    │     ├── login
│    │     │     ├── Login.jsx
│    │     │     └── Login.styled.jsx
│    │     └── home
│    │           ├── Home.jsx
│    │           ├── Home.styled.jsx
│    │           └── RecipeCard.jsx
│    ├── router
│    │       ├── AppRouter.jsx
│    │       └── PrivateRouter.jsx
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
├── .env
└── yarn.lock
```

## DEMO

![Video_221210162941](https://user-images.githubusercontent.com/56498001/206858292-e72694ee-3316-48da-9d62-3660e01776a6.gif)

## API Reference

You can get API KEY and API ID by signup to `https://developer.edamam.com/edamam-docs-recipe-api`

* #### Get food items

```
  GET https://api.edamam.com/search?q=${QUERY}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `QUERY`   | `string` | **Required**. In app, it is entered into the search food field. |
| `APP_ID`  | `string` | **Required**. Your API ID.  |
| `APP_KEY` | `string` | **Required**. Your API KEY.  |
| `meal`    | `string` | **Required**. Specifies meal type.  |
