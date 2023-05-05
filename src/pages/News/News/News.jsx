import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsight from '../EditorsInsight/EditorInsight';
import useTitle from '../../../hooks/useTitle';

const News = () => {

    useTitle('News Card')

    const news = useLoaderData()

    const { _id, title, image_url, details, category_id } = news

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger"><FaArrowLeft /> All News In this Category</Button></Link>
                </Card.Body>
            </Card>
            <EditorInsight/>
        </div>
    );
};

export default News;