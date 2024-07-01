// ComboChart.tsx
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';

const ComboChart: React.FC = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chartRef.current) {
            const chartInstance = echarts.init(chartRef.current);

            const option: EChartsOption = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999',
                        },
                    },
                },
                toolbox: {
                    feature: {
                        dataView: { show: true, readOnly: false },
                        magicType: { show: false, type: ['line', 'bar'] },
                        restore: { show: false },
                        saveAsImage: { show: false },
                    },
                },
                legend: {
                    data: ['Evaporation', 'Precipitation', 'Temperature'],
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisPointer: {
                            type: 'shadow',
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: 'Precipitation',
                        min: 0,
                        max: 250,
                        interval: 50,
                        axisLabel: {
                            formatter: '{value} ml',
                        },
                    },
                    {
                        type: 'value',
                        name: 'Temperature',
                        min: 0,
                        max: 25,
                        interval: 5,
                        axisLabel: {
                            formatter: '{value} °C',
                        },
                    },
                ],
                series: [
                    {
                        name: 'Evaporation',
                        type: 'bar',
                        tooltip: {
                            valueFormatter: function (value) {
                                return value + ' ml';
                            },
                        },
                        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                    },
                    {
                        name: 'Precipitation',
                        type: 'bar',
                        tooltip: {
                            valueFormatter: function (value) {
                                return value + ' ml';
                            },
                        },
                        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    },
                    {
                        name: 'Temperature',
                        type: 'line',
                        yAxisIndex: 1,
                        tooltip: {
                            valueFormatter: function (value) {
                                return value + ' °C';
                            },
                        },
                        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
                    },
                ],
            };

            chartInstance.setOption(option);

            // Resize chart on window resize
            const handleResize = () => {
                chartInstance.resize();
            };
            window.addEventListener('resize', handleResize);

            // Cleanup on unmount
            return () => {
                window.removeEventListener('resize', handleResize);
                chartInstance.dispose();
            };
        }
    }, []);

    return <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default ComboChart;
