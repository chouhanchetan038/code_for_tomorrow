import React from 'react'
import './Card.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { faCross } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, bodq, userId, onRemove }) => {
    const [data, setData] = useState([]);
    const [currentData, setCurrentData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 6;
    const card = [...Array(551).keys()].map((i) => `Card ${i + 1}`);



    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(res.data);
            setData(res.data);
        }
        fetchData();
    },[]);

    const updateCurrentData = (newData) => {
        setCurrentData(newData);
    }

    const nextPage = () => {
        if ((currentPage + 1) * cardsPerPage < card.length) {
            setCurrentPage(currentPage + 1);
        };
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const displayCard = () => {
        const start = currentPage + cardsPerPage;
        const end = start + cardsPerPage;
        return data.slice(start, end);
    }





    const removeCard = () => {
        const updatedCard = [...currentPage]
    }


    return (
        <>
            <br />
            <div className="Container">
                <div className="row">
                    {displayCard().map((data, id) => {
                        return (<>
                            <div className=" col-md-4"  >
                                <div className="card" style={{ width: '18rem' }}>
                                    <button className='remove-button' onClick={onRemove}>
                                        &#10006;
                                    </button>
                                    <div className="card-body" key={id}>
                                        <h5 className="card-title">{data.id}</h5>
                                        <h5 className="card-title">{data.userId}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{data.title}</h6>
                                        <p className="card-text" style={{ fontSize: "18px", textAlign: "justify" }}>
                                            {data.body}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>)
                    })}
                </div>
            </div>
            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 0}>
                    Previous
                </button>
                <button onClick={nextPage} disabled={(currentPage + 1) * cardsPerPage >= card.length} >
                    Next
                </button>
            </div>
        </>
    )
}

export default Card;