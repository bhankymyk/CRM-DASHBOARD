import React from "react";

type CardProps = {
  title: string;
  subtitle: string;
  description: string;
  amount: string;
  daysToClose: string;
  icon: React.ReactNode; // For the left icon
};

const ActivityCard = ({ title, subtitle, description, icon }: CardProps) => {
  return (
    <div className="flex items-center justify-between p-2 mb-2 bg-white border rounded-lg shadow-sm hover:shadow-md">
      {/* Left Section */}
      <div className="flex items-center">
        {icon}
        <div className="ml-3">
          <h4 className="font-semibold text-gray-800 text-[10px]">{title}</h4>
          <p className="text-[10px] text-gray-500">{subtitle}</p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        {/* <p className="text-gray-700 text-sm">{description}</p> */}

        {/* <div className="ml-3 text-purple-500 hover:text-purple-700 cursor-pointer">
         
        </div> */}
      </div>
    </div>
  );
};

export default function Card() {
  return (
    <div className="p-2 bg-white">
      <ActivityCard
        title="Cafe A100 for Woodland Bank"
        subtitle="Woodland Bank • $280,000 • 8 days to close"
        description="Review draft and reply to Chris Naido"
        icon={<div className="w-4 h-4 bg-green-500 rounded-full"></div>}
        amount={""}
        daysToClose={""}
      />
      <ActivityCard
        title="Partnership opportunity for Fabrikam"
        subtitle="Fabrikam • $5,000,000 • 12 days to close"
        description="Prepare me for Fabrikam's key stakeholder meeting"
        icon={<div className="w-4 h-4 bg-blue-500 rounded-full"></div>}
        amount={""}
        daysToClose={""}
      />

      <p className="block mt-4 text-blue-600 hover:underline">
        Show all key activities
      </p>
    </div>
  );
}
