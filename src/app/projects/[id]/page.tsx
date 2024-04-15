import { Jobs } from '@/types/jobs';
import Image from 'next/image';


export default function Project({ params }: { params: { id: number } }) {
  // Convert params.id to a number
  const id = Number(params.id);

  const encontrado = Jobs.find(job => job.id === id);

  if (!encontrado) {
    return <div>No job found with the given ID</div>
  }

  return (
    <div className='flex flex-col justify-center items-center mt-2'>
      {encontrado.photoList.map((photo, index) => (
        <div key={index} className={`mx-2 ${index === encontrado.photoList.length - 1 ? 'mb-4' : ''}`}>
          <Image
            src={photo}
            alt={encontrado.name}
            className="object-contain"
            width={600}
            height={600}
            priority
          />
        </div>
      ))}
    </div>
  )
}