import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styles from "./style";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Routes } from "../../navigation/route";

function Home() {
    const navigation = useNavigation<NavigationProp<any, any>>();

    const profileNavigate = () => {
        navigation.navigate(Routes.Profile)
    }

    const userNavigate = () => {
        navigation.navigate(Routes.Users);
    }

    return (
        <View style={styles.container}>
            <Text>Welcome to Dashboard...</Text>
            <TouchableOpacity style={styles.btn} onPress={profileNavigate}>
                <Text style={styles.btnText}>{"Go to Profile"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={userNavigate}>
                <Text style={styles.btnText}>{"Go to Users"}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;