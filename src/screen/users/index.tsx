import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./style";
import axios from "axios";

const APIURL = "https://jsonplaceholder.typicode.com/users";

function Users() {
    const [userList, setUserList] = useState([]);
    const [originalList, setOriginalList] = useState([]);

    useEffect(() => {
        axios.get(APIURL)
            .then((result: any) => {
                // console.log("RESULT====>", result.data)
                setUserList(result.data);
                setOriginalList(result.data);
            })
            .catch((err: any) => {
                console.log("ERRROR====>", err)
            })
    }, []);

    const handleSorting = () => {
        let sortedList = [...userList].sort((a: any, b: any) => a.name.length - b.name.length)
        setUserList(sortedList)
    }

    const handleSorting_NameAsscending = () => {
        let sortedList = [...userList].sort((a: any, b: any) => a.name.localeCompare(b.name))
        setUserList(sortedList)
    }

    const handleSorting_NameDecending = () => {
        let sortedList = [...userList].sort((a: any, b: any) => b.name.localeCompare(a.name))
        setUserList(sortedList)
    }

    const handleReset = () => {
        setUserList(originalList)
    }


    const renderUserList = ({ item, index }: { item: any, index: number }) => {
        return (
            <View style={{ flex: 1, marginTop: 20 }}>
                <Text style={styles.userName}>{item.name} - {item.name.length}</Text>
            </View>
        )
    }

    const renderButton = (title: any, onPress: any) => {
        return (
            <TouchableOpacity style={styles.sortBtn} onPress={onPress}>
                <Text style={styles.sortText}>{title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>User list:</Text>

            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                {renderButton("Sort By Name's length", handleSorting)}
                {renderButton("Sort By Name", handleSorting_NameAsscending)}
                {renderButton("Sort By Name Decending", handleSorting_NameDecending)}
                {renderButton("Reset", handleReset)}
            </View>


            <FlatList
                data={userList}
                renderItem={renderUserList}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default Users;