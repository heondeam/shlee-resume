import { cn } from "@/utils/utils";
import { cva } from "class-variance-authority";

type P3Props = React.HTMLAttributes<HTMLParagraphElement>;

const p3Variants = cva(
  "whitespace-pre-line text-[15px] font-semibold leading-[1.6]"
);

const P3 = (props: P3Props) => {
  const { className, ...rest } = props;
  return <p {...rest} className={cn(p3Variants({ className }))} />;
};

export default P3;
