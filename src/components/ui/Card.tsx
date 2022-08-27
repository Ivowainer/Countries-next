import Image from "next/image"

const Card: React.FC = () => {
  return (
    <div className="flex">
        {/* <Image /> */}
        <div className="px-4 py-2">
            <p className="font-bold text-xl">Germany</p>
            <p className="font-bold text-sm">Populátion: <span className="font-light">81.770.900</span></p>
            <p className="font-bold text-sm">Region: <span className="font-light">Europe</span></p>
            <p className="font-bold text-sm">Capital: <span className="font-light">Berlin</span></p>
        </div>
    </div>
  )
}

export default Card
