
import React from "react";
import Marquee from "react-fast-marquee";
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Button } from "@mui/material";
import { UrlParam } from "../components/urlParam";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Link } from "react-router-dom";

export function BlueAndRedLights() {
    const handle = useFullScreenHandle();

    const [title, setTitle] = React.useState("Loading")
    const [open, setOpen] = React.useState(false);
    const [screenWidth, setScreenWidth] = React.useState(window.screen.width)
    const [screenHeight, setScreenHeight] = React.useState(window.screen.height)
    const [t, st] = React.useState(false)
    const _WAITMS = Number(UrlParam("q")) || 500
    const link = React.useRef()


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

            while (true) {
                await delay(_WAITMS)
                st(true)
                if (screenWidth < screenHeight) return
                await delay(_WAITMS)
                st(false)
                if (screenWidth < screenHeight) return
            }

        }
        if (screenWidth > screenHeight) {
            handle.enter()
            if (!handle.active) setOpen(true)
            _ka()
        }
        else {
            link.current.click()
        }


    }, [screenWidth, screenHeight])

    window.onresize = function () {
        setScreenWidth(window.screen.width)
        setScreenHeight(window.screen.height)
    }
    return (
        <>
            <Box sx={{ width: "100%", height: "100%", display: "flex" }}>

                <FullScreen handle={handle}>
                    <Box sx={{ width: "100%", height: "100%", display: "flex" }}>
                        <Box sx={{ width: "100%", height: "100%", background: t ? "blue" : "#9d9de7" }}></Box>
                        <Box sx={{ width: "100%", height: "100%", background: !t ? "red" : "#eb8f8f" }}></Box>
                    </Box>
                </FullScreen>
                <Backdrop
                    onClick={handle.enter}
                    sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1, userSelect: "none" })}
                    open={open}
                // onClick={handleClose}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                        <Box>
                            <Typography variant="h3" gutterBottom>
                                即將啟動 紅藍閃燈
                            </Typography>
                            <Typography variant="h3" gutterBottom>
                                點擊進入全螢幕
                            </Typography>
                            <Typography variant="h6" gutterBottom sx={{ color: "#ccc", textAlign: "center" }}>
                                要返回首頁嗎?請將螢幕打直
                            </Typography>
                        </Box>
                    </Box>
                </Backdrop>
            </Box>
            <div hidden>

                <Button variant='contained' color="primary" component={Link} to="/check" state={{ href: "/light", q: _WAITMS, label: `紅藍閃燈，頻率:${(Number(_WAITMS) / 1000)}秒` }} ref={link}>啟動 紅藍閃燈</Button>
            </div>
        </>)

}