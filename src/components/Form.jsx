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
import cahtLodingStore from "../store/chat.loading"

const Form = () => {
  const cahtLoding = cahtLodingStore()

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
    chat.appendMessage({
      body: data.message ,
      type:"text",
      sender: "user",
      id: 8,
    })
    cahtLoding.setLoading(true)
  
    axios.post('http://38.242.132.56:11000', {
    "message": data.message
  })
  .then((res) => {
    cahtLoding.setLoading(false)
    console.log(res,"res")
    chat.appendMessage({
      body: res.data ,
      type:"text",
      sender: "bot",
      id: 8,
    })
  })
  .catch((err) => {

    cahtLoding.setLoading(false)
    chat.appendMessage({
      body: res.data ,
      type:"error",
      sender: "bot",
      id: 8,
    })
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
   
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <MessageInput 
          id="message" 
          register={register} 
          errors={errors} 
          required 
          placeholder="سوال خود را بپرسید؟"
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