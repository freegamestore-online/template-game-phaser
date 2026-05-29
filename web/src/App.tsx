import { useRef, useEffect } from "react";
import Phaser from "phaser";
import { Shell } from "./components/Shell";

class PlaceholderScene extends Phaser.Scene {
  constructor() {
    super("PlaceholderScene");
  }

  create() {
    const { width, height } = this.scale;
    this.add
      .text(width / 2, height / 2, "Phaser Game Ready", {
        fontSize: "24px",
        color: "#ffffff",
      })
      .setOrigin(0.5);
  }
}

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const game = new Phaser.Game({
      type: Phaser.AUTO,
      parent: container,
      width: container.clientWidth,
      height: container.clientHeight,
      backgroundColor: "#1a1a2e",
      scene: PlaceholderScene,
      scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
    });

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <Shell>
      <div ref={containerRef} className="relative w-full h-full min-h-[400px]" />
    </Shell>
  );
}
