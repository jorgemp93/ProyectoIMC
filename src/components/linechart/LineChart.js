import React from "react";
import { Bar } from 'react-chartjs-2'
import './LineChart.css';

const LineChart = () => {
  return (
    <div>
      <Bar
        width={'600px'}
        height={'600px'}
        data={{
          labels: ['Octubre (90%)', 'Noviembre (82%)', 'Diciembre (90%)', 'Enero (68%)'],
          datasets: [
            {
              label: 'Horas planificadas',
              data: [60, 60, 65, 110],
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
              data: [70, 80, 45, 0],
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
              data: [10, 20, 10, 50],
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
              text: 'Empleado y ocupación'
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
                text: 'Empleado (Horas)',
              },
            }
          }
        }}
      />
    </div>

  )
}

  export default LineChart