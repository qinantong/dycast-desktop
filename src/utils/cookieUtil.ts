/**
 * 简单封装的 Cookie 操作工具
 *  - 只能获取非 HttpOnly 的 Cookie 项(前端限制)
 *  - 同样的，也不能设置 HttpOnly 的 Cookie 项
 */

type SameSite = 'strict' | 'lax' | 'none';

/**
 * Cookie 结构
 */
interface CustomCookie {
  name: string;
  value: string;
  path?: string;
  // null 表示可能为会话 cookie
  expires?: string | number | null;
  domain?: string;
  maxAge?: number;
  secure?: boolean;
  sameSite?: SameSite;
}

/**
 * CookieStore 项结构
 *  - CookieStore.get 返回 Promise 兑现的对象
 */
interface CookieStoreItem {
  /** 记录 cookie 名称的字符串 */
  name: string;
  /** 记录 cookie 的值的字符串 */
  value: string;
  /** 记录 cookie 域名的字符串 */
  domain: string | null;
  /** 记录 cookie 的到期日期的 Unix 时间戳(以毫秒为单位表示)的数字 */
  expires: number | null;
  /**
   * 表示 cookie 是否是分区 cookie(true)或(false)
   *  - 更多信息请参阅具有独立分区状态的 Cookie(CHIPS)
   */
  partitioned: boolean;
  /** 记录 cookie 路径的字符串 */
  path: string;
  /**
   * 以下 SameSite 的值之一
   *  - strict: Cookie 只会在第一方上下文中发送，不会与第三方网站发起的请求一起发送
   *  - lax: Cookie 不会在正常的跨站点子请求(例如将图像或框架加载到第三方站点)中发送，而是在用户在原始站点内导航时(即点击链接时)发送
   *  - none: Cookie 将会在所有上下文中发送
   */
  sameSite: SameSite;
  /** 表示 cookie 是否仅在安全上下文中使用(true)或(false) */
  secure: boolean;
}

interface CookieStoreApi {
  get(name: string): Promise<CookieStoreItem | null>;
}

type SameSiteMap = {
  [K in SameSite]: string;
};

const SAMESITE_MAP: SameSiteMap = {
  strict: 'Strict',
  lax: 'Lax',
  none: 'None'
};

/**
 * 获取某个 Cookie 项
 *  - 通过 document.cookie，只能获取其值
 * @param name cookie 名称
 */
export const getCookie = function (name: string) {
  let cookie: CustomCookie | null = null;
  // 用正则匹配对应cookie项，包括path、expires等信息
  const reg = new RegExp(`(^|; )${name}=([^;]*)`);
  const match = document.cookie.match(reg);
  if (match && match.length > 2) {
    cookie = {
      name,
      value: decodeURIComponent(match[2])
    };
  }
  return cookie;
};

/**
 * 异步获取某个 Cookie 项
 *  - 通过 CookieStore，能获取其所有信息，如：path、expires 等
 *  - 如浏览器不支持则通过 document.cookie 获取
 * @param name cookie 名称
 */
export const getCookieAsync = async function (name: string) {
  // 用正则匹配对应cookie项，包括path、expires等信息
  try {
    let cookie: CustomCookie | null = null;
    const cookieStore = (window as Window & { cookieStore?: CookieStoreApi }).cookieStore;
    if (cookieStore) {
      const ck = await cookieStore.get(name);
      if (ck) {
        cookie = {
          name: ck.name || name,
          value: ck.value || '',
          path: ck.path || '/',
          expires: ck.expires || null,
          secure: ck.secure || false,
          sameSite: ck.sameSite || 'lax'
        };
      }
    } else {
      cookie = getCookie(name);
    }
    return cookie;
  } catch (err) {
    return Promise.reject(`Get Cookie ${name} failed: ${err}`);
  }
};

/**
 * 设置 Cookie 项
 * @param cookie
 */
export const setCookie = function (cookie: CustomCookie) {
  // 处理
  if (cookie['maxAge']) {
    // Max-Age 优先于 Expires
    cookie['expires'] = void 0;
  }
  // cookie 组成表
  const cks: string[] = [];
  // 先构造键值对
  cks.push(`${cookie.name}=${decodeURIComponent(cookie.value)}`);
  // 构造 cookie 其它属性
  for (const [key, value] of Object.entries(cookie)) {
    if (!value) continue;
    switch (key) {
      case 'path':
        cks.push(`Path=${value}`);
        break;
      case 'domain':
        cks.push(`Domain=${value}`);
        break;
      case 'maxAge':
        cks.push(`Max-Age=${value}`);
        break;
      case 'expires':
        cks.push(`Expires=${value}`);
        break;
      case 'secure':
        cks.push(`Secure`);
        break;
      case 'sameSite':
        cks.push(`SameSite=${SAMESITE_MAP[value as SameSite]}`);
        break;
    }
  }
  // 合并所有属性
  document.cookie = cks.join('; ');
  return true;
};

/**
 * 删除某个 Cookie 项
 * @param name
 */
export const removeCookie = function (name: string) {
  // 将 cookie 设置为过期时间已过期
  document.cookie = `${name}=; Max-Age=0;`;
  return true;
};

/**
 * 判断是否存在某个 Cookie 项
 * @param name
 */
export const hasCookie = function (name: string) {
  const regex = new RegExp(`(^|; )${name}=`);
  return regex.test(document.cookie);
};

/** 获取 Cookie 的键值列表 */
export const getCookieKeys = function () {
  const cookies = document.cookie.split(';');
  const keys = [];

  for (const cookie of cookies) {
    const [key] = cookie.trim().split('=');
    if (key) keys.push(key);
  }

  return keys;
};
