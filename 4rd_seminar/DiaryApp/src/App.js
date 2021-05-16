import Main from './pages/Main';
import Diary from './pages/Diary';
import MainHeader from './components/common/MainHeader';
import Calendar from './components/common/Calendar.js';
import Title from './components/common/Title';
import Footer from './components/common/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

const getCurrentDate = () => {
  const now = new Date();
  const currYear = now.getFullYear();
  const currMonth = now.getMonth();
  return { year: currYear, month: currMonth };
}
function App() {
  const [year, setYear] = useState(getCurrentDate().year);
  const [month, setMonth] = useState(getCurrentDate().month);


  return (
    <>

      <BrowserRouter>
        <MainHeader />
        <Calendar currYear={year} setCurrYear={setYear} currMonth={month} setCurrMonth={setMonth} />
        <Title />
        <Switch>
          <Route
            exact path="/"
            component={() => <Main year={year} month={month} />}
          />
          <Route path="/diary/:id" component={Diary} />
          <Route component={() => <div>PAGE NOT FOUND!!</div>} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
