import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Routes, Route, useNavigate } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import LocalCafeOutlinedIcon from "@mui/icons-material/LocalCafeOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CourseCatalog from "./StudentDashboardPages/CourseCatalog";
import StudentManagement from "./StudentDashboardPages/StudentManagement";
import CousreCreation from "./StudentDashboardPages/CousreCreation";
import AssessmentCreation from "./StudentDashboardPages/AssessmentCreation";
import Gradebook from "./StudentDashboardPages/Gradebook";
import ReportsAndAnalytics from "./StudentDashboardPages/ReportsAndAnalytics";
import FinancialManagement from "./StudentDashboardPages/FinancialManagement";
import ResourceManagement from "./StudentDashboardPages/ResourceManagement";
import Scheduling from "./StudentDashboardPages/Scheduling";
import CommunicationAndCollaboration from "./StudentDashboardPages/CommunicationAndCollaboration";
import Customization from "./StudentDashboardPages/Customization";
import { fbLogOut } from "../config/firebase/firebasemethod";
import DashboardHome from "./StudentDashboardPages/DashboardHome";
import { useSelector } from 'react-redux'



const drawerWidth = 260;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

export default function DashBoard(props: Props) {

    const userData = useSelector((student: any) => (student.user))

    const logOut = () => {
        fbLogOut().then((res) => {
            navigate('/login');
        })
            .catch(err => err)
    }

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [pagesArr, setPagesArr] = React.useState([
        {
            name: "Dashboard",
            route: "/",
            icon: <HomeOutlinedIcon />,
        },
        {
            name: "Course Catalog",
            route: "courseCatalog",
            icon: <SortOutlinedIcon />,
        },
        {
            name: "Student Management",
            route: "studentManagement",
            icon: <TaskOutlinedIcon />,
        },
        {
            name: "Course Creation",
            route: "courseCreation",
            icon: <SupervisorAccountOutlinedIcon />,
        },
        {
            name: "Assessment Creation",
            route: "assessmentCreation",
            icon: <BarChartOutlinedIcon />,
        },
        {
            name: "Gradebook",
            route: "gradebook",
            icon: <CreateOutlinedIcon />,
        },
        {
            name: "Reports And Analytics",
            route: "reportsAndAnalytics",
            icon: <LocalCafeOutlinedIcon />,
        },
        {
            name: "Financial Management",
            route: "financialManagement",
            icon: <StickyNote2OutlinedIcon />,
        },
        {
            name: "Resource Management",
            route: "resourceManagement",
            icon: <PermIdentityOutlinedIcon />,
        },
        {
            name: "Scheduling",
            route: "scheduling",
            icon: <CalendarTodayOutlinedIcon />,
        },
        {
            name: "Communication And Collaboration",
            route: "communicationAndCollaboration",
            icon: <ChatOutlinedIcon />,
        },
        {
            name: "Customization",
            route: "customization",
            icon: <AccountBalanceWalletOutlinedIcon />,
        },
    ]);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navigate = useNavigate();

    const openPage = (route: any) => {
        console.log(route);
        navigate(`${route}`);

    };

    const drawer = (
        <div>
            <div className=" p-4">
                <h1 className="fw-bold fs-4">
                    {userData.personalDetail.studentName}
                    <span className="text-success circle-icon fs-5">
                        <FiberManualRecordIcon />
                    </span>
                </h1>
            </div>
            <List>
                {pagesArr.map((x, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => openPage(x.route)}>
                            <ListItemIcon>{x.icon ?? <MailIcon />}</ListItemIcon>
                            <ListItemText primary={x.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex", backgroundColor: "#f3f2f7", minHeight: "100vh" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar className="bg-success">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Student Portal
                    </Typography>
                    <Button onClick={logOut} className="bg-danger text-white ms-auto">
                        log Out
                    </Button>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />
                <Routes>
                    <Route path="/" element={<DashboardHome />} />
                    <Route path="courseCatalog" element={<CourseCatalog />} />
                    <Route path="studentManagement" element={<StudentManagement />} />
                    <Route path="courseCreation" element={<CousreCreation />} />
                    <Route path="assessmentCreation" element={<AssessmentCreation />} />
                    <Route path="gradebook" element={<Gradebook />} />
                    <Route path="reportsAndAnalytics" element={<ReportsAndAnalytics />} />
                    <Route path="financialManagement" element={<FinancialManagement />} />
                    <Route path="resourceManagement" element={<ResourceManagement />} />
                    <Route path="scheduling" element={<Scheduling />} />
                    <Route path="communicationAndCollaboration" element={<CommunicationAndCollaboration />} />
                    <Route path="customization" element={<Customization />} />

                </Routes>
            </Box>

        </Box>
    );
}
