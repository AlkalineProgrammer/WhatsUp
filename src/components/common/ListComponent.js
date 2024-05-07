import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import  commonStyles from '../../constants/commonStyles'
import { useTheme } from '@react-navigation/native'

const ListComponent = ({ allDataLoaded = true, type }) => {
    const { colors } = useTheme()
    const commonStyles1 = commonStyles()
    return (
        <View>
            {type === 'header' ?
                <Text style={[commonStyles1.text15, styles.footerList]}>{headerMsg}</Text>
                :
                <View style={styles.footerText}>
                    {allDataLoaded ? <Text style={[commonStyles1.text15, styles.footerList]}>You have reached end of the list.</Text> : <ActivityIndicator animating={true} color={colors.PRIMARY} />}
                </View>}
        </View>
    )
}

export default ListComponent

const styles = StyleSheet.create({
    footerText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    footerList: {
        margin: 10,
        textAlign: 'center',
        fontWeight: '600'
    }
})