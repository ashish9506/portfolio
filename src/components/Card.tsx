interface PropTypes {
  image: string;
  title: string;
  languagesUsed: string[];
}

const Card = (props: PropTypes) => {
  const { image, title } = props;
  const languagesUsed = props.languagesUsed.join(",");
  return (
    <div
      className="rounded-lg h-80 shadow-2xl m-10 w-[250px]"
    >
      <div >
        <img className="rounded-t-lg h-[180px]" src={image} width={500}/>
      </div>
      <div className="p-4">
        <span className="font-extrabold">{title}</span>
        <span className="block text-xs">{languagesUsed}</span>
      </div>
    </div>
  );
};

export default Card;
