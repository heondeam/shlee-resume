import { cn } from "@/utils/utils";
import { cva } from "class-variance-authority";

type H3Props = React.HTMLAttributes<HTMLHeadingElement>;

const h3Variants = cva(
  "whitespace-pre-line text-[22px] font-bold leading-[1.4]"
);

const H3 = (props: H3Props) => {
  const { className, ...rest } = props;
  return <h3 {...rest} className={cn(h3Variants({ className }))} />;
};

export default H3;
