import React from 'react';

const ExerciseComponent = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="bg-dark-500 py-4 px-6 mb-14">
          <div className="mb-4">
            <p className="text-white text-sm inline-block mr-8">
              MY <br /> EXERCISE
            </p>

            <p className="text-2xl text-white inline-block">2021.05.21</p>
          </div>

          <ul className="grid grid-cols-2 gap-x-10 max-h-48 overflow-scroll pr-8">
            {[...Array(20).keys()].map((item) => (
              <li
                className="flex w-full py-2 border-b border-solid border-gray-400"
                key={item}
              >
                <div className="flex-1">
                  <p className="text-white">家事全般（立位・軽い</p>

                  <p className="text-primary-300">26kcal</p>
                </div>

                <div className="text-primary-300 text-lg">10 min</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExerciseComponent;
