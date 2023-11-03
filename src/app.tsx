import "./globals";
import { Route, StackRouter } from "./router";
import { ScreenOne } from "./routes/screen-one";
import { ScreenTwo } from "./routes/screen-two";


const App = () => {
  return (
    <StackRouter initialRouteName="ScreenOne">
      <Route name="ScreenOne" component={ScreenOne} />
      <Route name="ScreenTwo" component={ScreenTwo} />
    </StackRouter>
  );
};

export { App };