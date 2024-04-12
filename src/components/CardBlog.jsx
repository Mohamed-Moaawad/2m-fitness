import React from 'react'
import './CardBlog.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const CardBlog = ({image, text}) => {
    return (
        <div className='card-blog mt-5'>
            <Card>
                <Card.Img variant="top" src={image} alt='image'/>
                <Card.Body>
                    <Card.Title>{text}</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Commodi blanditiis iure
                        fuga quod distinctio illo neque dolor beatae?
                        Iste laborum enim veniam, aspernatur qui consequuntur
                    </Card.Text>
                    <Link to='/blog'>read more</Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardBlog
