'use client';

import { 
  HiPaperAirplane, 
  HiPhoto
} from "react-icons/hi2";
import MessageInput from "./MessageInput";
import { 
  FieldValues, 
  SubmitHandler, 
  useForm 
} from "react-hook-form";
import axios from "axios";
import { useChat } from "../store/chat.state";
import { useEffect } from "react";
//import { CldUploadButton } from "next-cloudinary";
//import useConversation from "@/app/hooks/useConversation";

const Form = () => {
  //const { conversationId } = useConversation();

  const chat = useChat((s)=> s) 

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState,
    formState: {
      errors,
      isSubmitSuccessful
    }
  } = useForm({
    defaultValues: {
      message: ''
    }
  });

  const onSubmit= (data) => {
    console.log({data});
    chat.appendMessage({
      body: data.message ,
      sender: "user",
      id: 8,
    })
    // axios.post('/api/messages', {
    //   ...data,
    //   conversationId: conversationId
    // })
  }

  const handleUpload = (result) => {
    axios.post('/api/messages', {
      image: result.info.secure_url,
      conversationId: conversationId
    })
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        message: ''
      })
    }
  }, [formState , reset])

  return ( 
    <div 
      className="
        py-4 
        px-4 
        bg-white 
        border-t 
        flex 
        items-center 
        gap-2 
        lg:gap-4 
        w-full
        rounded-b-lg
      "
    >
      {/* <CldUploadButton 
        options={{ maxFiles: 1 }} 
        onUpload={handleUpload} 
        uploadPreset="pgc9ehd5"
      >
        <HiPhoto size={30} className="text-sky-500" />
      </CldUploadButton> */}
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <MessageInput 
          id="message" 
          register={register} 
          errors={errors} 
          required 
          placeholder="Write a message"
        />
        <button 
          type="submit" 
          className="
            rounded-full 
            p-2 
            bg-sky-500 
            cursor-pointer 
            hover:bg-sky-600 
            transition
          "
        >
          <HiPaperAirplane
            size={18}
            className="text-white"
          />
        </button>
      </form>
    </div>
  );
}
 
export default Form;