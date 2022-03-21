import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { RecoilRoot } from "recoil";
import Actual from "./Actual";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   <Actual/>
    // </View>
    <NativeBaseProvider>
      <RecoilRoot>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Actual />
      </SafeAreaView>
      </RecoilRoot>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFEFEF",
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
