import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// الحصول على العنصر root من الـ HTML
const rootElement = document.getElementById('root')

// إنشاء root جديد وتشغيل التطبيق
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
