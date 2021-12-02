import './Dashboard.css';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Card from '../../components/card/Card'
import LineChart from '../../components/linechart/LineChart';
import Eje from '../../components/eje/Eje';
import { useState } from 'react';


const applications1 = {
    title: "Hora de entrada",
    count: '07:20h',
    growth: +3.59,
    data: 85,
    blue: false
  }
  
  const shortlists = {
    title: "Vacaciones aprobadas",
    count: '6 días',
    growth: '3',
    data: 90,
    blue: true
  }
  
  const shortlists2 = {
    title: "Vacaciones solicitadas",
    count: '2 días',
    growth: '66',
    data: 66,
    blue: false
  }
  
  const shortlists3 = {
    title: "Vacaciones sin solicitar",
    count: '1 días',
    growth: '0',
    data: 33,
    blue: false
  }
  
  const applications2 = {
    title: "Balance horario",
    count: '-16h',
    growth: -30,
    data: -40,
    blue: false
  }

function Dashboard() {
  // for side bar
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="Dashboard">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
      <Header collapsed={collapsed}/>
      <div className={"cards " + (!collapsed && "blur")}>
        <Card title={applications1.title} count={applications1.count} growth={applications1.growth} data={applications1.data} blue={applications1.blue}/>
        <Card title={shortlists.title} count={shortlists.count} growth={shortlists.growth} data={shortlists.data} blue={shortlists.blue}/>
        <Card title={shortlists2.title} count={shortlists2.count} growth={shortlists2.growth} data={shortlists2.data} blue={shortlists2.blue}/>
        <Card title={shortlists3.title} count={shortlists3.count} growth={shortlists3.growth} data={shortlists3.data} blue={shortlists3.blue}/>
        <Card title={applications2.title} count={applications2.count} growth={applications2.growth} data={applications2.data} blue={applications2.blue}/>
      </div>
      <div className={"graphs-line-bar " + (!collapsed && "blur")}>
        <LineChart />
      </div>
      <div className={"graphs-eje " + (!collapsed && "blur")}>
        <Eje />
      </div>
    </div>
  );
}

export default Dashboard;
