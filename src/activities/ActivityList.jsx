import useQuery from "../api/useQuery";
import { Link } from "react-router-dom";

export default function ActivityList() {
  const { data: activities, error } = useQuery("/activities", "activities");

  if (error) return <p>Failed to load activities.</p>;
  if (!activities) return <p>Loading activities...</p>;

  return (
    <div>
      <h1>Activities</h1>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {/* ✅ Link to detail page */}
            <Link to={`/activities/${activity.id}`}>
              <h2>{activity.name}</h2>
            </Link>
            <p>{activity.description}</p>
            <p><strong>Created by:</strong> {activity.creator?.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}