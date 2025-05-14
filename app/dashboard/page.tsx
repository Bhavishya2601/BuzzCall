"use client"

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
// import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

export default function Home() {
  // const router = useRouter();

  const createMeeting = async () => {
    try {
      const response = await axios.post('/api/create-meeting', {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const data = await response.data;
      // if (!response.ok){
        
      // }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="h-[calc(100vh-8rem)] flex justify-center w-full">
      <div className="flex flex-col justify-center items-center p-5 gap-8 w-full">
        <div className="flex flex-col justify-center items-center gap-2">

          <div className="text-4xl">
            BuzzCall - Video Conferencing application
          </div>
          <div className="text-lg">
            Join a meeting with your friends and family
          </div>
        </div>

        <div className="flex justify-center items-center gap-10 w-full">
          <div className="flex gap-2 justify-center items-center">
            <Input
              type="text"
              placeholder="Enter Meeting ID"
            />
            <Button asChild className="bg-blue-500 hover:bg-blue-400">
              <Link href="">Join</Link>
            </Button>
          </div>
          <div>OR</div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Button
              variant="default"
              className="bg-blue-500 hover:bg-blue-400"
              onClick={createMeeting}>
              Create Meeting
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
