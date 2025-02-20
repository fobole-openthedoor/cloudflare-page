type ErrorType = 
  | 'ip-block'
  | 'waf-block'
  | '500-error'
  | '1000-error'
  | 'interactive'
  | 'managed'
  | 'country'
  | 'javascript'
  | '429-error';

type ErrorTranslations = {
  [key in ErrorType]: {
    title: string;
    action: string;
    description: string;
  };
};

type CommonTranslations = {
  rayId: string;
  location: string;
  ip: string;
};

const errorMessages: Record<string, ErrorTranslations> = {
  "zh-CN": {
    "ip-block": {
      title: "拒绝访问",
      action: "已阻止了您本次请求",
      description: "您的 IP 地址 ::CLIENT_IP:: 由于网站管理员设置，本次访问已被阻止。",
    },
    "waf-block": {
      title: "安全告警",
      action: "已拦截了您本次请求",
      description: "检测到潜在的恶意请求。",
    },
    "500-error": {
      title: "服务器错误",
      action: "暂时无法处理您的请求",
      description: "服务器遇到了一个错误，我们正在努力修复。\n::CLOUDFLARE_ERROR_500S_BOX::",
    },
    "1000-error": {
      title: "DNS错误",
      action: "无法解析域名",
      description: "域名解析出现问题。\n::CLOUDFLARE_ERROR_1000S_BOX::",
    },
    "interactive": {
      title: "安全验证",
      action: "需要完成验证",
      description: "请完成以下验证以继续访问：\n::CAPTCHA_BOX::",
    },
    "managed": {
      title: "安全检查",
      action: "正在进行安全检查",
      description: "请稍候，正在确认您的访问请求。\n::IM_UNDER_ATTACK_BOX::",
    },
    "country": {
      title: "地区限制",
      action: "访问受限",
      description: "您所在的地区 ::GEO:: 暂时无法访问此网站。",
    },
    "javascript": {
      title: "JavaScript 验证",
      action: "需要启用 JavaScript",
      description: "请启用浏览器的 JavaScript 功能以继续访问。",
    },
    "429-error": {
      title: "请求过多",
      action: "请求被限制",
      description: "您的访问请求过于频繁，请稍后再试。",
    }
  },
  "zh-TW": {
    "ip-block": {
      title: "拒絕訪問",
      action: "已阻止了您本次請求",
      description: "您的 IP 地址 ::CLIENT_IP:: 已被阻止訪問。",
    },
    "waf-block": {
      title: "安全警告",
      action: "已攔截了您本次請求",
      description: "檢測到潛在的惡意請求。",
    },
    "500-error": {
      title: "伺服器錯誤",
      action: "暫時無法處理您的請求",
      description: "伺服器遇到了一個錯誤，我們正在努力修復。\n::CLOUDFLARE_ERROR_500S_BOX::",
    },
    "1000-error": {
      title: "DNS錯誤",
      action: "無法解析域名",
      description: "域名解析出現問題。\n::CLOUDFLARE_ERROR_1000S_BOX::",
    },
    "interactive": {
      title: "安全驗證",
      action: "需要完成驗證",
      description: "請完成以下驗證以繼續訪問：\n::CAPTCHA_BOX::",
    },
    "managed": {
      title: "安全檢查",
      action: "正在進行安全檢查",
      description: "請稍候，正在確認您的訪問請求。\n::IM_UNDER_ATTACK_BOX::",
    },
    "country": {
      title: "地區限制",
      action: "訪問受限",
      description: "您所在的地區 ::GEO:: 暫時無法訪問此網站。",
    },
    "javascript": {
      title: "JavaScript 驗證",
      action: "需要啟用 JavaScript",
      description: "請啟用瀏覽器的 JavaScript 功能以繼續訪問。",
    },
    "429-error": {
      title: "請求過多",
      action: "請求被限制",
      description: "您的訪問請求過於頻繁，請稍後再試。",
    }
  },
  "en": {
    "ip-block": {
      title: "Access Denied",
      action: "Request Blocked",
      description: "Your IP address ::CLIENT_IP:: has been blocked.",
    },
    "waf-block": {
      title: "Security Alert",
      action: "Request Blocked",
      description: "Potential malicious activity detected.",
    },
    "500-error": {
      title: "Server Error",
      action: "Request Failed",
      description: "The server encountered an error.\n::CLOUDFLARE_ERROR_500S_BOX::",
    },
    "1000-error": {
      title: "DNS Error",
      action: "DNS Resolution Failed",
      description: "There was a problem resolving the domain.\n::CLOUDFLARE_ERROR_1000S_BOX::",
    },
    "interactive": {
      title: "Security Check",
      action: "Verification Required",
      description: "Please complete the security check to continue:\n::CAPTCHA_BOX::",
    },
    "managed": {
      title: "Security Check",
      action: "Checking Your Browser",
      description: "Please wait while we verify your request.\n::IM_UNDER_ATTACK_BOX::",
    },
    "country": {
      title: "Access Restricted",
      action: "Region Blocked",
      description: "Access from your region ::GEO:: is currently restricted.",
    },
    "javascript": {
      title: "JavaScript Required",
      action: "Action Needed",
      description: "Please enable JavaScript to continue.",
    },
    "429-error": {
      title: "Too Many Requests",
      action: "Rate Limited",
      description: "You have made too many requests. Please try again later.",
    }
  }
};

const commonText: Record<string, CommonTranslations> = {
  "zh-CN": {
    rayId: "请求 ID",
    location: "位置",
    ip: "IP 地址"
  },
  "zh-TW": {
    rayId: "請求 ID",
    location: "位置",
    ip: "IP 地址"
  },
  "en": {
    rayId: "Ray ID",
    location: "Location",
    ip: "IP Address"
  }
};

export function getErrorTranslation(locale: string, errorType: ErrorType) {
  const lang = locale.startsWith("zh") ? 
    (locale === "zh-TW" ? "zh-TW" : "zh-CN") : 
    "en";
  
  return {
    error: errorMessages[lang][errorType],
    common: commonText[lang]
  };
} 