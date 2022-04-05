import { StyleSheet, View } from "react-native";
import { Text } from "native-base";
import React from "react";
import { useRecoilState } from "recoil";
import { centiState, secondState } from "../atoms/timerAtom";

const TimerDisplay = () => {
  
  const [secondTime, setSecondTime] = useRecoilState(secondState);
  const [centiSecondTime, setmicroSecondTime] = useRecoilState(centiState);


  return (
    <View style={styles.container}>
      <Text
        fontSize="6xl"
        fontWeight="400"
        color="darkText"
        marginTop="8"
      >
        {secondTime}:{centiSecondTime}
      </Text>
    </View>
  );
};

export default TimerDisplay;

const styles = StyleSheet.create({
  container:{
    alignItems: "center",
    justifyContent: "center",
  }
});
