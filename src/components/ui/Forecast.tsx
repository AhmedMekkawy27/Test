interface IProps {
  date: string;
  maxtemp: number;
  mintemp: number;
  condition: string;
  icon: string;
}

const Forecast = ({ date, maxtemp, mintemp, condition, icon }: IProps) => {
  return (
    <div className="flex items-center gap-6">
      <div className="min-w-fit w-9 flex items-center">
        <h3 className="text-center font-semibold">{date}</h3>
      </div>
      <div className="min-w-fit w-28 flex items-center justify-center">
        <p className="text-center font-medium gap-5 flex items-center">
          <span>{maxtemp}°C</span> <span>{mintemp}°C</span>
        </p>
      </div>
      <div className="flex items-center gap-1 justify-end">
        <img className="w-8" src={icon} alt="icon" />
        <p className="text-center text-[12px] sm:text-[16px] font-medium">
          {condition}
        </p>
      </div>
    </div>
  );
};

export default Forecast;
