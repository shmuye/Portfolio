import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Service = ({ Icon, title, description }) => {
    return (
        <div className="w-full h-auto  py-2 px-4 rounded-[8px] hover:cursor-pointer  hover:shadow-lg hover:shadow-gray-400 overflow-hidden sm:w-[30%]  ">
            <FontAwesomeIcon icon={Icon} width={24} height={24} className="hover: rounded" />
            <h1 className="my-2 text-2xl font-bold">{title}</h1>
            <p className="my-2 ">{description}</p>
        </div>
    )
}

export default Service