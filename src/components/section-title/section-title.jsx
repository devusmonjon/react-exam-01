// eslint-disable-next-line
const SectionTitle = ({title, list = [], between = false, defaultActive = -1, activeChanger, width = "100%"}) => {
  return <div className={`flex ${between ? 'justify-between' : ''} items-baseline gap-[30px] py-[44px] md:flex-row flex-col`}>
    <h1 className={`whitespace-nowrap text-dark text-[22px] md:text-[32px] font-bold`}>{title}</h1>
    <ul className={`flex gap-[28px] overflow-x-auto scroll-hide max-w-[100%_!important] sm:max-w-[initial_!important]`} style={{
      width: width
    }}>
      {list?.map((item, index) => (
          <li key={item}>
            <button className={`whitespace-nowrap text-[16px] font-semibold leading-[16px] ${defaultActive === index ? "text-primary" : "text-dark"}`} onClick={() => activeChanger(index)}>{item}</button>
          </li>
      ))}
    </ul>
  </div>;
};

export default SectionTitle;
