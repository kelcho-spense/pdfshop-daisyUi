import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';

export default function PieChart() {
    const chartRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (chartRef.current) {
            const chartInstance = echarts.init(chartRef.current);

            const option: EChartsOption = {
                tooltip: {
                    trigger: 'item',
                },
                legend: {
                    top: '5%',
                    left: 'center',
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2,
                        },
                        label: {
                            show: false,
                            position: 'center',
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '40',
                                fontWeight: 'bold',
                            },
                        },
                        labelLine: {
                            show: false,
                        },
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' },
                        ],
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

}
