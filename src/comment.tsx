import { CommentModule } from "./commentsList";


export default function Comment({ comment }: { comment: CommentModule; }) {
    return (
        <div className="reply-list">
            {/* comment item */}
            <div className="reply-item">
                {/* profile */}
                <div className="root-reply-avatar">
                    <div className="bili-avatar">
                        <img
                            className="bili-avatar-img"
                            alt=""
                        />
                    </div>
                </div>
                <div className="content-wrap">
                    {/* username */}
                    <div className="user-info">
                        <div className="user-name">{comment.user.uname}</div>
                    </div>
                    {/* comment content */}
                    <div className="root-reply">
                        <span className="reply-content">{comment.content}</span>
                        <div className="reply-info">
                            {/* comment created time */}
                            <span className="reply-time">{comment.ctime}</span>
                            {/* total likes */}
                            <span className="reply-time">Like:{comment.like}</span>
                            <span className="delete-btn">
                                Delete
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
