import { Slot } from "expo-router"
import { View } from "react-native-reanimated/lib/typescript/Animated"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context"
import Toast from "react-native-toast-message"

const RootLayout = () => {
    const insets = useSafeAreaInsets()
    //console.log(insets);
    
    return (
        <>
            <SafeAreaView style={{flex:1}}>
            <Slot/>
        </SafeAreaView>

        <Toast/>
        </>

        // <View style={{marginTop: insets.top , flex:1}}>
        //     <Slot/>
        // </View>
    )
}

export default RootLayout