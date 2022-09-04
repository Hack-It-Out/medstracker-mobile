import React, {type PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './src/screens/Homepage';
import OnboardingScreen1 from './src/screens/onboarding/OnboardingScreen1';
import OnboardingScreen2 from './src/screens/onboarding/OnboardingScreen2';
import OnboardingScreen3 from './src/screens/onboarding/OnboardingScreen3';

const AppStack = createNativeStackNavigator()

const App = () => {
  return (
   <NavigationContainer>
    <AppStack.Navigator>
      <AppStack.Screen name="Homepage" component={Homepage} />
      <AppStack.Screen name="OnboardingScreen 1" component={OnboardingScreen1} />
      <AppStack.Screen name="OnboardingScreen 2" component={OnboardingScreen2} />
      <AppStack.Screen name="OnboardingScreen 3" component={OnboardingScreen3} />
    </AppStack.Navigator>
   </NavigationContainer>
  );
};

export default App;
