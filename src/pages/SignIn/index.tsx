import { useState } from 'react';

import checkboxSvg from '../../assets/checkbox.svg';
import logoSvg from '../../assets/logo.svg';
import lockSvg from '../../assets/lock.svg';
import mailSvg from '../../assets/mail.svg';

import styles from './styles.module.scss';

import { useAuth } from '../../contexts/auth';

export function SignIn() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string | undefined>();

  const { verifyUserCredentials } = useAuth();

  function handleSubmit(e: any) {
    e.preventDefault();
    verifyUserCredentials({ email, password });
  }

  return (
    <div className={styles.container}>
      <div className={styles.signIn}>
        <div className={styles.signInContent}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <img src={logoSvg} alt="TrackCash Logo" />
            <h2>Fazer login no TrackCash:</h2>

            <div className={styles.inputWrapper}>
              <input
                name="email"
                type="email"
                placeholder="Digite seu E-mail"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <img src={mailSvg} alt="Mail Icon" />
            </div>

            <div className={styles.inputWrapper}>
              <input
                name="password"
                type="password"
                placeholder="Digite sua Senha"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <img src={lockSvg} alt="Lock Icon" />
            </div>

            <button>Login</button>
          </form>
          <div className={styles.signInFooter}>
            <div className={styles.checkBoxFooter}>
              <img src={checkboxSvg} alt="Checkbox" />
              <span>Lembre-me</span>
            </div>
            <div className={styles.registrationFooter}>
              <p style={{ marginTop: 1, marginBottom: 10 }}>Recuperar</p>
              <p>Cadastre-se</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sideScreen}>
        <h1>Muito mais que um conciliador financeiro!</h1>
        <p>
          A melhor ferramenta no mercado e a única com processo automatizado,
          que compara as informações entre Plataformas, MarketPlaces,
          Transportadoras, Meios de Pagamento e Instituições Financeiras!
        </p>
      </div>
    </div>
  );
}
