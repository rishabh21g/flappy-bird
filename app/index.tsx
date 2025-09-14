import { Canvas, Image, useImage } from "@shopify/react-native-skia";
import React from "react";
import { useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FlappyBird = () => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const bgImage = useImage(require("../assets/sprites/background-day.png"));
  const baseImage = useImage(require("../assets/sprites/base.png"));
  const baseHeight = 140; 

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Canvas style={{ width, height }}>
          {bgImage && (
            <Image
              image={bgImage}
              x={0}
              y={0}
              width={width}
              height={height}
              fit={"cover"}
            />
          )}
          {baseImage && (
            <Image
              image={baseImage}
              x={0}
              y={height - baseHeight}
              width={width}
              height={baseHeight}
              fit={"cover"}
            />
          )}
        </Canvas>
      </SafeAreaView>
    </>
  );
};;
export default FlappyBird;
