import { useEffect, useRef, useState } from "react";

interface SwiperActionProps {
  swiperElement: React.ReactNode[];
}

const SwiperAction = ({ swiperElement }: SwiperActionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const startX = useRef<number>(0);
  const startY = useRef<number>(0);
  const threshold = useRef<number>(0);

  useEffect(() => {
    const root = getComputedStyle(document.documentElement);
    const layoutWidth = Number(root.getPropertyValue("--layout-width").replace("px", ""));
    const padding = Number(root.getPropertyValue("--layout-padding-x").replace("px", ""));
    threshold.current = Math.floor((layoutWidth - 2 * padding) / 2);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    startY.current = e.clientY;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const diffX = startX.current - e.clientX;
    const diffY = startY.current - e.clientY;

    if (Math.abs(diffY) > Math.abs(diffX)) return;

    if (diffX > threshold.current && currentIndex < swiperElement.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      return;
    }
    if (diffX < -threshold.current && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      return;
    }
  };

  return (
    <div
      className="flex gap-1"
      ref={ref}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      {swiperElement[currentIndex]}
    </div>
  );
};

export default SwiperAction;

// 1. 각요소에 pointer 이벤트를 가할 컴포넌트 배열을 받고
// 2. 그 컴포넌트에 pointer 이벤트를 심고
// 3. 쓰로틀링으로 이벤트의 횟수를 제한하고
// 4. 접근성을 위한 가상의 버튼을 넣으면
// 5. 현재 인덱스를 상위로 반환하는 로직이 필요하다 -> context
