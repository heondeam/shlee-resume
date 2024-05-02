import { cn } from "@/utils/utils";
import { cva } from "class-variance-authority";

type H4Props = React.HTMLAttributes<HTMLHeadingElement>;

const h4Variants = cva(
  "whitespace-pre-line text-xl font-semibold leading-[1.4]"
);

const H4 = (props: H4Props) => {
  const { className, ...rest } = props;
  return <h4 {...rest} className={cn(h4Variants({ className }))} />;
};

export default H4;
