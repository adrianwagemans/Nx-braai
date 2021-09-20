import './text.module.css';

/* eslint-disable-next-line */
export interface TextProps {
  randomText: string;
}

export function Text(props: TextProps) {
  return (
    <div>
      <h1>{props.randomText}</h1>
    </div>
  );
}

export default Text;
