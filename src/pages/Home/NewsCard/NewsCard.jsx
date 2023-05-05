import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import moment from 'moment/moment';
import Rating from 'react-rating';
import useTitle from '../../../hooks/useTitle';

const NewsCard = ({ news }) => {
    const { _id, title, image_url, details, author, total_view, rating } = news
    return (
        <Card className='mb-3'>
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='flex-grow-1 ps-2'>
                    <p className='m-0'>{author?.name}</p>
                    <p className='m-0'><small>{moment(author?.published_date).format('yyyy-MM-D')}</small></p>
                </div>
                <div>
                    <FaRegBookmark style={{ marginRight: '10px' }} />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read more</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={rating?.number}
                        readonly
                        emptySymbol={<FaRegStar/>}
                        placeholderSymbol={<FaStar className='text-warning'/>}
                        fullSymbol={<FaStar/>}
                    />
                    <span className='ps-2 py-0 my-0'>{rating?.number}</span>
                </div>
                <div>
                    <FaEye /><span className='ps-1'>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;