import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function VideoPage() {
  const { courseId, videoId } = useParams();
  const noteKey = `${courseId}-video-${videoId}-notes`;
  const [note, setNote] = useState("");
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem(noteKey);
    if (saved) setNote(saved);
  }, [noteKey]);

  useEffect(() => {
    fetch("/data/videos.json")
      .then((res) => res.json())
      .then((data) => {
        const found = (data[courseId] || []).find((v) => v.id === videoId);
        setVideoData(found);
      });
  }, [courseId, videoId]);

  const handleChange = (e) => {
    setNote(e.target.value);
    localStorage.setItem(noteKey, e.target.value);
  };

  if (!videoData) return <p className="p-6">Video topilmadi</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{videoData.title}</h2>
      <div className="mb-6 aspect-video">
        <iframe
          className="w-full h-full rounded shadow"
          src={`https://www.youtube.com/embed/${videoData.youtubeId}`}
          title={videoData.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <label className="block font-medium mb-2">Qayd yozuvi:</label>
        <textarea
          className="w-full p-3 border rounded h-40"
          value={note}
          onChange={handleChange}
          placeholder="Bu yerda eslatmalar yozing..."
        />
      </div>
    </div>
  );
}

export default VideoPage;
