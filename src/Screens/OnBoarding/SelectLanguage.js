import { FlatList, ImageBackground, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import { languageList } from '../../StaticData/languageList'
import commonStyles from '../../constants/commonStyles'
import CheckBox from '../../components/common/CheckBox'
import { IconButton, RadioButton } from 'react-native-paper'
import IMAGES from '../../assets/images'
import ListComponent from '../../components/common/ListComponent'
import { singleSetAsync } from '../../utils/asyncStorage'
import { useTheme } from '@react-navigation/native'

const SelectLanguage = ({ navigation }) => {
    const { colors } = useTheme();
    const [selectedLangauge, setSelectedLanguage] = useState('English')
    const commonStylesheet = commonStyles()

    useEffect(() => {
        const backAction = () => {
            navigation.goBack()
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

    const renderHeader = () => (
        <ImageBackground source={IMAGES.INTROIMAGE} style={{ width: '100%', height: 300, marginTop: 30, justifyContent: 'flex-end', alignSelf: 'center' }}>
            <Text style={[styles.textBox, { color: colors.text,backgroundColor: colors.background, padding: 15 }]}>Welcome to Whats Up{'\n'}{'\n'}
                <Text style={[commonStylesheet.text15, { fontWeight: '200' }]} >Choose your language to get started.</Text></Text>
        </ImageBackground>
    )

    const onLanguageSelect = () => {
        singleSetAsync('language', selectedLangauge).then(() => {
            console.log("Language set", selectedLangauge)
            navigation.navigate('Home')
        })
            .catch((err) => {
                throw new Error(err)
            })
    }


    return (
        <SafeAreaView style={commonStylesheet.Screen}>
            {renderHeader()}
            <RadioButton.Group
                onValueChange={newValue => setSelectedLanguage(newValue)} value={selectedLangauge}>
                <View style={[commonStylesheet.flatListStyle, { height: "78%" }]}>
                    <FlatList
                        data={languageList}
                        keyExtractor={(item, index) => item.id}
                        // stickyHeaderIndices={[0]}
                        // ListHeaderComponent={renderHeader}
                        ListFooterComponent={<ListComponent type={'footer'} />}
                        renderItem={({ item }) => (
                            <RadioButton.Item style={{ flexDirection: 'row-reverse', }} color={colors.PRIMARY} labelStyle={{color: colors.text}} label={item.label} value={item.value} />
                        )} />
                </View>
            </RadioButton.Group>
            {/* </ScrollView> */}
            <IconButton
                icon={'arrow-right'}
                size={40}
                iconColor='white'
                onPress={onLanguageSelect}
                style={{ margin: 0, backgroundColor: colors.PRIMARY, position: 'absolute', bottom: 15, right: 20, borderRadius: 15 }}
            />
        </SafeAreaView >
    )
}

export default SelectLanguage

const styles = StyleSheet.create({
    textBox: {
        fontSize: 20,
        // lineHeight: 100,
        height: 100,
        width: '100%',
        fontWeight: 'bold',
        textAlign: 'center',
        opacity: 1
    }
})