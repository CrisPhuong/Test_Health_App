import React from 'react';

const DiaryComponent = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-2xl mb-4">MY DIARY</h2>

        <div className="grid grid-cols-4 gap-3 mb-8">
          {[...Array(8).keys()].map((item) => (
            <div
              className="p-4 border-2 border-solid border-gray-400"
              key={item}
            >
              <h4 className="text-lg">
                2021.05.21 <br /> 23:25
              </h4>

              <p className="font-noto">
                私の日記の記録が一部表示されます。
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <button className="bg-gradient-to-b from-primary-300 to-primary-400 text-lg text-white rounded-lg p-4 w-72 font-noto">
            自分の日記をもっと見る
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiaryComponent;
