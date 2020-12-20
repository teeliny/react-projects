import React from 'react';
import Cocktails from './Cocktails'
import { AppProvider } from './context';

const CocktailsWrapper = () => {
  return (
    <AppProvider>
      <Cocktails />
    </AppProvider>
  )
}

export default CocktailsWrapper;
