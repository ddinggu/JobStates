import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { Container, Grid, Header } from 'semantic-ui-react';
import color from 'utils/colors';

const DonutChart = ({
 tech, category, allTech, allCategory 
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
    <div style={{ width: '50%', display: 'inline-block' }}>
      <Doughnut data={data} key={idx} />
    </div>
  );

  return (
    <>
      <Container className="jobContainer">
        <Grid textAlign="center">
          <Grid.Column width={2}>
            <Header>
              유저가 <br /> 선택한 <br /> 데이터
            </Header>
          </Grid.Column>
          <Grid.Column textAlign="left" width={12} className="jobbody">
            {[hiringData, categoryData].map((data, idx) => dougnutGraph(data, idx),)}
          </Grid.Column>
        </Grid>
      </Container>

      <Container className="jobContainer">
        <Grid textAlign="center">
          <Grid.Column width={2}>
            <Header>
              모든 유저가 <br /> 선택한 <br /> 데이터
            </Header>
          </Grid.Column>
          <Grid.Column textAlign="left" width={12} className="jobbody">
            {[allHiringData, allCategoryData].map((data, idx) => dougnutGraph(data, idx),)}
          </Grid.Column>
        </Grid>
      </Container>
    </>
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
