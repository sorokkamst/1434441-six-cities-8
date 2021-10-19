import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../main-page/main-page';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFoundScreen from '../not-found/not-found-screen';
import PrivateRoute from '../private-route/private-route';

type MainPageProps = {
  placesCount: number;
  placesCards: number[];
}

function App({placesCount, placesCards}: MainPageProps): JSX.Element
{
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage placesCount = {placesCount} placesCards = {placesCards} />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <Room />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
