// ScatterChart.tsx
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';
import data from './HousePriceData.json'
// const data = null; //show loading

const ScatterChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (chartRef.current) {
        const chartInstance = echarts.init(chartRef.current);
        if (!data) chartInstance.showLoading();

        try { 
          const option: EChartsOption = {
            title: {
              text: 'Dispersion of house price in area',
              left: 'center',
              top: 0,
            },
            visualMap: {
              min: 15202,
              max: 159980,
              dimension: 1,
              orient: 'vertical',
              right: 10,
              top: 'center',
              text: ['HIGH', 'LOW'],
              calculable: true,
              inRange: {
                color: ['#f2c31a', '#24b7f2'],
              },
            },
            tooltip: {
              trigger: 'item',
              axisPointer: {
                type: 'cross',
              },
            },
            xAxis: [
              {
                type: 'value',
              },
            ],
            yAxis: [
              {
                type: 'value',
              },
            ],
            series: [
              {
                name: 'price-area',
                type: 'scatter',
                symbolSize: 5,
                data: data,
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
        } catch (error) {
          console.error('Error fetching the data', error);
        }
      }
    };

    fetchData();
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default ScatterChart;
