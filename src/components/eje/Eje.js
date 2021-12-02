import Chart from "react-google-charts";


const Eje = () => {
  return (
    <div>
<Chart
  width={"900px"}
  height={"500px"}
  chartType="BubbleChart"
  loader={<div>Cargando...</div>}
  data={[
    ["Nombre Proyecto ", "Fecha Fin Proyecto (Meses)...    " , "Desviación...", "Estado"],
    ["Imascono-Sistema  (75%)",       2        ,       25,       "Sin finalizar"],
    ["Disney-Filtro Thor  (-120%)",      4,       -20,      "Sin finalizar"],
    ["KAI-XR  (-130%)", -18, -30, "Finalizado"],
    ["Imascono-General  (85%)", 10, 15, "Sin finalizar"],
    ["Movistar-VR  (125%)", -14, 25, "Finalizado"],
    ["Rafa Nadal-Web  (50%) ", 6, 50, "Sin finalizar"]
  ]}
  options={{
      fontSize: 15,
      fontName: 'Helvetica',
      bold: 'true',

    bubble: {
        textStyle: {
          }
    },
    chartArea: { left: 40, top: 0, width: "90%", height: "95%" },
    colors: ["green", "grey"],
    hAxis: {
      title: "Desviación negativa",
      baseline: 0,
      ticks: ["none"],
      minValue: -30,
      gridlines: { count: 0 },
      maxValue: 30,
      titleTextStyle: {
        italic: "false",
        bold: "true",
      }
    },
    vAxis: {
      title: "Proyectos finalizados",
      baseline: 0,
      ticks: ["none"],
      minValue: -100,
      gridlines: { count: 0 },
      maxValue: 100,
      titleTextStyle: {
        italic: "false",
        bold: "true",
      }
    },
    legend: {
      position: "none",
    },

  }}
/>
</div>
  )
  }

export default Eje;