import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  TagPicker,
  SelectPicker,
  Form,
  FormGroup,
  FormControl,
  ButtonToolbar,
  Button,
} from "rsuite";
import "./NewTopic.css";
import Topic from "../../utils/Topics";
import Genre from "../../utils/Genre";
import Ages from "../../utils/AgeRange";
import API from "../../utils/API";

function NewRec() {
  const [topicState, setTopic] = useState("");
  const [categoryState, setCategory] = useState("");

  // const [ topicState, setTopic ] = useState({});

  useEffect(() => {}, []);

  function handleFormSubmit(event) {
    event.preventDefault();
    let form = {
      topic: topicState,
      category: categoryState,
    };
    console.log(form);
    API.saveTopic(form).then((res) => {});
  }

  return (
    <div className="topic-container animate__animated animate__fadeIn">
      <p className="subheader">
        create a new topic and get the conversation started
      </p>

      <Form fluid>
        <FormGroup>
          <FormControl
            block
            className="topic-title"
            name="name"
            placeholder="topic title"
            onChange={function (value) {
              setTopic(value);
            }}
          />
        </FormGroup>

        <Row className="mini-container">
          <Col>
            <FormGroup id="mini-picker">
              <SelectPicker
                data={ Topic }
                defaultValue=""
                placeholder="type"
                onSelect={function (value, item) {
                  setCategory(item.topic);
                }}
                block
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <ButtonToolbar>
            <Button
              className="submit-button"
              appearance="primary"
              onClick={handleFormSubmit}
            >
              {" "}
              submit
            </Button>
          </ButtonToolbar>
        </FormGroup>
      </Form>
    </div>
  );
}

export default NewRec;
