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
import InstituteDasboardHome from "./InstituteDashboardPages/InstituteDasboardHome";
import CourseList from "./InstituteDashboardPages/CourseList";
import CourseForm from "./InstituteDashboardPages/CourseForm";
import RegistrationControl from "./InstituteDashboardPages/RegistrationControl";
import Result from "./InstituteDashboardPages/Result";
import StudentsList from "./InstituteDashboardPages/StudentsList";
import StudentDetails from "./InstituteDashboardPages/StudentDetails";
import Quiz from "./InstituteDashboardPages/Quiz";
import AddQuiz from "./InstituteDashboardPages/AddQuiz";
import { fbLogOut } from "../../config/firebase/firebasemethod";



const drawerWidth = 260;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

export default function InstituteDashBoard(props: Props) {

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
            name: "Home",
            route: "",
            icon: <HomeOutlinedIcon />,
        },
        {
            name: "Course List",
            route: "courseList",
            icon: <SortOutlinedIcon />,
        },
        {
            name: "Course Form",
            route: "courseForm",
            icon: <TaskOutlinedIcon />,
        },
        {
            name: "Registration Control",
            route: "registrationControl",
            icon: <SupervisorAccountOutlinedIcon />,
        },
        {
            name: "Result",
            route: "result",
            icon: <BarChartOutlinedIcon />,
        },
        {
            name: "Students List",
            route: "studentsList",
            icon: <CreateOutlinedIcon />,
        },
        {
            name: "Students Details",
            route: "studentDetails",
            icon: <LocalCafeOutlinedIcon />,
        },
        {
            name: "Quiz",
            route: "quiz",
            icon: <StickyNote2OutlinedIcon />,
        },
        {
            name: "Add Quiz",
            route: "addQuiz",
            icon: <PermIdentityOutlinedIcon />,
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
                <h1 className="fw-bold fs-1">

                    <span className="text-success circle-icon fs-5">
                        <FiberManualRecordIcon />
                    </span>
                </h1>
                <p className="text-muted">Admin Dashboard</p>
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
        <Box sx={{
            display: "flex", backgroundColor: "#f3f2f7", minHeight: "100vh"
        }}>
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
                        Institute Panel
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
                    <Route path="" element={<InstituteDasboardHome />} />
                    <Route path="courseList" element={<CourseList />} />
                    <Route path="courseForm" element={<CourseForm />} />
                    <Route path="registrationControl" element={<RegistrationControl />} />
                    <Route path="result" element={<Result />} />
                    <Route path="studentsList" element={<StudentsList />} />
                    <Route path="studentDetails" element={<StudentDetails />} />
                    <Route path="quiz" element={<Quiz />} />
                    <Route path="addQuiz" element={<AddQuiz />} />

                </Routes>
            </Box>

        </Box >
    );
}
