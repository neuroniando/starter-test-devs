import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {RoutesNames} from "../enums/routes/routesNames";
import HomeScreen from "../module/home/HomeScreen";

const Stack = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={RoutesNames.Home}
                component={HomeScreen}
                options={{ title: RoutesNames.Home }}
            />
        </Stack.Navigator>
    );
};

export default React.memo(Routes);
