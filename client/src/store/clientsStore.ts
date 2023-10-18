import { create, useStore } from "zustand";

import { apiInstance } from "../utils/api";

interface userState {
  typeError: number;
  listClients: any;
  error: boolean;
  setClients: (user: any) => void;
  getAllClients: () => void;
  insertClients: (rut: string, name: string, address: string) => void;
  updateClients: (rut: string, name: string, address: string) => void;
  deleteClients: (rut: any) => void;
  reset: () => void;
  resetAll: () => void;
}

export const clientsStore = create<userState>((set, get) => ({
  listClients: [],
  error: false,
  typeError: 0,

  setClients: async (data: any) => {
    set((state) => ({ ...state, ...data }))
  },
  getAllClients: async () => {
    try {
      const { data } = await apiInstance().
        apiAxios.get(`/clients/getAllClients`);

      if (data.error) {
        set((state) => ({
          ...state, error: true, typeError: 0
        }));
        return
      }

      set((state) => ({
        ...state, listClients: data.rows,
      }));

    } catch (e) {

    }


  },

  insertClients: async (rut: string, name: string, address: string) => {
    try {
      const { data } = await apiInstance().
        apiAxios.post(`/clients/insertClients`, {
          rut,
          name,
          address,
        });


      if (data.error) {
        set((state) => ({
          ...state, error: true, typeError: 1
        }));
        return
      }

      set((state) => ({
        ...state, listClients: data.rows
      }));

    } catch (e) {

    }


  },
  updateClients: async (rut: string, name: string, address: string) => {
    try {
      const { data } = await apiInstance().
        apiAxios.put(`/clients/updateClients`, {
          rut,
          name,
          address,
        });

      if (data.error) {
        set((state) => ({
          ...state, error: true, typeError: 2
        }));
        return
      }

      set((state) => ({
        ...state, listClients: data.rows
      }));

    } catch (e) {

    }

  },
  deleteClients: async (rut: string) => {
    try {
      const { data } = await apiInstance().apiAxios.delete(`/clients/deleteClients/${rut}`);
      if (data.error) {
        set((state) => ({
          ...state, error: true, typeError: 3
        }));

        return
      }
      set((state) => ({
        ...state, listClients: data.rows
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
