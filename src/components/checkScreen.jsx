
import React from "react";
import Marquee from "react-fast-marquee";
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Button } from "@mui/material";
import { SettingAccordions } from "../components/settingAccordion";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export function CheckScreen() {


    const [title, setTitle] = React.useState("旋轉螢幕，調高亮度")
    const [screenWidth, setScreenWidth] = React.useState(window.screen.width)
    const [screenHeight, setScreenHeight] = React.useState(window.screen.height)
    const loc = useLocation()
    const link = React.useRef()

    React.useEffect(() => {
        console.log(loc)
        if (screenWidth < screenHeight) {
            setTitle("旋轉螢幕，調高亮度")
        } else if (loc.state.href) {
            setTitle("OK，繼續操作")
            link.current.click()
        } else {
            setTitle("資料發生錯誤，請回首頁")
        }
    }, [screenHeight, screenWidth])

    window.onresize = function () {
        setScreenWidth(window.screen.width)
        setScreenHeight(window.screen.height)
    }


    return (
        <>

            <Box sx={{ display: "none" }}>
                <Link to={loc.state.href + "/?q=" + loc.state.q} ref={link}></Link>
            </Box>


            <Backdrop open={true}>
                <div>
                    <Typography variant="h3" gutterBottom sx={{ color: "#fff", textAlign: "center" }}>
                        {title.split("，")[0]}
                    </Typography>

                    <Typography variant="h3" gutterBottom sx={{ color: "#fff", textAlign: "center" }}>
                        {title.split("，")[1]}
                    </Typography>
                    <Typography variant="h6" component={Link} to="/" gutterBottom sx={{ color: "#ccc", textAlign: "center" }}>
                        或者按這裡返回首頁
                    </Typography>
                    {/* <Button variant="contained" component={Link} to="/">返回</Button> */}
                </div>
            </Backdrop>
        </>
    )
}