
const MessagesContact = ({name,lastMessage,imgUrl}) => {
    return (
        <article className="p-4 flex gap-4 bg-white rounded-[2rem] shadow-lg w-full">
            <figure className="w-16 h-16">
                <img className="w-16 h-16 object-cover rounded-full" src={imgUrl} alt="" />
            </figure>
            <div className="flex justify-between gap-1 flex-1">
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="text-gray-500 font-semibold text-sm">{lastMessage}</p>
                </div>
                <div>
                    <p>just now</p>
                </div>
            </div>
        </article>
    )
}

export default MessagesContact