// import * as React from 'react';
// import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import routes from '../src/routes.tsx';
// import NoMatch from '../src/components/nomatch'
// import "./App.css";
// 引入 container 组件 CountCon
// import CountCon from './container/CountCon';
// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
        <Router>
            <Switch>
                {routes.map(item => (
                    <Route
                        key={item.path}
                        exact={item.exact}
                        path={item.path}
                        component={item.component}
                    />
                ))}
                <Route component={NoMatch} />
            </Switch>
        </Router>
    //   <div className="App">
    //     <CountCon />
    //   </div>
    );
  }
}

export default App;
