"use client"

import { Card } from "./card";
import { Jobs } from "@/types/jobs";

export function CardList() {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        {
          Jobs.map(art => (
            <Card
              key={art.name}
              id={art.id}
              name={art.name}
              mainPhoto={art.mainPhoto}
              photoList={art.photoList}
            />
          ))
        }
      </div>
    </div>
  )
}
