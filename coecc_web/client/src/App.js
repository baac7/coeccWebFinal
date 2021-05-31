import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import FileDetails from "./components/FileDetails/FileDetails";
import { useDispatch } from "react-redux";
import { getFile } from "./actions/file";
import Auth from "./components/Auth/Auth";
import ProfileDetails from "./components/Profile/profile";
import MyFiles from "./components/File/myFile";
import ForgotPassword from "./components/Auth/forgotPassword/forgotPassword";
import ResetPassword from "./components/Auth/NewPassword";
import SearchPage from "./components/Search/SearchPage";
import Test from "./components/Test/Test";

const App = () => {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFile());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => (
              <Home currentId={currentId} setCurrentId={setCurrentId} />
            )}
          />
          <Route
            exact
            path="/fileDetails"
            component={(props) => <FileDetails currentId={currentId} />}
          />
          <Route exact path="/profileDetails" component={ProfileDetails} />
          <Route exact path="/myFile" component={MyFiles} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route exact path="/resetPassword/:resetPasswordToken">
            <ResetPassword />
          </Route>
          <Route exact path="/searchPage" component={SearchPage} >
            <SearchPage currentId={currentId} setCurrentId={setCurrentId} />
          </Route>
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/testPage" component={Test} />
          <Route exact component={NotFound} />
        </Switch>
      </Container>
    </div>
  );
};

export default App;
