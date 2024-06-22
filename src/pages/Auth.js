import React, { useContext, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const signIn = async () => {
    try {
      let data;
      data = await login(email, password);
      user.setUser(user);
      user.setIsAuth(true);
      history("/");
    } catch (e) {
      alert(e.response.data.message);
    }
  };
  return (
    <Container>
      <Card className="p-5 auth">
        <h2 className="m-auto">Авторизация</h2>
        <Form className="d-flex flex-column inputAuth">
          <Form.Control
            className=" EmailPass"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className=" EmailPass"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Row>
            <Button
              className=" buttonAuth"
              variant={"outline-success"}
              onClick={signIn}
            >
              Войти
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
