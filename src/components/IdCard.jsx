import React from 'react';

const IdCard = (props) => {
  const { firstName, lastName, gender, height, birth, picture } = props;
  const birthDate = birth;
  console.log(birthDate);
  return (
    <div className="idCard">
      <div className="pictureContainer">
        <img src={picture} alt={lastName} />
      </div>
      <div className="infoContainer">
        <p className="firstName">
          Firs name: <span>{firstName}</span>
        </p>
        <p className="lastName">
          Last name: <span>{lastName}</span>
        </p>
        <p className="gender">
          Gender: <span>{gender}</span>
        </p>
        <p className="height">
          Height: <span>{height}</span>
        </p>
        <p className="birth">
          Birth: <span>{birthDate.toDateString()}</span>
        </p>
      </div>
    </div>
  );
};

export default IdCard;
