import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider from '@mui/material/Slider';
import { Box, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';

export function SettingAccordions() {
    const [expanded, setExpanded] = React.useState(false);
    const [flashRate, setFlashRate] = React.useState(500)
    const [marqueeSpeed, setMarqueeSpeed] = React.useState(350)
    const [marqueeText, setMarqueeText] = React.useState("禮讓行人 感謝有你")

    const [mutiText, setMutiText] = React.useState(["禮讓行人", "人人有責", "", "", ""])

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    function handleMutiTextChange(text, i) {
        var m = mutiText
        m[i] = [text]
        setMutiText(m)
    }

    return (
        <div>


            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        紅藍閃燈
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        紅藍燈光交替閃爍
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        閃爍頻率
                        <Box sx={{ p: 3 }}>
                            <Slider
                                onChange={(e) => setFlashRate(e.target.value)}
                                defaultValue={500}
                                value={flashRate}
                                min={100}
                                max={3000}
                                step={100}
                                valueLabelDisplay="on"
                                valueLabelFormat={(n) => { return `${n}毫秒 (${(Number(n) / 1000)}秒)` }}
                            />

                        </Box>
                        <Button variant='contained' color="primary" component={Link} to="/check" state={{ href: "/light", q: flashRate }}>啟動 紅藍閃燈</Button>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>跑馬燈</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        就是跑馬燈。
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        速度
                        <Box sx={{ p: 3 }}>
                            <Slider
                                onChange={(e) => setMarqueeSpeed(e.target.value)}
                                defaultValue={350}
                                value={marqueeSpeed}
                                min={10}
                                max={700}
                                step={10}
                                valueLabelDisplay="on"

                            />


                        </Box>

                        <Box sx={{ p: 3 }}>
                            <TextField id="standard-basic" label="顯示內容" variant="standard" value={marqueeText} onChange={(e) => setMarqueeText(e.target.value)} />

                        </Box>
                        <Button variant='contained' color="primary" component={Link} to="/check" state={{ href: "/marquee", q: `${marqueeText}&s=${marqueeSpeed}` }}>啟動 跑馬燈</Button>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        文字組合
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        設定多組文字，交替出現
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        最多可以設定五組文字內容，系統會自動處理輸入的內容
                        <Box sx={{ p: 3 }}>
                            <TextField id="standard-basic" label="顯示內容 #1" variant="standard" value={mutiText[0]} onChange={(e) => setMutiText(e.target.value, 0)} /><p></p>
                            <TextField id="standard-basic" label="顯示內容 #2" variant="standard" value={mutiText[1]} onChange={(e) => setMutiText(e.target.value, 1)} /><p></p>
                            <TextField id="standard-basic" label="顯示內容 #3" variant="standard" value={mutiText[2]} onChange={(e) => setMutiText(e.target.value, 2)} /><p></p>
                            <TextField id="standard-basic" label="顯示內容 #4" variant="standard" value={mutiText[3]} onChange={(e) => setMutiText(e.target.value, 3)} /><p></p>
                            <TextField id="standard-basic" label="顯示內容 #5" variant="standard" value={mutiText[4]} onChange={(e) => setMutiText(e.target.value, 4)} />
                        </Box>

                    </Typography>
                </AccordionDetails>
            </Accordion> */}

            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        純白照明
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        將手機亮度調到最亮並開始照明
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Button variant='contained' color="primary" component={Link} to="/check" state={{ href: "/whitelight", q: "" }}>啟動 純白照明</Button>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        漸層照明
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        將手機亮度調到最亮並開始照明
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Button variant='contained' color="primary" component={Link} to="/check" state={{ href: "/gradient", q: "" }}>啟動 漸層照明</Button>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
