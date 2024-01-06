'use client';

import MessageBox from "./Box";
import Form from "./Form";
import { useEffect, useState , useRef} from "react";
import {useChat} from "../store/chat.state"


export default function MainChat() {

  const bottomRef = useRef(null);

  const messages = useChat((s)=>s.messages)



 

  useEffect(()=>{
    console.log(messages);
    bottomRef?.current?.scrollIntoView();
  },[messages])
 

  return (
    <>
     <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{
      background: "#36D1DC",
      background: "-webkit-linear-gradient(to right, #5B86E5, #36D1DC)",
      background: "linear-gradient(to right, #5B86E5, #36D1DC)",
    }}
    >
      <h2>پشتیبان هوشمند شرکت ساپ</h2>
      <div className="w-full h-full bg-white rounded-lg">
      <div className="flex flex-col-reverse w-full flex-1 h-[70vh] overflow-y-auto scroll_bar_styling">
        <div className="h-fit">
        {messages.map((message, i) => (
          <MessageBox
            isLast={i === messages.length - 1}
            key={message.id}
            data={message}
          />
        ))}
        <div className="pt-2" ref={bottomRef} />
        </div>
      </div>
      <Form />
      </div>
    </main>
    </>
   
  );
}