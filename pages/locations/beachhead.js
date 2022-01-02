import { useRouter } from 'next/router'

export default function BeachHead() {
    const router = useRouter()

    return (
        <div className="flex flex-col items-start h-screen w-screen bg-black">
            <button className='bg-yellow-500 font-black p-2 m-2' onClick={() => router.back()}>{`< Back`}</button>
            <text className="font-black p-2 m-2 text-white text-2xl">Beachhead</text>
            <div className="flex-1">
                <img
                    className='h-11/12'
                    src={`/beachhead.jpeg`}
                    alt=""
                />
            </div>
        </div>
    )
}