import { Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import Toast from "react-native-toast-message";
import { auth } from "@/services/firebase.config";
import { logoutUser } from "@/services/authService";

const Profile = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try{
        await logoutUser();
        Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Logged out successfully'
        });
        router.replace("/login");
    }catch(error:any){
        Toast.show({
            type: 'error',
            text1: 'Logout Failed',
            text2: error?.message || "Something went wrong"
        });
    }
  }
  
  return (
    <View className="flex-1 bg-gray-50 px-6 pt-12">
      <Text className="text-center text-2xl font-bold mb-6">Profile</Text>

      {/* Logout Button */}
      <Pressable
        onPress={handleLogout}
        className="bg-red-500 py-3 rounded-xl active:opacity-80 mt-4"
      >
        <Text className="text-white text-center font-semibold text-lg">
          Logout
        </Text>
      </Pressable>
    </View>
  );
};

export default Profile;
