import Card from "./Card";

export default function Experience({ list, isSum }) {
  return (
    <>
      <h2>Experience</h2>
      {list.map((item, index) => (
        <Card 
          key={index}  
          title={item.title} 
          company={item.company} 
          desc={item.desc} 
          isSum={isSum} 
        />
      ))}
    </>
  );
}

