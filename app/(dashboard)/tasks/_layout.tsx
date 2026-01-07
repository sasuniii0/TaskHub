import { Stack } from "expo-router"
import Toast from "react-native-toast-message"

const TaskLayout = () =>{
    return(
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index"/>
            <Stack.Screen name="form"/>
            <Stack.Screen name="[id]"/>
        </Stack>
    )
}

export default TaskLayout