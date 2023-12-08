import { Avatar, Divider, TextField } from "@mui/material";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineEmojiEmotions, MdOutlineEventAvailable } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";

const Posts = () => {

    const {
        register,
        handleSubmit,
        watch,
      } = useForm()

      const onSubmit = (data) => console.log(data)

      console.log(watch("example"))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className=" bg-gray-200 px-4 py-2 shadow-md space-y-4 rounded-md">
      <div className="flex items-center gap-3">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  />
        <TextField
        {...register("postDetails")}
         className="w-full" id="standard-basic" name="postDetails" label="Whats in your mind," variant="standard" />
      </div>

      <Divider />

      <div className="text-4xl flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div>
            <label className="cursor-pointer">
              <input 
              {...register("postImage")}
              className="hidden" type="file" name="postImage" id="" />
              <CiImageOn />
            </label>
          </div>

          <div className="flex items-center gap-5">
            <MdOutlineEmojiEmotions /> 
            <MdOutlineEventAvailable />
            <IoLocationOutline />
          </div>
        </div>

        <div>
          <input
            className="btn font-bold rounded-2xl bg-orange-400 hover:bg-orange-400 hover:text-white text-white border-none"
            type="submit"
            value="Post"
          />
        </div>
      </div>
    </div>
    </form>
  );
};

export default Posts;
