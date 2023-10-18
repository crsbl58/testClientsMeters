import { useEffect, useState } from "react";
import MenuButtons from "../../ui/MenuButton/MenuButtons";
import styles from "./Crud.module.scss";
import Table from "../../ui/Table/Table";
import Input from "../../ui/Input/Input";
import { useClients, useMeters } from "../../../store/hooks";
import Button from "../../ui/Button/Button";
import validateRut from "../../../utils/validRut";

const Crud = () => {
  const {
    getAllClients,
    insertClients,
    updateClients,
    deleteClients,
    listClients,
  } = useClients();

  const { getAllMeters, insertMeters, updateMeters, listMeters, deleteMeters } =
    useMeters();

  const [menu, setmenu] = useState<any>({
    clients: {
      currentSelection: 0,
      stateMsj: "",
      list: [{ name: "Agregar" }, { name: "Modificar" }, { name: "Eliminar" }],
    },
    meters: {
      currentSelection: 0,
      stateMsj: "",
      list: [{ name: "Agregar" }, { name: "Modificar" }, { name: "Eliminar" }],
    },
  });

  const [stateFormClients, setStateFormClients] = useState<any>({
    rutCLients: {
      text: "",
      disabled: false,
      subText: { state: false, text: "" },
    },
    nameClients: {
      text: "",
      disabled: false,
      subText: { state: false, text: "" },
    },
    adressClients: {
      text: "",
      disabled: false,
      subText: { state: false, text: "" },
    },
    buttonClients: {
      text: "Guardar",
      disabled: true,
    },
  });

  const [stateFormMeters, setStateFormMeters] = useState<any>({
    codeMeters: {
      text: "",
      disabled: true,
      subText: { state: true, text: "" },
    },
    nameMeters: {
      text: "",
      disabled: true,
      subText: { state: false, text: "" },
    },
    descriptionMeters: {
      text: "",
      disabled: true,
      subText: { state: false, text: "" },
    },
    buttonMeters: {
      text: "Guardar",
      disabled: true,
    },
  });

  const [statelistClients, setStateListClients] = useState<any>({
    currentSelection: null,
    currentData: [],
    arrayTitle: [
      { name: "Rut" },
      { name: "Nombre" },
      { name: "Dirección" },
      { name: "Cant Medidores" },
    ],
    arrayData: [],
  });

  const [statelistMeters, setStateListMeters] = useState<any>({
    currentSelection: null,
    currentData: [],
    arrayTitle: [
      { name: "Codigó" },
      { name: "Nombre" },
      { name: "Fecha" },
      { name: "Descripción" },
    ],
    arrayData: [],
  });

  const changeInputs = (e: any, type: string) => {

    switch (type) {
      case "clients":
        setStateFormClients({
          ...stateFormClients,
          [e.currentTarget.name]: {
            ...stateFormClients[e.currentTarget.name],
            text: e.currentTarget.value,
          },
        });
        break;
      case "meters":
        setStateFormMeters({
          ...stateFormMeters,
          [e.currentTarget.name]: {
            ...stateFormMeters[e.currentTarget.name],
            text: e.currentTarget.value,
          },
        });
        break;
      default:
        break;
    }
  };

  const onClickTableClients = (list: any, index: number) => {
    switch (menu.clients.currentSelection) {
      case 0:
        setStateListClients({
          ...statelistClients,
          currentSelection: index,
          currentData: list,
        });
        break;
      case 1:
        setStateListClients({
          ...statelistClients,
          currentSelection: index,
          currentData: list,
        });
        setStateFormClients({
          ...stateFormClients,
          rutCLients: {
            ...stateFormClients.rutCLients,
            text: list[0],
            disabled: true,
          },
          nameClients: {
            ...stateFormClients.nameClients,
            text: list[1],
            disabled: false,
          },
          adressClients: {
            ...stateFormClients.adressClients,
            text: list[2],
            disabled: false,
          },
        });
        break;
      case 2:
        setStateListClients({
          ...statelistClients,
          currentSelection: index,
          currentData: list,
        });
        setStateFormClients({
          ...stateFormClients,
          rutCLients: {
            ...stateFormClients.rutCLients,
            text: list[0],
            disabled: true,
          },
          nameClients: {
            ...stateFormClients.nameClients,
            text: list[1],
            disabled: true,
          },
          adressClients: {
            ...stateFormClients.adressClients,
            text: list[2],
            disabled: true,
          },
        });
        break;
      default:
        break;
    }
  };

  const onClickTableMeters = (list: any, index: number) => {
    switch (menu.meters.currentSelection) {
      case 1:
        setStateListMeters({
          ...statelistMeters,
          currentSelection: index,
          currentData: list,
        });
        setStateFormMeters({
          ...stateFormMeters,
          codeMeters: {
            ...stateFormMeters.codeMeters,
            text: list[0],
            disabled: true,
          },
          nameMeters: {
            ...stateFormMeters.nameMeters,
            text: list[1],
            disabled: false,
          },
          descriptionMeters: {
            ...stateFormMeters.descriptionMeters,
            text: list[3],
            disabled: false,
          },
        });
        break;
      case 2:
        setStateListMeters({
          ...statelistMeters,
          currentSelection: index,
          currentData: list,
        });
        setStateFormMeters({
          ...stateFormMeters,
          codeMeters: {
            ...stateFormClients.rutCLients,
            text: list[0],
            disabled: true,
          },
          nameMeters: {
            ...stateFormClients.nameClients,
            text: list[1],
            disabled: true,
          },
          descriptionMeters: {
            ...stateFormMeters.descriptionMeters,
            text: list[2],
            disabled: true,
          },
        });
        break;
      default:
        break;
    }
  };

  const onclickButtonClients = () => {
    switch (menu.clients.currentSelection) {
      case 0:
        insertClients(
          stateFormClients.rutCLients.text,
          stateFormClients.nameClients.text,
          stateFormClients.adressClients.text
        );
        setStateListClients({
          ...statelistClients,
          arrayData: [],
          currentSelection: null,
          currentData: [],
        });
        configInputs("clients", [false, false, false], {
          buttonClients: {
            text: "Guardar",
            disabled: true,
          },
        });
        break;
      case 1:
        updateClients(
          stateFormClients.rutCLients.text,
          stateFormClients.nameClients.text,
          stateFormClients.adressClients.text
        );
        setStateListClients({
          ...statelistClients,
          arrayData: [],
          currentSelection: null,
          currentData: [],
        });
        configInputs("clients", [true, true, true], {
          buttonClients: {
            text: "Modificar",
            disabled: true,
          },
        });
        break;
      case 2:
        deleteClients(stateFormClients.rutCLients.text);
        setStateListClients({
          ...statelistClients,
          arrayData: [],
          currentSelection: null,
          currentData: [],
        });
        configInputs("clients", [true, true, true], {
          buttonClients: {
            text: "Eliminar",
            disabled: true,
          },
        });
        break;
      default:
        break;
    }
  };

  const onclickButtonMeters = () => {
    switch (menu.meters.currentSelection) {
      case 0:
        insertMeters(
          stateFormMeters.codeMeters.text,
          stateFormMeters.nameMeters.text,
          stateFormMeters.descriptionMeters.text,
          statelistClients.currentData[0]
        );
        setStateListMeters({
          ...statelistMeters,
          arrayData: [],
          currentSelection: null,
          currentData: [],
        });
        configInputs("meters", [false, false, false], {
          buttonClients: {
            text: "Guardar",
            disabled: true,
          },
        });
        break;
      case 1:
        updateMeters(
          stateFormMeters.codeMeters.text,
          stateFormMeters.nameMeters.text,
          stateFormMeters.descriptionMeters.text,
          statelistClients.currentData[0]
        );
        setStateListMeters({
          ...statelistMeters,
          arrayData: [],
          currentSelection: null,
          currentData: [],
        });
        configInputs("meters", [true, true, true], {
          buttonMeters: {
            text: "Modificar",
            disabled: true,
          },
        });
        break;
      case 2:
        deleteMeters(
          stateFormMeters.codeMeters.text,
          statelistClients.currentData[0]
        );
        setStateListMeters({
          ...statelistMeters,
          arrayData: [],
          currentSelection: null,
          currentData: [],
        });
        configInputs("meters", [true, true, true], {
          buttonClients: {
            text: "Eliminar",
            disabled: true,
          },
        });
        break;
      default:
        break;
    }
  };

  const configInputs = (
    selection: string,
    disabled: any = [true, true, true],
    extra: any = {}
  ) => {
    switch (selection) {
      case "clients":
        setStateFormClients({
          ...stateFormClients,
          rutCLients: {
            ...stateFormClients.rutCLients,
            disabled: disabled[0],
            text: "",
          },
          nameClients: {
            ...stateFormClients.nameClients,
            disabled: disabled[1],
            text: "",
          },
          adressClients: {
            ...stateFormClients.adressClients,
            disabled: disabled[2],
            text: "",
          },
          ...extra,
        });

        break;
      case "meters":
        setStateFormMeters({
          ...stateFormMeters,
          codeMeters: {
            ...stateFormMeters.codeMeter,
            disabled: disabled[0],
            text: "",
          },
          nameMeters: {
            ...stateFormMeters.nameMeter,
            disabled: disabled[1],
            text: "",
          },
          descriptionMeters: {
            ...stateFormMeters.nameMeter,
            disabled: disabled[2],
            text: "",
          },
          ...extra,
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    getAllClients();
  }, []);

  useEffect(() => {
    setStateListClients({
      ...statelistClients,
      arrayData: listClients.map((list: any) => [
        list.rut,
        list.name,
        list.address,
        list.meterscount,
      ]),
    });
  }, [listClients]);

  useEffect(() => {
    switch (menu.clients.currentSelection) {
      case 0:
        setStateListClients({
          ...statelistClients,
          currentSelection: null,
          currentData: [],
        });
        configInputs("clients", [false, false, false], {
          buttonClients: {
            text: "Guardar",
            disabled: true,
          },
        });
        break;
      case 1:
        setStateListClients({
          ...statelistClients,
          currentSelection: null,
          currentData: [],
        });
        configInputs("clients", [true, true, true], {
          buttonClients: {
            text: "Modificar",
            disabled: true,
          },
        });
        break;
      case 2:
        setStateListClients({
          ...statelistClients,
          currentSelection: null,
          currentData: [],
        });
        configInputs("clients", [true, true, true], {
          buttonClients: {
            text: "Eliminar",
            disabled: true,
          },
        });
        break;
      default:
        break;
    }
  }, [menu.clients.currentSelection]);

  useEffect(() => {
    if (
      validateRut(stateFormClients.rutCLients.text) === true &&
      stateFormClients.nameClients.text.length > 1 &&
      stateFormClients.adressClients.text.length > 1
    ) {
      switch (menu.clients.currentSelection) {
        case 0:
          if (
            statelistClients.arrayData.filter(
              (list: any) => list[0] === stateFormClients.rutCLients.text
            ).length === 0
          ) {
            setStateFormClients({
              ...stateFormClients,
              buttonClients: {
                ...stateFormClients.buttonClients,
                disabled: false,
              },
            });
          }

          break;
        case 1:
          if (
            statelistClients.arrayData[statelistClients.currentSelection][0] ===
              stateFormClients.rutCLients.text &&
            statelistClients.arrayData[statelistClients.currentSelection][1] ===
              stateFormClients.nameClients.text &&
            statelistClients.arrayData[statelistClients.currentSelection][2] ===
              stateFormClients.adressClients.text
          ) {
            setStateFormClients({
              ...stateFormClients,
              buttonClients: {
                ...stateFormClients.buttonClients,
                disabled: true,
              },
            });
          } else {
            setStateFormClients({
              ...stateFormClients,
              buttonClients: {
                ...stateFormClients.buttonClients,
                disabled: false,
              },
            });
          }
          break;
        case 2:
          setStateFormClients({
            ...stateFormClients,
            buttonClients: {
              ...stateFormClients.buttonClients,
              disabled: false,
            },
          });
          break;
        default:
          break;
      }
    } else {
      setStateFormClients({
        ...stateFormClients,
        buttonClients: {
          ...stateFormClients.buttonClients,
          disabled: true,
        },
      });
    }
  }, [
    stateFormClients.rutCLients.text,
    stateFormClients.nameClients.text,
    stateFormClients.adressClients.text,
  ]);

  useEffect(() => {
    if (statelistClients.currentSelection != null) {
      getAllMeters(statelistClients.currentData[0]);

      switch (menu.meters.currentSelection) {
        case 0:
          setStateListMeters({
            ...statelistMeters,
            currentSelection: null,
            currentData: [],
          });

          configInputs("meters", [false, false, false], {
            buttonMeters: {
              text: "Guardar",
              disabled: true,
            },
          });

          break;
        case 1:

          setStateListMeters({
            ...statelistMeters,
            currentSelection: null,
            currentData: [],
          });

          configInputs("meters", [true, true, true], {
            buttonMeters: {
              text: "Modificar",
              disabled: true,
            },
          });
          break;
        case 2:
          setStateListMeters({
            ...statelistMeters,
            currentSelection: null,
            currentData: [],
          });

          configInputs("meters", [true, true, true], {
            buttonMeters: {
              text: "Eliminar",
              disabled: true,
            },
          });
          break;
        default:
          break;
      }
    } else {
      setStateListMeters({
        ...statelistMeters,
        arrayData: [],
        currentSelection: null,
        currentData: [],
      });

      configInputs("meters", [true, true, true], {});
    }
  }, [menu.meters.currentSelection, statelistClients.currentSelection]);

  useEffect(() => {
    if (
      stateFormMeters.codeMeters.text.length > 1 &&
      stateFormMeters.nameMeters.text.length > 1 &&
      stateFormMeters.descriptionMeters.text.length > 1
    ) {
      switch (menu.meters.currentSelection) {
        case 0:
          if (
            statelistMeters.arrayData.filter(
              (list: any) => list[0] === stateFormMeters.codeMeters.text
            ).length === 0
          ) {
            setStateFormMeters({
              ...stateFormMeters,
              buttonMeters: {
                ...stateFormMeters.buttonMeters,
                disabled: false,
              },
            });
          }

          break;
        case 1:
          if (
            statelistMeters.arrayData[statelistMeters.currentSelection][0] ===
              stateFormMeters.codeMeters.text &&
            statelistMeters.arrayData[statelistMeters.currentSelection][1] ===
              stateFormMeters.nameMeters.text &&
            statelistMeters.arrayData[statelistMeters.currentSelection][3] ===
              stateFormMeters.descriptionMeters.text
          ) {
            setStateFormMeters({
              ...stateFormMeters,
              buttonMeters: {
                ...stateFormMeters.buttonMeters,
                disabled: true,
              },
            });
          } else {
            setStateFormMeters({
              ...stateFormMeters,
              buttonMeters: {
                ...stateFormMeters.buttonMeters,
                disabled: false,
              },
            });
          }
          break;
        case 2:
          setStateFormMeters({
            ...stateFormMeters,
            buttonMeters: {
              ...stateFormMeters.buttonMeters,
              disabled: false,
            },
          });
          break;
        default:
          break;
      }
    } else {
      setStateFormMeters({
        ...stateFormMeters,
        buttonMeters: {
          ...stateFormMeters.buttonMeters,
          disabled: true,
        },
      });
    }
  }, [
    stateFormMeters.codeMeters.text,
    stateFormMeters.nameMeters.text,
    stateFormMeters.descriptionMeters.text,
  ]);

  useEffect(() => {
    setStateListMeters({
      ...statelistMeters,
      arrayData: listMeters.map((list: any) => {
        const date = list.date.split("T")[0];
        return [list.code, list.name, date, list.description];
      }),
    });
  }, [listMeters]);

  return (
    <div className={styles.container}>
      <div>
        <h2>Clientes</h2>
        <MenuButtons
          menu={menu.clients}
          onClick={(index: number) =>
            setmenu({
              ...menu,
              clients: { ...menu.clients, currentSelection: index },
            })
          }
        />
        <div>
          <Input
            Only="all"
            onChange={(e: any) => {
              changeInputs(e, "clients");
            }}
            disabled={stateFormClients.rutCLients.disabled}
            subText={stateFormClients.rutCLients.subText}
            value={stateFormClients.rutCLients.text}
            name="rutCLients"
            text="Rut"
          />
          <Input
            Only="all"
            onChange={(e: any) => {
              changeInputs(e, "clients");
            }}
            disabled={stateFormClients.nameClients.disabled}
            subText={stateFormClients.nameClients.subText}
            value={stateFormClients.nameClients.text}
            name="nameClients"
            text="nombre"
          />
          <Input
            Only="all"
            onChange={(e: any) => {
              changeInputs(e, "clients");
            }}
            disabled={stateFormClients.adressClients.disabled}
            subText={stateFormClients.adressClients.subText}
            value={stateFormClients.adressClients.text}
            name="adressClients"
            text="Dirección"
          />
        </div>

        <Table
          title="Clientes"
          onClick={onClickTableClients}
          currentSelection={statelistClients.currentSelection}
          arrayTitles={statelistClients.arrayTitle}
          arrayData={statelistClients.arrayData}
        />
        <Button
          onclick={onclickButtonClients}
          disabled={stateFormClients.buttonClients.disabled}
          text={stateFormClients.buttonClients.text}
          width="8rem"
        />
      </div>

      <div>
        <h2>Medidores</h2>
        <MenuButtons
          menu={menu.meters}
          onClick={(index: number) => {
   
            if (statelistClients.currentSelection != null) {
              setmenu({
                ...menu,
                meters: { ...menu.meters, currentSelection: index },
              });
            }
          }}
        />

        <div>
          <Input
            Only="number"
            onChange={(e: any) => {
              changeInputs(e, "meters");
            }}
            disabled={stateFormMeters.codeMeters.disabled}
            subText={stateFormMeters.codeMeters.subText}
            value={stateFormMeters.codeMeters.text}
            name="codeMeters"
            text="Code"
          />
          <Input
            Only="all"
            onChange={(e: any) => {
              changeInputs(e, "meters");
            }}
            disabled={stateFormMeters.nameMeters.disabled}
            subText={stateFormMeters.nameMeters.subText}
            value={stateFormMeters.nameMeters.text}
            name="nameMeters"
            text="Nombre"
          />
          <Input
            Only="all"
            onChange={(e: any) => {
              changeInputs(e, "meters");
            }}
            disabled={stateFormMeters.descriptionMeters.disabled}
            subText={stateFormMeters.descriptionMeters.subText}
            value={stateFormMeters.descriptionMeters.text}
            name="descriptionMeters"
            text="Descripción"
          />
        </div>
        <Table
          title={statelistClients.currentData[1]}
          onClick={onClickTableMeters}
          currentSelection={statelistMeters.currentSelection}
          arrayTitles={statelistMeters.arrayTitle}
          arrayData={statelistMeters.arrayData}
        />
        <Button
          onclick={onclickButtonMeters}
          disabled={stateFormMeters.buttonMeters.disabled}
          text={stateFormMeters.buttonMeters.text}
          width="8rem"
        />
      </div>
    </div>
  );
};

export default Crud;
