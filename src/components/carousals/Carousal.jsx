import { useEffect } from "react";
import { useState } from "react";

const Carousal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliders = [
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
  ];

  useEffect(() => {
    const slider = setTimeout(() => {
      const nextSlide = (currentSlide + 1) % sliders.length;
      setCurrentSlide(nextSlide);
    }, 3000);

    return () => {
      clearTimeout(slider);
    };
  }, [currentSlide, sliders.length]);

  const backward = () => {
    setCurrentSlide(
      prevSlide => (prevSlide - 1 + sliders.length) % sliders.length,
    );
  };

  const forward = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % sliders.length);
  };

  return (
    <div className={`flex items-center justify-center h-screen`}>
      <div className="relative overflow-hidden w-3/5 h-[80vh]">
        {sliders.map((s, i) => (
          <div
            key={i}
            className="absolute top-0 left-0 flex items-center justify-center h-full w-full transform transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(${
                currentSlide === i ? "0%" : currentSlide < i ? "-100%" : "100%"
              })`,
              order: currentSlide === i ? 1 : 0,
            }}
          >
            <img src={s.img} alt="Carousal Image" className={`w-full h-full`} />
          </div>
        ))}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
          {sliders.map((slide, i) => (
            <button
              key={i}
              className={`w-[10px] h-[10px] rounded-full ${
                currentSlide === i ? "bg-green-600" : "bg-white"
              }  mx-1`}
              onClick={() => setCurrentSlide(i)}
            ></button>
          ))}
        </div>
        <div className="absolute bottom-3 right-2">
          <button
            className={` rounded p-2 text-white mx-1 bg-green-600 disabled:bg-gray-300 disabled:text-gray-600`}
            onClick={() => backward()}
          >
            Backward
          </button>
          <button
            className={` rounded p-2 mx-1 bg-white text-green-600 disabled:bg-gray-300 disabled:text-gray-600`}
            onClick={() => forward()}
          >
            Forward
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
