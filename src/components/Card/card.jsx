import { useEffect } from "react"
import { useActivity } from "../../hooks/useActivity"
const Card = () => {
    const {getActivity, activity} = useActivity()

    useEffect(()=> {
        getActivity()
    }, [])
    return (
    <>
      <div className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="p-0">
        <div className="h-48 bg-gray-100 flex items-center justify-center">
          <img src={image} alt={teamName} className="h-12 w-12 text-gray-400" />
        </div>
        </div>
        <div className="p-4 space-y-2">
          <p className="text-sm text-gray-600">{activity.category}</p>
          <h3 className="font-semibold text-lg">{activity.title}</h3>
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