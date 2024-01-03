'use client';

import Image from "next/image";
import MessageBox from "./Box";
import Form from "./Form";
import { useEffect, useState , useRef} from "react";
// import { useEffect, useState } from "react";

export default function MainChat() {

  const bottomRef = useRef(null);

  const initialMessages =     [{ body: "AAAA", id: 1 },
  { body: "abcd", id: 2 },
  { body: "abcd", id: 3 },
  { body: "abcd", id: 4 },
  { body: "abcd", id: 5 },
  { body: "abcd", id: 6 },
  { body: "abcd", id: 1 },
  { body: "abcd", id: 2 },
  { body: "abcd", id: 3 },
  { body: "abcd", id: 4 },
  { body: "abcd", id: 5 },
  { body: "ZZZZZ", id: 6 },]

  const [messages, setMessages] = useState(initialMessages);

  useEffect(()=>{
    console.log(messages);
    bottomRef?.current?.scrollIntoView();
  },[messages])
  
  // const { conversationId } = useConversation();

  // useEffect(() => {
  //   axios.post(`/api/conversations/${conversationId}/seen`);
  // }, [conversationId]);

  // useEffect(() => {
  //   pusherClient.subscribe(conversationId)
  //   bottomRef?.current?.scrollIntoView();

  //   const messageHandler = (message) => {
  //     axios.post(`/api/conversations/${conversationId}/seen`);

  //     setMessages((current) => {
  //       if (find(current, { id: message.id })) {
  //         return current;
  //       }

  //       return [...current, message]
  //     });
      
  //     bottomRef?.current?.scrollIntoView();
  //   };

  //   const updateMessageHandler = (newMessage) => {
  //     setMessages((current) => current.map((currentMessage) => {
  //       if (currentMessage.id === newMessage.id) {
  //         return newMessage;
  //       }
  
  //       return currentMessage;
  //     }))
  //   };
  

  //   // pusherClient.bind('messages:new', messageHandler)
  //   // pusherClient.bind('message:update', updateMessageHandler);

  //   return () => {
  //     // pusherClient.unsubscribe(conversationId)
  //     // pusherClient.unbind('messages:new', messageHandler)
  //     // pusherClient.unbind('message:update', updateMessageHandler)
  //   }
  // }, [])


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{
      background: "#36D1DC",
      background: "-webkit-linear-gradient(to right, #5B86E5, #36D1DC)",
      background: "linear-gradient(to right, #5B86E5, #36D1DC)",
    }}
    onClick={()=>{
      setMessages(current => [...current , {body: "ZZZZZ", id: 6}])
    }}
    >
      <div className="w-full h-full bg-white rounded-lg">
      <div className="w-full flex-1 h-[70vh] overflow-y-auto">
        {messages.map((message, i) => (
          <MessageBox
            isLast={i === messages.length - 1}
            key={message.id}
            data={message}
          />
        ))}
        <div className="pt-2" ref={bottomRef} />
      </div>
      <Form />
      </div>
    </main>
  );
}