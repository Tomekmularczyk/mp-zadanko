import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FavouritesPage } from "./FavouritesPage";
import { MainPage } from "./MainPage";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/zapisane">
            <FavouritesPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
