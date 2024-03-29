import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './../App';
import Dishes from './dishes';
import Dish from './dish';
import Countries from './countries';
import NotFound from './notFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/platillos" component={Dishes} />
      <Route path="/platillo/:name" component={Dish} />
      <Route path="/paises" component={Countries} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
