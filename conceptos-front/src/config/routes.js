// Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

// Admin Pages
import AdminHome from "../pages/Admin/Home";
import AdminSignIn from "../pages/Admin/SignIn";
import AdminRealTime from "../pages/Admin/RealTime";
import AdminUsers from "../pages/Admin/Users";
import AdminEvents from "../pages/Admin/Events";
import AdminHistory from "../pages/Admin/History";
import AdminQuestion from "../pages/Admin/Question";
import AdminAgenda from "../pages/Admin/Agenda";
import AdminPoll from "../pages/Admin/Poll";
import AdminComponents from "../pages/Admin/Components";

// Basic Pages
import SignIn from "../pages/Basic/Auth/SignIn/SignIn";
import SignUp from "../pages/Basic/Auth/SignUp/SignUp";
import Confirm from "../pages/Basic/Confirm/Confirm";
import WaitingRoom from "../pages/Basic/WaitingRoom/WaitingRoom";
import Streaming from "../pages/Basic/Streaming/Streaming";
import Perfil from "../pages/Basic/Perfil/Perfil";

// Other
import Error404 from "../pages/Error404";
import { Viernes } from "../components/Basic/OnDemand/Viernes";
import { Sabado } from "../components/Basic/OnDemand/Sabado";
import { Test } from "../pages/Basic/Test/Test";
import Streaming3 from "../pages/Basic/Test/Streaming3";
import { TestPage } from "../pages/Admin/Test/TestPage";

const routes = [
	{
		path: "/dashboard",
		component: LayoutAdmin,
		exact: false,
		routes: [
			{
				path: "/dashboard",
				component: AdminHome,
				exact: true,
			},
			{
				path: "/dashboard/iniciarsesion",
				component: AdminSignIn,
				exact: true,
			},
			{
				path: "/dashboard/tiemporeal",
				component: AdminRealTime,
				exact: true,
			},
			{
				path: "/dashboard/historial",
				component: AdminHistory,
				exact: true,
			},
			{
				path: "/dashboard/usuarios",
				component: AdminUsers,
				exact: true,
			},
			{
				path: "/dashboard/preguntas",
				component: AdminQuestion,
				exact: true,
			},
			{
				path: "/dashboard/eventos",
				component: AdminEvents,
				exact: true,
			},
			{
				path: "/dashboard/agenda",
				component: AdminAgenda,
				exact: true,
			},
			{
				path: "/dashboard/encuesta",
				component: AdminPoll,
				exact: true,
			},
			{
				path: "/dashboard/componentes",
				component: AdminComponents,
				exact: true,
			},
			{
				path: "/dashboard/prueba",
				component: TestPage,
				exact: true,
			},
			{
				component: Error404,
			},
		],
	},
	{
		path: "/",
		component: LayoutBasic,
		exact: false,
		routes: [
			{
				path: "/",
				component: SignIn,
				exact: true,
			},
			{
				path: "/iniciarsesion",
				component: SignIn,
				exact: true,
			},
			{
				path: "/salaespera",
				component: WaitingRoom,
				exact: true,
			},
			{
				path: "/streaming",
				component: Streaming,
				exact: true,
			},
			{
				path: "/sala1",
				component: Viernes,
				exact: true,
			},
			{
				path: "/sala2",
				component: Sabado,
				exact: true,
			},
			{
				path: "/perfil",
				component: Perfil,
				exact: true,
			},
			{
				path: "/evaluacion2111",
				component: Streaming3,
				exact: true,
			},
			{
				component: Error404,
			},
		],
	},
];

export default routes;
