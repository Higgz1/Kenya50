import { StyleSheet, View } from "react-native";
import { Text } from "native-base";
import React from "react";
import { useRecoilValue } from "recoil";
import { displayState } from "../atoms/timerAtom";

const TimerDisplay = () => {
  const displayTime = useRecoilValue(displayState);

  return (
    <View style={styles.container}>
      <Text fontSize="6xl" fontWeight="400" color="darkText" marginTop="8">
        {displayTime}
      </Text>
    </View>
  );
};

export default TimerDisplay;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
