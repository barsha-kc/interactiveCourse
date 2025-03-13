export default function Card({ title, company, desc, isSum }) {
    return (
      <>
        <h3>{title} - {company}</h3> 
        {!isSum && <p>{desc}</p>}
      </>
    );
  }
  