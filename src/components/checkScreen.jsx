
import React from "react";
import Marquee from "react-fast-marquee";
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Button } from "@mui/material";
import { SettingAccordions } from "../components/settingAccordion";
import { json, useLocation } from "react-router";
import { Link } from "react-router-dom";
import ScreenRotationIcon from '@mui/icons-material/ScreenRotation';
import SystemSecurityUpdateWarningIcon from '@mui/icons-material/SystemSecurityUpdateWarning';

export function CheckScreen() {


    const [title, setTitle] = React.useState("旋轉螢幕，調高亮度")
    const [screenWidth, setScreenWidth] = React.useState(window.screen.width)
    const [screenHeight, setScreenHeight] = React.useState(window.screen.height)
    const loc = useLocation()
    const link = React.useRef()

    React.useEffect(() => {
        console.log(loc)
        if (!loc.state) {
            setTitle("發生錯誤，請回首頁")
        }
        else if (screenWidth < screenHeight) {
            setTitle("旋轉螢幕，調高亮度")
        } else if (loc.state.href) {
            setTitle("OK，繼續操作")
            localStorage.setItem("pAlert_LastAction", JSON.stringify({ href: loc.state.href, q: loc.state.q, label: loc.state.label }))
            link.current.click()
        } else {
            setTitle("發生錯誤，請回首頁")
        }
    }, [screenHeight, screenWidth])

    window.onresize = function () {
        setScreenWidth(window.screen.width)
        setScreenHeight(window.screen.height)
    }


    return (
        <>

            {Boolean(loc.state) &&
                <Box sx={{ display: "none" }}>
                    <Link to={loc.state.href + "/?q=" + loc.state.q} ref={link}></Link>
                </Box>
            }


            <Backdrop open={true} sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1, userSelect: "none" })}
            >
                <div>

                    {title.includes("旋轉") && <Typography sx={{ textAlign: "center" }}><ScreenRotationIcon fontSize="large" sx={{ fontSize: "5em" }} /></Typography>}
                    {title.includes("錯誤") && <Typography sx={{ textAlign: "center" }}><SystemSecurityUpdateWarningIcon fontSize="large" sx={{ fontSize: "5em" }} /></Typography>}

                    <Typography variant="h3" gutterBottom sx={{ color: "#fff", textAlign: "center" }}>
                        {title.split("，")[0]}
                    </Typography>

                    <Typography variant="h3" gutterBottom sx={{ color: "#fff", textAlign: "center" }}>
                        {title.split("，")[1]}
                    </Typography>
                    <Typography variant="h6" component={Link} to="/" sx={{ color: "#ccc", textAlign: "center", width: "%" }}>
                        要返回首頁嗎? 按這裡
                    </Typography>
                    {/* <Button variant="contained" component={Link} to="/">返回</Button> */}
                </div>
            </Backdrop>
        </>
    )
}