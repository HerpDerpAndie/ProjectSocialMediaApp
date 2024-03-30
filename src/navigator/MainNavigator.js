import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "../screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { Icon } from "react-native-elements";
import ProfileScreen from "../screens/ProfileScreen";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Start = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            color: focused ? 'purple' : 'grey',
                            fontSize: 12
                        }} >
                            Home
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name="home"
                            type="ionicon"
                            color={focused ? 'purple' : 'grey'}
                            size={24}
                        />
                    ),
                    tabBarLabelPosition: "below-icon",
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'lavender'
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            color: focused ? 'purple' : 'grey',
                            fontSize: 12
                        }} >
                            Profile
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name="person"
                            type="ionicon"
                            color={focused ? 'purple' : 'grey'}
                            size={24}
                        />
                    ),
                    tabBarLabelPosition: "below-icon",
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'lavender'
                    }
                }}
            />
        </Tab.Navigator>
    )
}

const MainNavigator = () => {
    const isLogin = useSelector(store => store.profileReducer.isLogin)
    return (
        <NavigationContainer>
        {
            isLogin ?
            <Stack.Navigator initialRouteName="Start">
                <Stack.Screen 
                    name="Start"
                    component={Start}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
            :
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{
                        headerTitleAlign: 'center',
                        headerLeft: null
                    }}
                />
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                />
                {/* <Stack.Screen
                    name="Start"
                    component={Start}
                    options={{
                        headerShown: false
                    }}
                /> */}
            </Stack.Navigator>
        }
        </NavigationContainer>
    )
}


export default MainNavigator