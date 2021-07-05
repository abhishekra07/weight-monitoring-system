import { Line } from '@ant-design/charts';

function Graph() {

  const data = [
    { date: '26-06-2021', value: 54 },
    { date: '27-06-2021', value: 54.5 },
    { date: '28-06-2021', value: 53.8 },
    { date: '29-06-2021', value: 53.9 },
    { date: '30-06-2021', value: 53.5 },
    { date: '01-07-2021', value: 54.2 },
    { date: '02-07-2021', value: 54 },
    { date: '03-07-2021', value: 54.1 },
    { date: '04-07-2021', value: 54.7 },
  ];

  const config = {
    data,
    height: 400,
    xField: 'date',
    yField: 'value',
    meta: {
      value: {
        min: 53,
        max: 56,
        tickInterval: 1
      },
    },
    step : 5,
    point: {
      size: 3,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };

  return(
      <Line {...config} />
    );
}

export default Graph;
