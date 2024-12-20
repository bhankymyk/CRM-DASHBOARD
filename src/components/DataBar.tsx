const DataBar = () => {
  const pipelineData = [
    { stage: 'Won', value: 18, color: 'from-green-300 to-green-500' },
    { stage: 'Committed', value: 13, color: 'from-blue-300 to-blue-500' },
    { stage: 'Best case', value: 17, color: 'from-indigo-300 to-indigo-500' },
    { stage: 'Qualified', value: 12, color: 'from-yellow-300 to-yellow-500' },
    { stage: 'Others', value: 20, color: 'from-gray-300 to-gray-500' },
  ];

  const targetValue = 45;
  const leadValue = 75;
  const timeRemaining = '1 month until Q4 ends';

  const totalValue = pipelineData.reduce((sum, item) => sum + item.value, 0);
  let cumulativePercent = 0;

  return (
    <div className="bg-white rounded-full">
      <div className="flex justify-between text-gray-600 text-sm">
        <div>{timeRemaining}</div>
        <div className="flex items-center gap-4">
          <span>Target ${targetValue} million</span>
        </div>
      </div>

      <div className="relative h-4 w-56 overflow-visible rounded-full">
        {pipelineData.map((item, index) => {
          const width = (item.value / leadValue) * 100;
          const position = cumulativePercent;
          cumulativePercent += width;

          return (
            <div
              key={item.stage}
              className="absolute h-full group/item"
              style={{
                left: `${position}%`,
                width: `${width}%`,
              }}
            >
              <div
                className={`w-full h-full bg-gradient-to-r  ${item.color} hover:brightness-110`}
                style={{
                  clipPath: index === 0 ? 'none' : 'polygon(2% 0, 100% 0, 100% 100%, 0% 100%)'
                }}
              />
              
              <div className="hidden group-hover/item:block absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs z-10 whitespace-nowrap">
                {item.stage}: ${item.value}m
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                  <div className="border-4 border-transparent border-t-gray-800" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex ">
        {pipelineData.map((item) => (
          <div
            key={item.stage}
            className="text-[10px] text-gray-600"
            style={{ width: `${(item.value / leadValue) * 100}%` }}
          />
        ))}
      </div>

      <div className="text-[10px] text-gray-600">
        Lead: ${leadValue}m
      </div>
    </div>
  );
};

export default DataBar;