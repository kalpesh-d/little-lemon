import './css/Review.css';

function Review({review, img, name}) {
    return(
        <div className='review'>
            <p>Rating</p>
            <div className='review-container'>
                <p>{name}</p>
                <div className='review-img'>
                    <img src={img} alt='review'/>
                </div>
            </div>
            <p className='para'>{review}</p>
        </div>
    );
}

export default Review;