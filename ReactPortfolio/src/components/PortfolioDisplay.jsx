import PortfolioCard from './PortfolioCard';

const feline = {
  name: 'M to the A. R. I!',
  description: 'The coolest kat you will ever meet!',
  id: "Me, myself, and I",
};

export default function PortfolioDisplay() {
  return (
    <div>
        {/* TODO: Write logic that will render a Card component for the kitten */}
        {/* TODO: Pass `name`, `description`, and `id` to the Card component as props */}
        <PortfolioCard
        name={feline.name}
        description={feline.description}
        id={feline.id}
        />
    </div>
  );
}
