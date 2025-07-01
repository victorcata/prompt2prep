import Link from 'next/link';
import styles from './Header.module.scss';
import { Paths } from '../../config/paths';

function Header() {
  return (
    <nav className={styles.main}>
      <ul className={styles.links}>
        <li>
          <Link href={Paths.Home}>Resume</Link>
        </li>
        <li>
          <Link href={Paths.JobDescription}>Job Description</Link>
        </li>
        <li>
          <Link href={Paths.Questions}>Questions</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
