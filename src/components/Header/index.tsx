import React from 'react';
import { useTranslation } from 'react-i18next';
import en from '../../assets/img/en.png';
import es from '../../assets/img/es.png';
import fr from '../../assets/img/fr.png';
import it from '../../assets/img/it.png';
import ptBR from '../../assets/img/ptBR.png';
import styles from './styles.module.css';

const Header: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={styles.header}>
      <button className={styles.flagButton} onClick={() => changeLanguage('pt')}>
        <img src={ptBR} alt='Português' />
      </button>

      <button className={styles.flagButton} onClick={() => changeLanguage('en')}>
        <img src={en} alt='English' />
      </button>

      <button className={styles.flagButton} onClick={() => changeLanguage('es')}>
        <img src={es} alt='Español' />
      </button>

      <button className={styles.flagButton} onClick={() => changeLanguage('fr')}>
        <img src={fr} alt='Français' />
      </button>

      <button className={styles.flagButton} onClick={() => changeLanguage('it')}>
        <img src={it} alt='Italiano' />
      </button>
    </div>
  );
};

export default Header;