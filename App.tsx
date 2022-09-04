import React, {type PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import Homepage from './src/screens/Homepage';
import OnboardingScreen1 from './src/screens/onboarding/OnboardingScreen1';
import OnboardingScreen2 from './src/screens/onboarding/OnboardingScreen2';
import OnboardingScreen3 from './src/screens/onboarding/OnboardingScreen3';
import Profile from './src/screens/Profile';

const AppStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Group>
          <AppStack.Screen name="Homepage" component={Homepage} />
          <AppStack.Screen
            name="OnboardingScreen 1"
            component={OnboardingScreen1}
          />
          <AppStack.Screen
            name="OnboardingScreen 2"
            component={OnboardingScreen2}
          />
          <AppStack.Screen
            name="OnboardingScreen 3"
            component={OnboardingScreen3}
          />
        </AppStack.Group>
        <Tab.Group>
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Group>
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
