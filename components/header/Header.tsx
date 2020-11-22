import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    x
                </Text>
                <Text style={styles.headerText}>
                    To Do List
                </Text>
                <Text style={styles.headerText}>
                    x
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '50px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#1f1f1f",
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#e2e2e2',
        letterSpacing: 1,
        margin: 0
    }
});
export default Header
