const Masonry = () => {
  const images = [
    {
      img: "https://i.ibb.co/4RNJs5y/89f36e34-006e-4ee9-8191-fa8ac9eec956.jpg",
      masonry: "col-span-1 row-span-1",
    },
    {
      img: "https://i.ibb.co/16zFQ6Z/d5d6c44b-11b7-42a5-b127-0d26e204563d.jpg",
      masonry: "col-span-1 row-span-2",
    },
    {
      img: "https://i.ibb.co/LzhLYR4/c9fbcf4a-65ec-4e55-9eaa-dcc100a7636e.jpg",
      masonry: "col-span-1 row-span-1",
    },
    {
      img: "https://i.ibb.co/xMvBKcH/da3ea6d0-664b-4c2a-8d6f-82bfb2a71767.jpg",
      masonry: "col-span-1 row-span-2",
    },
    {
      img: "https://i.ibb.co/sQ4bXPh/93a253aa-eb7b-4c0b-b099-af47b2a88e8d.jpg",
      masonry: "col-span-1 row-span-2",
    },
    {
      img: "https://i.ibb.co/sytcgpm/a52cfe80-80e7-47af-912c-2d409a373a02.jpg",
      masonry: "col-span-1 row-span-2",
    },
    {
      img: "https://i.ibb.co/1XkqV3r/6d0f285f-435b-43ee-aaa1-4c7af27499c5.jpg",
      masonry: "col-span-1 row-span-2",
    },
    {
      img: "https://i.ibb.co/Sw97kkq/7bc8a0cb-4f17-462b-8e66-85fefb3a7b9f.jpg",
      masonry: "col-span-1 row-span-2",
    },
    {
      img: "https://i.ibb.co/2hMZRJb/ad5d639e-e899-4205-a512-dad689e75609.jpg",
      masonry: "col-span-1 row-span-2",
    },
    {
      img: "https://i.ibb.co/5GFpT64/f7cf2a5e-1ef3-4f46-b3bd-8b9afaec2b71.jpg",
      masonry: "col-span-1 row-span-2",
    },
    {
      img: "https://i.ibb.co/8PRs8jC/84c943f9-53fc-47ac-a36d-973b223883bc.jpg",
      masonry: "col-span-1 row-span-2",
    },
    {
      img: "https://i.ibb.co/27Bnw6d/c6236cad-267d-4a57-a4c6-25c801370c87.jpg",
      masonry: "col-span-1 row-span-2",
    },
    {
      img: "https://i.ibb.co/GWbmghQ/0e6bfb1b-b609-4286-95fd-174d76ecef15.jpg",
      masonry: "col-span-1 row-span-2",
    },
    {
      img: "https://i.ibb.co/R41f1JH/5b2f9870-23bc-4cc4-b93d-cf8946b8b929.jpg",
      masonry: "col-span-1 row-span-1",
    },
    {
      img: "https://i.ibb.co/SXPwF26/37d0a827-358b-4551-859b-e6a64c8e7f1d.jpg",
      masonry: "col-span-1 row-span-1",
    },
    {
      img: "https://i.ibb.co/2cmgjLZ/484e7ed5-2e36-4f29-baa7-1c06c47f94c7.jpg",
      masonry: "col-span-1 row-span-1",
    },
  ];

  return (
    <div className="grid grid-cols-3 container gap-4 p-64">
      {images.map((img, i) => (
        <div key={i} className={`${img.masonry} w-full h-full overflow-hidden`}>
          <img
            src={img.img}
            alt="Masonry-Img"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Masonry;
