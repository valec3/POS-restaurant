import { searchIcon } from "../../assets/icons"
import MessagesTeam from "./MessagesTeam"
import MessagesContact from "./MessagesContact"
import MessagesChat from "./MessagesChat"

const teams = [
    {
        id: 1,
        name: "Team 1",
        lastMessage: "Hello",
        imgUrl:['https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg','https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=']
    },
    {
        id: 2,
        name: "Team 2",
        lastMessage: "Thanks for the help",
        imgUrl: ['https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg','https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Woman_at_Lover%27s_Bridge_Tanjung_Sepat_%28cropped%29.jpg/1200px-Woman_at_Lover%27s_Bridge_Tanjung_Sepat_%28cropped%29.jpg']
    },
]
const contacts = [
    {
        id: 1,
        name: "Kolin Holland",
        lastMessage: "Hey, how are you?",
        imgUrl:'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg',
    },
    {
        id: 2,
        name: "Juanita Bell",
        lastMessage: "Please let me know if you need anything else.",
        imgUrl:'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-733872.jpg&fm=jpg',
    },
    {
        id: 3,
        name: "Claire Robertson",
        lastMessage: "Thanks for the help",
        imgUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Woman_at_Lover%27s_Bridge_Tanjung_Sepat_%28cropped%29.jpg/1200px-Woman_at_Lover%27s_Bridge_Tanjung_Sepat_%28cropped%29.jpg',
    }
]

const Messages = () => {
    return (
        <section className="grid grid-cols-[1fr_1.6fr] px-14 gap-8 w-full h-full">
            <div className="">
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <h2 className="text-5xl font-bold">Messages</h2>
                    <img className="w-6" src={searchIcon} alt="" />
                </div>
                <div className="teams flex flex-col gap-4">
                    <h3 className="py-6 text-lg uppercase font-bold text-gray-400">Teams</h3>
                    {
                        teams.map(
                            team => <MessagesTeam key={team.id} {...team} />
                        )
                    }
                </div>
                <div className="contacts flex flex-col gap-4">
                    <h3 className="py-6 text-lg uppercase font-bold text-gray-400">Personal</h3>
                    {
                        contacts.map(
                            contact => <MessagesContact key={contact.id} {...contact} />
                        )
                    }
                </div>
            </div>
            <div className="bg-white">
                <MessagesChat/>
            </div>
        </section>
    )
}

export default Messages