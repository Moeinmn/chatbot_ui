import { create } from "zustand";

export const useChat = create((set) => ({
  messages: [
    { body: "1111سلام خوبی !", sender: "bot", id: 2 },
    { body: "سلام خوبی !", sender: "bot", id: 3 },
  ],
  appendMessage: (newMessage) =>
    set((state) => ({ messages: [...state.messages, newMessage] })),
  removeAllBears: () => set({ bears: 0 }),
}));
