import { StyleSheet, View } from "react-native";
import { Text } from "native-base";
import React from "react";
import { useRecoilState } from "recoil";
import { centiState, secondState, timerState } from "../atoms/timerAtom";
import moment from "moment";

const TimerDisplay = () => {
  const [secondTime, setSecondTime] = useRecoilState(secondState);
  const [centiSecondTime, setmicroSecondTime] = useRecoilState(centiState);
  const [timeState, setTimeState] = useRecoilState(timerState);

  const startTimer = () => {
    const now = moment().format("h:mm:ss a");
    const then = moment().add(50, 's').format("h:mm:ss a");
    console.log({ then });
  };

  if (timeState === true) {
    console.log("start timer");
    startTimer();
  } else {
    console.log("stop timer");
  }

  return (
    <View style={styles.container}>
      <Text fontSize="6xl" fontWeight="400" color="darkText" marginTop="8">
        {secondTime}:{centiSecondTime}
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
