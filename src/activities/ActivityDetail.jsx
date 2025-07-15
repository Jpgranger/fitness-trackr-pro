import { useParams, useNavigate } from "react-router-dom";
import useQuery from "../api/useQuery";;
import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

export default function ActivityDetail() {
  const { activityId } = useParams(); // Get :activityId from the URL
  const navigate = useNavigate();
  const { token } = useAuth();

  // Fetch the activity
  const { data: activity, error } = useQuery(`/activities/${activityId}`, `activity-${activityId}`);

  // Set up delete mutation
  const { mutate: deleteActivity } = useMutation(`/activities/${activityId}`, "DELETE");

  const handleDelete = async () => {
    try {
      await deleteActivity();
      navigate("/activities"); // Go back to list after deleting
    } catch (err) {
      alert("Failed to delete activity: " + err.message);
    }
  };

  if (error) return <p>Error loading activity.</p>;
  if (!activity) return <p>Loading...</p>;

  return (
    <>
      <h1>{activity.name}</h1>
      <p>{activity.description}</p>
      <p><strong>Created by:</strong> {activity.creator?.username || "Unknown"}</p>

      {token && (
        <button onClick={handleDelete}>Delete Activity</button>
      )}
    </>
  );
}