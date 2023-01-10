import React from "react";
import { Text, TextInput, View, Button } from "react-native";

export default function ResultImc(){
    return(
        <View>
            <Text>{props.resultImc}</Text>
            <Text>{props.messageResultImc}</Text>

        </View>
    )
}