import '../App.css'
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Button } from "@mui/material";
import { UrlParam } from "../components/urlParam";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Link } from "react-router-dom";
import React from 'react';

export function Gradient() {
    const handle = useFullScreenHandle();
    const [open, setOpen] = React.useState(true);

    const link = React.useRef()
    const [screenWidth, setScreenWidth] = React.useState(window.screen.width)
    const [screenHeight, setScreenHeight] = React.useState(window.screen.height)

    React.useEffect(() => {
        if (screenWidth < screenHeight) {
            link.current.click()
        }

    }, [screenHeight, screenWidth])


    window.onresize = function () {
        setScreenWidth(window.screen.width)
        setScreenHeight(window.screen.height)
    }


    return (
        <>
            <Box>
                <FullScreen handle={handle} >
                    <div className="test" style={{ width: "100%", height: "100%" }}></div>
                </FullScreen>
            </Box>
            <Box sx={{ width: "100%", height: "100%", display: "flex" }}>
                <div className="test" style={{ width: "100%", height: "100%" }}></div>

                <div hidden>
                    <Button variant='contained' color="primary" component={Link} to="/check" state={{ href: "/gradient", q: `` }} ref={link}>啟動 跑馬燈</Button>
                </div>

                <Backdrop
                    sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1, userSelect: "none" })}
                    open={open}
                    onClick={handle.enter}
                // onClick={handleClose}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                        <Box>
                            <Typography variant="h3" gutterBottom>
                                即將啟動 漸層照明
                            </Typography>
                            <Typography variant="h3" gutterBottom>
                                請將亮度調到最大
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
        </>
    )
}