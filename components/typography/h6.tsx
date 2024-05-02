import { cn } from "@/utils/utils";
import { cva } from "class-variance-authority";

type H6Props = React.HTMLAttributes<HTMLHeadingElement>;

const h6Variants = cva(
  "whitespace-pre-line text-[17px] font-semibold  leading-[1.4]"
);

const H6 = (props: H6Props) => {
  const { className, ...rest } = props;
  return <h6 {...rest} className={cn(h6Variants({ className }))} />;
};

export default H6;
