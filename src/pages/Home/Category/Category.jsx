import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import useTitle from '../../../hooks/useTitle';

const Category = () => {
    useTitle('Category')
    const { id } = useParams()
    const categoryNews = useLoaderData()
    return (
        <div>
            {
                categoryNews.map(news => <NewsCard key={news._id}
                news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;