import { BackHandler, Image, SafeAreaView, StyleSheet, Switch, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import IMAGES from '../assets/images'
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../constants/themeSelection/AppContext'
import { useNavigation, useTheme } from '@react-navigation/native'
import { Button } from 'react-native-paper'
import { singleRemoveAsync } from '../utils/asyncStorage'

const ChatHeads = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(AppContext);
  const { colors } = useTheme();
  const navigation = useNavigation()

  useEffect(() => {
    const backAction = () => {
      navigation.goBack()
      return true;
    }

    const backHandler = BackHandler.addEventListener(
      'hardWareBackPress',
      backAction
    )

    return () => backHandler.remove()
  }, [])

  const logout = () => {
    singleRemoveAsync('langauge').then(() => {
      navigation.navigate('GetStarted')
    })
  }

  return (
    <>
      <Button onPress={logout}>Logout</Button>
    </>
  )
}

export default ChatHeads

const styles = StyleSheet.create({})