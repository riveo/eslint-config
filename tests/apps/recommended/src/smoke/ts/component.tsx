type LabelProps = {
  label: string;
};

export function Label({ label }: LabelProps) {
  return label.toUpperCase();
}
