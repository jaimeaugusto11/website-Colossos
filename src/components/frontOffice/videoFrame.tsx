import React from "react";

interface VideoFrameProps {
  videoUrl: string;
  title?: string;
  subtitle?: string;
  date?: string;

  customWidthClass?: string; // nova prop para customizar a largura via Tailwind
}

const VideoFrame: React.FC<VideoFrameProps> = ({
  videoUrl,
  title,
  customWidthClass = "w-full", // padrão: largura total
  subtitle,
  date,
}) => {
  return (
    <div>
      <div className={`relative w-full overflow-hidden  ${customWidthClass}`}>
        <iframe
          src={videoUrl}
          title={title}
          className="absolute top-0 left-0 w-full h-full border-0 rounded-2xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <span className="absolute text-white bg-orange-500 p-1 rounded-full font-light text-sm mt-5 ml-5">
          Destaque
        </span>
      </div>
      <div className="flex flex-row justify-end w-full mt-1 ">
        <span className="text-white font-normal text-sm items-end">{date}</span>
      </div>
      <div className="mt-5">
        <div>
          <h1 className="text-white text-3xl font-semibold">{title}</h1>
          <h4 className="text-white text-lg font-semibold break-words max-w-[700px] mt-6">
            {subtitle}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default VideoFrame;
