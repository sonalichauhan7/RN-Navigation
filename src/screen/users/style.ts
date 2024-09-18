import { StyleSheet } from "react-native";
import { Colors } from "../../theme/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 20,
    },
    headerTitle: {
        color: "black",
        fontSize: 18,
        marginTop: 10,
        fontWeight: "bold"
    },
    userName: {
        fontSize: 15,
        color: "black"
    },
    sortText: {
        fontSize: 15,
        color: "white",
        textAlign: "center"
    },
    sortBtn: {
        backgroundColor: "green",
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        justifyContent: "center",
        width: "40%"
    }
})

export default styles;