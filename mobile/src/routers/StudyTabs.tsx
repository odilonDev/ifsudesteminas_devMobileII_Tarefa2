import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CoachList from '../pages/CoachList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
    return(
        <Navigator
        screenOptions={{
            tabBarIconStyle:{
                flex: 0,
                width: 20,
                height: 20
            },
            tabBarStyle: {
                elevation: 0,
                shadowOpacity: 0,
                height: 64,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'  
            },
            tabBarLabelStyle:{
                fontFamily: 'Archivo_700Bold',
                fontSize: 13,
                marginLeft: 16,
            },
            tabBarInactiveBackgroundColor: '#fafafc',
            tabBarActiveBackgroundColor: '#ebebf5',
            tabBarInactiveTintColor: '#c1bcbc',
            tabBarActiveTintColor: '#32264d',
          }}>
            <Screen 
            name="CoachList" 
            component={CoachList} 
            options={{
              tabBarLabel: 'Coaches',
              tabBarIcon: ({ color, size, focused }) => {
                return (
                  <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color}/>
                );
              }
            }}
            />
            <Screen 
            name="Favorites" 
            component={Favorites} 
            options={{
              tabBarLabel: 'Favoritos',
              tabBarIcon: ({ color, size, focused }) => {
                return (
                  <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color}/>
                );
              }
            }}
            />
        </Navigator>
    );
}

export default StudyTabs;