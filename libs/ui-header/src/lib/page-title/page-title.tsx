import { title } from 'process';
import './page-title.module.css';

/* eslint-disable-next-line */
export interface PageTitleProps {
  mainTitle: string;
}

export function PageTitle(props: PageTitleProps) {
  return (
    <div>
      <h1>{props.mainTitle}</h1>
    </div>
  );
}

export default PageTitle;
