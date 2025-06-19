import { NavigationProp } from '@react-navigation/native';
import {RoutesNames} from "../../enums/routes/routesNames";

export type NavigationScreens = {
    [RoutesNames.Home]: undefined;
};

export type AppNavigationProp = NavigationProp<NavigationScreens>;