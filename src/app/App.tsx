import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AboutPage } from "../pages/AboutPage";
import { MainLayout } from "../components/layout/MainLayout";
import { CaseDetailPage } from "../pages/CaseDetailPage";
import { CasesPage } from "../pages/CasesPage";
import { ConsultationPage } from "../pages/ConsultationPage";
import { ContactsPage } from "../pages/ContactsPage";
import { CRMPage } from "../pages/CRMPage";
import { HomePage } from "../pages/HomePage";
import { NetvisionPage } from "../pages/NetvisionPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="crm" element={<CRMPage />} />
          <Route path="netvision" element={<NetvisionPage />} />
          <Route path="cases" element={<CasesPage />} />
          <Route path="cases/:slug" element={<CaseDetailPage />} />
          <Route path="consultation" element={<ConsultationPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
