
import React from "react";
import Marquee from "react-fast-marquee";
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Button } from "@mui/material";
import { UrlParam } from "../components/urlParam";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Link } from "react-router-dom";

export function Marquees() {
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



    return <> <Box sx={{ width: "100%", height: "100%", display: "flex" }} onClick={handle.enter}>

        <FullScreen handle={handle}>
            <Marquee style={{ color: "#fff", background: "#000", fontSize: "30vw", width: "100%", height: "100%", verticalAlign: "center" }} speed={Number(UrlParam("s"))}>{UrlParam("q")}&nbsp;&nbsp;&nbsp;&nbsp;</Marquee>
        </FullScreen>
        <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1, userSelect: "none" })}
            open={open}
        // onClick={handleClose}
        >
            <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
                <Box>
                    <Typography variant="h3" gutterBottom>
                        即將啟動 跑馬燈
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                        點擊進入全螢幕
                    </Typography>
                </Box>
            </Box>
        </Backdrop>
    </Box>
        <div hidden>

            <Button variant='contained' color="primary" component={Link} to="/check" state={{ href: "/marquee", q: `${UrlParam("q")}&s=${UrlParam("s")}` }} ref={link}>啟動 跑馬燈</Button>
        </div>
    </>

}