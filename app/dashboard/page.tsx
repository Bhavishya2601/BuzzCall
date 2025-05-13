export default function Home() {
  return (
    <div className="h-[calc(100vh-5rem)] ">
      <div className="flex flex-col justify-center items-center p-5 gap-5">
        <div className="text-4xl">
          BuzzCall - Video Conferencing application
        </div>
        <div className="text-lg">
          Join a meeting with your friends and family
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter Meeting ID"
            className="p-2 rounded-md bg-slate-900 text-white"
          />
          <button className="bg-blue-500 p-2 rounded-md">Join</button>
        </div>
        <div>OR</div>
        <div className="text-lg">Create a new meeting</div>
        <button className="bg-blue-500 p-2 rounded-md">Create Meeting</button>
      </div>
    </div>
  );
}
