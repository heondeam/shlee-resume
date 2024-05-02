import { cn } from "@/utils/utils";
import { cva } from "class-variance-authority";

type P2Props = React.HTMLAttributes<HTMLParagraphElement>;

const p2Variants = cva(
  "whitespace-pre-line text-base font-semibold leading-[1.4]"
);

const P2 = (props: P2Props) => {
  const { className, ...rest } = props;
  return <p {...rest} className={cn(p2Variants({ className }))} />;
};

export default P2;
