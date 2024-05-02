import { cn } from "@/utils/utils";
import { cva } from "class-variance-authority";

type P4Props = React.HTMLAttributes<HTMLParagraphElement>;

const p4Variants = cva(
  "whitespace-pre-line text-[15px] font-normal leading-[1.6]"
);

const P4 = (props: P4Props) => {
  const { className, ...rest } = props;
  return <p {...rest} className={cn(p4Variants({ className }))} />;
};

export default P4;
