import { useEffect } from "react"
import { useActivity } from "../../hooks/useActivity"
const Card = () => {
    const {getActivity, activity} = useActivity()

    useEffect(()=> {
        getActivity()
    }, [])
    return (
    <>
      <div className="overflow-hidden transition-shadow hover:shadow-lg">
        <div className="p-0">
        <div className="flex items-center justify-center h-48 bg-gray-100">
          {/* <img src={image} alt={teamName} className="w-12 h-12 text-gray-400" /> */}
        </div>
        </div>
        <div className="p-4 space-y-2">
          <p className="text-sm text-gray-600">{activity.category}</p>
          <h3 className="text-lg font-semibold">{activity.title}</h3>
          <p className="text-sm text-gray-600">{activity.activity_date}</p>
          <p className="text-sm text-gray-600">{activity.start_Time}</p>
          <p className="text-sm text-gray-600">{activity.end_Time}</p>
          <p className="font-medium">Price {activity.price} USD</p>
        </div>
      </div>
        
    </>
    )
}
export default Card