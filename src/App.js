import './App.css';
import Forecast from './components/Forecast';
import Inputs from './components/Inputs';
import TempAndDetails from './components/TempAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButtons from './components/TopButtons';
import getFormattedData from './services/weatherServices';

function App() {

  const data=  async ()=>{
     const ans=  await getFormattedData( {q: 'london'});
     console.log(ans);
  }

  data();



  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl 
    shadow-grey-400' >
      <TopButtons/>
      <Inputs/>
      <TimeAndLocation/>
      <TempAndDetails/>
      <Forecast title='hourly forecast' />
      <Forecast title='daily forecast' />
    </div>
  );
}

export default App;
