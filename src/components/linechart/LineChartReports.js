import React from "react";
import { Bar } from 'react-chartjs-2'
import './LineChart.css';

const LineChartReports = () => {
  return (
    <div>
      <Bar
        width={'600px'}
        height={'600px'}
        data={{
          labels: ['Octubre (87,5%)', 'Noviembre (85%)', 'Diciembre (92,72%)', 'Enero (98,3%)', 'Febrero (41,6%)'],
          datasets: [
            {
              label: 'Horas planificadas',
              data: [6000, 5500, 5800, 6200, 5000],
              backgroundColor: [
                'rgba(165, 168, 166)',
              ],
              borderColor: [
                'rgba(165, 168, 166)',
              ],
              borderWidth: 1,
            },
            {
              label: 'Horas proyectos externos',
              data: [5000, 5000, 4200, 5600, 0],
              backgroundColor: [
                'rgba(30, 193, 42)',
              ],
              borderColor: [
                'rgba(30, 193, 42)',
              ],
              borderWidth: 1,
            },
            {
              label: 'Horas disponibles',
              data: [1000, 1500, 1000, 200, 7000],
              backgroundColor: [
                'rgba(54, 162, 235, 1)',
              ],
              borderColor: [
                'rgba(54, 162, 235, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}

      options={{
          font: {
            family: "Segoe UE",
            size: 16,
        },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                barPercentage: 0.8,
              }
            ]
            
          },
          plugins: {
          legend: {
              position: 'bottom',
            labels: {
              display: true,
              color: "black",
              font: {
              family: 'Segoe UI',
              size: 11,
            }
            },
          },
            title: {
              color: "black",
              font: {
                family: 'Helvetica',
                size: 20,
              },
              display: true,
              text: 'Ocupación de la empresa'
            },
          },
          scales: {
            x: {
              display: true,
              stacked: true,
              title: {
                color: "black",
                font: {
                  family: 'Segoe UI',
                  weight: 'bold',
                  size: 15,
                },
                display: true,
                text: 'Mes (Ocupación en %)',
              }
            },
            y: {
              stacked: true,
              display: true,
              title: {
                color: "black",
                font: {
                  family: 'Segoe UI',
                  weight: 'bold',
                  size: 15,
                },
                display: true,
                text: 'Empresa (Horas)',
              },
            }
          }
        }}
      />
    </div>

  )
}

  export default LineChartReports