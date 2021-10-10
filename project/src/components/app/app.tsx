import MainPage from '../main-page/main-page';

type MainPageProps = {
  placesCount: number;
  placesCards: number[];
}

function App({placesCount, placesCards}: MainPageProps): JSX.Element {
  return <MainPage placesCount = {placesCount} placesCards = {placesCards}/>;
}

export default App;
