import React from "react";
// import RatingMUI from '@mui/material/Rating';

function Rating({rating, id}) {
    return (
        <div>
            <Rating name={`rating-${id}`} value={rating} readOnly precision={0.5} />
        </div>
    )
}

export default Rating
