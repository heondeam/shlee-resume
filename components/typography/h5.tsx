import { cn } from "@/utils/utils";
import { cva } from "class-variance-authority";

type H5Props = React.HTMLAttributes<HTMLHeadingElement>;

const h5Variants = cva("whitespace-pre-line text-lg leading-[1.4]");

const H5 = (props: H5Props) => {
  const { className, ...rest } = props;
  return <h5 {...rest} className={cn(h5Variants({ className }))} />;
};

export default H5;
