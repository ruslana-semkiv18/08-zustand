import axios from "axios";
import type { Note, NoteFormValues } from "@/types/note";

export interface NotesResponse {
  notes: Note[];
  totalPages: number;
}

const API_KEY = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
axios.defaults.baseURL = "https://notehub-public.goit.study/api";
axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;

export const fetchNotes = async (
  search: string,
  page: number = 1,
  perPage: number = 12,
  tag?: string,
): Promise<NotesResponse> => {
  const response = await axios.get<NotesResponse>("/notes", {
    params: { search, page, perPage, tag },
  });

  return response.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const response = await axios.get<Note>(`/notes/${id}`);

  return response.data;
};

export const createNote = async (noteData: NoteFormValues): Promise<Note> => {
  const response = await axios.post<Note>("/notes", noteData);

  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response = await axios.delete<Note>(`/notes/${id}`);

  return response.data;
};
