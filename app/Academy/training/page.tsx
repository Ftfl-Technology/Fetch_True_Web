"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function TrainingPage() {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://api.fetchtrue.com/api/academy/certifications"
      );
      setCertifications(res.data.data);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">

      <h1 className="text-2xl font-semibold mb-6">
        Training Tutorials
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {certifications.map((cert: any) => (
          <Link
            key={cert._id}
            href={`/Academy/training/${cert._id}`}
          >
            <div className="border rounded-xl overflow-hidden hover:shadow-lg cursor-pointer">

              <img
                src={cert.imageUrl}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">

                <h2 className="font-semibold text-lg">
                  {cert.name}
                </h2>

                <p className="text-sm text-gray-500 mt-2">
                  {cert.description}
                </p>

              </div>

            </div>
          </Link>
        ))}

      </div>

    </div>
  );
}