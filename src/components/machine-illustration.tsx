import { Sparkle } from "@phosphor-icons/react/dist/ssr";

export function MachineIllustration() {
  return <div className="machine-frame" role="img" aria-label="Иллюстрация вендингового аппарата EVA с товарами женской гигиены">
    <span className="led-orb" /><span className="machine-badge">EVA</span>
    <div className="machine-top"><span>женская гигиена</span><b>ЕВА</b></div>
    <div className="machine-body"><div className="machine-shelf"><i /><i /><i /><i /><i /><i /></div><div className="machine-slots"><span /><span /><span /></div><div className="machine-pickup"><Sparkle size={20} weight="regular" /> Забери меня</div></div>
  </div>;
}
