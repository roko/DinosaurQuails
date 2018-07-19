import { Component, Fragment } from 'react';
import axios from 'axios';
import Nav from './Nav.jsx';

export default class extends Component {
  constructor (props) {
    super(props);

    this.state = {
      default: false
    }
  }

  render() {
    return (
      <Fragment>
        <Nav />
      <Fragment />
    )
  }
}
