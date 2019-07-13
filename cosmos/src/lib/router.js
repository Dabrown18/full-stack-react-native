import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

// Home tab screen
import HomeScreen from '../containers/HomeView';

// Profile tab screen
import ProfileScreen from '../containers/ProfileView';

// Home tab stack
const HomeTab = createStackNavigator({
  Home: {
    screen: HomeScreen,
    headerMode: 'screen'
  }
});

// Profile tab stack
const ProfileTab = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    headerMode: 'screen'
  }
});

const DashboardTabRoutes = createBottomTabNavigator({
  HomeTab: {
    screen: HomeTab
  },
  ProfileTab: {
    screen: ProfileTab
  }
});

export const HomeContainer = createAppContainer(DashboardTabRoutes);
