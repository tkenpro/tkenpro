// ===== 语言包 =====
const translations = {
    zh: {
        'nav.home': '首页',
        'nav.products': '产品中心',
        'nav.services': '应用下载',
        'app.title': '应用下载',
        'app.developer': '智能家居安防应用',
        'app.desc': '随时随地守护您的家。实时视频监控、智能移动侦测、即时报警推送，让家庭安全触手可及。',
        'app.badge.get': '立即下载',
        'app.f1.title': '实时视频监控',
        'app.f1.desc': '随时查看家中实时画面，高清流畅',
        'app.f2.title': '智能移动侦测',
        'app.f2.desc': '自定义侦测区域，异常立即推送通知',
        'app.f3.title': '多设备管理',
        'app.f3.desc': '一个App管理所有TkenPro智能设备',
        'app.f4.title': '云端存储',
        'app.f4.desc': '录像安全存储云端，随时回放查看',
        'nav.partners': '合作品牌',
        'nav.contact': '联系我们',
        'amazon.store': '亚马逊官方店铺',
        'amazon.visit': '前往亚马逊官方店铺',
        'amazon.buy': '亚马逊官方购买',
        'home.slogan': 'TkenPro | 专业消费电子与全域营销服务商',
        'home.electronics': '消费电子产品',
        'home.electronics.desc': '专业影像设备、音视频系统、安防监控等全品类产品',
        'home.view.products': '查看全系列产品',
        'home.marketing': '全域营销服务',
        'home.marketing.desc': '互联网广告、社交媒体推广、品牌营销全链路服务',
        'home.partners.title': '合作品牌',
        'products.title': '产品中心',
        'products.view': '查看产品',
        'products.p1.name': 'TkenPro 宠物零食投喂器 360°全景追踪摄像机',
        'products.p1.desc': '360°旋转视角，自动追踪，远程投喂，高清摄像，随时守护您的宠物。',
        'products.p2.name': 'TkenPro 智能宠物摄像机',
        'products.p2.desc': '专为宠物设计的智能监控设备，高清画质，双向语音，实时互动。',
        'products.p3.name': 'TkenPro 宠物零食投喂器 360°全景追踪摄像机',
        'products.p3.desc': '360°旋转视角，自动追踪，远程投喂，高清摄像，随时守护您的宠物。',
        'lefun.p1.name': '8K数码相机 88MP WiFi自动对焦',
        'lefun.p1.desc': '专业16倍变焦，双镜头，触摸屏，2块电池及充电座',
        'lefun.p2.name': '骨传导蓝牙耳机 5.4 IPX8防水',
        'lefun.p2.desc': '开放式耳机，10小时续航，适合游泳/跑步/骑行',
        'lefun.p3.name': '双镜头太阳能户外安防摄像机 2K',
        'lefun.p3.desc': '360°云台，彩色夜视，PIR报警，2.4GHz WiFi',
        'lefun.p4.name': '4K夜视望远镜',
        'lefun.p4.desc': '5000mAh，3英寸大屏，8倍数字变焦，外置手电筒，适合露营',
        'lefun.p5.name': '智能手表 IP68防水 男女通用',
        'lefun.p5.desc': '血氧/睡眠/心率监测，多运动模式健康手表',
        'lefun.p6.name': '4G LTE 车载追踪器 超长续航6个月',
        'lefun.p6.desc': '强磁吸附，90天位置历史，全球覆盖实时定位',
        'harymor.p1.name': '智能喂鸟器摄像机 BF12S',
        'harymor.p1.desc': '2K实时视频，AI识别10000+鸟类，双太阳能板，IP65防水，5200mAh',
        'harymor.p2.name': 'WiFi喂鸟器摄像机 BF44S',
        'harymor.p2.desc': '高清摄像，AI鸟类识别，太阳能供电，实时监控',
        'harymor.p3.name': 'WiFi喂鸟器摄像机 BF63S',
        'harymor.p3.desc': '高清摄像，WiFi连接，移动侦测，鸟类到访提醒',
        'harymor.p4.name': 'WiFi蜂鸟喂食器 BF52S',
        'harymor.p4.desc': '专为蜂鸟设计，内置摄像头，实时查看，到访提醒',
        'harymor.p5.name': '鸟浴盆摄像机 BB13S',
        'harymor.p5.desc': '智能鸟浴盆，2K视频，AI鸟类识别，实时监控',
        'products.imaging': '影像设备类',
        'products.cameras': '相机/照相机',
        'products.digital.cameras': '数码相机',
        'products.video.cameras': '摄像机',
        'products.accessories': '影像配套产品',
        'products.camera.cases': '相机包',
        'products.solar.battery': '数码相机太阳能充电电池组',
        'products.av.power': '音视频与电源设备',
        'products.audio.amplifiers': '音频放大器',
        'products.audio.speakers': '音频扬声器',
        'products.audio.receivers': '音频接收器',
        'products.av.cables': '音视频线缆及连接器',
        'products.decoders': '音频/视频解码器',
        'products.power.converters': '电源转换设备',
        'products.power.inverters': '电源逆变器',
        'products.security.software': '安防与软件产品',
        'products.security.software.desc': '安全监控软件',
        'products.security.software.detail': '用于安全监控装置控制、实时流媒体获取、剪辑回放、音视频传输的可下载计算机软件',
        'products.servers.comm': '服务器与通信设备',
        'products.video.servers': '视频服务器',
        'products.wireless.comm': '无线通信设备',
        'products.wireless.comm.desc': '带音视频/数据传输功能',
        'services.title': '营销服务',
        'services.item1': '互联网与计算机网络在线广告服务',
        'services.item2': '全行业广告、营销与促销服务，为商业目的提供商务社交与资源对接机会',
        'services.item3': '面向移动电话服务商的病毒式营销广告与推广服务',
        'services.item4': '基于推送通知技术的第三方商品与服务营销服务',
        'services.item5': '第三方移动广告服务',
        'services.item6': '基于无线网络、面向移动设备的物联网领域在线广告与营销服务',
        'services.item7': '社交网络用户与零售商的折扣购买匹配对接服务',
        'services.item8': '面向家庭服务商与产品制造商的广告促销互联网门户网站服务',
        'services.item9': '商业目的的服务商推荐服务',
        'partners.title': '合作品牌',
        'partners.visit': '访问官网 →',
        'partners.note': '我们为第三方品牌提供全渠道广告营销与推广服务',
        'contact.title': '联系我们',
        'contact.name': '姓名',
        'contact.email': '邮箱',
        'contact.message': '咨询内容',
        'contact.submit': '提交',
        'contact.info': '商务联系',
        'contact.email.label': '邮箱：business@tkenpro.com',
        'contact.amazon': '亚马逊店铺合作',
        'footer.privacy': '隐私政策'
    },
    en: {
        'nav.home': 'Home',
        'nav.products': 'Products',
        'nav.services': 'App',
        'app.title': 'App Download',
        'app.developer': 'Smart Home Security App',
        'app.desc': 'Monitor your home anytime, anywhere. Real-time video, smart motion detection, and instant alerts — home security made simple.',
        'app.badge.get': 'Get it on',
        'app.f1.title': 'Live Video',
        'app.f1.desc': 'Watch real-time HD footage from anywhere',
        'app.f2.title': 'Smart Detection',
        'app.f2.desc': 'Custom detection zones with instant push alerts',
        'app.f3.title': 'Multi-Device',
        'app.f3.desc': 'Manage all TkenPro devices in one app',
        'app.f4.title': 'Cloud Storage',
        'app.f4.desc': 'Securely store and replay recordings anytime',
        'nav.partners': 'Partners',
        'nav.contact': 'Contact',
        'amazon.store': 'Amazon Official Store',
        'amazon.visit': 'Visit Amazon Official Store',
        'amazon.buy': 'Buy on Amazon',
        'home.slogan': 'TkenPro | Professional Consumer Electronics & Global Marketing Service Provider',
        'home.electronics': 'Consumer Electronics',
        'home.electronics.desc': 'Professional imaging equipment, audio/video systems, security monitoring and full-category products',
        'home.view.products': 'View All Products',
        'home.marketing': 'Global Marketing Services',
        'home.marketing.desc': 'Internet advertising, social media promotion, full-chain brand marketing services',
        'home.partners.title': 'Partner Brands',
        'products.title': 'Products',
        'products.view': 'View Product',
        'products.p1.name': 'TkenPro Pet Treat Dispenser with 360° Tracking Camera',
        'products.p1.desc': '360° rotating view, auto tracking, remote treat tossing, HD camera.',
        'products.p2.name': 'TkenPro Smart Pet Camera',
        'products.p2.desc': 'HD video, two-way audio, real-time interaction for your pet.',
        'products.p3.name': 'TkenPro Pet Treat Dispenser with 360° Tracking Camera',
        'products.p3.desc': '360° rotating view, auto tracking, remote treat tossing, HD camera.',
        'lefun.p1.name': '8K Digital Camera 88MP WiFi Autofocus',
        'lefun.p1.desc': 'Professional 16X Zoom, Dual-Lens, Touch Screen, 2 Batteries & Charging Stand',
        'lefun.p2.name': 'Bone Conduction Headphones Bluetooth 5.4 IPX8',
        'lefun.p2.desc': 'Open Ear, 10H Playtime, Waterproof for Swimming / Running / Cycling',
        'lefun.p3.name': 'Dual Lens Solar Security Camera Wireless Outdoor 2K',
        'lefun.p3.desc': '360° Pan/Tilt, Color Night Vision, PIR Alarm, 2.4GHz WiFi',
        'lefun.p4.name': '4K Night Vision Goggles Binoculars',
        'lefun.p4.desc': '5000mAh, 3" Large Screen, 8X Digital Zoom, Flashlight for Camping',
        'lefun.p5.name': 'Smart Watch IP68 Waterproof for Men & Women',
        'lefun.p5.desc': 'Blood Oxygen / Sleep / Heart Rate Monitor, Multi-Sport Fitness Watch',
        'lefun.p6.name': '4G LTE Car Tracker — Up to 6-Month Battery',
        'lefun.p6.desc': 'Strong Magnetic, 90-Day Location History, Global Real-Time Tracking',
        'harymor.p1.name': 'Smart Bird Feeder Camera BF12S',
        'harymor.p1.desc': '2K Live Video, AI 10,000+ Species ID, Dual Solar Panels, IP65, 5200mAh',
        'harymor.p2.name': 'WIFI Bird Feeder Camera BF44S',
        'harymor.p2.desc': 'HD camera, AI species recognition, solar powered, real-time monitoring',
        'harymor.p3.name': 'WIFI Bird Feeder Camera BF63S',
        'harymor.p3.desc': 'HD camera, WiFi connectivity, motion detection, arrival alerts',
        'harymor.p4.name': 'WIFI Hummingbird Feeder BF52S',
        'harymor.p4.desc': 'Dedicated hummingbird feeder with camera, real-time viewing and alerts',
        'harymor.p5.name': 'Bird Bath with Camera BB13S',
        'harymor.p5.desc': 'Smart bird bath, 2K video, AI bird species identification',
        'products.imaging': 'Imaging Equipment',
        'products.cameras': 'Cameras',
        'products.digital.cameras': 'Digital Cameras',
        'products.video.cameras': 'Video Cameras',
        'products.accessories': 'Imaging Accessories',
        'products.camera.cases': 'Camera Cases',
        'products.solar.battery': 'Solar Recharging Battery Pack for Digital Cameras',
        'products.av.power': 'Audio/Video & Power Equipment',
        'products.audio.amplifiers': 'Audio Amplifiers',
        'products.audio.speakers': 'Audio Speakers',
        'products.audio.receivers': 'Audio Receivers',
        'products.av.cables': 'Audio/Video Cables & Connectors',
        'products.decoders': 'Audio/Video Decoders',
        'products.power.converters': 'Power Converters',
        'products.power.inverters': 'Power Inverters',
        'products.security.software': 'Security & Software Products',
        'products.security.software.desc': 'Security Monitoring Software',
        'products.security.software.detail': 'Downloadable computer software for security monitoring device control, real-time streaming, editing playback, and audio/video transmission',
        'products.servers.comm': 'Servers & Communication Equipment',
        'products.video.servers': 'Video Servers',
        'products.wireless.comm': 'Wireless Communication Devices',
        'products.wireless.comm.desc': 'With audio/video/data transmission capabilities',
        'services.title': 'Marketing Services',
        'services.item1': 'Online Advertising Services on Internet & Computer Networks',
        'services.item2': 'Advertising, Marketing & Promotional Services Across All Industries, Providing Business Networking Opportunities for Commercial Purposes',
        'services.item3': 'Viral Marketing & Promotional Services for Mobile Phone Service Providers',
        'services.item4': 'Marketing Services for Third-Party Products & Services via Push Notification Technology',
        'services.item5': 'Third-Party Mobile Advertising Services',
        'services.item6': 'Online Advertising & Marketing Services in IoT Field for Mobile Devices via Wireless Networks',
        'services.item7': 'Discount Purchase Matching Services Between Social Network Users & Retailers',
        'services.item8': 'Advertising & Promotional Internet Portal Services for Home Service Providers & Product Manufacturers',
        'services.item9': 'Service Provider Recommendation Services for Business Purposes',
        'partners.title': 'Partner Brands',
        'partners.visit': 'Visit Website →',
        'partners.note': 'We provide omni-channel advertising, marketing and promotional services for third-party brands',
        'contact.title': 'Contact Us',
        'contact.name': 'Name',
        'contact.email': 'Email',
        'contact.message': 'Message',
        'contact.submit': 'Submit',
        'contact.info': 'Business Contact',
        'contact.email.label': 'Email: business@tkenpro.com',
        'contact.amazon': 'Amazon Store Partnership',
        'footer.privacy': 'Privacy Policy'
    }
};

// ===== 语言切换功能 =====
let currentLang = 'zh';

function switchLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) el.placeholder = translations[lang][key];
    });

    document.title = lang === 'zh'
        ? 'TkenPro | 专业消费电子与全域营销服务商'
        : 'TkenPro | Professional Consumer Electronics & Global Marketing Service Provider';
}

document.getElementById('langSwitch').addEventListener('change', (e) => {
    switchLanguage(e.target.value);
});

// ===== 页面路由 =====
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(pageId);
    if (target) target.classList.add('active');

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${pageId}`) link.classList.add('active');
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.nav-link, .footer-right a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            showPage(href.substring(1));
            history.pushState(null, '', href);
        }
    });
});

document.querySelectorAll('a[href="#products"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('products');
        history.pushState(null, '', '#products');
    });
});

window.addEventListener('load', () => {
    const hash = window.location.hash.substring(1);
    showPage(hash || 'home');
});

window.addEventListener('popstate', () => {
    showPage(window.location.hash.substring(1) || 'home');
});

// ===== 表单提交 =====
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert(currentLang === 'zh' ? '感谢您的咨询，我们会尽快回复！' : 'Thank you for your inquiry, we will reply as soon as possible!');
    e.target.reset();
});

// ===== 移动端汉堡菜单 =====
const hamburger = document.createElement('div');
hamburger.className = 'hamburger';
hamburger.innerHTML = '<span></span><span></span><span></span>';
document.querySelector('.header .container').insertBefore(hamburger, document.querySelector('.header-actions'));

hamburger.addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav').classList.remove('open');
    });
});
