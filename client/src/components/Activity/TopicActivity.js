import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Activity.css"
import API from "../../utils/API";
import {
    Row,
    Col
} from "rsuite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


function TopicActivity() {

    let { id } = useParams();

    const [topicState, setTopic] = useState([]);
    const [ reviewState, setReviews ] = useState([]);

    const [ allState, setAll ] = useState([]);

    useEffect(() => {
        API.getTopic(id)
            .then(res => {
                console.log(res.data.topic)
                setTopic(res.data)

                API.getReviews()
                    .then(res => {
                        console.log(res.data)
                        setAll(res.data)
                    })

                
            }).catch(err => err)
    }, []);

    return (
        <Row className="activity-container">
            { allState.map(data => {

                if (data.topic_id === id ) {

                    console.log(data);

                    return (
                        <Col
                            id="activity-card"
                            md={24}
                            block
                        >
                            <Row>
                                <Col md={18}>
                                    <h2 id="card-title">Reviewed by <strong>{data.author}</strong></h2>
                                </Col>
                                <Col md={4}>
                                    <h3 id="card-rating">Score: {data.rating} <FontAwesomeIcon icon={faStar} /></h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={24}>
                                    <p id="card-review">{data.review}</p>
                                </Col>
                            </Row>

                            <div id="sub-container">
                                <Row>
                                    <Col md={24}>
                                        <h4 id="sub-title">similar topics :</h4>
                                    </Col>
                                </Row>
                                <Row>
                                    { data.similar_topics.map(topic => {
                                        console.log(topic)

                                        return(
                                            <Col md={4}>
                                                <p id="card-subtitle">{topic}</p>
                                            </Col>
                                        )


                                    })}
                                </Row>
                            </div>
    
                        </Col>
                    )
                }
            })}

        </Row>
    )

}

export default TopicActivity;