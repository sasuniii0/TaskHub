import { Stack } from "expo-router"

const TaskLayout = () =>{
    return(
        <Stack>
            <Stack.Screen name="index"/>
            <Stack.Screen name="form"/>
            <Stack.Screen name="[id]"/>
        </Stack>
    )
}

export default TaskLayout