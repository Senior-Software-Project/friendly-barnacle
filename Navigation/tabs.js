import React from 'react'
import {
    view,
    Image,
    TouchableOpacity
} from 'react-native';
import {createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs'

import { HomeScreen } from '../views';
import { images } from '../components';

const Tab = createBottomTabNavigator();

const Tabs = () => {

    return(
        <Tab.Navigator>
            <Tab.Screen 
                name = "Alarm"
                component = {HomeScreen}
                options = {{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source = {images.alarm}
                            resizeMode = "contain"
                            style = {{
                                width : 25,
                                height : 25,
                                
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;