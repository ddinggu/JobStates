import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import color from '../../utils/colors';

const DonutChart = ({
  tech, category, allTech, allCategory,
}) => {
  const hiringData = {
    labels: Object.keys(tech),
    datasets: [
      {
        label: '사용자 기술 스택',
        borderWidth: 1,
        data: Object.values(tech),
        backgroundColor: color,
        hoverBackgroundColor: color,
      },
    ],
  };

  const categoryData = {
    labels: category.map(el => el[0]),
    datasets: [
      {
        label: '사용자 산업분야',
        borderWidth: 1,
        data: category.map(el => el[1]),
        backgroundColor: color,
        hoverBackgroundColor: color,
      },
    ],
  };

  const allHiringData = {
    labels: Object.keys(allTech),
    datasets: [
      {
        label: '모든 사용자 기술 스택',
        borderWidth: 1,
        data: Object.values(allTech),
        backgroundColor: color,
        hoverBackgroundColor: color,
      },
    ],
  };

  const allCategoryData = {
    labels: allCategory.map(el => el[0]),
    datasets: [
      {
        label: '모든 사용자 산업분야',
        borderWidth: 1,
        data: allCategory.map(el => el[1]),
        backgroundColor: color,
        hoverBackgroundColor: color,
      },
    ],
  };

  const dougnutGraph = (data, idx) => (
    <div style={{ width: '40%', display: 'inline-block', margin: '1.3em' }}>
      <Doughnut data={data} key={idx} />
    </div>
  );

  return (
    <div className="DountChart" style={{ border: '1px solid black' }}>
      <div style={{ marginBottom: '1.2em' }}>유저가 선택한 데이터</div>
      <div>
        {[hiringData, categoryData].map((data, idx) => dougnutGraph(data, idx))}
      </div>
      <div style={{ marginBottom: '1.2em' }}>모든 유저가 선택한 데이터</div>
      <div>
        {[allHiringData, allCategoryData].map((data, idx) => dougnutGraph(data, idx))}
      </div>
    </div>
  );
};

DonutChart.propTypes = {
  tech: PropTypes.instanceOf(Object),
  category: PropTypes.instanceOf(Array),
  allTech: PropTypes.instanceOf(Object),
  allCategory: PropTypes.instanceOf(Array),
};

DonutChart.defaultProps = {
  tech: { none: 0 },
  category: ['none', 0],
  allTech: { none: 0 },
  allCategory: ['none', 0],
};

export default DonutChart;
