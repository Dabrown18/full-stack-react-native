import React from 'react';
import {Dimensions, TouchableOpacity, Text} from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from 'react-navigation';
import MenuButton from '../components/MenuButton';
import MenuDrawer from '../components/MenuDrawer';

// Home tab screens
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const WIDTH = Dimensions.get('window').width;

// Profile tab screens
import ProfileScreen from '../screens/ProfileScreen';
import type {ViewabilityConfig} from "react-native/Libraries/Lists/ViewabilityHelper";

// HomeDrawerNavigation
const DrawerConfig = {
  drawerWidth: WIDTH * .83,
  contentComponent: ({navigation}) => (
    <MenuDrawer link={navigation}/>
  )
};

const HomeDrawerNavigation = createDrawerNavigator({
  HomeScreen: {
    screen: HomeScreen,
    drawerLabel: 'Home'
  },
  SettingsScreen: {
    screen: SettingsScreen,
    drawerLabel: 'Settings'
  }
}, DrawerConfig);

// HomeTab stacks for screen navigation
const HomeTab = createStackNavigator({
  HomeScreen: {
    screen: HomeDrawerNavigation,
    headerMode: 'screen'
  },
  Details: {
    screen: DetailsScreen,
    headerMode: 'screen',
    navigationOptions: ({navigation}) => {

      return {
        params: navigation.state.params,
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={{ fontSize: 16, marginLeft: 15}}>Back</Text>
          </TouchableOpacity>
        )
      }
    }
  }
}, {
  defaultNavigationOptions: ({navigation}) => {
    return {
      headerStyle: {
        backgroundColor: '#FFFFFF'
      },
      headerLeft: <MenuButton toggleDrawer={() => navigation.toggleDrawer()}/>
    }
  }
});

// ProfileTab stacks for screen
const ProfileTab = createStackNavigator({
  ProfileScreen: {
    screen: ProfileScreen,
    headerMode: 'screen'
  }
});

// Bottom tab Navigation
const DashboardTabRoutes = createBottomTabNavigator({
  HomeTab: {
    screen: HomeTab
  },
  ProfileTab: {
    screen: ProfileTab
  }
}, {
  initialRouteName: "HomeTab",
  tabBarOptions: {
    showIcon: false,
    showLabel: true,
    style: {
      height: 20,
      paddingVertical: 5,
      backgroundColor: '#FFFFFF'
    }
  }
});

// Export routing
export const HomeContainer = createAppContainer(DashboardTabRoutes);