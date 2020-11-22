import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const showCurrentDate = () => {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();

    return `${day}/${month}/${year}`;
}

const Home = () => {
    return (
        <View style={styles.mainContent}>
            <Text style={styles.contentTitle}>Daily Tasks - {showCurrentDate()}</Text>
            <View style={styles.tasksList}>
                <View style={styles.taskCard}>
                    <Text style={styles.taskTitle}>Limpar a casa</Text>
                </View>
                <View style={styles.taskCard}>
                    <Text style={styles.taskTitle}>Ir no Mercado</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContent: {
        backgroundColor: "#121212",
        height: "100%",
        padding: 20
    },
    contentTitle: {
        color: "#e2e2e2",
        fontSize: 18,
        marginBottom: 10,
        fontWeight: "bold"
    },
    tasksList: {
        flex: 1,
        flexDirection: "row",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    taskCard: {
        width: "130px",
        height: "130px",
        margin: "10px",
        borderRadius: 10,
        backgroundColor: "#1f1f1f",
        padding: "20px"
    },
    taskTitle: {
        color: "#e2e2e2",
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default Home;
