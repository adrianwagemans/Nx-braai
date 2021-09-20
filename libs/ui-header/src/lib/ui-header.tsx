import './ui-header.module.css';

/* eslint-disable-next-line */
export interface UiHeaderProps {
  randomText: string;
}

export function UiHeader(props: UiHeaderProps) {
  return (
    <div>
      <h1>{props.randomText}</h1>
    </div>
  );
}

export default UiHeader;
