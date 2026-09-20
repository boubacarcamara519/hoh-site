--
-- PostgreSQL database dump
--

\restrict Sx5nqgEqFWtYSWoNEtqnJjFpIjIfpkK57uDhk1fk9fZrsaNco03juf4kgG1XfMK

-- Dumped from database version 16.14
-- Dumped by pg_dump version 16.14

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
-- Name: contact_messages; Type: TABLE; Schema: public; Owner: hoh
--

CREATE TABLE public.contact_messages (
    id bigint NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    subject text,
    message text NOT NULL,
    payload jsonb NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.contact_messages OWNER TO hoh;

--
-- Name: contact_messages_id_seq; Type: SEQUENCE; Schema: public; Owner: hoh
--

CREATE SEQUENCE public.contact_messages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.contact_messages_id_seq OWNER TO hoh;

--
-- Name: contact_messages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hoh
--

ALTER SEQUENCE public.contact_messages_id_seq OWNED BY public.contact_messages.id;


--
-- Name: contact_messages id; Type: DEFAULT; Schema: public; Owner: hoh
--

ALTER TABLE ONLY public.contact_messages ALTER COLUMN id SET DEFAULT nextval('public.contact_messages_id_seq'::regclass);


--
-- Data for Name: contact_messages; Type: TABLE DATA; Schema: public; Owner: hoh
--

COPY public.contact_messages (id, name, email, subject, message, payload, created_at) FROM stdin;
1	Camara boubacar	camaraboubacar635@yahoo.fr	Inscription	je voudrais m'inscrire pour collaborer avec vous	{"name": "Camara boubacar", "email": "camaraboubacar635@yahoo.fr", "message": "je voudrais m'inscrire pour collaborer avec vous", "subject": "Inscription"}	2026-09-20 10:49:29.554721+00
2	Camara boubacar	test@gmail.com	Inscription	je voudrais m'inscrire pour collaborer avec vous	{"name": "Camara boubacar", "email": "test@gmail.com", "message": "je voudrais m'inscrire pour collaborer avec vous", "subject": "Inscription"}	2026-09-20 10:50:09.126205+00
3	Camara bouba	test@gmail.com	Inscriptions test	je voudrais m'inscrire pour collaborer avec vous	{"name": "Camara bouba", "email": "test@gmail.com", "message": "je voudrais m'inscrire pour collaborer avec vous", "subject": "Inscriptions test"}	2026-09-20 11:02:53.225579+00
4	camara	camaraboubacar635@yahoo.fr	Inscriptions test	Merci	{"name": "camara", "email": "camaraboubacar635@yahoo.fr", "message": "Merci", "subject": "Inscriptions test"}	2026-09-20 11:03:28.81009+00
5	Camara boubacar	test@gmail.com	Inscriptions test	Merci pour ce test	{"name": "Camara boubacar", "email": "test@gmail.com", "message": "Merci pour ce test", "subject": "Inscriptions test"}	2026-09-20 11:10:23.637282+00
6	Test	test@gmail.com	Test	Message de test	{"name": "Test", "email": "test@gmail.com", "message": "Message de test", "subject": "Test"}	2026-09-20 11:27:11.390654+00
\.


--
-- Name: contact_messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: hoh
--

SELECT pg_catalog.setval('public.contact_messages_id_seq', 6, true);


--
-- Name: contact_messages contact_messages_pkey; Type: CONSTRAINT; Schema: public; Owner: hoh
--

ALTER TABLE ONLY public.contact_messages
    ADD CONSTRAINT contact_messages_pkey PRIMARY KEY (id);


--
-- Name: contact_messages_created_at_idx; Type: INDEX; Schema: public; Owner: hoh
--

CREATE INDEX contact_messages_created_at_idx ON public.contact_messages USING btree (created_at DESC);


--
-- PostgreSQL database dump complete
--

\unrestrict Sx5nqgEqFWtYSWoNEtqnJjFpIjIfpkK57uDhk1fk9fZrsaNco03juf4kgG1XfMK

