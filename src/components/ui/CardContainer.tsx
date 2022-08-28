import Card from './Card'

const CardContainer: React.FC = () => {
  return (
    <div>
        <div className="grid mt-10 grid-cols-4 gap-x-20 gap-y-10">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default CardContainer
