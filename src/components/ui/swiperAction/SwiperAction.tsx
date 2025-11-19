import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, type Transition } from "framer-motion";

interface SwiperActionProps {
  swiperElement: React.ReactNode[];
}

const SwiperAction = ({ swiperElement }: SwiperActionProps) => {
  const springPreset: Transition = {
    type: "spring",
    stiffness: 450,
    damping: 32,
    mass: 0.3,
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const elementWidthRef = useRef(0);

  const startX = useRef(0);
  const startY = useRef(0);
  const threshold = useRef(0);
  const isDragging = useRef(false);

  const x = useMotionValue(0);
  const ELEMENT_GAP = 16;

  useEffect(() => {
    const root = getComputedStyle(document.documentElement);
    const layoutWidth = Number(root.getPropertyValue("--layout-width").replace("px", ""));
    const padding = Number(root.getPropertyValue("--layout-padding-x").replace("px", ""));
    elementWidthRef.current = trackRef.current?.children[0].clientWidth ?? 0;
    threshold.current = Math.floor((layoutWidth - 2 * padding) / 5);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const calculateLocation = (index: number) => {
    return -index * (elementWidthRef.current + ELEMENT_GAP);
  };

  const snapToIndex = (diffX: number) => {
    const moveToLeft = diffX >= threshold.current;
    const moveToRight = diffX <= -threshold.current;

    if (moveToLeft && currentIndex < swiperElement.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      animate(x, calculateLocation(nextIndex), springPreset);
      return;
    }
    if (moveToRight && currentIndex > 0) {
      const nextIndex = currentIndex - 1;
      setCurrentIndex(nextIndex);
      animate(x, calculateLocation(nextIndex), springPreset);
      return;
    }
    animate(x, calculateLocation(currentIndex), springPreset);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (swiperElement.length === 0) return;

    isDragging.current = true;
    startX.current = e.clientX;
    startY.current = e.clientY;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    if (swiperElement.length === 0) return;
    if (!trackRef.current) return;

    const diffX = startX.current - e.clientX;
    const diffY = startY.current - e.clientY;
    if (diffY > diffX) {
      isDragging.current = false;
      return;
    }
    x.set(calculateLocation(currentIndex) - diffX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (swiperElement.length === 0) return;

    isDragging.current = false;

    const diffX = startX.current - e.clientX;
    const diffY = startY.current - e.clientY;

    if (Math.abs(diffY) > Math.abs(diffX)) return;
    snapToIndex(diffX);
  };

  const handlePointerLeave = () => {
    isDragging.current = false;
    animate(x, calculateLocation(currentIndex), springPreset);
  };

  return (
    <div
      className="flex items-center justify-center
      overflow-hidden
      touch-none
      bg-blue-100"
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div
        ref={trackRef}
        className="flex items-center justify-between gap-4 border border-blue-500"
        style={{ x }}
      >
        {swiperElement.map((element, index) => (
          <div
            key={index}
            className="flex
            min-w-[85%]
            border-2"
          >
            {element}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SwiperAction;
