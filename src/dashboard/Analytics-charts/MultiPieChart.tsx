// MultiPieChart.tsx
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';

const MultiPieChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = echarts.init(chartRef.current);

      const option: EChartsOption = {
        dataset: [
          {
            source: [
              ['Product', 'Sales', 'Price', 'Year'],
              ['Cake', 123, 32, 2011],
              ['Cereal', 231, 14, 2011],
              ['Tofu', 235, 5, 2011],
              ['Dumpling', 341, 25, 2011],
              ['Biscuit', 122, 29, 2011],
              ['Cake', 143, 30, 2012],
              ['Cereal', 201, 19, 2012],
              ['Tofu', 255, 7, 2012],
              ['Dumpling', 241, 27, 2012],
              ['Biscuit', 102, 34, 2012],
              ['Cake', 153, 28, 2013],
              ['Cereal', 181, 21, 2013],
              ['Tofu', 395, 4, 2013],
              ['Dumpling', 281, 31, 2013],
              ['Biscuit', 92, 39, 2013],
              ['Cake', 223, 29, 2014],
              ['Cereal', 211, 17, 2014],
              ['Tofu', 345, 3, 2014],
              ['Dumpling', 211, 35, 2014],
              ['Biscuit', 72, 24, 2014],
            ],
          },
          {
            transform: {
              type: 'filter',
              config: { dimension: 'Year', value: 2011 },
            },
          },
          {
            transform: {
              type: 'filter',
              config: { dimension: 'Year', value: 2012 },
            },
          },
          {
            transform: {
              type: 'filter',
              config: { dimension: 'Year', value: 2013 },
            },
          },
        ],
        series: [
          {
            type: 'pie',
            radius: 50,
            center: ['50%', '25%'],
            datasetIndex: 1,
          },
          {
            type: 'pie',
            radius: 50,
            center: ['50%', '50%'],
            datasetIndex: 2,
          },
          {
            type: 'pie',
            radius: 50,
            center: ['50%', '75%'],
            datasetIndex: 3,
          },
        ],
        media: [
          {
            query: { minAspectRatio: 1 },
            option: {
              series: [
                { center: ['25%', '50%'] },
                { center: ['50%', '50%'] },
                { center: ['75%', '50%'] },
              ],
            },
          },
          {
            option: {
              series: [
                { center: ['50%', '25%'] },
                { center: ['50%', '50%'] },
                { center: ['50%', '75%'] },
              ],
            },
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

  return <div ref={chartRef} style={{ width: '100%', height: '600px' }}></div>;
};

export default MultiPieChart;
