import 'apexcharts/dist/apexcharts.css';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import "./ApexChart.css";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        { name: 'Musculation', data: [
          { x: '2024-01-17 GMT', y: 44 },
          { x: '2024-01-18 GMT', y: 55 },
          { x: '2024-01-19 GMT', y: 41 },
          { x: '2024-01-20 GMT', y: 67 },
          { x: '2024-01-21 GMT', y: 22 },
          { x: '2024-01-22 GMT', y: 43 }
        ] },
        { name: 'Zumba', data: [
          { x: '2024-01-17 GMT', y: 13 },
          { x: '2024-01-18 GMT', y: 23 },
          { x: '2024-01-19 GMT', y: 20 },
          { x: '2024-01-20 GMT', y: 8 },
          { x: '2024-01-21 GMT', y: 13 },
          { x: '2024-01-22 GMT', y: 27 }
        ] },
        { name: 'Aquaponey', data: [
          { x: '2024-01-17 GMT', y: 11 },
          { x: '2024-01-18 GMT', y: 17 },
          { x: '2024-01-19 GMT', y: 15 },
          { x: '2024-01-20 GMT', y: 15 },
          { x: '2024-01-21 GMT', y: 21 },
          { x: '2024-01-22 GMT', y: 14 }
        ] },
        { name: 'PoleDance', data: [
          { x: '2024-01-17 GMT', y: 21 },
          { x: '2024-01-18 GMT', y: 7 },
          { x: '2024-01-19 GMT', y: 25 },
          { x: '2024-01-20 GMT', y: 13 },
          { x: '2024-01-21 GMT', y: 22 },
          { x: '2024-01-22 GMT', y: 8 }
        ] }
      ],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true,
            tools: {
              download: false,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
            }
          },
          zoom: {
            enabled: true,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10,
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: '13px',
                  fontWeight: 900
                }
              }
            }
          }
        },
        xaxis: {
          type: 'category',
          categories: [] // Initialisation avec un tableau vide
        },
        legend: {
          position: 'right',
          offsetY: 40
        },
        fill: {
          opacity: 1
        },
        title: {
          text: 'Activités pratiquées en minutes',
          align: 'center',
          margin: 10,
          offsetY: 15,
          style: {
            fontSize: '20px',
            fontWeight: 'bold',
            color: 'rgb(99, 93, 158)'
          }
        },
      }
    };
  }

  // Fonction pour extraire les numéros de semaine uniques de toutes les séries
  extractUniqueWeeksFromSeries = () => {
    const { series } = this.state;
    const allWeeks = series.flatMap(serie =>
      serie.data.map(point => {
        const date = new Date(point.x);
        const weekNumber = this.getISOWeek(date);
        return `Semaine ${weekNumber}`;
      })
    );
    return [...new Set(allWeeks)];
  }

  // Fonction pour obtenir le numéro de semaine ISO
  getISOWeek = (date) => {
    const startOfWeek = new Date(date.getFullYear(), 0, 1);
    const diff = date - startOfWeek;
    const oneWeek = 604800000; // Nombre de millisecondes dans une semaine
    return Math.ceil((diff + startOfWeek.getDay() * 86400000) / oneWeek);
  }

  updateDataByWeek = () => {
    const { series } = this.state;
    const weeks = this.extractUniqueWeeksFromSeries();
  
    const newData = series.map((activity, index) => {
      const valuesByWeek = weeks.map((week, weekIndex) => {
        const total = activity.data
          .filter(point => week === `Semaine ${this.getISOWeek(new Date(point.x))}`)
          .reduce((acc, point) => acc + point.y, 0);
  
        return total;
      });
  
      return {
        name: activity.name,
        data: valuesByWeek,
      };
    });
  
    return newData;
  }

  componentDidMount() {
    // Mettez à jour les catégories et les données après le rendu initial
    this.setState({
      options: {
        ...this.state.options,
        xaxis: {
          ...this.state.options.xaxis,
          categories: this.extractUniqueWeeksFromSeries(),
        },
      },
      series: this.updateDataByWeek(),
    });
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

export default ApexChart;
