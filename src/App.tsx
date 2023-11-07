import './App.css'
import { useTranslation, Trans } from 'react-i18next';
import i18n from './i18n';
import {useState} from 'react';

function App() {
const {t} = useTranslation();
const currentLanguage = i18n.resolvedLanguage;
const [count, setCount] = useState<number>(0)

const languageHandler = () => {
  if(currentLanguage === "np"){
    i18n.changeLanguage("en")
    setCount(count + 1)
  }else{
    i18n.changeLanguage("np")
    setCount(count + 1)
  }
}
return (
    <div >
      <Trans i18nKey="info.one">
            Practicing Localization
          </Trans> <br />
          <span>{t('info.two')}</span> <br />
          <span>{t('title')}</span>
          <br />
          {count > 0 && <i>{t('counter', { count })}</i>}
          <br />
          <button onClick={()=> languageHandler()} style={{marginTop:"20px"}}> 
            Switch Language to {currentLanguage === "np" ? "English" : "नेपाली "}
          </button>
      </div>
  )
}

export default App;
