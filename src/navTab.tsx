import { useState } from "react";

const tabs = [
    { type: 'hot', text: 'Top' },
    { type: 'newest', text: 'Newest' },
];

export default function NavTab({ length, sortByLikes, sortByDate }: { length: number; sortByLikes: () => void; sortByDate: () => void; }) {
    const [currentTabType, setCurrentTabType] = useState(tabs[0].type);

    function changeTab(type: string) {
        setCurrentTabType(type);
        if (type === 'hot') {
            sortByLikes();
        } else if (type === 'newest') {
            sortByDate();
        }
    }

    return (
        <div className="reply-navigation">
            <ul className="nav-bar">
                <li className="nav-title">
                    <span className="nav-title-text">Comments</span>
                    {/* Like */}
                    <span className="total-reply">{length}</span>
                </li>

                <li className="nav-sort">
                    {/* highlight class name： active */}
                    {tabs.map((item) => (
                        <span key={item.type} className={currentTabType === item.type ? 'nav-item active' : 'nav-item'} onClick={() => changeTab(item.type)}>{item.text}</span>
                    ))}
                </li>
            </ul>
        </div >
    );
}