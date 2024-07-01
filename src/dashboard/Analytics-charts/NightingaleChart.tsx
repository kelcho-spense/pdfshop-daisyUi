// NightingaleChart.tsx
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';

const NightingaleChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = echarts.init(chartRef.current);

      const option: EChartsOption = {
        title: {
          text: 'Nightingale Chart',
          subtext: 'Fake Data',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          left: 'center',
          top: 'bottom',
          data: [
            'rose1',
            'rose2',
            'rose3',
            'rose4',
            'rose5',
            'rose6',
            'rose7',
            'rose8',
          ],
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: 'Radius Mode',
            type: 'pie',
            radius: [20, 140],
            center: ['25%', '50%'],
            roseType: 'radius',
            itemStyle: {
              borderRadius: 5,
            },
            label: {
              show: false,
            },
            emphasis: {
              label: {
                show: true,
              },
            },
            data: [
              { value: 40, name: 'rose 1' },
              { value: 33, name: 'rose 2' },
              { value: 28, name: 'rose 3' },
              { value: 22, name: 'rose 4' },
              { value: 20, name: 'rose 5' },
              { value: 15, name: 'rose 6' },
              { value: 12, name: 'rose 7' },
              { value: 10, name: 'rose 8' },
            ],
          },
          {
            name: 'Area Mode',
            type: 'pie',
            radius: [20, 140],
            center: ['75%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 5,
            },
            data: [
              { value: 30, name: 'rose 1' },
              { value: 28, name: 'rose 2' },
              { value: 26, name: 'rose 3' },
              { value: 24, name: 'rose 4' },
              { value: 22, name: 'rose 5' },
              { value: 20, name: 'rose 6' },
              { value: 18, name: 'rose 7' },
              { value: 16, name: 'rose 8' },
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

  return <div ref={chartRef} style={{ width: '100%', height: '600px' }}></div>;
};

export default NightingaleChart;
