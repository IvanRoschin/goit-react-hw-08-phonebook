import { RotatingLines } from 'react-loader-spinner';
import { Spinner, LoadingText } from './Loader.styled';
export default function ImagesPendungView() {
  return (
    <Spinner role="alert">
      <RotatingLines
        strokeColor="#3f51b5"
        strokeWidth="3"
        animationDuration="0.75"
        width="14"
        visible={true}
      />
      <LoadingText>Loading...</LoadingText>
    </Spinner>
  );
}
