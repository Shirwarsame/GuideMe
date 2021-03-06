import { createStackNavigator } from "react-navigation-stack";
import Settings from "../screens/Menu/Settings";

const screens = {
    Settings: {
        screen: Settings,
        navigationOptions: {
            headerShown: false,
        }
    }
};

const settingsStack = createStackNavigator(screens);

export default settingsStack; 