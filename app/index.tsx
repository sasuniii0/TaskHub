import { View, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import "../global.css";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="small" color="black" />
      </View>
    );
  }

  return <Redirect href="/login" />;
};

export default Index;
