import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { FONTS } from '../../constants'
import { useTheme } from '@react-navigation/native'

const FullSizedButton = ({ onPress, buttonTitle, containerStyle, titleStyle, isTouchable }) => {
    let TouchComponent = ''
    if (isTouchable) TouchComponent = TouchableOpacity; else TouchComponent = TouchableWithoutFeedback
    const { colors } = useTheme()
    return (
        <TouchComponent
            activeOpacity={0.8}
            onPress={onPress}>
            <View
                style={{
                    height: 50,
                    backgroundColor: colors.PRIMARY,
                    marginTop: 20,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    ...containerStyle
                }}>
                <Text
                    style={{
                        fontFamily: FONTS.MONTSERRAT_SEMI_BOLD,
                        color: colors.WHITE,
                        fontSize: 16,
                        ...titleStyle
                    }}>
                    {buttonTitle}
                </Text>
            </View>
        </TouchComponent>
    )
}

export default FullSizedButton

const styles = StyleSheet.create({})