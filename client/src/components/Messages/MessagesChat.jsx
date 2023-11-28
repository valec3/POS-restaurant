import MessageBox from "./MessageBox"
const messages = [
    {
        id: 1,
        emitter:'Lucia',
        imgUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg',
        text: 'Hi Guys, I have a problem with the last update',
        time: '10:30',
    },
    {
        id: 2,
        emitter:'Self',
        imgUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg',
        text: 'Hi Lucia, what is the problem?',
        time: '10:31',
    },
    {
        id: 3,
        emitter:'Manuel',
        imgUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg',
        text: 'Hi Lucia and Ivan, I have the same problem with the last update',
        time: '10:39',
    },
    {
        id: 4,
        emitter:'Manuel',
        imgUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg',
        text: 'I think we need to talk with the developer',
        time: '10:40',
    },
    {
        id: 5,
        emitter:'Lucia',
        imgUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg',
        text: 'I think so',
        time: '10:55',
    }
]
const MessagesChat = () => {
    return (
        <div className="p-8 flex flex-col justify-between h-full">
            <div className="history">
                <div className="p-2 mb-2 flex gap-4 border-b-[1px] border-slate-400">
                    <div className="flex w-10 h-10 bg-yellow-400 items-center justify-center rounded-full font-bold">
                        <p>WT</p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-slate-400 font-bold">Team 1</h3>
                        <p>8 members, 6 online</p>
                    </div>
                </div>
                <p className="text-center py-3">Today</p>
                {
                    messages.map(
                        message => <MessageBox key={message.id} {...message} />
                    )
                }
            </div>
            <div className="flex gap-3 justify-between items-center rounded-2xl bg-slate-200 w-full h-12">
                <img src="" alt="icon" />
                <input className="bg-transparent px-2 py-1 outline-none flex-1" placeholder="Write a message" type="text" />
                <img src="" alt="icon" />
                <img src="" alt="icon" />
                <a href="#">
                    <img src="v" alt="icon" />
                </a>
            </div>
        </div>
    )
}

export default MessagesChat