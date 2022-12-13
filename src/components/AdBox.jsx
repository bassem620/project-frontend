import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const AdBox = props => {
    const navigate = useNavigate();
    const {id, images, title, date, price, liked, user} = props;
    const [like, setLike] = useState(liked);
    const toggleLike = _ => {
        setLike(!like);
    }
    const adDetails = _ => {
        navigate("/project-frontend/ads/" + id);
    }
    return (
        <>
        <div className="box col-sm-6 col-md-4 col-xl-3 prevent-select">
            <div className="box-body">
                <div className="box-image" onClick={adDetails}>
                    <img src={images[0]} alt={title + " image"} className="img-fluid"/>
                </div>
                <div className="box-text" onClick={adDetails}>
                    <span className="box-title">{title}</span>
                    <span className="box-date">{formatDistanceToNow(new Date(date), {addSuffix: true})}</span>
                    <span className="box-price">EGP. {price}</span>
                </div>
                { user ?
                (
                    <div className="favorite" onClick={toggleLike}>
                        { like ? <FavoriteIcon  className='text-danger'/> : <FavoriteBorderIcon/>}
                    </div>
                ) : null}
            </div>
        </div>
        </>
    );
}

export default AdBox;