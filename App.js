



import Header from "./Header";

const roles = [
  {
    title: "Designer",
    desc: "Yêu thích sự tối giản, bố cục rõ ràng và trải nghiệm người dùng tốt.",
    skills: ["UX/UI", "Web/App", "Logo"],
    tools: ["Figma", "Pen & Paper", "Sketch"]
  },
  {
    title: "Frontend Developer",
    desc: "Thích code từ đầu, biến ý tưởng thành sản phẩm thực tế.",
    skills: ["HTML", "CSS", "JS", "React"],
    tools: ["VS Code", "Github", "Netlify"]
  },
  {
    title: "Mentor",
    desc: "Đồng hành, định hướng và truyền cảm hứng cho các bạn trẻ.",
    skills: ["Coaching", "Career Advice", "Portfolio Review"],
    tools: ["Zoom", "Google Meet"]
  }
];

const projects = [
  {
    name: "Portfolio Website",
    desc: "Trang web cá nhân giới thiệu bản thân và dự án.",
    img: "https://placehold.co/400x220?text=Portfolio",
    link: "#"
  },
  {
    name: "Mentor Platform",
    desc: "Nền tảng kết nối mentor và mentee.",
    img: "https://placehold.co/400x220?text=Mentor+Platform",
    link: "#"
  }
];

const partners = [
  { name: "Company A", logo: "https://placehold.co/80x40?text=A" },
  { name: "Company B", logo: "https://placehold.co/80x40?text=B" },
  { name: "Company C", logo: "https://placehold.co/80x40?text=C" }
];

const startups = [
  { name: "Social Network", desc: "Project managers influence idea-sharing and collaboration.", logo: "", link: "https://academy.binance.com/vi/glossary/socialfi" },
  { name: "Coinmarketcap", desc: "Statistics provide detailed data on market capitalization.", logo: process.env.PUBLIC_URL + "/coin.png", link: "https://coinmarketcap.com" }
];


const certificates = [
  {
    name: "Google UX Design Certificate",
    org: "Coursera",
    img: "https://placehold.co/120x80?text=Google+UX",
    link: "#"
  },
  {
    name: "Meta Front-End Developer",
    org: "Coursera",
    img: "https://placehold.co/120x80?text=Meta+FE",
    link: "#"
  },
  {
    name: "Responsive Web Design",
    org: "freeCodeCamp",
    img: "https://placehold.co/120x80?text=FCC+RWD",
    link: "#"
  }
];


function App() {
  return (
    <div style={{ fontFamily: 'Inter, Arial, sans-serif', background: '#faf9f6', color: '#222' }}>
      <Header />
      {/* Hero Section */}
      <section style={{ maxWidth: 900, margin: '40px auto 0', padding: 32, background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #e6e6e6', textAlign: 'center' }}>
        <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="avatar" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', border: '4px solid #ff94faff', marginBottom: 18 }} />
        <h1 style={{ fontSize: 44, fontWeight: 800, marginBottom: 8 }}>Nguyễn Bảo Châu</h1>
        <div style={{ fontSize: 22, color: '#f588daff', fontWeight: 600, marginBottom: 12 }}>Designer & Frontend Developer</div>
        <p style={{ fontSize: 20, color: '#666', marginBottom: 24 }}>Mình yêu thích thiết kế tối giản, code web/app và đồng hành cùng các bạn trẻ phát triển sự nghiệp.</p>
        <a href="mail:baochaune@gmail.com" style={{ display: 'inline-block', background: '#ee82faff', color: '#fff', fontWeight: 600, padding: '14px 36px', borderRadius: 8, fontSize: 20, textDecoration: 'none', boxShadow: '0 2px 8px #e0c6f7' }}>Liên hệ ngay</a>
      </section>

      {/* About Section */}
      <section style={{ maxWidth: 900, margin: '48px auto 0', padding: 32, background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px #ececec', textAlign: 'center' }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: '#ffaffbff', marginBottom: 16 }}>Hi, I’m Chau. Nice to meet you.</h2>
        <p style={{ fontSize: 18, color: '#444', marginBottom: 0 }}>
         
        </p>
      </section>

      {/* Roles Section */}
      <section style={{ maxWidth: 1100, margin: '48px auto 0', display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
        {roles.map((r, i) => (
          <div key={i} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #ececec', padding: 32, minWidth: 260, maxWidth: 320, flex: 1, textAlign: 'left' }}>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#ee95cdff', marginBottom: 8 }}>{r.title}</h2>
            <div style={{ fontSize: 17, color: '#444', marginBottom: 10 }}>{r.desc}</div>
            <div style={{ fontSize: 15, color: '#888', marginBottom: 6 }}><b>Kỹ năng:</b> {r.skills.join(', ')}</div>
            <div style={{ fontSize: 15, color: '#888' }}><b>Công cụ:</b> {r.tools.join(', ')}</div>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section style={{ maxWidth: 1100, margin: '48px auto 0', padding: '0 16px' }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: '#f9aef5ff', textAlign: 'center', marginBottom: 32 }}>Dự án gần đây</h2>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
          {projects.map((p, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #ececec', padding: 24, maxWidth: 340, flex: 1, textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={p.img} alt={p.name} style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 12, marginBottom: 16 }} />
              <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 6 }}>{p.name}</div>
              <div style={{ fontSize: 16, color: '#444', marginBottom: 12 }}>{p.desc}</div>
              <a href={p.link} style={{ color: '#e87ac5ff', fontWeight: 600, textDecoration: 'underline' }}>Xem chi tiết</a>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section style={{ maxWidth: 900, margin: '48px auto 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: '#eb9bddff', marginBottom: 24 }}>Đối tác & Công ty từng hợp tác</h2>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          {partners.map((p, i) => (
            <img key={i} src={p.logo} alt={p.name} style={{ width: 80, height: 40, objectFit: 'contain', opacity: 0.8 }} />
          ))}
        </div>
      </section>

      {/* Startup Projects Section */}
      <section style={{ maxWidth: 900, margin: '48px auto 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: '#a93fa9ff', marginBottom: 24 }}>Startup Projects</h2>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          {startups.map((s, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #ececec', padding: 20, minWidth: 180, maxWidth: 220, flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={s.logo} alt={s.name} style={{ width: 60, height: 60, objectFit: 'contain', marginBottom: 10 }} />
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>{s.name}</div>
              <div style={{ fontSize: 15, color: '#444', marginBottom: 8 }}>{s.desc}</div>
              <a href={s.link} style={{ color: '#a93fa9ff', fontWeight: 600, textDecoration: 'underline', fontSize: 15 }}>Xem thêm</a>
            </div>
          ))}
        </div>
      </section>


      {/* Certificates Section */}
      <section style={{ maxWidth: 900, margin: '48px auto 0', padding: '0 16px' }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: '#fb6eceff', textAlign: 'center', marginBottom: 32 }}>Chứng chỉ & Bằng cấp</h2>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
          {certificates.map((c, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #ececec', padding: 24, maxWidth: 300, flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={c.img} alt={c.name} style={{ width: 120, height: 80, objectFit: 'contain', marginBottom: 16, borderRadius: 8 }} />
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>{c.name}</div>
              <div style={{ fontSize: 15, color: '#888', marginBottom: 8 }}>{c.org}</div>
              <a href={c.link} style={{ color: '#a93fa9ff', fontWeight: 600, textDecoration: 'underline', fontSize: 15 }}>Xem chi tiết</a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ margin: '60px 0 0', padding: '32px 0', background: '#f7eaff', textAlign: 'center', color: '#a93fa9ff', fontWeight: 600, borderTopLeftRadius: 24, borderTopRightRadius: 24 }}>
        Living, learning & leveling up one day at a time.<br />
        <a href="mail:baochaune21@gmail.com" style={{ color: '#d0afe1ff', textDecoration: 'underline', marginLeft: 8 }}>Liên hệ: baochaune@gmail.com</a>
      </footer>
    </div>
  );
}

export default App;
