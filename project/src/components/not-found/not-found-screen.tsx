import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <h1>404 <br/>
        <small>Not Found</small>
      </h1>
      <Link to='/'>
        Пошли на главную
      </Link>
    </>
  );
}

export default NotFoundScreen;
