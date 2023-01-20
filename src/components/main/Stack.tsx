import React, { FC } from 'react';

interface StackProps {
  avatars: string[];
}
const Stack: FC<StackProps> = ({ avatars }) => {
  return (
    <>
      <div className="flex">
        {avatars.map((avatar, index) => {
          if (index >= 5) return '';
          return (
            <img
              key={index}
              src={avatar}
              alt="..."
              className={`w-8 h-8 rounded-full border-2 border-blueGray-50 shadow ${
                index !== 0 ? '-ml-4' : ''
              }`}
            />
          );
        })}
        {avatars.length > 5 ? (
          <div className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow -ml-4 bg-white flex ">
            <span className="m-auto h-8 w-8 items-center font-normal text-gray-800">{`+${
              avatars.length % 5
            }`}</span>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default Stack;
