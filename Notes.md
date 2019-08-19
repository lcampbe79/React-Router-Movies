--[X] * Wrap your app with the router.

--[] * Inside your App file add two routes.
  --[] * one route for `/` that loads the `MovieList` component.
  --[] * one route that will take an `id` parameter after`/movies/` (ex: `/movies/2`, `/movies/3` where the id is dynamic). This route should load the `Movie` component.

--[] Make it so that the card in `MovieList` is a link, this should direct the user to the `/movies/{id of movie here}` URL, where `:id` is the id of the individual movie.

--[]When a user clicks on a movie card they should be taken to `/movies/{id of movie here}` to see the details for the selected movie.

--[] You will need to modify line 13 of `Movie.js` in order to accept the correct id for the movie selected.

--[] Add functionality so the `Home` button on the `SavedList` component navigates back to home.

--[] You should now be able to navigate back and forth between the individual movies and the home screen.