import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { HeaderShownContext } from "@react-navigation/elements"
import { Tabs } from "expo-router"
import { View } from "react-native"
import Toast from "react-native-toast-message"

const tabs = [
  { name: "home", icon: "home", title: "Home" },
  { name: "tasks", icon: "list", title: "Tasks" },
  { name: "news", icon: "newspaper", title: "News" },
  { name: "profile", icon: "person", title: "Profile" },
] as const;

const DashBoardLayout = () =>{
    return(
        <Tabs 
            screenOptions={{
                headerShown : false,
                tabBarActiveTintColor:'black',
                tabBarInactiveTintColor: 'gray'}}>
            {tabs.map((tab) => (
                <Tabs.Screen
                    name={tab.name}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialIcons name={tab.icon} color={color} size={size} a />
                            ),
                        }}
                    />
                ))}

            {/* <Tabs.Screen name="home" options={{tabBarIcon: ({color , size}) =>(
                <MaterialIcons name="home" color={color} size={size}/>
            )}}/> 
            <Tabs.Screen name="tasks" options={{tabBarIcon : ({color, size}) =>(
                <MaterialIcons name="list" color={color} size={size}/>
            )}} /> 
            <Tabs.Screen name="news" /> 
            <Tabs.Screen name="profile" />  */}
        </Tabs>        
    )
}

export default DashBoardLayout