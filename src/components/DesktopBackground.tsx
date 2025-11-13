import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

export function DesktopBackground() {
  const isMobile = useMediaQuery({ query: '(max-width: 998px)' });
  const [video, setVideo] = useState('');

  useEffect(() => {
    console.log(isMobile);

    if (!isMobile) {
      import('../assets/bg-hero-desktop.mp4')
        .then(video => setVideo(video.default));
    } else {
      setVideo('');
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