import { MessageCircle } from "lucide-react";

export type Service = {
  name: string;
  image: string;
  description: string;
  color: string;
};

export type ottData = {
  data: Service;
};

export function CardOtts({ data }: ottData) {
  return (
    <div
      key={data.name}
      className="flex flex-col rounded-lg overflow-hidden shadow-lg "
    >
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${data.image})` }}
      />
      {/* {flex flex-col justify-between p-4 bg-white flex-grow min-h-24} */}
      <div className="flex flex-col p-4 justify-between min-h-60 bg-white flex-grow">
        <div>
          <h3 className={`text-2xl font-bold ${data.color} mb-2`}>
            {data.name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-3">
            {data.description}
          </p>
        </div>
        <button className="flex items-center justify-center w-full rounded-full bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition-colors mt-4">
          <span>conhecer mais</span>
          <MessageCircle className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
