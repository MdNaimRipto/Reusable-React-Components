import { useState } from "react";
import { Image } from "cloudinary-react";
import axios from "axios";

const MultipleImageUpload = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async e => {
    const files = e.target.files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
      formData.append("upload_preset", "testdemoapp");
      formData.append("cloud_name", "dtsxejgut");

      setLoading(true);

      // Upload image to Cloudinary
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dtsxejgut/image/upload",
        formData,
      );
      console.log(response);
      setImages(prevImages => [...prevImages, response.data.secure_url]);
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleImageUpload} />
      {loading ? (
        <p>Uploading...</p>
      ) : (
        images.map((image, index) => (
          <Image
            key={index}
            cloudName="your_cloud_name"
            publicId={image}
            width="300"
          />
        ))
      )}
    </div>
  );
};

export default MultipleImageUpload;
