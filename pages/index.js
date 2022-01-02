import { useRouter } from 'next/router'

const locations = [
  'airfield', 'beachhead', 'docks', 'lagoon', 'mines', 'oil plant', 'peak', 'power plant', 'resort', 'runway', 'sub pen', 'tiki huts', 'village'
]

export default function Home() {
  const router = useRouter()

  return (
    <div className="flex flex-row h-screen w-screen">
      <div className="flex-1">
        <img
          className='h-screen'
          src='/caldera_grid.jpeg'
          alt=""
        />
      </div>
      <div className='flex-1 flex flex-col items-start bg-black'>
        <ul>
          {locations.map((location, index) => (
            <li key={index}>
                <button onClick={() => router.push(`/locations/${location.replace(/\s/g, '')}`)} className="bg-yellow-500 font-black p-2 m-2">{location.toUpperCase()}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
