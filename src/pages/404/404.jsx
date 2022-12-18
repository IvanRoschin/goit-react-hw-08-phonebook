import errorImage from './404.png';

import { ErrorContainer, ErrorImg, ErrorTitle, ErrorBtn } from './404.styled';

const NotFound = () => {
  return (
    <ErrorContainer>
      <ErrorImg src={errorImage} alt="Error 404" />
      <ErrorTitle>Error 404 - Page not found</ErrorTitle>
      <ErrorBtn href="/goit-react-hw-05-movies">Go to Home page</ErrorBtn>
    </ErrorContainer>
  );
};

export default NotFound;
