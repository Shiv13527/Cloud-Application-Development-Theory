import { useEffect, useState } from 'react';
import './Toggle.css'
import { Button } from 'react-bootstrap';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

function Toggle() {
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);
    const [activeBtn, setActiveBtn] = useState("none");

    const handleLikeClick = () => {
        if (activeBtn === "none") {
            setLikeCount(likeCount + 1);
            setActiveBtn("like");
            return;
        }

        if (activeBtn === 'like') {
            setLikeCount(likeCount - 1);
            setActiveBtn("none");
            return;
        }

        if (activeBtn === "dislike") {
            setLikeCount(likeCount + 1);
            setDislikeCount(dislikeCount - 1);
            setActiveBtn("like");
        }
    };

    const handleDisikeClick = () => {
        if (activeBtn === "none") {
            setDislikeCount(dislikeCount + 1);
            setActiveBtn("dislike");
            return;
        }

        if (activeBtn === 'dislike') {
            setDislikeCount(dislikeCount - 1);
            setActiveBtn("none");
            return;
        }

        if (activeBtn === "like") {
            setDislikeCount(dislikeCount + 1);
            setLikeCount(likeCount - 1);
            setActiveBtn("dislike");
        }
    };
    return (
        <>
            <div className="container">
                <div className="btn-container">
                    <Button
                        className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
                        onClick={handleLikeClick}
                    >
                        <span className="material-symbols-rounded"><ThumbUpOutlinedIcon /></span>
                        {likeCount}
                    </Button>

                    <Button
                        className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
                        onClick={handleDisikeClick}
                    >
                        <span className="material-symbols-rounded"><ThumbDownOutlinedIcon /></span>
                        {dislikeCount}
                    </Button>
                </div>
            </div>;
        </>
    );
}

export default Toggle;