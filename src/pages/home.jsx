
import React from "react";
import Marquee from "react-fast-marquee";
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/material";
import { SettingAccordions } from "../components/settingAccordion";

export function Home() {

    const [title, setTitle] = React.useState("Loading")
    const [open, setOpen] = React.useState(true);
    const [screenWidth, setScreenWidth] = React.useState(window.screen.width)
    const [screenHeight, setScreenHeight] = React.useState(window.screen.height)

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };


    React.useEffect(() => {
        if (screenWidth > 1000 && screenHeight > 900) {
            setTitle("請使用手機操作!")
        } else {
            setTitle("選擇警告樣式")
            setOpen(false)
        }
    }, [screenHeight, screenWidth])

    window.onresize = function () {
        setScreenWidth(window.screen.width)
        setScreenHeight(window.screen.height)
    }
    return (<>
        <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1, userSelect: "none" })}
            open={open}
        // onClick={handleClose}
        >
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                <Typography variant="h2" gutterBottom>
                    {title}
                </Typography>
                <Typography>
                    {screenWidth}×{screenHeight}
                </Typography>
            </Box>
        </Backdrop>
        <Box sx={{ p: 3 }}>
            <Typography variant="h2" gutterBottom>
                {title}
            </Typography>
            <SettingAccordions />
        </Box>
    </>)

}