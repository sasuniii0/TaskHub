import { View ,Text } from "react-native"
import "../global.css"
import { Redirect } from "expo-router";

const Index = () => {
    return(
        <Redirect href={"/login"}></Redirect>
    )
}

export default Index;