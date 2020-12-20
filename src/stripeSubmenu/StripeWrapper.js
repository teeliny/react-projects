import React from 'react';
import { AppProvider } from './context';

const StripeWrapper = () => {
  return (
    <AppProvider>
      <StripeWrapper />
    </AppProvider>
  )
}
export default StripeWrapper;