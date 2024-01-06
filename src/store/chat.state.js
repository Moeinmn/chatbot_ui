import { create } from "zustand";

export const useChat = create((set) => ({
  messages: [
    { body: " سلام! 😊 خوش آمدید! امیدوارم که روزتان پر از خوبی‌ها و شادی باشد. اگر سوالی یا نیاز به کمک دارید، خیالتان راحت! من در اینجا هستم تا کمک کنم.", sender: "bot", id: 2 },
 
    

  ],
  appendMessage: (newMessage) =>
    set((state) => ({ messages: [...state.messages, newMessage] })),
  removeAllBears: () => set({ bears: 0 }),
}));
