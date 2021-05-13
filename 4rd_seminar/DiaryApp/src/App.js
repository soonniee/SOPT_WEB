import Main from './pages/Main';
import Diary from './pages/Diary';
import MainHeader from './components/common/MainHeader';
import Calendar from './components/common/Calendar.js';
import Title from './components/common/Title';
import Footer from './components/common/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>

      <BrowserRouter>
        <MainHeader />

        <Calendar />
        <Title />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/diary/:id" component={Diary} />
          <Route component={() => <div>PAGE NOT FOUND!!</div>} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
