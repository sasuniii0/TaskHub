import { Keyboard, Pressable, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { useRouter } from "expo-router"

const Register = () => {
    const router = useRouter()
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
                        />
    
                        {/* Email */}
                        <TextInput
                            placeholder="email"
                            placeholderTextColor="#6B7280"
                            className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-gray-800"
                        />
    
                        {/* Password */}
                        <TextInput
                            placeholder="password"
                            placeholderTextColor="#6B7280"
                            secureTextEntry
                            className="border border-gray-300 rounded-xl px-4 py-3 mb-6 text-gray-800"
                        />

                        <TextInput
                            placeholder="confirm password"
                            placeholderTextColor="#6B7280"
                            secureTextEntry
                            className="border border-gray-300 rounded-xl px-4 py-3 mb-6 text-gray-800"
                        />
    
                        {/* Login Button */}
                        <Pressable className="bg-black py-3 rounded-xl active:opacity-80">
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