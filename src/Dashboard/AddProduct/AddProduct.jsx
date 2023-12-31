import { Divider } from "@mui/material";
import { useState } from "react";
import { DatePicker } from "antd";
import UseSubCategory from "../../Hooks/UseSubCategory";
import UseProducts from "../../Hooks/UseProducts";
import { imageUpload } from "../../Utils/ImageHost";
import SecureAxios from "../../Hooks/SecureAxios";
import toast from "react-hot-toast";
import { IoAddCircleOutline } from "react-icons/io5";

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [isDet, setIsDate] = useState();
  const [subcategory] = UseSubCategory();
  const [, refetch] = UseProducts();

  const onChange = (dateString) => {
    setIsDate(dateString);
  };

  const handleImage = (file) => {
    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const product_title = form.title.value;
    const product_details = form.details.value;
    const images = form.image.files[0];
    const imageURL = await imageUpload(images);
    const product_image = imageURL.data.display_url;
    const subCategory = form.subCategory.value;
    const uploadDate = isDet;
    const product_price = form.product_price.value;
    const product_discount = form.product_discount.value;
    const product_quantity = form.product_quantity.value;
    const product_sold_quantity = 499;
    const product_brand_name = form.product_brand_name.value;
    const product_ratings = form.product_ratings.value;
    const info = {
      product_details,
      product_title,
      product_image,
      subCategory,
      product_quantity,
      uploadDate,
      product_discount,
      product_price,
      product_sold_quantity,
      product_brand_name,
      product_ratings,
    };
    console.log(info);
    try {
      await SecureAxios.post("/products", info);
      toast.success("Product Add Success!");
      refetch();
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <span className="loading loading-ring loading-lg flex h-screen"></span>;
  }

  return (
    <>
      <div className="bg-white rounded-md shadow-xl px-5 py-2">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-600">Product From</h2>
          <Divider />
        </div>
        <section className="text-black py-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="font-bold">Product Title</label>
              <input
                id="hiddenBorderInput"
                type="text"
                name="title"
                className="border-2 rounded-md p-2 border-transparent focus:outline-none focus:border-slate-300 border-slate-300 w-full py-2"
                placeholder="product title.."
              />
            </div>
            <div>
              <label className="font-bold">Product Details</label>
              <textarea
                className="border-2 rounded-md p-2 border-transparent focus:outline-none focus:border-slate-300 border-slate-300 w-full py-2"
                placeholder="Details your product"
                name="details"
                id=""
                rows="3"
              ></textarea>
            </div>
            <label className="font-bold label">Product Image</label>
            <div className="flex items-center">
              <div className=" rounded-lg text-start flex justify-start">
                <div className="file_upload  rounded-lg">
                  <div className=" text-center">
                    <label>
                      <input
                        onChange={(e) => handleImage(e.target.files[0])}
                        className="text-sm cursor-pointer hidden"
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*"
                      />
                      <div>
                        <IoAddCircleOutline className="text-5xl text-green-400" />
                        <div>
                          {/* Display the image preview */}
                          {imagePreview && (
                            <div className="w-64 rounded-md">
                              <img
                                src={imagePreview}
                                alt="Preview"
                                className="rounded-lg"
                                style={{ maxWidth: "100%" }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-center">
              <div>
                <label className="font-bold label">Product Category</label>
                <select
                  name="subCategory"
                  className="border-2 rounded-md p-2 border-transparent focus:outline-none focus:border-slate-300 border-slate-300 w-full"
                >
                  <option disabled selected defaultValue={"Pick your category"}>
                    Pick your category
                  </option>
                  {subcategory?.map((item) => (
                    <option value={item?.subCategory} className="text-red-500" key={item?.name}>
                      {item?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-bold label">Publish Date Time</label>
                <DatePicker
                  className="border-2 rounded-md p-2 border-transparent focus:outline-none focus:border-slate-300 border-slate-300 w-full"
                  onChange={onChange}
                />
              </div>
              <div>
                <label className="font-bold">Product Price</label>
                <input
                  id="hiddenBorderInput"
                  type="number"
                  name="product_price"
                  className="border-2 rounded-md p-2 border-transparent focus:outline-none focus:border-slate-300 border-slate-300 w-full"
                  placeholder="product price..."
                />
              </div>
              <div>
                <label className="font-bold">Product Discount Price</label>
                <input
                  id="hiddenBorderInput"
                  type="number"
                  name="product_discount"
                  className="border-2 rounded-md p-2 border-transparent focus:outline-none focus:border-slate-300 border-slate-300 w-full"
                  placeholder="discount price..."
                />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-center">
              <div>
                <label className="font-bold">Product Qty</label>
                <input
                  id="hiddenBorderInput"
                  type="number"
                  name="product_quantity"
                  className="border-2 rounded-md p-2 border-transparent focus:outline-none focus:border-slate-300 border-slate-300 w-full py-2"
                  placeholder="product qty.."
                />
              </div>
              <div>
                <label className="font-bold">Product Brand Name</label>
                <input
                  id="hiddenBorderInput"
                  type="text"
                  name="product_brand_name"
                  className="border-2 rounded-md p-2 border-transparent focus:outline-none focus:border-slate-300 border-slate-300 w-full py-2"
                  placeholder="type products brand name"
                />
              </div>
              <div>
                <label className="font-bold">Product Ratings</label>
                <input
                  id="hiddenBorderInput"
                  type="number"
                  name="product_ratings"
                  className="border-2 rounded-md p-2 border-transparent focus:outline-none focus:border-slate-300 border-slate-300 w-full py-2"
                  placeholder="give a ratings"
                />
              </div>
            </div>
            <div>
              <input
                type="submit"
                value="Submit"
                className="hover:cursor-pointer btn bg-slate-500 text-white font-bold"
              />
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddProduct;
