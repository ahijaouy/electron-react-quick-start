import React from 'react';
import axios from 'axios';
import {
  Navbar, NavItem,
  Row, Col,
  Input, Button, Card
} from 'react-materialize';

import { Redirect, Link } from 'react-router-dom';

class Register extends React.Component {
  constructor() {
    super();
    this.username = "";
    this.password = "";
    this.name = "";
    this.state = {
      registered: false
    };
  }

  updateUsername(text) {
    this.username = text;
  }

  updateName(text) {
    this.name = text;
  }

  updatePassword(text) {
    this.password = text;
  }
  handleRegister(event) {
    axios.post('http://localhost:3000/register', {
      username: this.username,
      password: this.password,
      name: this.name

    }).then((resp) => {
      this.name = '';
      this.username = '';
      this.password = '';
      this.setState({registered: true});
    });

  }

  render() {
    return (
      this.state.registered ? (<Redirect to='/'/>) :(
      <div>
        <Navbar brand='Horizons GoogleDocs Lite' right>
          <NavItem ><Link to="/">Log In</Link></NavItem>
        </Navbar>
        <Row>
          <Col s={6} offset={"s3"} >
            <Card
              className='white darken-1'
              title='Create New Account'
              actions={[<Button key={"registerButton"} waves='light' onClick={(e) => this.handleRegister(e)}>Login</Button>]}>
                <Row>
                  <Input s={12} label="Name" validate onChange={(e) => this.updateName(e.target.value)}/>
                  <Input s={12} label="Username" validate onChange={(e) => this.updateUsername(e.target.value)}/>
                  <Input s={12} label="Password" type='password' validate onChange={(e) => this.updatePassword(e.target.value)} />
                </Row>

            </Card>
          </Col>
        </Row>
      </div>
    ));
  }
}


export default Register;
