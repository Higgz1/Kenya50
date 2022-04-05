import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, Button, Icon, IconButton } from "native-base";
import { Entypo } from "@expo/vector-icons";

const controlls = [{ id: 1, icon: "controller-play" }, {}, {}];

const TimerButtons = () => {
  return (
    <View style={[styles.container]}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        style={styles.controller}
      >
        <Button
          h={16}
          w={16}
          mx={8}
          borderRadius="full"
          style={styles.controller__Playbtn}
        >
          Hi
        </Button>

        <Button
          h={24}
          w={24}
          borderRadius="full"
          style={styles.controller__Playbtn}
        >
          <Entypo name="controller-play" size={48} color="white" />
        </Button>

        {/* <Button
          h={16}
          w={16}
          mx={8}
          borderRadius="full"
          style={styles.controller__Playbtn}
        >
          <Entypo name="share-alternative" size={24} color="black" />
        </Button> */}

        <IconButton
          size="lg"
          borderRadius="full"
          mx={8}

          // colorScheme="indigo"
          variant="outline"
          _icon={{
            as: Entypo,
            name: "ccw",
          }}
        />
      </Box>
    </View>
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
