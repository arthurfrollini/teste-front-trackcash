import { useEffect } from 'react';
import 'react-day-picker/lib/style.css';

import moneyWhiteSvg from '../../assets/moneyWhite.svg';
import logoMiniPng from '../../assets/logoMini.png';
import calendarSvg from '../../assets/calendar.svg';
import moneySvg from '../../assets/money.svg';
import userSvg from '../../assets/user.svg';
import listSvg from '../../assets/list.svg';

import styles from './styles.module.scss';

import { useAuth } from '../../contexts/auth';
import { ApexCharts } from '../../components/ApexCharts/index';
import { DatePicker } from '../../components/DatePicker';

export function Home() {
  const { signOut, apiData } = useAuth();

  useEffect(() => {
    // console.log(apiData.data[0].Total.cashback);
  }, [apiData]);

  function handleSignOut() {
    signOut();
  }

  return (
    <>
      <div className={styles.primaryHeader}>
        <img src={logoMiniPng} alt="TrackCash Logo" />
        <div className={styles.iconWrapper} onClick={handleSignOut}>
          <span>Logout</span>
          <img src={userSvg} alt="User Icon" />
        </div>
      </div>
      <div className={styles.secondaryHeader}>
        <div>
          <h1>Tabela de Recorrências de Pagamentos</h1>
          <p>Página de Recorrências de pagamentos referentes ao mês atual</p>
        </div>
        <div className={styles.calendar}>
          <p>
            Calendário
            <img src={calendarSvg} alt="Calendário" />
          </p>
          <DatePicker />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.div1}>
          <h1>Desempenho Mensal e Diário</h1>
          <div className={styles.graphic}>
            <ApexCharts />
          </div>
          <div className={styles.approvalPorcentages}>
            <div className={styles.contentWrapper}>
              <img src={listSvg} alt="List Icon" />
              <p className={styles.firstValue}>
                {apiData.data[0].Total.bank_statement}
              </p>
              <p>Extrato bancário</p>
            </div>
            <div className={styles.contentWrapper}>
              <img src={moneySvg} alt="Dollar Sign" />
              <p className={styles.secondValue}>
                {apiData.data[0].Total.automatic_transfers}
              </p>
              <p>Transferência automática</p>
            </div>
          </div>
          <div className={styles.listDivider} />
          <div className={styles.approvalPorcentages}>
            <div className={styles.contentWrapper}>
              <img src={listSvg} alt="List Icon" />
              <p className={styles.firstValue}>
                {apiData.data[0].Total.disputes}
              </p>
              <p>Disputas</p>
            </div>
            <div className={styles.contentWrapper}>
              <img src={moneySvg} alt="Dollar Sign" />
              <p className={styles.secondValue}>
                {apiData.data[0].Total.current_balance}
              </p>
              <p>Total de vendas do dia (R$)</p>
            </div>
          </div>
        </div>
        <div className={styles.div2}>
          <h1>Desempenho Mensal e Diário</h1>
          <div className={styles.card}>
            <img src={moneyWhiteSvg} alt="Dollar Sign" />
            <strong>{apiData.data[0].Total.total}</strong>
            <p>Total líquido (R$)</p>
          </div>
          <div className={styles.listDivider} />
          <div className={styles.valuesContainer}>
            <div>
              <p className={styles.valuesLeft}>
                {apiData.data[0].Total.withdrawals}
              </p>
              <span>Retiradas (R$)</span>
            </div>
            <div>
              <p> {apiData.data[0].Total.comissions}</p>
              <span style={{ marginLeft: 60 }}>Comissões (R$)</span>
            </div>
          </div>
          <div className={styles.valuesContainer}>
            <div>
              <p className={styles.valuesLeft}>
                {apiData.data[0].Total.anticipations}
              </p>
              <span>Antecipações (R$)</span>
            </div>
            <div>
              <p> {apiData.data[0].Total.shipping}</p>
              <span>Frete do marketplace (R$)</span>
            </div>
          </div>
          <div className={styles.valuesContainer}>
            <div>
              <p className={styles.valuesLeft}>
                {apiData.data[0].Total.total_anticipations}
              </p>
              <span>Antecipações totais (R$)</span>
            </div>
            <div>
              <p> {apiData.data[0].Total.refundeds}</p>
              <span>Devoluções e cancelamentos (R$)</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div>
          Copyright © 2017 - 2021 <b>TrackCash</b>. Todos os Direitos
          Reservados.
        </div>
        <div>
          <ul>
            <li>Temos de uso</li>
            <li>Políticas de privacidade</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </>
  );
}
