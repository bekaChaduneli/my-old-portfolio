"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
export default function Page() {
  const [data, setData] = useState(null);
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/bigdata.json");
        const jsonData = await response.json();
        const project = jsonData.projects.filter(
          (project) => project.id === params.id
        )[0];
        setData(project);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return <div>{params.id}</div>;
}
