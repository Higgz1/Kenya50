import { StyleSheet, View } from "react-native";
import { Text } from "native-base";
import React from "react";
import { useRecoilState } from "recoil";
import { microState, secondState } from "../atoms/timerAtom";

const Timer = () => {
  
  const [secondTime, setSecondTime] = useRecoilState(secondState);
  const [microSecondTime, setmicroSecondTime] = useRecoilState(microState);


  return (
    <View style={styles.container}>
      <Text
        fontSize="6xl"
        fontWeight="400"
        color="darkText"
        marginTop="8"
      >
        {secondTime}:{microSecondTime}
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
