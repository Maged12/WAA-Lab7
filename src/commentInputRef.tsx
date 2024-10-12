import { useRef } from 'react';
import { CommentModule, currentUser } from './commentsList';
import avatar from './images/bozai.png';

const CommentInputRef = ({ addNewComment }: { addNewComment: (newComment: CommentModule) => void; }) => {
    // Using useRef to manage input field value without state re-render
    const contentRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = () => {
        const now = new Date();

        const formattedDate = `${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

        const newComment: CommentModule = {
            rpid: Date.now(),
            user: currentUser,
            content: contentRef.current!.value,
            ctime: formattedDate,
            like: 0,
        };

        addNewComment(newComment);

        contentRef.current!.value = '';
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
                    ref={contentRef}
                    placeholder="tell something..."
                />

                {/* post button */}
                <div className="reply-box-send">
                    <div className="send-text" onClick={handleSubmit}>post</div>
                </div>
            </div>
        </div>
    );
};

export default CommentInputRef;
