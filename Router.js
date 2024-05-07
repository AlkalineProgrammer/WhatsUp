import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home'
import { NavigationContainer } from '@react-navigation/native';
import DarkTheme from './src/constants/themeSelection/themeColors/DarkTheme';
import LightTheme from './src/constants/themeSelection/themeColors/LightTheme';
import { AppContext } from './src/constants/themeSelection/AppContext';
import GetStarted from './src/Screens/OnBoarding/GetStarted';
import SelectLanguage from './src/Screens/OnBoarding/SelectLanguage';
import { singleGetAsync } from './src/utils/asyncStorage';

const Stack = createNativeStackNavigator();

const Router = () => {
    const { isDarkTheme, setIsDarkTheme } = useContext(AppContext)

    const system_default = useColorScheme()
    useEffect(() => {
        console.log("skjadfjl", system_default)
        setIsDarkTheme(system_default === 'light' ? false : true)
    }, [system_default])

    const lang = singleGetAsync('language')

    return (
        <NavigationContainer theme={isDarkTheme ? DarkTheme : LightTheme} >
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={typeof (lang) !== 'object' ? "Home" : "GetStarted"}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="GetStarted" component={GetStarted} />
                <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router

const styles = StyleSheet.create({

})