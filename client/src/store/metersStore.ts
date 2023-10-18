import { create, useStore } from "zustand";

import { apiInstance } from "../utils/api";

interface userState {
  typeError: number;
  listMeters: any;
  error: boolean;
  setMeters: (user: any) => void;
  getAllMeters: (rut: string) => void;
  insertMeters: (
    code: string,
    name: string,
    description: string,
    rutClient: string) => void;
  updateMeters: (code: string, name: string, description: string, rutCurrent: string) => void;
  deleteMeters: (code: string, rut: string) => void;
  reset: () => void;
  resetAll: () => void;
}

export const metersStore = create<userState>((set, get) => ({
  listMeters: [],
  error: false,
  typeError: 0,

  setMeters: async (data: any) => {
    set((state) => ({ ...state, ...data }))
  },

  getAllMeters: async (rut: string) => {
    try {
      const { data } = await apiInstance().
        apiAxios.get(`/meters/getAllMeters/${rut}`);

      if (data.error) {
        set((state) => ({
          ...state, error: true, typeError: 0
        }));
        return
      }

      set((state) => ({
        ...state, listMeters: data.rows,
      }));

    } catch (e) {

    }


  },

  insertMeters: async (
    code: string,
    name: string,
    description: string,
    rutClient: string
  ) => {
    try {
      const { data } = await apiInstance().
        apiAxios.post(`/meters/insertMeters`, {
          code,
          name,
          description,
          rutClient
        });


      if (data.error) {
        set((state) => ({
          ...state, error: true, typeError: 1
        }));
        return
      }

      set((state) => ({
        ...state, listMeters: data.rows
      }));

    } catch (e) {

    }


  },

  updateMeters: async (code: string, name: string, description: string, rutCurrent: string) => {
    try {
      const { data } = await apiInstance().
        apiAxios.put(`/meters/updateMeters`, {
          code,
          name,
          description,
          rutCurrent
        });

      if (data.error) {
        set((state) => ({
          ...state, error: true, typeError: 2
        }));
        return
      }

      set((state) => ({
        ...state, listMeters: data.rows
      }));

    } catch (e) {

    }

  },

  deleteMeters: async (code: string, rut: string) => {
    try {
      const { data } = await apiInstance().apiAxios.delete(`/meters/deleteMeters/${code}/${rut}`);
      if (data.error) {
        set((state) => ({
          ...state, error: true, typeError: 3
        }));

        return
      }
      set((state) => ({
        ...state, listMeters: data.rows
      }));

    } catch (e) {

    }

  },

  reset: () =>
    set((state) => ({
      ...state,
      listCylinders: [],
      listContent: [],
      listCapacity: [],
      error: false,
      typeError: 0,
    })),

  resetAll: () => set({}, true),
}));
