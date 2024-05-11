import { Button } from "@mui/material";
import React, { useState } from "react";

const ImageViewer = () => {
  const [isViewerOpen, setIsImageViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [displayedImages, setDisplayedImages] = useState({
    prevCount: 0,
    nextCount: 4,
  });

  const images = [
    {
      img: "https://i.ibb.co/4RNJs5y/89f36e34-006e-4ee9-8191-fa8ac9eec956.jpg",
      gridStyle: "col-span-3 row-span-2",
    },
    {
      img: "https://i.ibb.co/16zFQ6Z/d5d6c44b-11b7-42a5-b127-0d26e204563d.jpg",
      gridStyle: "col-span-2 row-span-1",
    },
    {
      img: "https://i.ibb.co/LzhLYR4/c9fbcf4a-65ec-4e55-9eaa-dcc100a7636e.jpg",
      gridStyle: "col-span-1 row-span-1",
    },
    {
      img: "https://i.ibb.co/xMvBKcH/da3ea6d0-664b-4c2a-8d6f-82bfb2a71767.jpg",
      gridStyle: "col-span-1 row-span-1",
    },
  ];

  const viewerImages = [
    {
      img: "https://i.ibb.co/4RNJs5y/89f36e34-006e-4ee9-8191-fa8ac9eec956.jpg",
    },
    {
      img: "https://i.ibb.co/16zFQ6Z/d5d6c44b-11b7-42a5-b127-0d26e204563d.jpg",
    },
    {
      img: "https://i.ibb.co/LzhLYR4/c9fbcf4a-65ec-4e55-9eaa-dcc100a7636e.jpg",
    },
    {
      img: "https://i.ibb.co/xMvBKcH/da3ea6d0-664b-4c2a-8d6f-82bfb2a71767.jpg",
    },
    {
      img: "https://i.ibb.co/sQ4bXPh/93a253aa-eb7b-4c0b-b099-af47b2a88e8d.jpg",
    },
    {
      img: "https://i.ibb.co/sytcgpm/a52cfe80-80e7-47af-912c-2d409a373a02.jpg",
    },
    {
      img: "https://i.ibb.co/1XkqV3r/6d0f285f-435b-43ee-aaa1-4c7af27499c5.jpg",
    },
    {
      img: "https://i.ibb.co/Sw97kkq/7bc8a0cb-4f17-462b-8e66-85fefb3a7b9f.jpg",
    },
    {
      img: "https://i.ibb.co/2hMZRJb/ad5d639e-e899-4205-a512-dad689e75609.jpg",
    },
    {
      img: "https://i.ibb.co/5GFpT64/f7cf2a5e-1ef3-4f46-b3bd-8b9afaec2b71.jpg",
    },
    {
      img: "https://i.ibb.co/8PRs8jC/84c943f9-53fc-47ac-a36d-973b223883bc.jpg",
    },
    {
      img: "https://i.ibb.co/27Bnw6d/c6236cad-267d-4a57-a4c6-25c801370c87.jpg",
    },
    {
      img: "https://i.ibb.co/GWbmghQ/0e6bfb1b-b609-4286-95fd-174d76ecef15.jpg",
    },
    {
      img: "https://i.ibb.co/R41f1JH/5b2f9870-23bc-4cc4-b93d-cf8946b8b929.jpg",
    },
    {
      img: "https://i.ibb.co/SXPwF26/37d0a827-358b-4551-859b-e6a64c8e7f1d.jpg",
    },
    {
      img: "https://i.ibb.co/2cmgjLZ/484e7ed5-2e36-4f29-baa7-1c06c47f94c7.jpg",
    },
    {
      img: "https://i.ibb.co/QKy7JK2/cae484b5-1bf8-4743-a6b3-739d83cd4372.jpg",
    },
    {
      img: "https://i.ibb.co/vdTg1TQ/365774f1-239d-4db5-9e81-68bd37587e28.jpg",
    },
    {
      img: "https://i.ibb.co/PhsxxMb/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg",
    },
    {
      img: "https://i.ibb.co/Z2Bpx8J/50af80d8-e7c3-43f7-86ce-23aba0d40cb6.jpg",
    },
    {
      img: "https://i.ibb.co/72mHrz5/0d5ec9b6-072e-4b60-ae0f-25bb66871457.jpg",
    },
    {
      img: "https://i.ibb.co/34LpLcd/8d3a3581-3a0e-4316-b6dc-fd74fd0ac293.jpg",
    },
    {
      img: "https://i.ibb.co/7rbZDv5/e43414c9-9cd6-429a-ab17-9e08d6bb189a.jpg",
    },
    {
      img: "https://i.ibb.co/gv0NpR3/aab48bd2-edb0-4ffd-87a3-f5cc7d7c3be2.jpg",
    },
    {
      img: "https://i.ibb.co/fQkzfcK/b716f0d8-96ad-4278-b435-b90988d45425-1.jpg",
    },
    {
      img: "https://i.ibb.co/XbR1fGT/aab48bd2-edb0-4ffd-87a3-f5cc7d7c3be2.webp",
    },
    {
      img: "https://i.ibb.co/X56GBJt/bangkok-thailand-august-12-2016-beautiful-luxury-bedroom-int.jpg",
    },
    {
      img: "https://i.ibb.co/FmkgX3D/tidy-hotel-room-with-brown-curtains.jpg",
    },
  ];

  return (
    <div className="container px-4 py-12">
      <div className="grid grid-cols-5 grid-rows-2 gap-4 h-[500px] relative rounded-lg overflow-hidden">
        {images.map((img, i) => (
          <div
            key={i}
            className={`${img.gridStyle} w-full h-full overflow-hidden`}
          >
            <img
              src={img.img}
              alt="Reservation Images"
              className={`w-full h-full object-cover`}
              loading="lazy"
            />
          </div>
        ))}
        <Button
          onClick={() => setIsImageViewerOpen(true)}
          variant="contained"
          color="primary"
          sx={{
            position: "absolute",
            bottom: 16,
            right: 16,
          }}
        >
          View All
        </Button>
      </div>
      {isViewerOpen && (
        <div className="w-full h-full fixed top-0 left-0 bg-white z-50 overflow-hidden">
          <div className="container px-4 flex flex-col items-center justify-center gap-4 h-screen w-1/2">
            <div className="flex justify-between items-center w-full">
              <h2>Reservation Images</h2>
              <Button onClick={() => setIsImageViewerOpen(false)}>Close</Button>
            </div>
            <div className="w-full h-[380px] overflow-hidden">
              <img
                src={viewerImages[Number(currentImage)].img}
                alt="Reservation Images"
                className={`w-full h-full object-cover`}
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-6 gap-4 w-full">
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setCurrentImage(currentImage - 1);
                  if (currentImage === displayedImages.prevCount) {
                    setDisplayedImages({
                      prevCount: displayedImages.prevCount - 1,
                      nextCount: displayedImages.nextCount - 1,
                    });
                  }
                }}
                disabled={currentImage === 0}
              >
                Prev
              </Button>
              <div className="grid grid-cols-4 gap-4 overflow-hidden col-span-4">
                {viewerImages
                  .slice(displayedImages.prevCount, displayedImages.nextCount)
                  .map((img, i) => (
                    <Button
                      onClick={() => {
                        setCurrentImage(i + displayedImages.prevCount);
                      }}
                      variant="text"
                      key={i}
                      sx={{
                        width: "100%",
                        height: "60px",
                        p: 0,
                        m: 0,
                        overflow: "hidden",
                        borderRadius: 0,
                        border:
                          i + displayedImages.prevCount === currentImage
                            ? `3px solid #219653`
                            : `3px solid #ffffff`,
                      }}
                    >
                      <img
                        src={img.img}
                        alt="Reservation Images"
                        className={`w-full h-full object-cover ${
                          i + displayedImages.prevCount === currentImage
                            ? "brightness-90"
                            : "brightness-75 opacity-70"
                        }`}
                        loading="lazy"
                      />
                    </Button>
                  ))}
              </div>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  console.log({
                    currentImage,
                    viewerImages: viewerImages.length,
                  });
                  setCurrentImage(currentImage + 1);
                  if (currentImage === displayedImages.nextCount - 1) {
                    setDisplayedImages({
                      prevCount: displayedImages.prevCount + 1,
                      nextCount: displayedImages.nextCount + 1,
                    });
                  }
                }}
                disabled={currentImage + 1 === viewerImages.length}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
