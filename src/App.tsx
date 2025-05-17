import { useState } from 'react';
import './App.css';

type Transaction = {
  id: number;
  name: string;
  date: string;
  amount: string;
  type: 'income' | 'outcome';
};

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showMitId, setShowMitId] = useState(false);
  const [currentAction, setCurrentAction] = useState<'send' | 'request' | null>(null);

const transactions: Transaction[] = [
  // Mai 2025
  { id: 112, name: "Deutsche Post AG", date: "17/05/2025", amount: "-6,19 €", type: "outcome" },
  { id: 111, name: "Tordis Staack", date: "16/05/2025", amount: "59,35 €", type: "income" },
  { id: 109, name: "Deutsche Post AG", date: "16/05/2025", amount: "-7,69 €", type: "outcome" },
  { id: 110, name: "Carrie Liepelt", date: "12/05/2025", amount: "26,85 €", type: "income" },
  { id: 109, name: "Deutsche Post AG", date: "12/05/2025", amount: "-6,19 €", type: "outcome" },
  { id: 1, name: "Mona Ursula Plieninger", date: "09/05/2025", amount: "46,31 €", type: "income" },
  { id: 3, name: "Deutsche Post AG", date: "09/05/2025", amount: "-6,19 €", type: "outcome" },
  { id: 4, name: "PayPal", date: "09/05/2025", amount: "6,19 €", type: "income" },
  { id: 5, name: "Jana-Madlen Brügmann", date: "08/05/2025", amount: "54,62 €", type: "income" },
  { id: 7, name: "Britta Janßen", date: "08/05/2025", amount: "33,32 €", type: "income" },
  { id: 10, name: "Deutsche Post AG", date: "06/05/2025", amount: "-6,19 €", type: "outcome" },
  { id: 11, name: "PayPal", date: "06/05/2025", amount: "6,19 €", type: "income" },
  { id: 12, name: "Stefanie Ghassemieh", date: "05/05/2025", amount: "34,72 €", type: "income" },
  { id: 13, name: "Anja Breiding", date: "04/05/2025", amount: "57,13 €", type: "income" },
  { id: 15, name: "Fastspring BV", date: "04/05/2025", amount: "-19,06 €", type: "outcome" },
  { id: 16, name: "PayPal", date: "04/05/2025", amount: "19,06 €", type: "income" },
  { id: 17, name: "Gesa Engel", date: "03/05/2025", amount: "25,59 €", type: "income" },
  { id: 19, name: "Deutsche Post AG", date: "01/05/2025", amount: "-7,69 €", type: "outcome" },
  { id: 20, name: "PayPal", date: "01/05/2025", amount: "7,69 €", type: "income" },

  // April 2025
  { id: 21, name: "Heike Schulz", date: "30/04/2025", amount: "53,36 €", type: "income" },
  { id: 22, name: "IONOS SE", date: "29/04/2025", amount: "-31,51 €", type: "outcome" },
  { id: 23, name: "Wencke Ettrich", date: "28/04/2025", amount: "83,26 €", type: "income" },
  { id: 25, name: "Maik Böbel", date: "28/04/2025", amount: "22,16 €", type: "income" },
  { id: 26, name: "Deutsche Post AG", date: "28/04/2025", amount: "-30,95 €", type: "outcome" },
  { id: 27, name: "PayPal", date: "28/04/2025", amount: "30,95 €", type: "income" },
  { id: 29, name: "Carla Siemund", date: "27/04/2025", amount: "38,10 €", type: "income" },
  { id: 30, name: "Jessica Beinlich", date: "26/04/2025", amount: "74,80 €", type: "income" },
  { id: 31, name: "Nicole Vater", date: "26/04/2025", amount: "30,32 €", type: "income" },
  { id: 34, name: "Fiete Fölster", date: "24/04/2025", amount: "43,89 €", type: "income" },
  { id: 36, name: "Deutsche Post AG", date: "24/04/2025", amount: "-7,69 €", type: "outcome" },
  { id: 37, name: "PayPal", date: "24/04/2025", amount: "7,69 €", type: "income" },
  { id: 38, name: "Peggy Möller", date: "22/04/2025", amount: "32,74 €", type: "income" },
  { id: 40, name: "Jasmin Radmacher", date: "22/04/2025", amount: "25,59 €", type: "income" },

  // Weitere Transaktionen...
  { id: 41, name: "Netflix.com", date: "18/04/2025", amount: "-16,37 €", type: "outcome" },
  { id: 42, name: "Billiger Mietwagen", date: "18/04/2025", amount: "-440,00 €", type: "outcome" },
  { id: 43, name: "CMC Tashy Group BV", date: "18/04/2025", amount: "-362,91 €", type: "outcome" },
  { id: 44, name: "Katharina Laugner", date: "18/04/2025", amount: "27,52 €", type: "income" },
  { id: 45, name: "Heike Budewett", date: "18/04/2025", amount: "74,13 €", type: "income" },
  { id: 46, name: "Katja Kabelitz", date: "18/04/2025", amount: "73,60 €", type: "income" },
  { id: 47, name: "Deutsche Post AG", date: "17/04/2025", amount: "-18,57 €", type: "outcome" },
  { id: 48, name: "PayPal", date: "17/04/2025", amount: "18,57 €", type: "income" },
  { id: 49, name: "Deutsche Post AG", date: "17/04/2025", amount: "-12,38 €", type: "outcome" },
  { id: 50, name: "PayPal", date: "17/04/2025", amount: "12,38 €", type: "income" },

  // März 2025 usw. (fortsetzen für alle 9 Seiten)
]
  const handleLogin = () => {
    if (username === 'GoonDocksHaderslev' && password === '132313') {
      setLoggedIn(true);
    } else {
      alert('Forkert brugernavn eller adgangskode');
    }
  };

  const handleActionClick = (action: 'send' | 'request') => {
    setCurrentAction(action);
    setShowMitId(true);
  };

  if (!loggedIn) {
    return (
      <div className="login-container">
        <div className="login-box">
          <h2>PayPal Erhvervs - Login</h2>
          <input
            type="text"
            placeholder="Brugernavn"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Adgangskode"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Log ind</button>
        </div>
      </div>
    );
  }

  if (showMitId) {
    return (
      <div className="mitid-container">
        <div className="mitid-box">
          <h2>Opret forbindelse med MitID</h2>
          <p>For at {currentAction === 'send' ? 'sende' : 'anmode om'} penge, skal du bekræfte med MitID</p>
          <button onClick={() => setShowMitId(false)}>Tilbage</button>
        </div>
      </div>
    );
  }

  return (
    <div className="paypal-app">
      <header className="header">
        <div className="title-container">
          <h1>PayPal</h1>
          <p className="subtitle">Erhvervs</p>
        </div>
        <div className="notification-icon">🔔</div>
      </header>

      <div className="balance-card">
        <p>Din saldo</p>
        <h2>2.270,18 €</h2>
      </div>

      <div className="button-container">
        <button 
          className="paypal-button button-send"
          onClick={() => handleActionClick('send')}
        >
          Send
        </button>
        <button 
          className="paypal-button button-request"
          onClick={() => handleActionClick('request')}
        >
          Anmod
        </button>
      </div>

      <div className="transaction-list">
        <h3>Seneste aktivitet</h3>
        {transactions.map((transaction) => (
          <div key={transaction.id} className="transaction">
            <div className="transaction-icon">
              {transaction.type === "income" ? "⬇️" : "⬆️"}
            </div>
            <div className="transaction-details">
              <p className="transaction-name">{transaction.name}</p>
              <p className="transaction-date">{transaction.date}</p>
            </div>
            <p className={`transaction-amount ${transaction.type}`}>
              {transaction.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
