import { create } from "zustand";
import { persist } from "zustand/middleware";
import { NoteFormValues } from "@/types/note";

const initialDraft: NoteFormValues = {
  title: "",
  content: "",
  tag: "Todo",
};

type NoteStore = {
  draft: NoteFormValues;
  setDraft: (note: NoteFormValues) => void;
  clearDraft: () => void;
};

export const useNoteStore = create<NoteStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (note) => set(() => ({ draft: note })),
      clearDraft: () => set(() => ({ draft: initialDraft })),
    }),
    {
      name: "note-draft",
    },
  ),
);
