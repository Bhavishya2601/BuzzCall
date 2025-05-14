"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import Link from "next/link";
import { Dot } from "lucide-react";

export default function Header() {
  const [timeString, setTimeString] = useState("");
  const [dateString, setDateString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        weekday: "short",
        month: "short",
        day: "numeric",
      };
      const parts = now
        .toLocaleString("en-US", options)
        .replace(",", "")
        .split(" ");

      const [weekday, month, day, time, amPm] = parts;
      const formattedTime = `${time} ${amPm}`;
      const formattedDate = `${weekday}, ${month} ${day}`;
      setTimeString(formattedTime);
      setDateString(formattedDate.slice(0, -1));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between items-center py-4 px-10 text-lg">
      <Link href="/" className="flex items-center gap-2">
        <Image src={"/logo.png"} alt="BuzzCall" width={35} height={35} />
        <div className="text-2xl tracking-wider">
          <span className="font-bold">Buzz</span>Call
        </div>
      </Link>

      <div className="flex items-center gap-4">
        <div className="text-gray-700 flex gap-1/2 items-center">
          {timeString}
          <Dot />
          {dateString}
        </div>
        <SignedOut>
          <Button
            asChild
            className="bg-blue-800 hover:bg-blue-700 transition-all duration-500"
          >
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
