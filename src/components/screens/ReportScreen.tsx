import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ReportScree() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
    },
});