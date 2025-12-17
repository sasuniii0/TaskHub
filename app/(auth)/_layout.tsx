import { Stack } from "expo-router"
import { View } from "react-native"

const AuthLayout = () => {
    return(
        <Stack 
        // screenOptions={{headerShown : false , animation: "slide_from_right"}}
        >
            {/* name walaat file name eka denn one router eke */}
            <Stack.Screen name="login" options={{title:"Login"}}/>
            <Stack.Screen name="register" options={{title:"Register"}} />
        </Stack>
    )
}

export default AuthLayout