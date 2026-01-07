import { Stack } from "expo-router"
import { View } from "react-native"
import Toast from "react-native-toast-message";


const AuthLayout = () => {
    return(
        <>
            <Stack 
        // screenOptions={{headerShown : false , animation: "slide_from_right"}}
        >
            {/* name walaat file name eka denn one router eke */}
            <Stack.Screen name="login" options={{title:"Login"}}/>
            <Stack.Screen name="register" options={{title:"Register"}} />
        </Stack>
        <Toast/>
        </>
    )
}

export default AuthLayout