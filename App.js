import {createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';
import RegisterScreen from './RegisterScreen';
import ProjectScreen from './ProjectScreen';
import DeveloperScreen from './DeveloperScreen';
import DetailsScreen from './DetailsScreen';
import MiningScreen from './MiningScreen';
import ForgotScreen from './ForgotScreen';
import EtpScreen from './EtpScreen';
import {createStackNavigator} from 'react-navigation-stack';
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    
    
    
    Profile: ProfileScreen,
        Register: RegisterScreen,
    Login: LoginScreen,
    Project: ProjectScreen,
    Developer: DeveloperScreen,
       Mining: MiningScreen,
    Forgot: ForgotScreen,
    ETP: EtpScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const App = createAppContainer(AppNavigator);

export default App;
