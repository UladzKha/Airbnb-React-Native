import 'react-native-gesture-handler';
import React from 'react';
import Router from './src/navigation/Router';
import {withAuthenticator} from 'aws-amplify-react-native';

const App = () => {
  return (
    <>
      <Router />
    </>
  );
};

export default withAuthenticator(App);
