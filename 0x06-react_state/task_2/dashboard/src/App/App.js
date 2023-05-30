import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from './AppContext';

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];

const listNotifications = [
  { id: 1, value: 'New course available', type: 'default' },
  { id: 2, value: 'New resume available', type: 'urgent' },
  { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' },
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password:'',
        isLoggedIn: false,
      },
      logOut: this.logOut,
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKey);
  }

  handleKey = e => {
    if (e.key == 'h' && e.ctrlKey) {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true })
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false })
  }

  logIn = (email, password) => {
    this.setState({ user: {
      email: email,
      password: password,
      isLoggedIn: true,
    }})
  }

  logOut = () => {
    this.setState({ user: {} })
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKey);
  }

  render() {
    return (
      <AppContext.Provider value={{ user: this.state.user, logOut: this.state.logOut }}>
        <Notifications listNotifications={listNotifications}
                       displayDrawer={this.state.displayDrawer}
                       handleDisplayDrawer={this.handleDisplayDrawer}
                       handleHideDrawer={this.handleHideDrawer}/>
        <div className={css(style.app)}>
          <Header></Header>
          <div className={css(style.body)}>
            { this.state.user.isLoggedIn ?
              <BodySectionWithMarginBottom title={'Course list'}><CourseList listCourses={listCourses} /> </BodySectionWithMarginBottom>
              : <BodySectionWithMarginBottom title={'Log in to continue'}><Login logIn={this.logIn}/></BodySectionWithMarginBottom> }
            <BodySection title={'News from the School'}>
              <p>Lorem ipsum</p>
            </BodySection>
          </div>
          <div className={css(style.footer)}>
            <Footer></Footer>
          </div>
        </div>
      </AppContext.Provider>
    )
  }
}

const style = StyleSheet.create({
  app: {
    fontFamily: 'Arial, Helvetica, sans-serif',
  },

  body: {
    height: '500px',
  },

  footer: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    fontStyle: 'italic',
    borderTop: 'solid 2px #eb4034',
  },
});

export default App;