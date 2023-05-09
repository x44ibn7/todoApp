import React from "react";
import { View, Text, StyleSheet, } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Task = (props) => {

    return (
       

         <LinearGradient colors={['rgba(0,0,100,0.5)', 'transparent']} style={[styles.item, styles.shadowProp]}>
        <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
        </LinearGradient>




    )
}

const colorText = "#FFFFFF";
const colorBorder = "#939393";
const colorItems = "#777777";
const styles = StyleSheet.create({
    item: {
        backgroundColor: `${colorItems}`,
        padding: 15,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
        borderColor: `${colorBorder}`,
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
        backgroundColor: '#FFFFFF',
        borderColor: `${colorBorder}`,
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
        color: `${colorText}`,
    },
    shadowProp: {
        shadowColor: '#000000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 1,
        shadowRadius: 10,
    },
});
export default Task;
