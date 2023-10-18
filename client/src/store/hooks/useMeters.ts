import { shallow } from "zustand/shallow";
import { metersStore } from "../metersStore";

const useClients = () => {
  const {
    typeError,
    error: metersError,
    listMeters
  } = metersStore(
    (state) => ({
      error: state.error,
      typeError: state.typeError,
      listMeters: state.listMeters,
    }),
    shallow
  );

  const {
    setMeters,
    getAllMeters,
    insertMeters,
    updateMeters,
    deleteMeters,
  } = metersStore();

  return {
    typeError,
    metersError,
    listMeters,
    setMeters,
    getAllMeters,
    insertMeters,
    updateMeters,
    deleteMeters
  };
};

export default useClients;
