import React, { useContext } from 'react';

import { NavigationContainer, StackActions } from '@react-navigation/native';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import styles from 'react-native-nav/styles';
import AuthContextProvider, { AuthContext } from './src/utils/auth-context';
import TabNavigator from './src/navigation/TabNavigator';

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AppStack />}
    </NavigationContainer>
  );
}

export default function App() {

  const authCtx = useContext(AuthContext);
  
  return (
      // <NavigationContainer>
      //   {/* <AuthStack /> */}
        
      //   <AuthContextProvider>
      //     <Navigation />
      //   </AuthContextProvider>

      // </NavigationContainer>
      <>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </>
      
  );
}