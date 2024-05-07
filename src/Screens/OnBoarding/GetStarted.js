import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedbackComponent, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { languageList } from '../../StaticData/languageList';
import IMAGES from '../../assets/images';
import { FONTS } from '../../constants';
import FullSizedButton from '../../components/common/FullSizedButton';
import commonStyles from '../../constants/commonStyles';
import { useTheme } from '@react-navigation/native';

const GetStarted = ({ navigation }) => {
    const {colors} = useTheme();
    const commonStyles1 = commonStyles()
    return (
        <SafeAreaView style={[commonStyles1.Screen, { marginHorizontal: 30 }]}>
            {/* <ScrollView> */}
            <Image
                source={IMAGES.INTROIMAGE}
                style={{ height: 350, width: "100%", margin: 10 }}
            />
            <Text
                style={{
                    marginTop: 80,
                    textAlign: 'center',
                    fontFamily: FONTS.MONTSERRAT_BOLD,
                    fontSize: 24,
                    color: colors.text,
                }}>
                Welcome To WhatsUp
            </Text>
            <Text
                style={{
                    textAlign: 'center',
                    fontFamily: FONTS.MONTSERRAT,
                    fontSize: 12,
                    marginTop: 20,
                    marginHorizontal: 70,
                    color: colors.text,
                }}>
                Read our
                <Text style={{ color: colors.primary }}> Privacy Policy. </Text>Click "Get Started" to accept
                <Text style={{ color: colors.primary }}> Terms of Services.</Text>
            </Text>
            <FullSizedButton
                isTouchable={true}
                containerStyle={{ marginTop: '50%' }}
                buttonTitle={'Get Started'}
                onPress={() => navigation.navigate("SelectLanguage")}
            />
            {/* </ScrollView> */}
        </SafeAreaView>

    );
}

export default GetStarted

const styles = StyleSheet.create({})