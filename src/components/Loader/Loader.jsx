import { Dna } from 'react-loader-spinner';

import { LoaderOverlay } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderOverlay>
      <Dna
        visible={true}
        height="180"
        width="180"
        ariaLabel="dna-loading"
        wrapperStyle={{ position: 'absolute', top: '30%' }}
        wrapperClass="dna-wrapper"
        colors={['#c47436', '#733c14', '#f1e46d']}
      />
    </LoaderOverlay>
  );
};
