import { Canvas, Image, useImage } from "@shopify/react-native-skia";
import React from "react";
import { useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FlappyBird = () => {
  const { width, height } = useWindowDimensions();
  const bgImage = useImage(require("../assets/sprites/background-day.png"));
  const baseImage = useImage(require("../assets/sprites/base.png"));
  const flappyBirdImage = useImage(
    require("../assets/sprites/redbird-midflap.png")
  );
  const pipe = useImage(require("../assets/sprites/pipe-green.png"));
  const pipeReverse = useImage(
    require("../assets/sprites/pipe-green-reverse.png")
  );
  const baseHeight = 140;

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Canvas style={{ width, height }}>
          {/* BACKGROUND */}
          <Image
            image={bgImage}
            x={0}
            y={0}
            width={width}
            height={height}
            fit={"cover"}
          />
          {/* PIPE */}
          <Image
            image={pipe}
            x={width / 2}
            y={height - 320}
            width={100}
            height={520}
            fit={"contain"}
          />
          <Image
            image={pipeReverse}
            x={width / 2}
            y={-300}
            width={100}
            height={520}
            fit={"contain"}
          />
          {/* FLAPPY BIRD */}
          <Image
            x={width / 4}
            y={height / 2}
            width={45}
            height={45}
            image={flappyBirdImage}
          />
          {/* BASE */}
          <Image
            image={baseImage}
            x={0}
            y={height - baseHeight}
            width={width}
            height={baseHeight}
            fit={"cover"}
          />
        </Canvas>
      </SafeAreaView>
    </>
  );
};
export default FlappyBird;
