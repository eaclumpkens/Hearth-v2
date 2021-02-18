import React, { useState, useEffect } from "react";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { ButtonGroup, Row, Col, Button } from "rsuite";
import "rsuite/lib/styles/index.less";
import "./Browse.css";
import allTopics from "../../utils/Topics";
import API from "../../utils/API";
import Entertainment from "../../utils/TopEntertainment";

export default function Topics() {
  let { path, url } = useRouteMatch();

  return (
    <div className="browse-container  animate__animated animate__fadeIn">
      <h3 className="browse-title">browse topics</h3>
      <Row className="topic-links">
        {allTopics.map((topic) => {
          return (
            <Col id="link-container" md={6} sm={12}>
              <Link id="topic-button" to={`${url}/${topic.topic}`}>
                {topic.topic}
              </Link>
            </Col>
          );
        })}
      </Row>

      <Switch>
        <Route exact path={path}>
          <div className="empty-container" />
        </Route>
        <Route exact path={`${path}/:category`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { category } = useParams();

  const [formObject, setFormObject] = useState([]);

  useEffect(() => {
    loadActivities();
  }, [category]);

  function loadActivities() {
    API.getTopics()
      .then((res) => {
        console.log(res);
        setFormObject(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="animate__animated animate__fadeIn">
      <ButtonGroup className="button-container">
      { formObject.map(data => {
              if (data.category === category) {
                return(
                  <Col 
                    id="results-container"
                    className="animate__animated animate__fadeIn"
                    md={4} 
                    sm={12}
                  >
                      <Button  
                        id="results-button"
                        href={ `/topic/${data._id}` }
                        bordered
                      >
                          <img 
                              id= "topic-image"
                              src= { data.image }
                              alt= { data.topic }
                          />
                      </Button>
                  </Col>

                );
              } 
            }) }
      </ButtonGroup>
    </div>
  );
}
