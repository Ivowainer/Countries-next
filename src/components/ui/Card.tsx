import Image from "next/image"

const Card: React.FC = () => {
  return (
    <div className="rounded-md bg-white shadow">
        <Image src="/flag.png" width={250} height={150} layout="responsive" alt={`Flag of Country`} className="rounded-tr-md rounded-tl-md"/>
        <div className="px-6 pt-4 pb-10">
            <p className="font-bold text-xl my-3">Germany</p>
            <p className="font-bold text-sm mb-1">Populátion: <span className="font-light">81.770.900</span></p>
            <p className="font-bold text-sm mt-1">Region: <span className="font-light">Europe</span></p>
            <p className="font-bold text-sm mt-1">Capital: <span className="font-light">Berlin</span></p>
        </div>
    </div>
  )
}

export default Card
