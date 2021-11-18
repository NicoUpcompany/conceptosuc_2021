/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { notification, Spin, Table, Input, Space, Button, ConfigProvider, Popconfirm } from "antd";
import es_ES from "antd/es/locale/es_ES";
import { SearchOutlined, ExportOutlined, AuditOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import jwtDecode from "jwt-decode";
import XLSX from "xlsx";
import { ExportSheet } from "react-xlsx-sheet";
import { useHistory } from "react-router-dom";
import moment from "moment";
import "moment/locale/es";

import Socket from "../../../utils/socket";
import { getAccessTokenApi } from "../../../api/auth";
 

import "./Options.scss";
import { getTestApi } from "../../../api/test";

const votesHeaders = [
	{ title: "ID", dataIndex: "_id" },
	{ title: "Correo", dataIndex: "email" },
	{ title: "Pregunta 1", dataIndex: "question1" },
	{ title: "Pregunta 2", dataIndex: "question2" },
	{ title: "Pregunta 3", dataIndex: "question3" },
	{ title: "Pregunta 4", dataIndex: "question4" },
	{ title: "Pregunta 5", dataIndex: "question5" },
	{ title: "Pregunta 6", dataIndex: "question6" },
	{ title: "Pregunta 7", dataIndex: "question7" },
	{ title: "Pregunta 8", dataIndex: "question8" },
	{ title: "Pregunta 9", dataIndex: "question9" },
	{ title: "Pregunta 10", dataIndex: "question10" },
	{ title: "Pregunta 11", dataIndex: "question11" },
	{ title: "Pregunta 12", dataIndex: "question12" },
	{ title: "Pregunta 13", dataIndex: "question13" },
	{ title: "Pregunta 14", dataIndex: "question14" },
	{ title: "Pregunta 15", dataIndex: "question15" },
	{ title: "Pregunta 16", dataIndex: "question16" },
	{ title: "Pregunta 17", dataIndex: "question17" },
	{ title: "Pregunta 18", dataIndex: "question18" },
	{ title: "Pregunta 19", dataIndex: "question19" },
	{ title: "Pregunta 20", dataIndex: "question20" },
	{ title: "Pregunta 21", dataIndex: "question21" },
	{ title: "Pregunta 22", dataIndex: "question22" },
	{ title: "Pregunta 23", dataIndex: "question23" },
	{ title: "Pregunta 24", dataIndex: "question24" },
	{ title: "Pregunta 25", dataIndex: "question25" },
	{ title: "Pregunta 26", dataIndex: "question26" },
	{ title: "Pregunta 27", dataIndex: "question27" },
	{ title: "Pregunta 28", dataIndex: "question28" },
	{ title: "Pregunta 29", dataIndex: "question29" },
	{ title: "Pregunta 30", dataIndex: "question30" },
	{ title: "Día y hora de registro", dataIndex: "time" },
];

const testsHeaders = [
	{ title: "ID", dataIndex: "_id" },
	{ title: "Correo", dataIndex: "email" },
	{ title: "Nombre", dataIndex: "name"},
	{title: "Apellido", dataIndex: "lastname"},
	{title: "Correctas", dataIndex: "correctas"},
	{title: "Incorrectas", dataIndex: "incorrectas"},
	{title: "Status", dataIndex: "aprobado"},
	{title: "Puntaje", dataIndex: "ptos"},
	{title: "Nota", dataIndex: "note"},
	{ title: "Día y hora de registro", dataIndex: "time" },
];


let searchInput = "";

export const TestPage = () => {

	const history = useHistory();

	const [loading, setLoading] = useState(false);
	const [token, setToken] = useState(null);
	const [searchText, setSearchText] = useState("");
	const [searchedColumn, setSearchedColumn] = useState("");
    const [testData, setTestData] = useState();


	useEffect(() => {
		try {
			setLoading(true);
			let interval;
			const tokenAux = getAccessTokenApi();
			if (tokenAux === null) {
				history.push("/dashboard/iniciarsesion");
			} else {
				const decodedToken = jwtDecode(tokenAux);
				if (decodedToken.role !== "Admin") {
					history.push("/dashboard/iniciarsesion");
				} else {
					setToken(tokenAux);
					const user = {
						id: decodedToken.id,
						route: window.location.pathname,
					};
					Socket.emit("UPDATE_ROUTE", user);

                    interval = setInterval(() => {
						getTests(tokenAux);
					}, 5000);
				}
			}
			return () => clearInterval(interval);
		} catch (error) {
			history.push("/dashboard/iniciarsesion");
		}
	}, []);


	const getTests = async (tokenAux) => {
		await getTestApi(tokenAux).then((resp) => {
			const arrayTests = [];
			if (!resp.ok) {
				notification["error"]({
					message: resp.message,
				});
			} else {
				resp.tests.forEach((item) => {
					console.log(item);
					const element = {
						...item,
						email: item.user.email,
						name: item.user.name, 
						lastname: item.user.lastname,
						aprobado: (item.user.aprobado) ? "Aprobado" : "Reprobado",
						correctas: item.user.correctas,
						incorrectas: (21-item.user.correctas),
						time: moment(item.time).format("LLL"),
						key: item._id,
					};
					arrayTests.push(element);
				});
			}
			setTestData(arrayTests);
			setLoading(false);
		});
	};



	const getColumnSearchProps = (dataIndex) => ({
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
			<div style={{ padding: 8 }}>
				<Input
					ref={(node) => {
						searchInput = node;
					}}
					placeholder={"Buscar"}
					value={selectedKeys[0]}
					onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
					onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
					style={{ width: 188, marginBottom: 8, display: "block" }}
				/>
				<Space>
					<Button
						type="primary"
						onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
						icon={<SearchOutlined />}
						size="small"
						style={{ width: 90 }}
					>
						Buscar
					</Button>
					<Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
						Limpiar
					</Button>
				</Space>
			</div>
		),
		filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />,
		onFilter: (value, record) => (record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : ""),
		onFilterDropdownVisibleChange: (visible) => {
			if (visible) {
				setTimeout(() => searchInput.select(), 100);
			}
		},
		render: (text) =>
			searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
					searchWords={[searchText]}
					autoEscape
					textToHighlight={text ? text.toString() : ""}
				/>
			) : (
				text
			),
	});

	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	};

	const handleReset = (clearFilters) => {
		clearFilters();
		setSearchText("");
	};

	const columns1 = [
		{
			title: "Correo",
			dataIndex: "email",
			key: "email",
			fixed: "left",
			width: 150,
			...getColumnSearchProps("email"),
		},
		{
			title: "ID",
			dataIndex: "_id",
			key: "_id",
			width: 150,
			...getColumnSearchProps("_id"),
		},
		{
			title: "Votos pregunta 1",
			dataIndex: "question1",
			key:"question1",
			width: 150,
			filters: [
				{
					text: 1,
					value: 1,
				},
				{
					text: 2,
					value: 2,
				},
				{
					text: 3,
					value: 3,
				},
				{
					text: 4,
					value: 4,
				}
			],
			onFilter: (value, record) => record.option.indexOf(value) === 0,
		},
		{
			title: "Votos pregunta 2",
			dataIndex: "question2",
			key: "question2",
			width: 150,
			filters: [
				{
					text: 1,
					value: 1,
				},
				{
					text: 2,
					value: 2,
				},
				{
					text: 3,
					value: 3,
				},
				{
					text: 4,
					value: 4,
				}
			],
			onFilter: (value, record) => record.option.indexOf(value) === 0,
		},
		{
			title: "Día y hora de registro",
			dataIndex: "time",
			key: "time",
			width: 150,
			sorter: (a, b) => a.time.length - b.time.length,
		},
	];

	const columns2 = [
		{
			title: "Correo",
			dataIndex: "email",
			key: "email",
			fixed: "left",
			width: 150,
			...getColumnSearchProps("email"),
		},
		{
			title: "Nombre",
			dataIndex: "name",
			width: 150,
			fixed:"left",
			...getColumnSearchProps("name"),
		},
		{
			title: "Apellido",
			dataIndex: "lastname",
			fixed:"left",
			width: 150,
			...getColumnSearchProps("lastname"),
		},
		{
			title: "ID",
			dataIndex: "_id",
			key: "_id",
			width: 150,
			...getColumnSearchProps("_id"),
		},
		{
			title: "Status",
			dataIndex: "aprobado",
			width: 150,
			...getColumnSearchProps("aprobado"),
		},
		{
			title: "Correctas",
			dataIndex: "correctas",
			width: 150,
			...getColumnSearchProps("correctas"),
		},
		{
			title: "Incorrectas",
			dataIndex: "incorrectas",
			width: 150,
			...getColumnSearchProps("incorrectas"),
		},
		{
			title: "Puntaje",
			dataIndex: "ptos",
			width:150
		},
		{
			title: "Nota",
			dataIndex: "note",
			width:150
		},
		// {
		// 	title: "Pregunta 1",
		// 	dataIndex: "question1",
		// 	key: "question1",
		// 	width: 150,
		// 	filters: [
		// 		{
		// 			text: 1,
		// 			value: 1,
		// 		},
		// 		{
		// 			text: 2,
		// 			value: 2,
		// 		},
		// 		{
		// 			text: 3,
		// 			value: 3,
		// 		},
		// 		{
		// 			text: 4,
		// 			value: 4,
		// 		},
		// 	],
		// 	onFilter: (value, record) => record.question1.indexOf(value) === 0,
		// },
		
		// {
		// 	title: "Pregunta 2",
		// 	dataIndex: "question2",
		// 	key: "question2",
		// 	width: 150,
		// 	filters: [
		// 		{
		// 			text: 1,
		// 			value: 1,
		// 		},
		// 		{
		// 			text: 2,
		// 			value: 2,
		// 		},
		// 		{
		// 			text: 3,
		// 			value: 3,
		// 		},
		// 		{
		// 			text: 4,
		// 			value: 4,
		// 		},
		// 	],
		// 	onFilter: (value, record) => record.question1.indexOf(value) === 0,
		// },
		
		// {
		// 	title: "Pregunta 3",
		// 	dataIndex: "question3",
		// 	key: "question3",
		// 	width: 150,
		// 	filters: [
		// 		{
		// 			text: 1,
		// 			value: 1,
		// 		},
		// 		{
		// 			text: 2,
		// 			value: 2,
		// 		},
		// 		{
		// 			text: 3,
		// 			value: 3,
		// 		},
		// 		{
		// 			text: 4,
		// 			value: 4,
		// 		},
		// 	],
		// 	onFilter: (value, record) => record.question1.indexOf(value) === 0,
		// },
		
		// {
		// 	title: "Pregunta 4",
		// 	dataIndex: "question4",
		// 	key: "question4",
		// 	width: 150,
		// 	filters: [
		// 		{
		// 			text: 1,
		// 			value: 1,
		// 		},
		// 		{
		// 			text: 2,
		// 			value: 2,
		// 		},
		// 		{
		// 			text: 3,
		// 			value: 3,
		// 		},
		// 		{
		// 			text: 4,
		// 			value: 4,
		// 		},
		// 	],
		// 	onFilter: (value, record) => record.question1.indexOf(value) === 0,
		// },
		
		// {
		// 	title: "Pregunta 5",
		// 	dataIndex: "question5",
		// 	key: "question5",
		// 	width: 150,
		// 	filters: [
		// 		{
		// 			text: 1,
		// 			value: 1,
		// 		},
		// 		{
		// 			text: 2,
		// 			value: 2,
		// 		},
		// 		{
		// 			text: 3,
		// 			value: 3,
		// 		},
		// 		{
		// 			text: 4,
		// 			value: 4,
		// 		},
		// 	],
		// 	onFilter: (value, record) => record.question1.indexOf(value) === 0,
		// },
		
		// {
		// 	title: "Pregunta 5",
		// 	dataIndex: "question5",
		// 	key: "question5",
		// 	width: 150,
		// 	filters: [
		// 		{
		// 			text: 1,
		// 			value: 1,
		// 		},
		// 		{
		// 			text: 2,
		// 			value: 2,
		// 		},
		// 		{
		// 			text: 3,
		// 			value: 3,
		// 		},
		// 		{
		// 			text: 4,
		// 			value: 4,
		// 		},
		// 	],
		// 	onFilter: (value, record) => record.question1.indexOf(value) === 0,
		// },
		
		// {
		// 	title: "Pregunta 6",
		// 	dataIndex: "question6",
		// 	key: "question6",
		// 	width: 150,
		// 	filters: [
		// 		{
		// 			text: 1,
		// 			value: 1,
		// 		},
		// 		{
		// 			text: 2,
		// 			value: 2,
		// 		},
		// 		{
		// 			text: 3,
		// 			value: 3,
		// 		},
		// 		{
		// 			text: 4,
		// 			value: 4,
		// 		},
		// 	],
		// 	onFilter: (value, record) => record.question1.indexOf(value) === 0,
		// },
		
		// {
		// 	title: "Pregunta 7",
		// 	dataIndex: "question7",
		// 	key: "question7",
		// 	width: 150,
		// 	filters: [
		// 		{
		// 			text: 1,
		// 			value: 1,
		// 		},
		// 		{
		// 			text: 2,
		// 			value: 2,
		// 		},
		// 		{
		// 			text: 3,
		// 			value: 3,
		// 		},
		// 		{
		// 			text: 4,
		// 			value: 4,
		// 		},
		// 	],
		// 	onFilter: (value, record) => record.question1.indexOf(value) === 0,
		// },
		
		// {
		// 	title: "Pregunta 8",
		// 	dataIndex: "question8",
		// 	key: "question8",
		// 	width: 150,
		// 	filters: [
		// 		{
		// 			text: 1,
		// 			value: 1,
		// 		},
		// 		{
		// 			text: 2,
		// 			value: 2,
		// 		},
		// 		{
		// 			text: 3,
		// 			value: 3,
		// 		},
		// 		{
		// 			text: 4,
		// 			value: 4,
		// 		},
		// 	],
		// 	onFilter: (value, record) => record.question1.indexOf(value) === 0,
		// },
		
		// {
		// 	title: "Pregunta 9",
		// 	dataIndex: "question9",
		// 	key: "question9",
		// 	width: 150,
		// 	filters: [
		// 		{
		// 			text: 1,
		// 			value: 1,
		// 		},
		// 		{
		// 			text: 2,
		// 			value: 2,
		// 		},
		// 		{
		// 			text: 3,
		// 			value: 3,
		// 		},
		// 		{
		// 			text: 4,
		// 			value: 4,
		// 		},
		// 	],
		// 	onFilter: (value, record) => record.question1.indexOf(value) === 0,
		// },
		
		// {
		// 	title: "Pregunta 10",
		// 	dataIndex: "question10",
		// 	key: "question10",
		// 	width: 150,
		// 	filters: [
		// 		{
		// 			text: 1,
		// 			value: 1,
		// 		},
		// 		{
		// 			text: 2,
		// 			value: 2,
		// 		},
		// 		{
		// 			text: 3,
		// 			value: 3,
		// 		},
		// 		{
		// 			text: 4,
		// 			value: 4,
		// 		},
		// 	],
		// 	onFilter: (value, record) => record.question1.indexOf(value) === 0,
		// },
		
		// {
		// 	title: "Pregunta 11",
		// 	dataIndex: "question11",
		// 	key: "question11",
		// 	width: 150,
		// 	filters: [
		// 		{
		// 			text: 1,
		// 			value: 1,
		// 		},
		// 		{
		// 			text: 2,
		// 			value: 2,
		// 		},
		// 		{
		// 			text: 3,
		// 			value: 3,
		// 		},
		// 		{
		// 			text: 4,
		// 			value: 4,
		// 		},
		// 	],
		// 	onFilter: (value, record) => record.question1.indexOf(value) === 0,
		// },
		
		// {
		// 	title: "Pregunta 12",
		// 	dataIndex: "question12",
		// 	key: "question12",
		// 	width: 150,
		// 	filters: [
		// 		{
		// 			text: 1,
		// 			value: 1,
		// 		},
		// 		{
		// 			text: 2,
		// 			value: 2,
		// 		},
		// 		{
		// 			text: 3,
		// 			value: 3,
		// 		},
		// 		{
		// 			text: 4,
		// 			value: 4,
		// 		},
		// 	],
		// 	onFilter: (value, record) => record.question1.indexOf(value) === 0,
		// },
		
		// {
		// 	title: "Pregunta 13",
		// 	dataIndex: "question13",
		// 	key: "question13",
		// 	width: 150,
		// 	filters: [
		// 		{
		// 			text: 1,
		// 			value: 1,
		// 		},
		// 		{
		// 			text: 2,
		// 			value: 2,
		// 		},
		// 		{
		// 			text: 3,
		// 			value: 3,
		// 		},
		// 		{
		// 			text: 4,
		// 			value: 4,
		// 		},
		// 	],
		// 	onFilter: (value, record) => record.question1.indexOf(value) === 0,
		// },
		
		// {
		// 	title: "Pregunta 14",
		// 	dataIndex: "question14",
		// 	key: "question14",
		// 	width: 150,
		// 	filters: [
		// 		{
		// 			text: 1,
		// 			value: 1,
		// 		},
		// 		{
		// 			text: 2,
		// 			value: 2,
		// 		},
		// 		{
		// 			text: 3,
		// 			value: 3,
		// 		},
		// 		{
		// 			text: 4,
		// 			value: 4,
		// 		},
		// 	],
		// 	onFilter: (value, record) => record.question1.indexOf(value) === 0,
		// },
		
		// {
		// 	title: "Pregunta 15",
		// 	dataIndex: "question15",
		// 	key: "question15",
		// 	width: 150,
		// 	filters: [
		// 		{
		// 			text: 1,
		// 			value: 1,
		// 		},
		// 		{
		// 			text: 2,
		// 			value: 2,
		// 		},
		// 		{
		// 			text: 3,
		// 			value: 3,
		// 		},
		// 		{
		// 			text: 4,
		// 			value: 4,
		// 		},
		// 	],
		// 	onFilter: (value, record) => record.question1.indexOf(value) === 0,
		// },
		
		// {
		// 	title: "Pregunta 16",
		// 	dataIndex: "question16",
		// 	key: "question16",
		// 	width: 150,
		// 	filters: [
		// 		{
		// 			text: 1,
		// 			value: 1,
		// 		},
		// 		{
		// 			text: 2,
		// 			value: 2,
		// 		},
		// 		{
		// 			text: 3,
		// 			value: 3,
		// 		},
		// 		{
		// 			text: 4,
		// 			value: 4,
		// 		},
		// 	],
		// 	onFilter: (value, record) => record.question1.indexOf(value) === 0,
		// },
		
		// {
		// 	title: "Pregunta 17",
		// 	dataIndex: "question17",
		// 	key: "question17",
		// 	width: 150,
		// 	filters: [
		// 		{
		// 			text: 1,
		// 			value: 1,
		// 		},
		// 		{
		// 			text: 2,
		// 			value: 2,
		// 		},
		// 		{
		// 			text: 3,
		// 			value: 3,
		// 		},
		// 		{
		// 			text: 4,
		// 			value: 4,
		// 		},
		// 	],
		// 	onFilter: (value, record) => record.question1.indexOf(value) === 0,
		// },
		
		// {
		// 	title: "Pregunta 18",
		// 	dataIndex: "question18",
		// 	key: "question18",
		// 	width: 150,
		// 	filters: [
		// 		{
		// 			text: 1,
		// 			value: 1,
		// 		},
		// 		{
		// 			text: 2,
		// 			value: 2,
		// 		},
		// 		{
		// 			text: 3,
		// 			value: 3,
		// 		},
		// 		{
		// 			text: 4,
		// 			value: 4,
		// 		},
		// 	],
		// 	onFilter: (value, record) => record.question1.indexOf(value) === 0,
		// },
		
		// {
		// 	title: "Pregunta 19",
		// 	dataIndex: "question19",
		// 	key: "question19",
		// 	width: 150,
		// 	filters: [
		// 		{
		// 			text: 1,
		// 			value: 1,
		// 		},
		// 		{
		// 			text: 2,
		// 			value: 2,
		// 		},
		// 		{
		// 			text: 3,
		// 			value: 3,
		// 		},
		// 		{
		// 			text: 4,
		// 			value: 4,
		// 		},
		// 	],
		// 	onFilter: (value, record) => record.question1.indexOf(value) === 0,
		// },
		
		// {
		// 	title: "Pregunta 20",
		// 	dataIndex: "question20",
		// 	key: "question20",
		// 	width: 150,
		// 	filters: [
		// 		{
		// 			text: 1,
		// 			value: 1,
		// 		},
		// 		{
		// 			text: 2,
		// 			value: 2,
		// 		},
		// 		{
		// 			text: 3,
		// 			value: 3,
		// 		},
		// 		{
		// 			text: 4,
		// 			value: 4,
		// 		},
		// 	],
		// 	onFilter: (value, record) => record.question1.indexOf(value) === 0,
		// },
		
		// {
		// 	title: "Pregunta 21",
		// 	dataIndex: "question21",
		// 	key: "question21",
		// 	width: 150,
		// 	filters: [
		// 		{
		// 			text: 1,
		// 			value: 1,
		// 		},
		// 		{
		// 			text: 2,
		// 			value: 2,
		// 		},
		// 		{
		// 			text: 3,
		// 			value: 3,
		// 		},
		// 		{
		// 			text: 4,
		// 			value: 4,
		// 		},
		// 	],
		// 	onFilter: (value, record) => record.question1.indexOf(value) === 0,
		// },
		
		{
			title: "Día y hora de registro",
			dataIndex: "time",
			key: "time",
			width: 150,
			sorter: (a, b) => a.time.length - b.time.length,
		},
	];



	const handleCancel = () => {};

	return (
		<ConfigProvider locale={es_ES}>
			<Spin spinning={loading} size="large" tip="Cargando...">
				<div className="options-admin">
					<h1 className="title">Listado de Evaluaciones</h1>
					<Table columns={columns2} dataSource={testData} bordered pagination={true} scroll={{ x: 1500, y: 300 }} sticky />
					<ExportSheet header={testsHeaders} fileName={`evaluaciones`} dataSource={testData} xlsx={XLSX}>
						<Button className="_btn" style={{ position: "absolute", bottom: "20px" }} icon={<ExportOutlined />} type="danger">
							Exportar evaluaciones
						</Button>
					</ExportSheet>
				</div>
			</Spin>
		</ConfigProvider>
	);
}