import { Divider } from "@mui/material";
import { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import UseSubCategory from "../../Hooks/UseSubCategory";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 2024 / 2024 < 5;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [subcategory] = UseSubCategory();

  //   const options = subcategory?.map( item => <p key={item.subcategory}>{item?.subcategory}</p>)

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload Image
      </div>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const product_title = form.title.value;
    const product_details = form.details.value;
    const product_image = imageUrl;
    const info = { product_details, product_title, product_image };
    console.log(info);
  };

  return (
    <>
      <div className="bg-white rounded-md shadow-xl px-5 py-2">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-gray-600">Product From</h2>
          <Divider />
        </div>
        <section className="text-black py-5">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="font-bold">Product Title</label>
              <input
                id="hiddenBorderInput"
                type="text"
                name="title"
                className="border-b-2 border-transparent focus:outline-none focus:border-lime-700 border-b-lime-200 w-full py-2"
                placeholder="product title.."
              />
            </div>
            <div>
              <label className="font-bold">Product Details</label>
              <textarea
                className="border-b-2 border-transparent focus:outline-none focus:border-lime-700 border-b-lime-200 w-full py-2"
                placeholder="Details your product"
                name="details"
                id=""
                rows="3"
              ></textarea>
            </div>
            <label className="font-bold">Product Image</label>
            <div className="flex items-center">
              <div>
                <Upload
                  name="image"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{
                        width: "100%",
                      }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </div>
              <div>
                <img className="w-64 rounded-md" src={imageUrl} alt="" />
              </div>
            </div>
            <div>
              <label className="font-bold label">Product Category</label>
              <select className="select select-secondary w-full max-w-xs">
                <option disabled selected>
                  Pick your category
                </option>
                {subcategory?.map((item) => (
                  <option className="text-red-500" key={item?.name}>
                    {item?.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input type="submit" value="Submit" className="hover:cursor-pointer btn" />
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddProduct;
