import { View, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import Toast from "react-native-toast-message";

import "../global.css";
import { useAuth } from "@/hooks/use-auth";

const Index = () => {
  const {user , loading} = useAuth()

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0f0f52" />
      </View>
    )
  }

  if (user) {
    return <Redirect href="/home" />;
  }else{
    Toast.show({
      type: 'info',
      text1: 'Please log in to continue',
    });
    return <Redirect href="/login" />;
  }
};

export default Index;
