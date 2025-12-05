import { useEffect, useState } from "react";
import { useBreakpoint } from "@hooks/useBreakpoint";

export function DesktopBackground() {
  const { isMobile } = useBreakpoint();
  const [video, setVideo] = useState('');

  useEffect(() => {
    if (!isMobile && video === '') {
      import('@assets/bg-hero-desktop.mp4')
        .then(video => setVideo(video.default));
    }
  }, [isMobile]);

  if (isMobile) {
    return <></>;
  }

  return (
    <>

      <video
        className="absolute block inset-0 size-full object-cover  z-0"
        src={video}
        loop
        muted
        autoPlay={true}
      >
      </video>

      <div className="block absolute z-10 bg-purple-950/40 size-full"></div>
    </>
  );
}