import { StyleSheet, View } from "react-native";
import { Text } from "native-base";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { centiState, secondState, timerState } from "../atoms/timerAtom";
import moment from "moment";

const TimerDisplay = () => {
  const [secondTime, setSecondTime] = useRecoilState(secondState);
  const [centiSecondTime, setmicroSecondTime] = useRecoilState(centiState);
  const [timeState, setTimeState] = useRecoilState(timerState);

  const startTimer = () => {
    const then: any = moment().add(50, "seconds");

    const interval = setInterval(() => {
      const now: any = moment();
      const countdown = moment(then - now);
      console.log({ countdown });
    }, 1000);
  };

  const stopTimer = () => {
    setTimeState(false);
    clearInterval();
  };

  (timeState ? startTimer : stopTimer)


  // useEffect(() => {
  //   (timeState ? startTimer : stopTimer)
  // }, [timeState]);

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
