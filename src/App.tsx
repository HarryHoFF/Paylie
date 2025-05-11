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
  { id: 1, name: "Deutsche Post AG", date: "01/04/2025", amount: "-20,07 €", type: "outcome" },
  { id: 2, name: "PayPal", date: "01/04/2025", amount: "20,07 €", type: "income" },
  { id: 3, name: "Deutsche Post AG", date: "01/04/2025", amount: "-20,07 €", type: "outcome" },
  { id: 4, name: "Jana Schlechte", date: "01/04/2025", amount: "68,86 €", type: "income" },
  { id: 5, name: "Nicole Boer", date: "02/04/2025", amount: "76,20 €", type: "income" },
  { id: 6, name: "GOESTA-PER SIEVERS", date: "02/04/2025", amount: "-210,00 €", type: "outcome" },
  { id: 7, name: "Jana Schlechte", date: "02/04/2025", amount: "-7,63 €", type: "outcome" },
  { id: 8, name: "Jana Schlechte", date: "02/04/2025", amount: "34,28 €", type: "income" },
  { id: 9, name: "Susanne Hauswirth", date: "02/04/2025", amount: "-74,76 €", type: "outcome" },
  { id: 10, name: "Susanne Hauswirth", date: "02/04/2025", amount: "-38,19 €", type: "outcome" },
  { id: 11, name: "Mayling Keun", date: "03/04/2025", amount: "31,38 €", type: "income" },
  { id: 12, name: "Deutsche Post AG", date: "04/04/2025", amount: "-6,19 €", type: "outcome" },
  { id: 13, name: "PayPal", date: "04/04/2025", amount: "6,19 €", type: "income" },
  { id: 14, name: "Deutsche Post AG", date: "04/04/2025", amount: "-6,19 €", type: "outcome" },
  { id: 15, name: "Fastspring BV", date: "04/04/2025", amount: "-19,06 €", type: "outcome" },
  { id: 16, name: "PayPal", date: "04/04/2025", amount: "19,06 €", type: "income" },
  { id: 17, name: "GOESTA-PER SIEVERS", date: "07/04/2025", amount: "210,00 €", type: "income" },
  { id: 18, name: "Bernd Weiß", date: "08/04/2025", amount: "109,48 €", type: "income" },
  { id: 19, name: "Ann-Kathrin Wille", date: "08/04/2025", amount: "31,33 €", type: "income" },
  { id: 20, name: "Alexandra Sentner", date: "09/04/2025", amount: "133,59 €", type: "income" },
];
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
        <h2>1.296,61 €</h2>
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
