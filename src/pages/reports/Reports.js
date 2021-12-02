import './Reports.css';
import HeaderReports from '../../components/header/HeaderReports';
import Sidebar from '../../components/sidebar/Sidebar';
import CardReports from '../../components/card/CardReports';
import LineChartReports from '../../components/linechart/LineChartReports';
import LoadingBar from '../../components/loadingbar/LoadingBar';
import { useState } from 'react';

const applications1 = {
    title: "Jorge Moscoso",
    count: '100/200h',
    growth: -50,
    data: 50,
    blue: false
  }
  
  const shortlists = {
    title: "Óscar Rubio",
    count: '100/300h',
    growth: '-33,3',
    data: 66,
    blue: false
  }
  
  const shortlists2 = {
    title: "Iván Salgado",
    count: '20/100h',
    growth: '-80',
    data: 20,
    blue: false
  }
  
  const shortlists3 = {
    title: "Sergio Ara",
    count: '200/50h',
    growth: '-400',
    data: 400,
    blue: true
  }

  const applications2 = {
    title: "Javier Vivancos",
    count: '50/50h',
    growth: 0,
    data: 100,
    blue: false
  }
  

function Reports() {
  // for side bar
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="Reports">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
      <HeaderReports collapsed={collapsed}/>
      <div className={"graphs-line-bar " + (!collapsed && "blur")}>
        <LineChartReports />
      </div>      
      <div className={"loadingbar " + (!collapsed && "blur")}>
      <h5>Horas desplegadas (Enero)</h5><LoadingBar bgcolor="green" progress='30'  height={3} />
      <h5>Avance esperado (Enero)</h5><LoadingBar bgcolor="red" progress='60'  height={3} />
      <h5>Avance percibido (Enero)</h5><LoadingBar bgcolor="blue" progress='50'  height={3} />
      </div>
      <h3 className="nombreproyecto">KAI XR  -  KAI  -  700h</h3>
      <div className={"cardsreports " + (!collapsed && "blur")}>
        <CardReports title={applications1.title} count={applications1.count} growth={applications1.growth} data={applications1.data} blue={applications1.blue}/>
        <CardReports title={shortlists.title} count={shortlists.count} growth={shortlists.growth} data={shortlists.data} blue={shortlists.blue}/>
        </div>
        <div className={"cardsreports2 " + (!collapsed && "blur")}>
        <CardReports title={shortlists2.title} count={shortlists2.count} growth={shortlists2.growth} data={shortlists2.data} blue={shortlists2.blue}/>
        <CardReports title={shortlists3.title} count={shortlists3.count} growth={shortlists3.growth} data={shortlists3.data} blue={shortlists3.blue}/>
        </div>
        <div className={"cardsreports3 " + (!collapsed && "blur")}>
        <CardReports title={applications2.title} count={applications2.count} growth={applications2.growth} data={applications2.data} blue={applications2.blue}/>
        </div>
        <div className={"loadingbar2 " + (!collapsed && "blur")}>
      <h5>Horas desplegadas (Proyecto)</h5><LoadingBar bgcolor="green" progress='67'  height={3} />
      <h5>Avance esperado (Proyecto)</h5><LoadingBar bgcolor="red" progress='80'  height={3} />
      <h5>Avance percibido (Proyecto)</h5><LoadingBar bgcolor="blue" progress='70'  height={3} />
      </div>

      
    </div>
  );
}

export default Reports;
