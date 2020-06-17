import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import RandomScreen from './src/screens/RandomScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';

// Stack Navigator() shows what content goes on the screen at any given time.
const navigator = createStackNavigator({
    Home: HomeScreen,
    RandomScreen: RandomScreen,
    List: ListScreen,
    ImageView: ImageScreen
}, {
    // initalRouteName is the first component to display. It will also throw into the first argument
    // of all screens the 'props' so it can be used as the first argument.
    initialRouteName: "Home",
    defaultNavigationOptions: {
        title: "App"
    }
});

export default createAppContainer(navigator);