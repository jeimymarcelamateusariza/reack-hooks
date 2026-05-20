interface Props {
  title: string;
}

export const MyTitle = ({ title }: Props) => {
  console.log("Mi título re-render" + title);
  return <div className="text-3xl">{title}</div>;
};
