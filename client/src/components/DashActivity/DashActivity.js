import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
  import {
    ButtonGroup,
    Row,
    Col,
    Button
  } from "rsuite";
import "./DashActivity.css";
import API from "../../utils/API";
import Entertainment from "../../utils/TopEntertainment";

function DashActivity() {

    // const [formObject, setFormObject] = useState([]);

    // function loadActivities(topic) {
    //     API.getActivities(topic)
    //     .then(res => {
    //         setFormObject(res.data);
    //     })
    //     .catch(err => console.log(err));

    // }

    // useEffect(() => {
    //     loadActivities(topic);
    // }, [topic])

    // recent activity from topics user follows

    const [ dashObject, setDash ] = useState([]);

    useEffect(() => {

      API.getTopics()
      .then(res => {
        console.log(res.data)
        setDash(res.data)
      }).catch(err => err)

    }, [dashObject] );


    return(
        <div className="animate__animated animate__fadeIn" >
        <ButtonGroup className="dash-container">
          {dashObject.map(data => {
            return (
                <Button
                  id="dash-button"
                  href={ `/topic/${data._id}` }
                  bordered
                >
                  <img
                    id="dash-image"
                    src={ data.image || "/images/no-image.png" }
                    alt={ data.topic }
                  />
                  <p id="topic-title">{data.topic}</p>
                </Button>
            );

          })}
        </ButtonGroup>
        </div>
    )
}

export default DashActivity;