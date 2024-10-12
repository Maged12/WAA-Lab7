import { useState } from 'react';
import { CommentModule, currentUser } from './commentsList';
import avatar from './images/bozai.png';

export default function CommentInput({ addNewComment }: { addNewComment: (newComment: CommentModule) => void; }) {
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        const now = new Date();

        const formattedDate = `${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        const newComment: CommentModule = {
            rpid: Date.now(),
            user: currentUser,
            content: content,
            ctime: formattedDate,
            like: 0,
        };

        addNewComment(newComment);
        setContent('');  // Clear input after submission
    };
    return (
        <div className="box-normal">
            {/* current logged in user profile */}
            <div className="reply-box-avatar">
                <div className="bili-avatar">
                    <img className="bili-avatar-img" src={avatar} alt="Profile" />
                </div>
            </div>
            <div className="reply-box-wrap">
                {/* comment */}
                <textarea
                    className="reply-box-textarea"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="tell something..."
                />

                {/* post button */}
                <div className="reply-box-send">
                    <div className="send-text" onClick={handleSubmit}>post</div>
                </div>
            </div>
        </div>
    );
}