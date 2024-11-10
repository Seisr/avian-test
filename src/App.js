import styles from "./App.module.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className="menu">
            <Menu />
          </div>
        </div>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.dashboard}>
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
