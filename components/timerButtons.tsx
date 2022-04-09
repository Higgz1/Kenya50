import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, Button, Icon, IconButton } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { useRecoilState } from "recoil";
import { timerState } from "../atoms/timerAtom";

const controlls = [
  { id: 1, icon: "controller-play" },
  { id: 2, icon: "controller-play" },
  {},
];

const TimerButtons = () => {
  const [timeState, setTimeState] = useRecoilState(timerState);

  const Play = () => {
    setTimeState(!timeState);
    // console.log({ timeState });
  };

  const reset=()=>{
    setTimeState(false);
    // console.log({ timeState });


  }

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      style={styles.controller}
    >
      <Button
        h={24}
        w={24}
        borderRadius="full"
        onPress={Play}
        style={styles.controller__Playbtn}
      >
        {timeState ? (
          <Entypo name="controller-paus" size={48} color="white" />
        ) : (
          <Entypo name="controller-play" size={48} color="white" />
        )}
      </Button>
      
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
