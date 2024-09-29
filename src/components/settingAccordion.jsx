import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider from '@mui/material/Slider';
import { Box, Button } from "@mui/material";
import { Link } from 'react-router-dom';

export function SettingAccordions() {
    const [expanded, setExpanded] = React.useState(false);
    const [flashRate, setFlashRate] = React.useState(500)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

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
                        閃爍頻率(ms)
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
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                        laoreet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
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
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>

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
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>設定</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        防誤觸?
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}