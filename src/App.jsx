import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Outlet } from "react-router-dom";
import { getAccountAPI } from "./services/api.service";
import { useCallback, useContext, useEffect } from "react";
import { AuthContext } from "./components/context/auth.context";
import { Spin } from "antd";

const App = () => {
  const { setUser, isLoading, setIsLoading } = useContext(AuthContext);

  const fetchUserInfo = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await getAccountAPI();
      if (res.data) {
        setUser(res.data.user);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, setUser]);

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  if (isLoading) {
    return (
      <div className="app-loading">
        <Spin />
      </div>
    );
  }
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
