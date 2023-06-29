"use client";
import MainProjects from "@/components/mousePointer/MainProjects";
import React from "react";
import { useEffect, useState } from "react";
export default function Page() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/bigdata.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <MainProjects data={data} />
    </div>
  );
}
