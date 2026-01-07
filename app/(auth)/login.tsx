import { loginUser } from "@/services/authService"
import { useRouter } from "expo-router"
import React from "react"
import { Keyboard, Pressable, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"

const Login = () => {
    const router = useRouter()
    const [email,setEmail] =  React.useState("")
    const [password,setPassword] =  React.useState("")

    const handleSignin = async () => {
        try{
            if(!email || !password){
                alert("Please fill all the fields")
                return
            }
            await loginUser(email,password)
            router.push("/home")
        }catch(error:any){
            alert("Login failed")
        }
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="flex-1 justify-center items-center bg-gray-50 px-6">
                <View className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-md">
                
                    {/* Title */}
                    <Text className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Login
                    </Text>

                    {/* Email */}
                    <TextInput
                        placeholder="email"
                        placeholderTextColor="#6B7280"
                        className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-gray-800"
                        onChangeText={(text) => setEmail(text)}
                    />

                    {/* Password */}
                    <TextInput
                        placeholder="password"
                        placeholderTextColor="#6B7280"
                        secureTextEntry
                        className="border border-gray-300 rounded-xl px-4 py-3 mb-6 text-gray-800"
                        onChangeText={(text) => setPassword(text)}
                    />

                    {/* Login Button */}
                    <Pressable className="bg-black py-3 rounded-xl active:opacity-80">
                        <Text className="text-white text-center font-semibold text-lg" onPress={() => handleSignin()}>
                        Login
                        </Text>
                    </Pressable>

                    {/* Register */}
                    <View className="flex-row justify-center mt-5">
                        <Text className="text-gray-600 mr-1">
                        Don’t have an account?
                        </Text>
                        <TouchableOpacity onPress={() => router.push("/register")}>
                        <Text className="text-black font-semibold">
                            Register
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Login