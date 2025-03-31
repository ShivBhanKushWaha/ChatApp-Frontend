// import { create } from "zustand";

// const useConversation = create((set) => ({
//   selectedConversation: null,
//   setSelectedConversation: (selectedConversation) =>
//     set({ selectedConversation }),
//   messages: [],
//   setMessages: (messages) => set({ messages }),
// }));
// export default useConversation;
import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }),

  messages: [],

  // functional and array both 
  // setMessages: (update) =>
  //   set((state) => ({
  //     messages: typeof update === "function" ? update(state.messages) : update, // Supports function or array
  //   })),

  // Always update messages as an array, supporting both direct and functional updates
  setMessages: (newMessages) =>
    set((state) => ({
      messages: Array.isArray(newMessages)
        ? newMessages
        : typeof newMessages === "function"
        ? newMessages(state.messages)
        : state.messages,
    })),
}));

export default useConversation;
