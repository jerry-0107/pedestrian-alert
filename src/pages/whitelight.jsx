
import React from "react";
import Marquee from "react-fast-marquee";
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Button } from "@mui/material";
import { UrlParam } from "../components/urlParam";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Link } from "react-router-dom";

export function WhiteLight() {
    const handle = useFullScreenHandle();
    const [title, setTitle] = React.useState("Loading")
    const [open, setOpen] = React.useState(true);
    const [screenWidth, setScreenWidth] = React.useState(window.screen.width)
    const [screenHeight, setScreenHeight] = React.useState(window.screen.height)

    const link = React.useRef()

    React.useEffect(() => {
        if (screenWidth < screenHeight) {
            link.current.click()
        }
    }, [screenHeight, screenWidth])

    window.onresize = function () {
        setScreenWidth(window.screen.width)
        setScreenHeight(window.screen.height)
    }


    return <> <Box sx={{ width: "100%", height: "100%", display: "flex" }} onClick={handle.enter}>

        <FullScreen handle={handle}>
            <Box sx={{ width: "100%", height: "100%", background: "#fff" }}>

            </Box>
        </FullScreen>
        <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1, userSelect: "none" })}
            open={open}
        // onClick={handleClose}
        >
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                <Box>
                    <Typography variant="h3" gutterBottom>
                        即將啟動 純白照明
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
        <div hidden>

            <Button variant='contained' color="primary" component={Link} to="/check" state={{ href: "/whitelight", q: `` }} ref={link}>啟動 跑馬燈</Button>
        </div>
    </>

}