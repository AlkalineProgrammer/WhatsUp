import { Dimensions, Platform, PlatformColor, StyleSheet, } from 'react-native';
import React, { useMemo } from 'react';
import FONTS from './fonts';
import useGlobalStyles from './themeSelection/useThemeHook';
import { useTheme } from '@react-navigation/native';


/**
 * mr - margin right
 * ml - margin left
 * mt - margin top
 * p  - padding
 * px - padding horizontal
 **/
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
let font = FONTS.MONTSERRAT
let fontBold = FONTS.MONTSERRAT_BOLD
let fontMedium = FONTS.MONTSERRAT_MEDIUM
let fontSemiBold = FONTS.MONTSERRAT_SEMI_BOLD
const commonStyles1 = (props) => StyleSheet.create({
    textFont: {
        fontFamily: font,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    column: {
        flexDirection: 'column',
    },
    mr12: {
        marginRight: 12,
    },
    mt12: {
        marginTop: 12,
    },
    mt10: {
        marginTop: 10,
    },
    mr4: {
        marginRight: 4,
    },
    mb12: {
        marginBottom: 12,
    },
    upperCase: {
        textTransform: 'uppercase',
    },
    borderRound: {
        borderWidth: 1,
        borderRadius: 100,
    },
    whiteBackgroundContainer: {
        backgroundColor: props.colors.WHITE,
        flex: 1,
    },
    bold: {
        fontWeight: 'bold',
    },
    fill: {
        flex: 1,
    },
    capitalize: {
        textTransform: 'capitalize',
    },
    positiveText: {
        color: props.colors.GREEN,
        fontFamily: font,
    },
    negativeText: {
        color: props.colors.RED,
        fontFamily: font,
    },
    centerAlignedText: {
        textAlign: 'center',
    },
    centerAligned: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    highlightedInfoText: {
        fontSize: 12,
        backgroundColor: props.colors.PRIMARY,
        padding: 8,
        borderRadius: 2,
    },
    // use CustomCard when background is non-white else use this style
    card: {
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 2,
        borderLeftWidth: 1,
        borderRadius: 5,
        padding: 12,
        backgroundColor: props.colors.WHITE,
    },
    underline: {
        textDecorationLine: 'underline',
    },
    horizontalScrollView: {
        marginVertical: 10,
        paddingHorizontal: 10,
    },

    marginHorizontal: {
        marginHorizontal: 10,
    },
    marginHorizontal15: {
        marginHorizontal: 15,
        marginTop: 10,
    },
    marginHorizontal20: {
        marginHorizontal: 20,
    },
    rightAligned: {
        justifyContent: 'flex-end',
    },

    inputText: {
        borderColor: '#b3b3b3',
        borderWidth: 1,
        borderRadius: 50,
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignSelf: 'center',
        height: 50,
    },
    inputArea: {
        borderColor: '#b3b3b3',
        borderWidth: 1,
        borderRadius: 15,
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignSelf: 'center',
        height: 150,
    },
    titleStyle: {
        fontSize: 15,
        fontFamily: fontMedium,
        fontWeight: '600',
        marginHorizontal: 15,
    },

    titleView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    betweenTwoView: {
        marginTop: 10,
        marginBottom: 10,
    },

    betweenTwoViewHalf: {
        marginTop: 5,
        marginBottom: 5,
    },

    cardWidth75_mh: {
        width: windowWidth / 1 - 25,
        marginHorizontal: 5,
    },
    cardWidth75: {
        width: windowWidth / 1 - 25,
    },
    cardWidth30: {
        width: windowWidth / 2 - 20,
    },


    imageIcon50: {
        height: 50,
        width: 50,
        borderRadius: 100,
    },

    imageIcon50: {
        height: 50,
        width: 50,
        borderRadius: 100,
    },

    imageIcon100: {
        height: 100,
        width: 100,
        borderRadius: 100,
    },

    image100: {
        height: 100,
        width: 100,
    },
    imageIcon30: {
        height: 30,
        width: 30,
    },

    iconMed: {
        height: 35,
        width: 35,
    },

    icon20: {
        height: 20,
        width: 20,
    },

    flatListStyle: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },

    Screen: {
        flex: 1,
        backgroundColor: props.colors.background,
    },
    text12: {
        color: props.colors.text,
        fontSize: 12,
        fontFamily: font,
    },
    text12White: {
        color: props.colors.WHITE,
        fontSize: 12,
        fontFamily: font,
    },
    text14WhiteBold: {
        color: props.colors.WHITE,
        fontSize: 14,
        fontFamily: font,
        fontWeight: 'bold',
    },
    text14BlackBold: {
        color: props.colors.BLACK,
        fontSize: 14,
        fontFamily: font,
        fontWeight: 'bold',
    },
    text12Gray: {
        color: props.colors.GREY,
        fontSize: 12,
        fontFamily: font,
    },
    text12Blue: {
        color: props.colors.BLUE,
        fontSize: 12,
        fontFamily: font,
    },
    text12Red: {
        color: props.colors.RED,
        fontSize: 12,
        fontFamily: font,
    },
    text10: {
        color: props.colors.text,
        fontSize: 10,
        fontFamily: font,
    },
    text10White: {
        color: props.colors.WHITE,
        fontSize: 10,
        fontFamily: font,
    },
    text10Gray: {
        color: props.colors.GREY,
        fontSize: 10,
        fontFamily: font,
    },
    text10Blue: {
        color: props.colors.BLUE,
        fontSize: 10,
        fontFamily: font,
    },
    text10Red: {
        color: props.colors.RED,
        fontSize: 10,
        fontFamily: font,
    },
    text15: {
        color: props.colors.text,
        fontSize: 15,
        fontFamily: font,
    },
    text15White: {
        color: props.colors.WHITE,
        fontSize: 15,
        fontFamily: font,
    },
    text15Gray: {
        color: props.colors.GREY,
        fontSize: 15,
        fontFamily: font,
    },
    text15Blue: {
        color: props.colors.BLUE,
        fontSize: 15,
        fontFamily: font,
    },
    text15Red: {
        color: props.colors.RED,
        fontSize: 15,
        fontFamily: font,
    },
    text18: {
        color: props.colors.text,
        fontSize: 18,
        fontFamily: font,
    },
    text18Bold: {
        color: props.colors.text,
        fontSize: 18,
        fontFamily: font,
        fontWeight: 'bold',
    },
    text25: {
        color: props.colors.text,
        fontSize: 25,
        fontFamily: font,
    },

    flatListStyle: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    addText: {
        color: props.colors.BLUE,
        fontWeight: 'bold',
        marginRight: 15,
        fontFamily: font,
        textAlign: 'center'
    },
    textTitle: {
        fontFamily: font,
        fontSize: 18,
        textTransform: 'uppercase',
        color: props.colors.text,
        fontWeight: '800',
    },
});


function commonStyles() {
    const { colors } = useTheme();

    // We only want to recompute the stylesheet on changes in color.
    const styles = useMemo(() => commonStyles1({ colors }), [colors]);
    return styles;
}

export default commonStyles;

export function elevationShadowStyle(elevation) {
    return {
        elevation,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0.5 * elevation },
        shadowOpacity: 0.5,
        shadowRadius: 0.8 * elevation,
        borderWidth: 0.1,
    };
}
