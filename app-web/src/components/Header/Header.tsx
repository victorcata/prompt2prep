import Link from 'next/link';
import styles from './Header.module.scss';
import { Paths } from '../../config/paths';

function Header() {
  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <Link href={Paths.Home}>Prompt2Prep</Link>
      </div>
      <ul className={styles.links}>
        <li>
          <Link href={Paths.Questions}>Questions</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
