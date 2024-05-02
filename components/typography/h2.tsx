import { cn } from "@/utils/utils";
import { cva } from "class-variance-authority";

type H2Props = React.HTMLAttributes<HTMLHeadingElement>;

const h2Variants = cva("whitespace-pre-line text-2xl font-bold leading-[1.4]");

const H2 = (props: H2Props) => {
  const { className, ...rest } = props;
  return <h2 {...rest} className={cn(h2Variants({ className }))} />;
};

export default H2;
