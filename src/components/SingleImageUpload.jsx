import { useState } from "react";

const SingleImageUpload = () => {
  const [img, setImg] = useState("");

  const handleImgUpload = () => {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "testdemoapp");
    data.append("cloud_name", "dtsxejgut");

    fetch("https://api.cloudinary.com/v1_1/dtsxejgut/image/upload", {
      method: "POST",
      body: data,
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={e => {
          setImg(e.target.files[0]);
        }}
      />

      <button onClick={handleImgUpload}>Submit</button>
    </div>
  );
};

export default SingleImageUpload;
