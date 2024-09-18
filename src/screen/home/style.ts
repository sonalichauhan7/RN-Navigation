import { StyleSheet } from "react-native";
import { Colors } from "../../theme/color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white
    },
    btn: {
        backgroundColor: "blue",
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 5
    },
    btnText: {
        color: Colors.white,
        fontSize: 12
    }
})

export default styles;