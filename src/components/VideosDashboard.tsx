import VideoCard from "@/components/VideoCard";
const videos = [{
    title: "#011 and our Book Launch Tour ends here 🚀",
    thumb: "/thumb.jpeg",
    profile: "/profile.jpg",
    timeStamp: "7 hours ago",
    views: "245k views",
    name: "monkey magic"

}, {
        title: "#011 and our Book Launch Tour ends here 🚀",
        thumb: "/thumb.jpeg",
        profile: "/profile.jpg",
        timeStamp: "7 hours ago",
        views: "245k views",
        name: "monkey magic"

    }, {
        title: "#011 and our Book Launch Tour ends here 🚀",
        thumb: "/thumb.jpeg",
        profile: "/profile.jpg",
        timeStamp: "7 hours ago",
        views: "245k views",
        name: "monkey magic"

    }, {
        title: "#011 and our Book Launch Tour ends here 🚀",
        thumb: "/thumb.jpeg",
        profile: "/profile.jpg",
        timeStamp: "7 hours ago",
        views: "245k views",
        name: "monkey magic"

    }, {
        title: "#011 and our Book Launch Tour ends here 🚀",
        thumb: "/thumb.jpeg",
        profile: "/profile.jpg",
        timeStamp: "7 hours ago",
        views: "245k views",
        name: "monkey magic"

    }, {
        title: "#011 and our Book Launch Tour ends here 🚀",
        thumb: "/thumb.jpeg",
        profile: "/profile.jpg",
        timeStamp: "7 hours ago",
        views: "245k views",
        name: "monkey magic"

    }, {
        title: "#011 and our Book Launch Tour ends here 🚀",
        thumb: "/thumb.jpeg",
        profile: "/profile.jpg",
        timeStamp: "7 hours ago",
        views: "245k views",
        name: "monkey magic"

    }, {
        title: "#011 and our Book Launch Tour ends here 🚀",
        thumb: "/thumb.jpeg",
        profile: "/profile.jpg",
        timeStamp: "7 hours ago",
        views: "245k views",
        name: "monkey magic"

    }, {
        title: "#011 and our Book Launch Tour ends here 🚀",
        thumb: "/thumb.jpeg",
        profile: "/profile.jpg",
        timeStamp: "7 hours ago",
        views: "245k views",
        name: "monkey magic"

    }, {
        title: "#011 and our Book Launch Tour ends here 🚀",
        thumb: "/thumb.jpeg",
        profile: "/profile.jpg",
        timeStamp: "7 hours ago",
        views: "245k views",
        name: "monkey magic"

    },]
export default function VideoDashboard({loading}:{loading:boolean}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
            {
                videos.map(video => {
                    return <div className="flex justify-center items-center my-2">
                        <VideoCard video={video} loading={loading}></VideoCard>
                        </div>
                })
            }
        </div>
    );
}
