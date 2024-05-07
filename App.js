import { SafeAreaView, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React, { StrictMode, useEffect, useMemo, useState } from 'react'
import Router from './Router'
import { enableScreens } from 'react-native-screens'
import { AppContext } from './src/constants/themeSelection/AppContext'
enableScreens()

const App = () => {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const appContext = useMemo(() => {
    return { isDarkTheme, setIsDarkTheme };
  });
  const system_default = useColorScheme()

  useEffect(() => {
    console.log("skjadfjl", system_default)
    setIsDarkTheme(system_default === 'light' ? false : true)
  }, [system_default])

  return (
    <AppContext.Provider value={appContext}>
      <Router />
    </AppContext.Provider>
  )
}

export default App

const styles = StyleSheet.create({})