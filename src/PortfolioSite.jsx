export default function PortfolioSite() {
  // 获取 base URL，适配 GitHub Pages
  const baseUrl = import.meta.env.BASE_URL;
  
  return (
    <div className="min-h-screen w-full bg-[#0f0f1a] text-white font-sans">
      {/* HEADER */}
      <header className="w-full py-5 px-10 border-b border-white/10 flex justify-between items-center backdrop-blur-md bg-[#0f0f1a]/90 sticky top-0 z-50">
        <a href="#home" className="text-xl font-semibold tracking-wide text-white hover:text-purple-300 transition-colors duration-200">
          Li Xinyao
        </a>
        <nav className="flex gap-8 text-sm">
          <a href="#dashboard" className="opacity-70 hover:opacity-100 hover:text-purple-300 transition-all duration-200 font-medium">Data</a>
          <a href="#accounts" className="opacity-70 hover:opacity-100 hover:text-purple-300 transition-all duration-200 font-medium">Accounts</a>
          <a href="#cases" className="opacity-70 hover:opacity-100 hover:text-purple-300 transition-all duration-200 font-medium">Cases</a>
          <a href="#experience" className="opacity-70 hover:opacity-100 hover:text-purple-300 transition-all duration-200 font-medium">Experience</a>
          <a href="#contact" className="opacity-70 hover:opacity-100 hover:text-purple-300 transition-all duration-200 font-medium">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="px-10 py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="mb-6">
              <span className="text-sm opacity-60 text-purple-300">李欣遥</span>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-purple-400 via-purple-300 to-white bg-clip-text text-transparent">
                IP衍生品企划<br/>潮玩运营
              </h1>
            </div>
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="px-4 py-2 bg-white/5 rounded-lg text-sm border border-white/10 hover:border-purple-500/40 transition-all duration-200">
                <span className="opacity-60 mr-2">Location</span>
                <span className="text-purple-300 font-medium">杭州</span>
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-lg text-sm border border-white/10 hover:border-purple-500/40 transition-all duration-200">
                <span className="opacity-60 mr-2">Salary</span>
                <span className="text-purple-300 font-medium">18k/月</span>
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-lg text-sm border border-white/10 hover:border-purple-500/40 transition-all duration-200">
                <span className="opacity-60 mr-2">Availability</span>
                <span className="text-purple-300 font-medium">随时到岗</span>
              </div>
            </div>
            <p className="text-lg opacity-80 max-w-lg leading-relaxed">
              深度理解二次元用户趋势，将用户情绪转化为可落地的产品方向与企划策略。
            </p>
          </div>
          <div className="w-full aspect-video rounded-2xl shadow-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
            <img 
              src={`${baseUrl}images/hero/main-hero.jpg`}
              alt="Hero Image" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.className = 'w-full aspect-video bg-white/5 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/10';
              }}
            />
          </div>
        </div>
        
        {/* 数据展示卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-center hover:border-purple-500/40 transition-all duration-300">
            <div className="text-3xl font-bold mb-2 text-purple-300">44W+</div>
            <div className="text-xs uppercase tracking-wider opacity-60">粉丝增长</div>
          </div>
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-center hover:border-purple-500/40 transition-all duration-300">
            <div className="text-3xl font-bold mb-2 text-purple-300">310+</div>
            <div className="text-xs uppercase tracking-wider opacity-60">内容产出</div>
          </div>
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-center hover:border-purple-500/40 transition-all duration-300">
            <div className="text-3xl font-bold mb-2 text-purple-300">30%</div>
            <div className="text-xs uppercase tracking-wider opacity-60">爆款率</div>
          </div>
          <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-center hover:border-purple-500/40 transition-all duration-300">
            <div className="text-3xl font-bold mb-2 text-purple-300">28%</div>
            <div className="text-xs uppercase tracking-wider opacity-60">转化提升</div>
          </div>
        </div>
      </section>

      {/* ACCOUNT DASHBOARD */}
      <section id="dashboard" className="px-10 py-24 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Account Performance</h2>
            <p className="text-sm opacity-70">账号整体数据概览</p>
          </div>
          
          {/* 账号总数据 */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-purple-300">Overall Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-6 bg-gradient-to-br from-white/5 to-white/2 rounded-xl border border-white/10">
                <div className="text-3xl font-bold mb-2 text-purple-300">44W+</div>
                <div className="text-xs uppercase tracking-wider opacity-60 mb-2">Total Followers</div>
                <div className="h-1.5 bg-purple-500/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-400 to-purple-300 rounded-full" style={{width: '88%'}}></div>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-white/5 to-white/2 rounded-xl border border-white/10">
                <div className="text-3xl font-bold mb-2 text-purple-300">310+</div>
                <div className="text-xs uppercase tracking-wider opacity-60 mb-2">Total Videos</div>
                <div className="h-1.5 bg-purple-500/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-400 to-purple-300 rounded-full" style={{width: '62%'}}></div>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-white/5 to-white/2 rounded-xl border border-white/10">
                <div className="text-3xl font-bold mb-2 text-purple-300">13.8%</div>
                <div className="text-xs uppercase tracking-wider opacity-60 mb-2">Avg Engagement</div>
                <div className="h-1.5 bg-purple-500/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-400 to-purple-300 rounded-full" style={{width: '13.8%'}}></div>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-white/5 to-white/2 rounded-xl border border-white/10">
                <div className="text-3xl font-bold mb-2 text-purple-300">261.6W</div>
                <div className="text-xs uppercase tracking-wider opacity-60 mb-2">Max Views</div>
                <div className="h-1.5 bg-purple-500/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-400 to-purple-300 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* 近7天数据 */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-semibold text-purple-300">Recent 7 Days Performance</h3>
              <span className="text-xs opacity-60 px-3 py-1 bg-white/5 rounded-full border border-white/10">2025-11-15 至 2025-11-21</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="p-6 bg-gradient-to-br from-white/5 to-white/2 rounded-xl border border-white/10">
                <div className="text-2xl font-bold mb-2 text-purple-300">5</div>
                <div className="text-xs uppercase tracking-wider opacity-60 mb-2">投稿量</div>
                <div className="text-xs text-purple-300/80">高于 78.53% 同类创作者</div>
                <div className="mt-3 h-1.5 bg-purple-500/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-400 to-purple-300 rounded-full" style={{width: '78.53%'}}></div>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-white/5 to-white/2 rounded-xl border border-white/10">
                <div className="text-2xl font-bold mb-2 text-purple-300">22.76W</div>
                <div className="text-xs uppercase tracking-wider opacity-60 mb-2">播放量</div>
                <div className="text-xs text-purple-300/80">高于 93.84% 同类创作者</div>
                <div className="mt-3 h-1.5 bg-purple-500/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-400 to-purple-300 rounded-full" style={{width: '93.84%'}}></div>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-white/5 to-white/2 rounded-xl border border-white/10">
                <div className="text-2xl font-bold mb-2 text-purple-300">17.18%</div>
                <div className="text-xs uppercase tracking-wider opacity-60 mb-2">完播率</div>
                <div className="text-xs text-purple-300/80">高于 51.59% 同类创作者</div>
                <div className="mt-3 h-1.5 bg-purple-500/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-400 to-purple-300 rounded-full" style={{width: '51.59%'}}></div>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-white/5 to-white/2 rounded-xl border border-white/10">
                <div className="text-2xl font-bold mb-2 text-purple-300">6.17%</div>
                <div className="text-xs uppercase tracking-wider opacity-60 mb-2">互动指数</div>
                <div className="text-xs text-purple-300/80">高于 87.54% 同类创作者</div>
                <div className="mt-3 h-1.5 bg-purple-500/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-400 to-purple-300 rounded-full" style={{width: '87.54%'}}></div>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-white/5 to-white/2 rounded-xl border border-white/10">
                <div className="text-2xl font-bold mb-2 text-red-400">-333</div>
                <div className="text-xs uppercase tracking-wider opacity-60 mb-2">新增粉丝</div>
                <div className="text-xs text-red-400/80">低于 100% 同类创作者</div>
                <div className="mt-3 h-1.5 bg-red-500/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-400 to-red-300 rounded-full" style={{width: '0%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* 视频数据分类统计 */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-purple-300">Video Performance by Type</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 创作型视频 */}
              <div className="p-8 bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-xl border border-purple-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                    <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-purple-300">创作型视频</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-sm opacity-70">视频数量</span>
                    <span className="text-lg font-semibold text-purple-300">180+</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-sm opacity-70">平均播放量</span>
                    <span className="text-lg font-semibold text-purple-300">85.2W</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-sm opacity-70">平均点赞率</span>
                    <span className="text-lg font-semibold text-purple-300">12.5%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-sm opacity-70">爆款率</span>
                    <span className="text-lg font-semibold text-purple-300">30%</span>
                  </div>
                </div>
              </div>

              {/* 商业合作型视频 */}
              <div className="p-8 bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-xl border border-purple-500/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                    <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-purple-300">商业合作型视频</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-sm opacity-70">视频数量</span>
                    <span className="text-lg font-semibold text-purple-300">130+</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-sm opacity-70">平均播放量</span>
                    <span className="text-lg font-semibold text-purple-300">92.8W</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-sm opacity-70">平均点赞率</span>
                    <span className="text-lg font-semibold text-purple-300">15.2%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-sm opacity-70">转化率提升</span>
                    <span className="text-lg font-semibold text-purple-300">+28%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCOUNT MATRIX */}
      <section id="accounts" className="px-10 py-24 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Account Matrix</h2>
            <p className="text-sm opacity-70">多平台账号矩阵运营 · 44W+ 总粉丝增长</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 账号1 - 小红书主账号 */}
            <a 
              href="https://www.xiaohongshu.com/user/profile/5a7a9c924eacab4bb9aa541d?xsec_token=YBYZTPhsO7Nz0bYZip7hinbMdcNBEMJkVgJgOasbg2w3A=&xsec_source=app_share&xhsshare=CopyLink&shareRedId=N0k5RjpHOEE2NzUyOTgwNjc0OTc6NzY6&apptime=1764132036&share_id=d1381bd13c574cf88effbc2cad95397c" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 bg-gradient-to-br from-white/5 to-white/2 rounded-xl border border-white/10 hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300 block"
            >
              <div className="mb-4 aspect-[9/16] rounded-lg overflow-hidden bg-white/5 border border-white/10 group-hover:border-purple-500/30 group-hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <img 
                  src={`${baseUrl}images/accounts/account-1-screenshot.jpg`} 
                  alt="抖音账号截图" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span class="text-xs opacity-50">账号截图</span>';
                  }}
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-purple-300">小红书平台账号</h3>
                  <span className="px-2.5 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-xs text-purple-200 font-medium">抖音</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-200">
                    <div className="text-lg font-bold text-purple-300 mb-1">12W+</div>
                    <div className="text-xs opacity-60 uppercase tracking-wider">粉丝数</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-200">
                    <div className="text-lg font-bold text-purple-300 mb-1">13.8%</div>
                    <div className="text-xs opacity-60 uppercase tracking-wider">互动率</div>
                  </div>
                </div>
                <p className="text-xs opacity-70 line-clamp-2 leading-relaxed">ACGN垂类内容创作，角色世界观设定与视觉化呈现，系列化短剧矩阵运营</p>
              </div>
            </a>

            {/* 账号2 - 快手账号 */}
            <a 
              href="https://v.kuaishou.com/KJF5M56R" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 bg-gradient-to-br from-white/5 to-white/2 rounded-xl border border-white/10 hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300 block"
            >
              <div className="mb-4 aspect-[9/16] rounded-lg overflow-hidden bg-white/5 border border-white/10 group-hover:border-purple-500/30 group-hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <img 
                  src={`${baseUrl}images/accounts/account-2-screenshot.jpg`} 
                  alt="小红书账号截图" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span class="text-xs opacity-50">账号截图</span>';
                  }}
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-purple-300">快手平台账号</h3>
                  <span className="px-2.5 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-xs text-purple-200 font-medium">小红书</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-200">
                    <div className="text-lg font-bold text-purple-300 mb-1">19W+</div>
                    <div className="text-xs opacity-60 uppercase tracking-wider">粉丝数</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-200">
                    <div className="text-lg font-bold text-purple-300 mb-1">15.2%</div>
                    <div className="text-xs opacity-60 uppercase tracking-wider">互动率</div>
                  </div>
                </div>
                <p className="text-xs opacity-70 line-clamp-2 leading-relaxed">表现超77%同类账号，图文内容策划与IP衍生品种草，用户增长与商业化闭环</p>
              </div>
            </a>

            {/* 账号3 - 抖音账号 */}
            <a 
              href="https://www.douyin.com/user/MS4wLjABAAAAQIvjswkRpC2Q5uFMscVy-BAG1Us1EZrxMDdpbplawdM?from_tab_name=main" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 bg-gradient-to-br from-white/5 to-white/2 rounded-xl border border-white/10 hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300 block"
            >
              <div className="mb-4 aspect-[9/16] rounded-lg overflow-hidden bg-white/5 border border-white/10 group-hover:border-purple-500/30 group-hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <img 
                  src={`${baseUrl}images/accounts/account-3-screenshot.jpg`} 
                  alt="账号3截图" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span class="text-xs opacity-50">账号截图</span>';
                  }}
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-purple-300">抖音平台账号</h3>
                  <span className="px-2.5 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-xs text-purple-200 font-medium">多平台</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-200">
                    <div className="text-lg font-bold text-purple-300 mb-1">7W+</div>
                    <div className="text-xs opacity-60 uppercase tracking-wider">粉丝数</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-200">
                    <div className="text-lg font-bold text-purple-300 mb-1">12.5%</div>
                    <div className="text-xs opacity-60 uppercase tracking-wider">互动率</div>
                  </div>
                </div>
                <p className="text-xs opacity-70 line-clamp-2 leading-relaxed">多平台内容分发与矩阵运营，轻量级涨粉内容与系列化IP内容打造</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT SYSTEM */}
      <section id="system" className="px-10 py-24 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Content System</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-300">小剧场短剧</h3>
              <p className="opacity-75 text-sm leading-relaxed">角色世界观设定、反转结构脚本、系列化矩阵。</p>
            </div>
            <div className="p-8 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-300">旅游正片</h3>
              <p className="opacity-75 text-sm leading-relaxed">叙事节奏策略、镜头语言、情绪化故事打造。</p>
            </div>
            <div className="p-8 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-purple-300">跳舞视频</h3>
              <p className="opacity-75 text-sm leading-relaxed">轻量级涨粉内容、BGM 策略、节奏点设计。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="cases" className="px-10 py-24 border-t border-purple-500/20">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Case Studies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <a 
            href="https://v.douyin.com/BJcNaMOolEE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group cursor-pointer block"
          >
            <div className="mb-3 w-full rounded-xl overflow-hidden bg-purple-500/10 aspect-[9/16] shadow-lg border border-purple-500/30 transition-all duration-300 group-hover:scale-105 group-hover:border-purple-400/50 purple-glow-hover">
              <img 
                src={`${baseUrl}images/cases/case-a-thumbnail.jpg`} 
                alt="原创短剧案例" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <h3 className="text-lg font-semibold mb-1 text-purple-300">原创短剧案例</h3>
            <p className="text-sm opacity-70 line-clamp-2">角色世界观设定+反转脚本，矩阵化运营实现近40W+播放。</p>
          </a>
          <a 
            href="https://v.douyin.com/FNtYNIZm9xg/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group cursor-pointer block"
          >
            <div className="mb-3 w-full rounded-xl overflow-hidden bg-purple-500/10 aspect-[9/16] shadow-lg border border-purple-500/30 transition-all duration-300 group-hover:scale-105 group-hover:border-purple-400/50 purple-glow-hover">
              <img 
                src={`${baseUrl}images/cases/case-b-thumbnail.jpg`} 
                alt="垂类赛道品牌合作案例（千岛）" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <h3 className="text-lg font-semibold mb-1 text-purple-300">垂类赛道品牌合作案例（千岛）</h3>
            <p className="text-sm opacity-70 line-clamp-2">与千岛平台合作，内容点赞超行业均值14%，转化率提升28%。</p>
          </a>
          <a 
            href="https://v.douyin.com/xvsOfF67weU" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group cursor-pointer block"
          >
            <div className="mb-3 w-full rounded-xl overflow-hidden bg-purple-500/10 aspect-[9/16] shadow-lg border border-purple-500/30 transition-all duration-300 group-hover:scale-105 group-hover:border-purple-400/50 purple-glow-hover">
              <img 
                src={`${baseUrl}images/cases/case-c-thumbnail.jpg`} 
                alt="NYC旅游作品案例" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <h3 className="text-lg font-semibold mb-1 text-purple-300">NYC旅游作品案例</h3>
            <p className="text-sm opacity-70 line-clamp-2">人设+旅拍叙事，全流程把控实现高互动率与用户共鸣。</p>
          </a>
          <a 
            href="https://v.douyin.com/QdzWVqFcmFs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group cursor-pointer block"
          >
            <div className="mb-3 w-full rounded-xl overflow-hidden bg-purple-500/10 aspect-[9/16] shadow-lg border border-purple-500/30 transition-all duration-300 group-hover:scale-105 group-hover:border-purple-400/50 purple-glow-hover">
              <img 
                src={`${baseUrl}images/cases/case-d-thumbnail.jpg`} 
                alt="创意类作品案例" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <h3 className="text-lg font-semibold mb-1 text-purple-300">创意类作品案例</h3>
            <p className="text-sm opacity-70 line-clamp-2">创新视觉形式+人设结合，热点捕捉打造高传播度内容。</p>
          </a>
        </div>
      </section>

      {/* EXHIBITIONS */}
      <section id="exhibitions" className="px-10 py-24 border-t border-purple-500/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/3 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Exhibitions & Events</h2>
            <p className="text-sm opacity-70">线下展会IP运营与衍生品销售</p>
          </div>
          
          <div className="space-y-8">
            {/* GSCG上海动漫节 */}
            <div className="p-8 bg-gradient-to-br from-white/5 to-white/2 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                      <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-purple-300 mb-1">GSCG 上海动漫节</h3>
                      <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-xs text-purple-200 font-medium">2024-07-05</span>
                    </div>
                  </div>
                  <p className="text-sm opacity-80 leading-relaxed mb-6">
                    主导IP衍生品展位运营，通过产品组合策略（盈利型海报+引流型无料）实现用户转化与收益最大化。基于现场数据实时调整SKU陈列与定价策略。
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-2xl font-bold mb-1 text-purple-300">80-100</div>
                      <div className="text-xs opacity-60">日均客流量</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-2xl font-bold mb-1 text-purple-300">¥1K-1.5K</div>
                      <div className="text-xs opacity-60">日均流水</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-2xl font-bold mb-1 text-purple-300">海报</div>
                      <div className="text-xs opacity-60">主要盈利产品</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-2xl font-bold mb-1 text-purple-300">无料</div>
                      <div className="text-xs opacity-60">引流策略</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-xs text-purple-200">产品组合策略</span>
                    <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-xs text-purple-200">SKU管理</span>
                    <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-xs text-purple-200">定价优化</span>
                    <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-xs text-purple-200">现场运营</span>
                  </div>
                </div>
                <div className="lg:w-32 flex-shrink-0">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                    <p className="text-xs uppercase tracking-wider opacity-60 mb-2">Location</p>
                    <p className="text-lg font-semibold text-purple-300">上海</p>
                  </div>
                </div>
              </div>
            </div>

            {/* GSCG北京动漫节 */}
            <div className="p-8 bg-gradient-to-br from-white/5 to-white/2 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                      <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-purple-300 mb-1">GSCG 北京动漫节</h3>
                      <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-xs text-purple-200 font-medium">2024-07-12</span>
                    </div>
                  </div>
                  <p className="text-sm opacity-80 leading-relaxed mb-6">
                    优化展位布局与视觉呈现，通过差异化产品矩阵（小卡、吧唧、拍立得、海报）覆盖不同价格敏感度用户，实现客单价与复购率双重提升。
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-2xl font-bold mb-1 text-purple-300">80-100</div>
                      <div className="text-xs opacity-60">日均客流量</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-2xl font-bold mb-1 text-purple-300">¥1K-1.5K</div>
                      <div className="text-xs opacity-60">日均流水</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-2xl font-bold mb-1 text-purple-300">4类</div>
                      <div className="text-xs opacity-60">SKU品类</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-2xl font-bold mb-1 text-purple-300">差异化</div>
                      <div className="text-xs opacity-60">产品矩阵</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-xs text-purple-200">展位优化</span>
                    <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-xs text-purple-200">产品矩阵</span>
                    <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-xs text-purple-200">客单价提升</span>
                    <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-xs text-purple-200">复购策略</span>
                  </div>
                </div>
                <div className="lg:w-32 flex-shrink-0">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                    <p className="text-xs uppercase tracking-wider opacity-60 mb-2">Location</p>
                    <p className="text-lg font-semibold text-purple-300">北京</p>
                  </div>
                </div>
              </div>
            </div>

            {/* GSCG武汉动漫节 */}
            <div className="p-8 bg-gradient-to-br from-white/5 to-white/2 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                      <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-purple-300 mb-1">GSCG 武汉动漫节</h3>
                      <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-xs text-purple-200 font-medium">2024-07-20</span>
                    </div>
                  </div>
                  <p className="text-sm opacity-80 leading-relaxed mb-6">
                    基于前两场展会数据沉淀，优化无料分发策略与海报定价模型，通过用户行为分析调整产品陈列动线，提升转化效率与单客价值。
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-2xl font-bold mb-1 text-purple-300">80-100</div>
                      <div className="text-xs opacity-60">日均客流量</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-2xl font-bold mb-1 text-purple-300">¥1K-1.5K</div>
                      <div className="text-xs opacity-60">日均流水</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-2xl font-bold mb-1 text-purple-300">数据驱动</div>
                      <div className="text-xs opacity-60">策略优化</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-2xl font-bold mb-1 text-purple-300">动线优化</div>
                      <div className="text-xs opacity-60">陈列策略</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-xs text-purple-200">数据沉淀</span>
                    <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-xs text-purple-200">定价模型</span>
                    <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-xs text-purple-200">用户行为分析</span>
                    <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-xs text-purple-200">转化优化</span>
                  </div>
                </div>
                <div className="lg:w-32 flex-shrink-0">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                    <p className="text-xs uppercase tracking-wider opacity-60 mb-2">Location</p>
                    <p className="text-lg font-semibold text-purple-300">武汉</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 云南YCG动漫游戏节 */}
            <div className="p-8 bg-gradient-to-br from-white/5 to-white/2 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                      <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-purple-300 mb-1">云南 YCG 动漫游戏节</h3>
                      <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-xs text-purple-200 font-medium">2024-08-12</span>
                    </div>
                  </div>
                  <p className="text-sm opacity-80 leading-relaxed mb-6">
                    整合多场展会运营经验，建立标准化展位运营流程。通过盈利产品（海报）与引流产品（无料）的精准配比，实现稳定流水与用户增长的双重目标。
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-2xl font-bold mb-1 text-purple-300">80-100</div>
                      <div className="text-xs opacity-60">日均客流量</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-2xl font-bold mb-1 text-purple-300">¥1K-1.5K</div>
                      <div className="text-xs opacity-60">日均流水</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-2xl font-bold mb-1 text-purple-300">标准化</div>
                      <div className="text-xs opacity-60">运营流程</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-2xl font-bold mb-1 text-purple-300">精准配比</div>
                      <div className="text-xs opacity-60">产品策略</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-xs text-purple-200">流程标准化</span>
                    <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-xs text-purple-200">产品配比</span>
                    <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-xs text-purple-200">稳定流水</span>
                    <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-xs text-purple-200">用户增长</span>
                  </div>
                </div>
                <div className="lg:w-32 flex-shrink-0">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                    <p className="text-xs uppercase tracking-wider opacity-60 mb-2">Location</p>
                    <p className="text-lg font-semibold text-purple-300">云南</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Anime Matsuri 保留 */}
            <div className="p-8 bg-gradient-to-br from-white/5 to-white/2 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                      <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-purple-300 mb-1">Anime Matsuri</h3>
                      <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-xs text-purple-200 font-medium">2024-06</span>
                    </div>
                  </div>
                  <p className="text-sm opacity-80 leading-relaxed mb-6">
                    海外潮玩快闪活动，负责产品助理工作。基于展会历史数据与线上热度曲线，识别毛绒赛道需求走势；策划展位布局，日均营收达 $2,000。
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-2xl font-bold mb-1 text-purple-300">$2K</div>
                      <div className="text-xs opacity-60">日均营收</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-2xl font-bold mb-1 text-purple-300">跨境</div>
                      <div className="text-xs opacity-60">供应链优化</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-2xl font-bold mb-1 text-purple-300">全流程</div>
                      <div className="text-xs opacity-60">运营协调</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-xs text-purple-200">趋势洞察</span>
                    <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-xs text-purple-200">展会运营</span>
                    <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 rounded-lg text-xs text-purple-200">成本优化</span>
                  </div>
                </div>
                <div className="lg:w-32 flex-shrink-0">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-center">
                    <p className="text-xs uppercase tracking-wider opacity-60 mb-2">Location</p>
                    <p className="text-lg font-semibold text-purple-300">North America</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE & EDUCATION */}
      <section id="experience" className="px-10 py-24 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Experience & Education</h2>
          
          {/* 时间轴样式 */}
          <div className="space-y-12">
            {/* ACGN项目 */}
            <div className="relative pl-12 md:pl-16 border-l-2 border-purple-500/40">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-500/60 rounded-full border-4 border-[#0f0f1a] purple-glow flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
              </div>
              <div className="p-8 bg-gradient-to-br from-purple-500/15 to-purple-500/5 rounded-2xl backdrop-blur-sm border border-purple-500/40 hover:border-purple-400/60 transition-all duration-300 purple-glow-hover group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl opacity-60 group-hover:opacity-100 transition-opacity">🎨</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-2xl font-bold text-purple-300">ACGN 垂类IP运营与衍生品开发</h4>
                      <span className="px-2 py-0.5 bg-purple-500/30 border border-purple-400/50 rounded text-xs text-purple-200">进行中</span>
                    </div>
                    <p className="text-sm opacity-70 mb-1">IP运营主理</p>
                    <p className="text-xs opacity-50">2024-04 ~ 至今</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-purple-500/25 rounded-xl border border-purple-500/40 hover:scale-105 transition-transform duration-200">
                    <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent">310+</div>
                    <div className="text-xs opacity-70">内容产出</div>
                    <div className="mt-2 h-1 bg-purple-500/30 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-400 to-purple-300 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-purple-500/25 rounded-xl border border-purple-500/40 hover:scale-105 transition-transform duration-200">
                    <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent">30%</div>
                    <div className="text-xs opacity-70">爆款率</div>
                    <div className="mt-2 h-1 bg-purple-500/30 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-400 to-purple-300 rounded-full" style={{width: '30%'}}></div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-purple-500/25 rounded-xl border border-purple-500/40 hover:scale-105 transition-transform duration-200">
                    <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent">6500+</div>
                    <div className="text-xs opacity-70">私域粉丝</div>
                    <div className="mt-2 h-1 bg-purple-500/30 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-400 to-purple-300 rounded-full" style={{width: '65%'}}></div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-purple-500/25 rounded-xl border border-purple-500/40 hover:scale-105 transition-transform duration-200">
                    <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent">20+</div>
                    <div className="text-xs opacity-70">SKU策划</div>
                    <div className="mt-2 h-1 bg-purple-500/30 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-400 to-purple-300 rounded-full" style={{width: '50%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm opacity-80 leading-relaxed mb-4">
                    深耕 ACGN 垂类，以角色内容完成 <span className="text-purple-300 font-semibold">310+ 条企划</span>，爆款率达 <span className="text-purple-300 font-semibold">30%</span>（最高 261.6 万播放）；主导多平台矩阵 0–1 搭建并实现 <span className="text-purple-300 font-semibold">44W+ 增长</span>，抖音互动率 13.8%、小红书表现超 77% 同类账号。
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-purple-500/25 border border-purple-500/50 rounded-full text-xs text-purple-200 font-medium">内容增长</span>
                  <span className="px-4 py-1.5 bg-purple-500/25 border border-purple-500/50 rounded-full text-xs text-purple-200 font-medium">私域变现</span>
                  <span className="px-4 py-1.5 bg-purple-500/25 border border-purple-500/50 rounded-full text-xs text-purple-200 font-medium">品牌合作</span>
                  <span className="px-4 py-1.5 bg-purple-500/25 border border-purple-500/50 rounded-full text-xs text-purple-200 font-medium">衍生品策划</span>
                </div>
              </div>
            </div>

            {/* 海外快闪活动 */}
            <div className="relative pl-12 md:pl-16 border-l-2 border-purple-500/40">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-500/60 rounded-full border-4 border-[#0f0f1a] purple-glow flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
              </div>
              <div className="p-8 bg-gradient-to-br from-purple-500/15 to-purple-500/5 rounded-2xl backdrop-blur-sm border border-purple-500/40 hover:border-purple-400/60 transition-all duration-300 purple-glow-hover group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl opacity-60 group-hover:opacity-100 transition-opacity">🌍</div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-purple-300 mb-2">Anime Matsuri 潮玩快闪活动</h4>
                    <p className="text-sm opacity-70 mb-1">产品助理</p>
                    <p className="text-xs opacity-50">2024-06 ~ 2024-08</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-purple-500/25 rounded-xl border border-purple-500/40 hover:scale-105 transition-transform duration-200">
                    <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent">$2K</div>
                    <div className="text-xs opacity-70">日均营收</div>
                    <div className="mt-2 text-xs opacity-60">显著提升转化率</div>
                  </div>
                  <div className="text-center p-4 bg-purple-500/25 rounded-xl border border-purple-500/40 hover:scale-105 transition-transform duration-200">
                    <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent">跨境</div>
                    <div className="text-xs opacity-70">供应链优化</div>
                    <div className="mt-2 text-xs opacity-60">日本→北美渠道</div>
                  </div>
                  <div className="text-center p-4 bg-purple-500/25 rounded-xl border border-purple-500/40 hover:scale-105 transition-transform duration-200">
                    <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent">全流程</div>
                    <div className="text-xs opacity-70">运营协调</div>
                    <div className="mt-2 text-xs opacity-60">选品→销售闭环</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm opacity-80 leading-relaxed">
                    基于展会历史数据与线上热度曲线，识别毛绒赛道需求走势；策划展位布局，日均营收达 <span className="text-purple-300 font-semibold">$2,000</span>；通过对比日本供应商成本与物流稳定性，制定最优采购组合，最大化利润空间。
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-purple-500/25 border border-purple-500/50 rounded-full text-xs text-purple-200 font-medium">趋势洞察</span>
                  <span className="px-4 py-1.5 bg-purple-500/25 border border-purple-500/50 rounded-full text-xs text-purple-200 font-medium">展会运营</span>
                  <span className="px-4 py-1.5 bg-purple-500/25 border border-purple-500/50 rounded-full text-xs text-purple-200 font-medium">成本优化</span>
                </div>
              </div>
            </div>

            {/* 实习经验 */}
            <div className="relative pl-12 md:pl-16 border-l-2 border-purple-500/40">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-500/60 rounded-full border-4 border-[#0f0f1a] purple-glow flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
              </div>
              <div className="p-8 bg-gradient-to-br from-purple-500/15 to-purple-500/5 rounded-2xl backdrop-blur-sm border border-purple-500/40 hover:border-purple-400/60 transition-all duration-300 purple-glow-hover group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl opacity-60 group-hover:opacity-100 transition-opacity">🎨</div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-purple-300 mb-2">皇家宠物食品（ROYAL CANIN）</h4>
                    <p className="text-sm opacity-70 mb-1">网页设计实习生</p>
                    <p className="text-xs opacity-50">2024-01 ~ 2024-05</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-purple-500/25 rounded-xl border border-purple-500/40 hover:scale-105 transition-transform duration-200">
                    <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent">+14%</div>
                    <div className="text-xs opacity-70">访问量增长</div>
                    <div className="mt-2 h-1 bg-purple-500/30 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-400 to-purple-300 rounded-full" style={{width: '14%'}}></div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-purple-500/25 rounded-xl border border-purple-500/40 hover:scale-105 transition-transform duration-200">
                    <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent">+9%</div>
                    <div className="text-xs opacity-70">转化率提升</div>
                    <div className="mt-2 h-1 bg-purple-500/30 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-400 to-purple-300 rounded-full" style={{width: '9%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm opacity-80 leading-relaxed">
                    基于目标客群画像（一二线城市中产白领）分析与竞品调研（Purina、IAMS），主导网页视觉内容与布局优化迭代，预计带来 <span className="text-purple-300 font-semibold">14% 访问量</span> 及 <span className="text-purple-300 font-semibold">9% 转化率</span> 的增长。
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-purple-500/25 border border-purple-500/50 rounded-full text-xs text-purple-200 font-medium">视觉优化</span>
                  <span className="px-4 py-1.5 bg-purple-500/25 border border-purple-500/50 rounded-full text-xs text-purple-200 font-medium">用户画像</span>
                  <span className="px-4 py-1.5 bg-purple-500/25 border border-purple-500/50 rounded-full text-xs text-purple-200 font-medium">竞品分析</span>
                </div>
              </div>
            </div>

            {/* 教育背景 */}
            <div className="relative pl-12 md:pl-16 border-l-2 border-purple-500/40">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-500/60 rounded-full border-4 border-[#0f0f1a] purple-glow flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-purple-500/15 to-purple-500/5 rounded-2xl backdrop-blur-sm border border-purple-500/40 hover:border-purple-400/60 transition-all duration-300 purple-glow-hover group">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-3xl opacity-60 group-hover:opacity-100 transition-opacity">🎓</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-purple-300">商业分析</h4>
                        <span className="px-2.5 py-1 bg-purple-500/30 border border-purple-400/50 rounded-full text-xs text-purple-200 font-medium">硕士</span>
                      </div>
                      <p className="text-sm opacity-70 mb-1">圣路易斯华盛顿大学</p>
                      <p className="text-xs opacity-50 mb-3">2023-08 ~ 2024-12</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm opacity-70">GPA</span>
                      <span className="text-lg font-bold text-purple-300">3.82/4.0</span>
                    </div>
                    <div className="h-2 bg-purple-500/30 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-400 to-purple-300 rounded-full" style={{width: '95.5%'}}></div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['客户分析', '数据可视化', '营销策略'].map((course) => (
                      <span key={course} className="px-3 py-1 bg-purple-500/25 border border-purple-500/50 rounded-full text-xs text-purple-200">{course}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-500/15 to-purple-500/5 rounded-2xl backdrop-blur-sm border border-purple-500/40 hover:border-purple-400/60 transition-all duration-300 purple-glow-hover group">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-3xl opacity-60 group-hover:opacity-100 transition-opacity">📚</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-purple-300">农林经济管理</h4>
                        <span className="px-2.5 py-1 bg-purple-500/30 border border-purple-400/50 rounded-full text-xs text-purple-200 font-medium">本科</span>
                      </div>
                      <p className="text-sm opacity-70 mb-1">俄克拉荷马州立大学&中国农业大学</p>
                      <p className="text-xs opacity-50 mb-3">2019-08 ~ 2023-05</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm opacity-70">GPA</span>
                      <span className="text-lg font-bold text-purple-300">3.76/4.0</span>
                    </div>
                    <div className="h-2 bg-purple-500/30 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-400 to-purple-300 rounded-full" style={{width: '94%'}}></div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['经济学', '统计学', '营销管理'].map((course) => (
                      <span key={course} className="px-3 py-1 bg-purple-500/25 border border-purple-500/50 rounded-full text-xs text-purple-200">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-10 py-24 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Skills & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-lg font-semibold mb-4 text-purple-300 uppercase tracking-wider text-sm">核心优势</h3>
              <div className="flex flex-wrap gap-2">
                {['爆款打造', 'IP运营', '用户增长', '品牌策划', '数据分析', '内容创意', '全域运营'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs border border-white/10 hover:border-purple-500/40 transition-all duration-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-lg font-semibold mb-4 text-purple-300 uppercase tracking-wider text-sm">技能工具</h3>
              <div className="flex flex-wrap gap-2">
                {['剪映', 'Canva', 'Photoshop', 'Microsoft Office'].map((tool) => (
                  <span key={tool} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs border border-white/10 hover:border-purple-500/40 transition-all duration-200">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-lg font-semibold mb-4 text-purple-300 uppercase tracking-wider text-sm">语言能力</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-sm opacity-70">TOEFL</span>
                  <span className="text-base font-semibold text-purple-300">105+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-sm opacity-70">GRE</span>
                  <span className="text-base font-semibold text-purple-300">320+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND WORK */}
      <section id="brand" className="px-10 py-24 border-t border-purple-500/20 overflow-hidden">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Brand Collaboration</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex gap-8 brand-scroll">
              {/* 第一组 */}
              <div className="h-32 w-48 flex-shrink-0 bg-purple-500/10 rounded-2xl flex items-center justify-center p-4 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-200">
                <img 
                  src={`${baseUrl}images/brands/brand-1-logo.png`} 
                  alt="Brand 1" 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="h-32 w-48 flex-shrink-0 bg-purple-500/10 rounded-2xl flex items-center justify-center p-4 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-200">
                <img 
                  src={`${baseUrl}images/brands/brand-2-logo.png`} 
                  alt="Brand 2" 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="h-32 w-48 flex-shrink-0 bg-purple-500/10 rounded-2xl flex items-center justify-center p-4 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-200">
                <img 
                  src={`${baseUrl}images/brands/brand-3-logo.png`} 
                  alt="Brand 3" 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              {/* 第二组（用于无缝循环） */}
              <div className="h-32 w-48 flex-shrink-0 bg-purple-500/10 rounded-2xl flex items-center justify-center p-4 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-200">
                <img 
                  src={`${baseUrl}images/brands/brand-1-logo.png`} 
                  alt="Brand 1" 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="h-32 w-48 flex-shrink-0 bg-purple-500/10 rounded-2xl flex items-center justify-center p-4 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-200">
                <img 
                  src={`${baseUrl}images/brands/brand-2-logo.png`} 
                  alt="Brand 2" 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="h-32 w-48 flex-shrink-0 bg-purple-500/10 rounded-2xl flex items-center justify-center p-4 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-200">
                <img 
                  src={`${baseUrl}images/brands/brand-3-logo.png`} 
                  alt="Brand 3" 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              {/* 第三组（确保无缝循环） */}
              <div className="h-32 w-48 flex-shrink-0 bg-purple-500/10 rounded-2xl flex items-center justify-center p-4 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-200">
                <img 
                  src={`${baseUrl}images/brands/brand-1-logo.png`} 
                  alt="Brand 1" 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="h-32 w-48 flex-shrink-0 bg-purple-500/10 rounded-2xl flex items-center justify-center p-4 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-200">
                <img 
                  src={`${baseUrl}images/brands/brand-2-logo.png`} 
                  alt="Brand 2" 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="h-32 w-48 flex-shrink-0 bg-purple-500/10 rounded-2xl flex items-center justify-center p-4 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-200">
                <img 
                  src={`${baseUrl}images/brands/brand-3-logo.png`} 
                  alt="Brand 3" 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT & CORE STRENGTHS */}
      <section id="about" className="px-10 py-24 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">About</h2>
            <p className="text-center text-lg opacity-80 max-w-3xl mx-auto leading-relaxed">
              具备脚本创作、内容拍摄、账号运营、数据分析、增长策略制定的综合内容运营能力。
              曾深耕 Cosplay/二次元内容领域，主导多项系列化内容的策划与执行。
            </p>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center text-purple-300">Core Strengths</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 bg-gradient-to-br from-purple-500/15 to-purple-500/5 rounded-xl backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 border border-purple-500/30">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-purple-300">用户洞察</h4>
                <p className="text-sm opacity-75 leading-relaxed">
                  深度理解二次元用户趋势，具备内容数据与线下反馈的综合洞察能力，能将用户情绪转化为可落地的产品方向与企划策略。
                </p>
              </div>
              <div className="p-8 bg-gradient-to-br from-purple-500/15 to-purple-500/5 rounded-xl backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 border border-purple-500/30">
                  <span className="text-2xl">📈</span>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-purple-300">全链路增长</h4>
                <p className="text-sm opacity-75 leading-relaxed">
                  具备多平台0-1冷启动经验，曾打造ACGN视觉表现型账号矩阵并实现44W+粉丝增长，熟悉用户增长与商业化逻辑，可用于IP衍生品动销与策略优化。
                </p>
              </div>
              <div className="p-8 bg-gradient-to-br from-purple-500/15 to-purple-500/5 rounded-xl backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 border border-purple-500/30">
                  <span className="text-2xl">💡</span>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-purple-300">创意策划</h4>
                <p className="text-sm opacity-75 leading-relaxed">
                  擅长热点捕捉与视觉化内容策划，拥有多条300W+爆款经验；具备品牌合作与跨团队协同能力，曾推动品牌转化率提升28%。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-10 py-32 border-t border-purple-500/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Let's Connect</h2>
            <p className="text-base opacity-80 max-w-2xl mx-auto leading-relaxed">
              期待与您合作，共同打造优质IP内容。如有项目合作或职位机会，欢迎随时联系。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a href="tel:18778981560" className="group p-8 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-xl flex items-center justify-center mb-4 border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                  <svg className="w-7 h-7 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-sm uppercase tracking-wider opacity-60 mb-2">Phone</h3>
                <p className="text-lg font-semibold text-purple-300 group-hover:text-purple-200 transition-colors">
                  18778981560
                </p>
              </div>
            </a>
            
            <a href="mailto:1097135415@qq.com" className="group p-8 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-xl flex items-center justify-center mb-4 border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                  <svg className="w-7 h-7 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-sm uppercase tracking-wider opacity-60 mb-2">Email</h3>
                <p className="text-base font-semibold text-purple-300 group-hover:text-purple-200 transition-colors break-all">
                  1097135415@qq.com
                </p>
              </div>
            </a>
            
            <div className="p-8 bg-white/5 rounded-xl border border-white/10">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-xl flex items-center justify-center mb-4 border border-purple-500/30">
                  <svg className="w-7 h-7 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-sm uppercase tracking-wider opacity-60 mb-2">Location</h3>
                <p className="text-lg font-semibold text-purple-300">
                  杭州
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm opacity-70">
              <div className="flex items-center gap-2">
                <span className="opacity-60">Age</span>
                <span className="text-purple-300 font-medium">24</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-white/20 rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="opacity-60">Gender</span>
                <span className="text-purple-300 font-medium">Female</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-white/20 rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="opacity-60">Availability</span>
                <span className="text-purple-300 font-medium">随时到岗</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-white/10 mt-24">
        <p className="text-sm opacity-50 mb-2">© 2025 Li Xinyao Portfolio</p>
        <p className="text-xs opacity-40">IP衍生品企划 · 潮玩运营</p>
      </footer>
    </div>
  );
}








