import React from "react";
import {
    Row
} from "rsuite";
import "./TopicInfo.css"

function TopicInfo(props) {

    const category = props.category;
    console.log(category);

    if (category === "Books") {
        return (
            <Row id="info-text">
                <p><strong>Ages: </strong>{props.age_range}</p>
                <p>{props.description}</p>
            </Row>
        )
    } else if (category === "Music") {
        return (
            <Row id="info-text">
                <p>{props.description}</p>
            </Row>
        )
    } else if (category === "Film" || category === "Television") {
        return (
            <Row id="info-text">
                <p><strong>Ages: </strong>{props.age_range.join(", ")}</p>
                <p><strong>Stream: </strong> Netflix, Amazon Prime, HULU</p>
                <p>{props.description}</p>
            </Row>
        )
    } else {
        return (
            <Row>
                <p>Error</p>
            </Row>
        )
    }
}


export default TopicInfo;