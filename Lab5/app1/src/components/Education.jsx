export const Education = ({ schools }) => {
  return (
    <div>
      <h2>Education</h2>
      <ul>
        {schools.map((school, index) => (
          <li key={index}>{school}</li>
        ))}
      </ul>
    </div>
  );
};