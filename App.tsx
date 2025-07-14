import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ola Mundo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //container ocupa todo o espçao disponivel
        backgroundColor: 'fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
});