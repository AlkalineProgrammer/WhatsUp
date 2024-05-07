import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { commonStyles } from '../../constants/commonStyles';
import { Checkbox } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';


const CheckBox = props => {
    const [checked, setChecked] = useState(false);
    const { colors } = useTheme()
    const onSetData = (title, val) => {
        props.getInputData(title, val)
    }


    return (
        //main container
        <View style={{ flexDirection: 'row', width: props.width ? props.width : "33.33%" }}>
            <Checkbox.Android
                label="negotiable"
                uncheckedColor={colors.PRIMARY}
                color={colors.PRIMARY}
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(!checked);
                    onSetData(props.title, !checked)
                }} />
            <Text style={[commonStyles.text15, { margin: 8 }]}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#e8f5fd'
    },
    textView: {
        borderColor: '#b3b3b3',
        borderWidth: 1,
        borderRadius: 50,
        width: '100%',
        paddingLeft: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    titleText: {
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 10,
        fontFamily: "Montserrat-Regular"
    },
    titleText2: {
        marginLeft: 18,
        marginTop: 0,
        marginBottom: 10,
        fontFamily: "Montserrat-Regular",
        fontSize: 12
    }
});

export default CheckBox;