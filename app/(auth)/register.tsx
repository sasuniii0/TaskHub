import { Alert, Keyboard, Pressable, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { useRouter } from "expo-router"
import { registerUser } from "@/services/authService"
import React from "react"
import Toast from "react-native-toast-message";
import { useLoader } from "@/hooks/use-loader";

const Register = () => {
    const router = useRouter()
    const [name,setName] =  React.useState("")
    const [email,setEmail] =  React.useState("")
    const [password,setPassword] =  React.useState("")
    const [confirmPassword,setConfirmPassword] =  React.useState("")

    const {showLoader,hideLoader,isLoading} = useLoader();

    const handleRegister = async () => {
    try {
        if (!name || !email || !password || !confirmPassword || isLoading) {
        Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Please fill all the fields'
        });
        return;
        }

        if (password !== confirmPassword) {
        Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Passwords do not match'
        })
        return;
        }

        showLoader()
        try{
            await registerUser(name,email,password)

            Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Account created successfully'
        });
        router.push("/login");
        }catch(error:any){
            Toast.show({
            type: 'error',
            text1: 'Registration Failed',
            text2: error?.message || "Something went wrong"
        });
        }finally{
            hideLoader()
        }
    } catch (error: any) {
        Toast.show({
            type: 'error',
            text1: 'Registration Failed',
            text2: error?.message || "Something went wrong"
        });
    }
    };
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className="flex-1 justify-center items-center bg-gray-50 px-6">
                    <View className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-md">
                    
                        {/* Title */}
                        <Text className="text-2xl font-bold text-center text-gray-800 mb-6">
                            Register
                        </Text>

                        {/* Name */}
                        <TextInput
                            placeholder="name"
                            placeholderTextColor="#6B7280"
                            className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-gray-800"
                            onChangeText={(text) => setName(text)}
                        />
    
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

                        <TextInput
                            placeholder="confirm password"
                            placeholderTextColor="#6B7280"
                            secureTextEntry
                            className="border border-gray-300 rounded-xl px-4 py-3 mb-6 text-gray-800"
                            onChangeText={(text) => setConfirmPassword(text)}
                        />
    
                        {/* Register Button */}
                        <Pressable
                            onPress={handleRegister}
                            className="bg-black py-3 rounded-xl active:opacity-80"
                            >
                            <Text className="text-white text-center font-semibold text-lg">
                                Register
                            </Text>
                            </Pressable>

                        {/* Register */}
                        <View className="flex-row justify-center mt-5">
                            <Text className="text-gray-600 mr-1">
                            Already have an account?
                            </Text>
                            <TouchableOpacity onPress={() => router.back()}>
                            <Text className="text-black font-semibold">
                                Login
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
}

export default Register