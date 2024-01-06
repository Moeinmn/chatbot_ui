import { create } from 'zustand';


const cahtLodingStore = create((set) => ({
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading }), // Added setLoading state
}));


export default cahtLodingStore;
