import { useState, useRef } from "react";

const ScrollPageByGrabbing = () => {
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const startDrag = e => {
    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeftRef.current = containerRef.current.scrollLeft;
  };

  const stopDrag = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  const handleDragging = e => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 2;
    containerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={startDrag}
      onMouseMove={handleDragging}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      className={`overflow-auto whitespace-nowrap h-screen bg-slate-600 p-12 ${
        isDragging ? "cursor-grabbing select-none" : "cursor-grab"
      }`}
    >
      <div
        className="flex gap-5 overflow-auto h-full"
        ref={containerRef}
        onMouseDown={startDrag}
        onMouseMove={handleDragging}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {Array.from({ length: 500 }, (_, i) => (
          <p key={i} className="bg-white min-w-[400px] whitespace-nowrap">
            {`Item ${i + 1}`}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ScrollPageByGrabbing;
