import { cn } from "@/utils/utils";
import { cva } from "class-variance-authority";

type P5Props = React.HTMLAttributes<HTMLParagraphElement>;

const p5Variants = cva("whitespace-pre-line text-sm font-medium leading-[1.4]");

const P5 = (props: P5Props) => {
  const { className, ...rest } = props;
  return <p {...rest} className={cn(p5Variants({ className }))} />;
};

export default P5;
