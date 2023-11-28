const MessagesTeam = ({name,lastMessage,imgUrl}) => {
    return (
        <article className="p-4 flex gap-4 bg-white rounded-[2rem] shadow-lg w-full">
            <figure className="w-16 h-16 relative">
                <img className="w-10 h-10 object-cover object-center rounded-full absolute top-0 left-0" src={imgUrl[0]} alt="" />
                <img className="w-10 h-10 object-cover object-center rounded-full absolute bottom-0 right-0" src={imgUrl[1]} alt="" />
            </figure>
            <div className="flex-1">
                <div className="flex gap-6 justify-between w-full">
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p className="text-gray-500 font-semibold text-sm">just now</p>
                </div>
                <p>
                    <span className="font-bold">Hernan</span> {lastMessage}
                </p>
            </div>
        </article>
    )
}

export default MessagesTeam