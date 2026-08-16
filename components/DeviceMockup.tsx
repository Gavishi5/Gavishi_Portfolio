import React from 'react';
import Image from 'next/image';

interface DeviceMockupProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  themeGradient?: string;
  className?: string;
  showAppHeader?: boolean;
  screenshot?: string;
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({
  children,
  title = "Mobile Application",
  subtitle = "React Native • iOS & Android",
  themeGradient = "from-cyan-500/20 via-indigo-500/10 to-purple-500/20",
  className = "",
  showAppHeader = true,
  screenshot,
}) => {
  return (
    <div className={`relative mx-auto max-w-[280px] sm:max-w-[310px] ${className}`}>
      {/* Dynamic Background Glow */}
      <div className="absolute -inset-1 rounded-[42px] bg-gradient-to-tr from-cyan-500/30 via-indigo-500/30 to-purple-600/30 blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

      {/* Smartphone Outer Chassis */}
      <div className="relative rounded-[38px] bg-[#0c0f17] p-2.5 shadow-2xl ring-1 ring-white/10 border border-white/10 backdrop-blur-xl">
        {/* Top Camera Punch Hole / Dynamic Island Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center justify-between w-24 h-3.5 bg-black rounded-full px-2 border border-white/10 shadow-inner">
          <div className="w-2 h-2 rounded-full bg-[#1e2330] border border-white/10 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-cyan-400/80"></div>
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-900/60"></div>
        </div>

        {/* Screen Display Container */}
        <div className={`relative rounded-[30px] overflow-hidden bg-gradient-to-b from-[#0f1422] to-[#07090e] border border-white/5 text-white flex flex-col ${
          screenshot ? 'aspect-[9/19.5]' : 'min-h-[500px] sm:min-h-[560px]'
        }`}>
          {/* Glass Overlay Light Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20"></div>

          {/* Optional App Header Bar (hidden when displaying full screenshot) */}
          {showAppHeader && !screenshot && (
            <div className="pt-7 px-4 pb-2.5 bg-[#131826]/90 border-b border-white/5 flex items-center justify-between z-10">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                <span className="text-xs font-semibold tracking-wide text-gray-200 truncate max-w-[150px]">
                  {title}
                </span>
              </div>
              <span className="text-[10px] text-cyan-400 font-mono bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-500/20">
                PROD
              </span>
            </div>
          )}

          {/* Inner Screen Content Area */}
          <div className={`flex-1 relative z-10 ${screenshot ? 'p-0 overflow-hidden' : 'p-4 overflow-y-auto custom-scrollbar'}`}>
            {screenshot ? (
              <div className="relative w-full h-full">
                <Image
                  src={screenshot}
                  alt={title}
                  fill
                  className="object-cover object-top rounded-[28px]"
                  sizes="(max-width: 768px) 280px, 310px"
                  priority
                />
              </div>
            ) : children ? (
              children
            ) : (
              /* Default Aesthetic App Interface Mockup */
              <div className="space-y-4 pt-2">
                {/* Top Quick Status Pill */}
                <div className={`p-3.5 rounded-2xl bg-gradient-to-r ${themeGradient} border border-white/10 backdrop-blur-md shadow-lg`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-medium text-cyan-300">Live Status</span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      Connected
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white tracking-wide">{title}</h4>
                  <p className="text-[11px] text-gray-300 mt-0.5">{subtitle}</p>
                </div>

                {/* Dashboard Metric Widgets */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-[#161c2d]/80 border border-white/5">
                    <span className="text-[10px] text-gray-400 block">Performance</span>
                    <span className="text-sm font-bold text-cyan-400">60 FPS</span>
                    <div className="w-full h-1 bg-gray-800 rounded-full mt-2 overflow-hidden">
                      <div className="w-[92%] h-full bg-cyan-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#161c2d]/80 border border-white/5">
                    <span className="text-[10px] text-gray-400 block">Native Engine</span>
                    <span className="text-sm font-bold text-indigo-400">React Native</span>
                    <div className="w-full h-1 bg-gray-800 rounded-full mt-2 overflow-hidden">
                      <div className="w-[98%] h-full bg-indigo-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Abstract Interactive Feed List */}
                <div className="space-y-2 pt-1">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-400">
                    Application Modules
                  </span>
                  {[
                    { label: "REST API Sync Layer", status: "Active", color: "text-emerald-400" },
                    { label: "Redux State Engine", status: "Synced", color: "text-cyan-400" },
                    { label: "FCM Push Notifications", status: "Listening", color: "text-purple-400" },
                    { label: "Native Bridge Modules", status: "Loaded", color: "text-amber-400" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-[#141926] border border-white/5 flex items-center justify-between text-xs hover:border-cyan-500/30 transition-colors"
                    >
                      <span className="text-gray-300 font-medium text-[11px]">{item.label}</span>
                      <span className={`text-[10px] font-mono ${item.color}`}>{item.status}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom App Feature Banner */}
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#1a2133] to-[#0f1422] border border-white/10 text-center">
                  <p className="text-[11px] text-gray-300">
                    <span className="text-cyan-400 font-semibold">Android & iOS</span> Native Build Ready
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="pb-2 pt-1 flex justify-center bg-[#080b12]">
            <div className="w-28 h-1 bg-gray-600/60 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
