import { useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";

export default function Playground() {
  const ref = useRef();
  return (
    <div className="container">
      <div className="text">
        "But afterwards there occurred violent earthquakes and floods; and in a
        single day and night of rain all your warlike men in a body sank into
        the earth, and the island of Atlantis in like manner disappeared, and
        was sunk beneath the sea."
      </div>
    </div>
  );
}
