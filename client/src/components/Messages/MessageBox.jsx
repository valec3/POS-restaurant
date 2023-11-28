
const MessageBox = ({emitter,imgUrl,time,text}) => {
    return (
        <div className="w-full py-2">
            <div className={`flex gap-2 ${emitter=='Self'?'flex-row-reverse':''}`}>
                <img className="w-10 h-10 rounded-full" src={imgUrl} alt={`${emitter} icon`} />
                <div className={`px-5 py-3 bg-slate-100 rounded-[2rem] ${emitter=='Self'?'rounded-tr-none':'rounded-tl-none'}`}>
                    {text}
                </div>
            </div>
            <p className="text-sm text-slate-300">
                {time}
            </p>
        </div>
    )
}

export default MessageBox