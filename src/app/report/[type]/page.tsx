"use client"
import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import './ReportPage.css'
import { AiFillEdit } from 'react-icons/ai'
import CaloriIntakePopup from '@/components/ReportFormPopup/CalorieIntake/CalorieIntakePopup';
import { stringify } from 'querystring';

const page = () => {
    const color = '#ffc20e'

    const chartParams = {
        height: 300,
    }

    const [dataS1, setDataS1] = React.useState<any>(null);
    const getDataForS1 = async () => {
        let temp = [
            {
                date: 'Thu Sep 28 2023 20:30:30 GMT+0530 (India Standard Time)',
                value: 2000,
                unit: 'kcal'
            },
            {
                date: 'Wed Sep 27 2023 20:30:30 GMT+0530 (India Standard Time)',
                value: 2500,
                unit: 'kcal'
            },
            {
                date: 'Tue Sep 26 2023 20:30:30 GMT+0530 (India Standard Time)',
                value: 2700,
                unit: 'kcal'
            },
            {
                date: 'Mon Sep 25 2023 20:30:30 GMT+0530 (India Standard Time)',
                value: 3000,
                unit: 'kcal'
            },
            {
                date: 'Sun Sep 24 2023 20:30:30 GMT+0530 (India Standard Time)',
                value: 2000,
                unit: 'kcal'
            },
            {
                date: 'Sat Sep 23 2023 20:30:30 GMT+0530 (India Standard Time)',
                value: 2300,
                unit: 'kcal'
            },
            {
                date: 'Fri Sep 22 2023 20:30:30 GMT+0530 (India Standard Time)',
                value: 2500,
                unit: 'kcal'
            },
            {
                date: 'Thu Sep 21 2023 20:30:30 GMT+0530 (India Standard Time)',
                value: 2700,
                unit: 'kcal'
            },
        ]

        let dataForLineChart = temp.map((item: any) => {
            let val = JSON.stringify(item.value)
            return val
        })

        let dataForXAxis = temp.map((item: any) => {
            let val = new Date(item.date)
            return val
        })

        setDataS1({
            data: dataForLineChart,
            title: '1 Day Calorie Intake',
            color: color,
            xAxis: {
                data: dataForXAxis,
                label: 'Last 10 days',
                scaleType: 'time'
            }
        })

    }

    React.useEffect(() => {
        getDataForS1();
    }, [])

    const [showCalorieIntakepopup, setShowCalorieIntakePopup] = React.useState<boolean>(false) ;

    return (
        <div className='reportpage'>
            <div className="s1">
                {
                    dataS1 &&
                    <LineChart
                        xAxis={[{
                            id: 'Day',
                            data: dataS1.xAxis.data,
                            scaleType: dataS1.xAxis.scaleType,
                            valueFormatter: (date: any) => {
                                return date.getDate().toString();
                            }
                        }]}
                        series={[
                            {
                                data: dataS1.data,
                                label: dataS1.label,
                                color: dataS1.color,
                            },
                        ]}
                        {...chartParams}
                    />
                }
            </div>
            <div className="s2">
                {
                    dataS1 &&
                    <LineChart
                        xAxis={[{
                            id: 'Day',
                            data: dataS1.xAxis.data,
                            scaleType: dataS1.xAxis.scaleType,
                            valueFormatter: (date: any) => {
                                return date.getDate().toString();
                            }
                        }]}
                        series={[
                            {
                                data: dataS1.data,
                                label: dataS1.label,
                                color: dataS1.color,
                            },
                        ]}
                        {...chartParams}
                    />
                }
            </div>
            <div className="s3">
                {
                    dataS1 &&
                    <LineChart
                        xAxis={[{
                            id: 'Day',
                            data: dataS1.xAxis.data,
                            scaleType: dataS1.xAxis.scaleType,
                            valueFormatter: (date: any) => {
                                return date.getDate().toString();
                            }
                        }]}
                        series={[
                            {
                                data: dataS1.data,
                                label: dataS1.label,
                                color: dataS1.color,
                            },
                        ]}
                        {...chartParams}
                    />
                }
            </div>
            <div className="s4">
                {
                    dataS1 &&
                    <LineChart
                        xAxis={[{
                            id: 'Day',
                            data: dataS1.xAxis.data,
                            scaleType: dataS1.xAxis.scaleType,
                            valueFormatter: (date: any) => {
                                return date.getDate().toString();
                            }
                        }]}
                        series={[
                            {
                                data: dataS1.data,
                                label: dataS1.label,
                                color: dataS1.color,
                            },
                        ]}
                        {...chartParams}
                    />
                }
            </div>
            <button className='editbutton' 
                onClick={()=>{
                    setShowCalorieIntakePopup(true)
                }}
            >
                <AiFillEdit/>
            </button>

            {
                showCalorieIntakepopup && 
                <CaloriIntakePopup setShowCalorieIntakePopup = {setShowCalorieIntakePopup} />
            }

        </div>
    )
}

export default page