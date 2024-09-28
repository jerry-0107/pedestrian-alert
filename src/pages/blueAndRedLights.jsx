
import React from "react";
import Marquee from "react-fast-marquee";
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/material";

export function BlueAndRedLights() {

    const [title, setTitle] = React.useState("Loading")
    const [open, setOpen] = React.useState(true);
    const [screenWidth, setScreenWidth] = React.useState(window.screen.width)
    const [screenHeight, setScreenHeight] = React.useState(window.screen.height)
    const [t, st] = React.useState(false)

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const delay = (delayInms) => {
        return new Promise(resolve => setTimeout(resolve, delayInms));
    };
    React.useEffect(() => {

        async function _ka() {

            do {
                await delay(500)
                st(true)
                await delay(500)
                st(false)

            } while (screenWidth > screenHeight);

        }
        if (screenWidth > screenHeight) _ka()


    }, [screenWidth, screenHeight])

    window.onresize = function () {
        setScreenWidth(window.screen.width)
        setScreenHeight(window.screen.height)
    }
    return (<Box sx={{ width: "100%", height: "100%", display: "flex" }}>


        <Box sx={{ width: "100%", height: "100%", display: "flex" }}>
            <Box sx={{ width: "100%", height: "100%", background: t ? "blue" : "#9d9de7" }}></Box>
            <Box sx={{ width: "100%", height: "100%", background: !t ? "red" : "#eb8f8f" }}></Box>
        </Box>
    </Box>)

}