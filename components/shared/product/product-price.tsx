import { cn } from "@/lib/utils";

export default function ProductPrice({
  value,
  classnName,
}: {
  value: number;
  classnName?: string;
}) {
  const stringValue = value.toFixed(2);

  const [intValue, floatValue] = stringValue.split(".");

  return (
    <p className={cn("text-2xl", classnName)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
}
