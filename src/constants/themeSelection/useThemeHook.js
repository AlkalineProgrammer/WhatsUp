import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

function useGlobalStyles() {
    const { colors } = useTheme();

    // We only want to recompute the stylesheet on changes in color.
    const styles = React.useMemo(() => colors, [colors]);

    return styles;
}

export default useGlobalStyles;

const styles = StyleSheet.create({})