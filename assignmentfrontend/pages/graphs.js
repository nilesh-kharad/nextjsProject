
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    BarSeries,
    PieSeries,
    Title
} from '@devexpress/dx-react-chart-material-ui';
const graph = () => {
    const data = [
        { argument: 'Monday', value: 10 },
        { argument: 'Tuesday', value: 20 },
        { argument: 'Wednesday', value: 10 },
        { argument: 'Thursday', value: 10 },
        { argument: 'Friday', value: 10 },
    ];
    return (
        <>
            <div className="graph">
                <div>
                    <Box sx={{ minWidth: 500, mt: 3 }}>
                        {/* <Card variant="outlined">
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="div">
                                    <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
                                        •
                                    </Box>              </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </CardContent>
                        </Card> */}
                        <Card variant="outlined" className='shadowCard'>
                            <CardContent>
                                <Chart data={data} sx={{ maxHeight: 300 }}>
                                    <PieSeries valueField="value" argumentField="argument" innerRadius={0.6} />
                                    <Title text="Studies per day" />
                                </Chart>
                            </CardContent>
                        </Card>
                    </Box>
                </div>
                <div>
                    <Box sx={{ minWidth: 500, mt: 3 }}>
                        <Chart data={data} sx={{ maxHeight: 350 }}>
                            <ArgumentAxis />
                            <ValueAxis />
                            <BarSeries valueField="value" argumentField="argument" />
                        </Chart>
                    </Box>
                </div>
            </div>
        </>
    )
}
export default graph