import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {

    return (
    <View style={[styles.item, styles.shadowProp]}>
        <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
    <View style={styles.circular}></View>
    </View>

    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#9F9F9F',
        padding: 15,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width:24,
        height:24,
        backgroundColor: '#012C00',
        opacity: 0.4,
        borderRadius: 10,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height:12,
        borderColor: '#16521C',
        borderWidth: 2,
        borderRadius: 5,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
});
export default Task;
