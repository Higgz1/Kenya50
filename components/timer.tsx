import { StyleSheet, View } from "react-native";
import { Text } from "native-base";
import React from "react";

const Timer = () => {
  return (
    <View style={styles.container}>
      <Text
        fontSize="6xl"
        fontWeight="400"
        color="darkText"
        marginTop="8"
      >
        00:00
      </Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container:{
    alignItems: "center",
    justifyContent: "center",
  }
});
