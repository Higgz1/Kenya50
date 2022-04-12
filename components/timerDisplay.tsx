import { StyleSheet, View } from "react-native";
import { Text } from "native-base";
import React, { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { intervalState, runState, timerState } from "../atoms/timerAtom";

const TimerDisplay = () => {
  const [run, setRunState] = useRecoilState(runState);
  const [time, setTime] = useRecoilState(timerState);
  const [interval, setIntervalState] = useRecoilState(intervalState);

  useEffect(() => {

    if (run === true) {
      const interval: any = setInterval(() => {
        setTime((previousTime) => previousTime + 1);
      }, 10);
      console.log("set Time", time);
      setIntervalState(interval);
    } else {
      clearInterval(interval);
      console.log("puase Time", time);

      // console.log('stop',timer.current);
    }
  }, [run]);

  return (
    <View style={styles.container}>
      <Text fontSize="6xl" fontWeight="400" color="darkText" marginTop="8">
        {/* {secondTime}:{centiSecondTime} */}
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
