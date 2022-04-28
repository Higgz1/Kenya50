import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { Box, Button, Icon, IconButton } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { useRecoilState } from "recoil";
import { elapsedTime, offSet, runState, timeState } from "../atoms/timerAtom";

const controlls = [
  { id: 1, icon: "controller-play" },
  { id: 2, icon: "controller-play" },
  {},
];

const TimerButtons = () => {
  const [isRunning, setisRunning] = useRecoilState(runState);
  const [startTime, setStartTime] = useRecoilState(timeState);
  const [elapsed, setElapsed] = useRecoilState(elapsedTime);
  const [offset, setOffest] = useRecoilState(offSet);
  const timer = useRef(0);
  // const [timerRef, setTimerRef] = useState(0);

  const Play = useCallback(() => {
    if (isRunning === false) {
      setisRunning(true);
      setStartTime(Date.now());
      loop();
    }
  }, [isRunning]);

  const Pause = useCallback(() => {
    if (isRunning === true) {
      setisRunning(false);
      setOffest(elapsed);
    }
  }, [isRunning]);

  const reset = useCallback(() => {
    setisRunning(false);
    setOffest(0);
  }, [isRunning]);

  const loop = () => {
    if (isRunning === true) {
      let ms = (Date.now() - startTime) / 1000;
      setElapsed((ms += offset));
      setTimeout(loop, 50);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      style={styles.controller}
    >
      {isRunning ? (
        <Button
          h={24}
          w={24}
          borderRadius="full"
          onPress={Pause}
          style={styles.controller__Playbtn}
        >
          <Entypo name="controller-paus" size={48} color="white" />
        </Button>
      ) : (
        <Button
          h={24}
          w={24}
          borderRadius="full"
          onPress={Play}
          style={styles.controller__Playbtn}
        >
          <Entypo name="controller-play" size={48} color="white" />
        </Button>
      )}

      <IconButton
        size="lg"
        borderRadius="full"
        mx={8}
        key={1}
        onPress={reset}
        // colorScheme="indigo"
        variant="outline"
        _icon={{
          as: Entypo,
          name: "ccw",
        }}
      />
    </Box>
  );
};

export default TimerButtons;

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // bottom: 100
  },
  controller: {},
  controller__Playbtn: {
    // borderRadius: 50
  },
});
