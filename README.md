# testClientsMeters

# descripción
 interfaz gráfica que permite listar, crear, actualizar y eliminar datos de medidores y de clientes.
 Un cliente puede tener de 1 hasta 3 medidores asignados.
 herramientas React.js(Typescript, Sass, Zustand, Axios, Atomic Design), express(TypeScript, MVC),

## Configuración del client (React)

1. **Instalación de Dependencias:**
  
   cd frontend,
   yarn,
   yarn start

   ## Configuración de la api (node, express)

1. **Instalación de Dependencias:**

   cd api,
   yarn,
   yarn dev


 **Script bd:**
--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2023-10-18 16:20:56

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16399)
-- Name: clients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.clients (
    rut text NOT NULL,
    name text,
    address text
);


ALTER TABLE public.clients OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16404)
-- Name: meters; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.meters (
    code text NOT NULL,
    name text,
    date date,
    rutclient text,
    description text
);


ALTER TABLE public.meters OWNER TO postgres;

--
-- TOC entry 4838 (class 0 OID 16399)
-- Dependencies: 215
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.clients (rut, name, address) FROM stdin;
18181478-0	Cristobal Ortega	san vicente
\.


--
-- TOC entry 4839 (class 0 OID 16404)
-- Dependencies: 216
-- Data for Name: meters; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.meters (code, name, date, rutclient, description) FROM stdin;
111111	medidor 1.5	2023-10-18	18181478-0	sin descripción
33333	medidor 4.7	2023-10-18	18181478-0	sin descripción
\.


--
-- TOC entry 4692 (class 2606 OID 16424)
-- Name: clients clients_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (rut);


--
-- TOC entry 4694 (class 2606 OID 16446)
-- Name: meters meter_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.meters
    ADD CONSTRAINT meter_pkey PRIMARY KEY (code);


-- Completed on 2023-10-18 16:20:57

--
-- PostgreSQL database dump complete
--



   
