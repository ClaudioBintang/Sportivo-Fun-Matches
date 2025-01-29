import { useEffect } from "react"
import { useActivity } from "../../hooks/useActivity"
const Card = () => {
    const {getActivity, activity, error} = useActivity()

    useEffect(()=> {
        getActivity()
    }, [])
    return (
    <>
      {/* <div className="overflow-hidden transition-shadow hover:shadow-lg">
        <div className="p-0">
        <div className="flex items-center justify-center h-48 bg-gray-100">
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
        deepseek
      </div> */}
      {/* <div>
            {activity.length > 0 ? (
                activity.map((item, index) => (
                    <div key={index} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px" }}>
                        <h2>{item.title}</h2>
                        <p>{item.slot}</p>
                        <p>Location: {item.address}</p>
                        <p>Date: {item.activity_date}</p>
                        <p>Time: {item.start_time}</p>
                    </div>
                ))
            ) : (
                <p>No activities found.</p>
            )}
        </div> */}
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {error ? (
        <p className="text-center text-red-500 ">{error}</p>
      ) : activity.length > 0 ? (
        activity.map((item) => (
          <div key={item.id} className="p-4 bg-white rounded-lg shadow-md">
            <img src={item.image} alt={item.name} className="object-cover w-full h-40 rounded-md" />
            <h2 className="mt-2 text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
    )
}
export default Card