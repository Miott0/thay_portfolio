import { Card } from "./card";
import { Jobs } from "@/types/jobs";

export function CardList() {
  return (
    <div className="flex flex-col items-center mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {Jobs.map(art => (
          <Card
            key={art.id} // Use um identificador único, como o ID
            id={art.id}
            name={art.name}
            mainPhoto={art.mainPhoto}
            photoList={art.photoList}
          />
        ))}
      </div>
    </div>
  );
}

