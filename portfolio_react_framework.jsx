export default function PortfolioSite() {
  return (
    <div className="min-h-screen w-full bg-[#0f0f1a] text-white font-sans">
      {/* HEADER */}
      <header className="w-full py-6 px-10 border-b border-white/10 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">Creator IP Operator</div>
        <nav className="flex gap-8 text-sm opacity-80">
          <a href="#home" className="hover:opacity-100">Home</a>
          <a href="#cases" className="hover:opacity-100">Cases</a>
          <a href="#about" className="hover:opacity-100">About</a>
          <a href="#contact" className="hover:opacity-100">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="px-10 py-32 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6">Cosplay & ACGN<br/>Content IP Operator</h1>
          <p className="text-lg opacity-80 max-w-lg">
            以 IP 化视角进行内容策划、账号增长、选题策略、系列化短剧打造与粉丝运营，
            擅长将角色与内容结合成可持续增长系统。
          </p>
        </div>
        <div className="w-full h-80 bg-white/5 rounded-2xl shadow-xl"></div>
      </section>

      {/* CONTENT SYSTEM */}
      <section id="system" className="px-10 py-24 border-t border-white/5">
        <h2 className="text-3xl font-bold mb-10">Content System</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white/5 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">小剧场短剧</h3>
            <p className="opacity-70 text-sm">角色世界观设定、反转结构脚本、系列化矩阵。</p>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">旅游正片</h3>
            <p className="opacity-70 text-sm">叙事节奏策略、镜头语言、情绪化故事打造。</p>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">跳舞视频</h3>
            <p className="opacity-70 text-sm">轻量级涨粉内容、BGM 策略、节奏点设计。</p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="cases" className="px-10 py-24 border-t border-white/5">
        <h2 className="text-3xl font-bold mb-10">Case Studies</h2>
        <div className="space-y-6">
          <div className="p-6 bg-white/5 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">短剧案例 A</h3>
            <p className="text-sm opacity-70">背景、策略、脚本、执行、数据与复盘说明区块。</p>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">旅游正片案例 B</h3>
            <p className="text-sm opacity-70">人设结合旅拍叙事的视觉内容案例。</p>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section id="insight" className="px-10 py-24 border-t border-white/5">
        <h2 className="text-3xl font-bold mb-10">Insight & Methodology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white/5 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">粉丝画像分析</h3>
            <p className="text-sm opacity-70">核心受众、兴趣偏好、互动特征。</p>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">内容增长方法论</h3>
            <p className="text-sm opacity-70">选题、结构、复盘、流量抓手提炼。</p>
          </div>
        </div>
      </section>

      {/* BRAND WORK */}
      <section id="brand" className="px-10 py-24 border-t border-white/5">
        <h2 className="text-3xl font-bold mb-10">Brand Collaboration</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-32 bg-white/5 rounded-2xl"></div>
          <div className="h-32 bg-white/5 rounded-2xl"></div>
          <div className="h-32 bg-white/5 rounded-2xl"></div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-10 py-24 border-t border-white/5">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="max-w-2xl opacity-80 text-sm leading-relaxed">
          具备脚本创作、内容拍摄、账号运营、数据分析、增长策略制定的综合内容运营能力。
          曾深耕 Cosplay/二次元内容领域，主导多项系列化内容的策划与执行。
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-10 py-24 border-t border-white/5">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="opacity-80 text-sm">Email: yourname@example.com</p>
        <p className="opacity-80 text-sm mt-1">WeChat: yourwechat</p>
      </section>

      <footer className="py-10 text-center opacity-40 text-xs border-t border-white/5 mt-20">
        © 2025 Portfolio for IP Operator
      </footer>
    </div>
  );
}
